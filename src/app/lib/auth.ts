const USERS_STORAGE_KEY = "safeher_users";
const CURRENT_USER_STORAGE_KEY = "safeher_current_user";

export type LocalUser = {
  fullName: string;
  cpf: string;
  email: string;
  password: string;
  createdAt: string;
};

type RegisterInput = {
  fullName: string;
  cpf: string;
  email: string;
  password: string;
};

type RegisterResult =
  | { ok: true; user: Omit<LocalUser, "password"> }
  | { ok: false; error: string };

type LoginResult =
  | { ok: true; user: Omit<LocalUser, "password"> }
  | { ok: false; error: string };

const normalizeEmail = (email: string) => email.trim().toLowerCase();
const normalizeCPF = (cpf: string) => cpf.replace(/\D/g, "");

function getStoredUsers(): LocalUser[] {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

function saveUsers(users: LocalUser[]) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function sanitizeUser(user: LocalUser): Omit<LocalUser, "password"> {
  const { password: _password, ...safeUser } = user;
  return safeUser;
}

export function registerUser(input: RegisterInput): RegisterResult {
  const users = getStoredUsers();
  const normalizedEmail = normalizeEmail(input.email);
  const normalizedCPF = normalizeCPF(input.cpf);

  const emailInUse = users.some((user) => normalizeEmail(user.email) === normalizedEmail);
  if (emailInUse) {
    return { ok: false, error: "Já existe uma conta cadastrada com este e-mail." };
  }

  const cpfInUse = users.some((user) => normalizeCPF(user.cpf) === normalizedCPF);
  if (cpfInUse) {
    return { ok: false, error: "Já existe uma conta cadastrada com este CPF." };
  }

  const user: LocalUser = {
    fullName: input.fullName.trim(),
    cpf: input.cpf,
    email: normalizedEmail,
    password: input.password,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  saveUsers(users);

  return { ok: true, user: sanitizeUser(user) };
}

export function loginUser(email: string, password: string): LoginResult {
  const users = getStoredUsers();
  const normalizedEmail = normalizeEmail(email);

  const user = users.find((storedUser) => normalizeEmail(storedUser.email) === normalizedEmail);
  if (!user || user.password !== password) {
    return { ok: false, error: "E-mail ou senha inválidos." };
  }

  const safeUser = sanitizeUser(user);
  localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(safeUser));

  return { ok: true, user: safeUser };
}

export function findUserByEmail(email: string): Omit<LocalUser, "password"> | null {
  const users = getStoredUsers();
  const normalizedEmail = normalizeEmail(email);

  const user = users.find((storedUser) => normalizeEmail(storedUser.email) === normalizedEmail);
  return user ? sanitizeUser(user) : null;
}

export function getCurrentUser(): Omit<LocalUser, "password"> | null {
  try {
    const raw = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as Omit<LocalUser, "password">;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}
