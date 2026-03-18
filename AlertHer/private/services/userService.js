import { supabase } from '../supabase/supabase.js'
import bcrypt from 'bcrypt'

export async function createUserService({ name, email, password }) {
    const normalizedEmail = email.toLowerCase().trim()

    const { data: existingUser } = await supabase
        .from('users')
        .select('*')
        .eq('email', normalizedEmail)
        .single()

    if (existingUser) {
        throw new Error ("Email já em uso")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const { data, error } = await supabase
        .from('users')
        .insert([{ name, email: normalizedEmail, password: hashedPassword }])
        .select()
        .single()

    if (error) throw new Error(error.message)

        return data
}

export async function getById ({ id }) {
    const { data: user, error } = await supabase
        .from('users')
        .select('id', 'name', 'email')
        .eq('id', id)
        .single()

   if (error || !user ) throw new Error('Usuário não encontrado')

    return user
}

export async function getAllUsers() {
    const { data: users, error } = await supabase
        .from('users')
        .select('id', 'name', 'email')

    if (error) throw new Error(error.message);

    return users;

}

export async function login ({ email, password }) {
    const normalizedEmail = email.toLowerCase().trim()  

    const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', normalizedEmail)
        .single()

    if (error || !user) throw new Error("Email ou senha incorretos")

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error('Email ou senha incorretos')

    const { password: _, ...userWithoutPassword } = user
        return userWithoutPassword
}   
