import { useEffect, useState } from "react";
import { supabaseService } from "../services/supabaseService";
import type { SafetyTip } from "../types/safeher";

export function useSafetyTips() {
  const [tips, setTips] = useState<SafetyTip[]>([]);

  useEffect(() => {
    supabaseService.getSafetyTips().then(setTips);
  }, []);

  return { tips };
}
