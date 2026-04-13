import { useEffect, useState } from "react";
import { supabaseService } from "../services/supabaseService";
import type { EmergencyContact } from "../types/safeher";

export function useEmergencyContacts() {
  const [contacts, setContacts] = useState<EmergencyContact[]>([]);

  useEffect(() => {
    supabaseService.getEmergencyContacts().then(setContacts);
  }, []);

  return { contacts };
}
