import { useEffect, useState } from "react";
import { supabaseService } from "../services/supabaseService";
import type { SupportService, ViolenceType } from "../types/safeher";

export function useSupportResources() {
  const [services, setServices] = useState<SupportService[]>([]);
  const [violenceTypes, setViolenceTypes] = useState<ViolenceType[]>([]);

  useEffect(() => {
    supabaseService.getSupportServices().then(setServices);
    supabaseService.getViolenceTypes().then(setViolenceTypes);
  }, []);

  return { services, violenceTypes };
}
