import { useEffect, useMemo, useState } from "react";
import { supabaseService } from "../services/supabaseService";
import type { SafeLocation, SafeLocationType } from "../types/safeher";

export type LocationFilter = "todos" | SafeLocationType;

export function useLocations() {
  const [locations, setLocations] = useState<SafeLocation[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<LocationFilter>("todos");

  useEffect(() => {
    supabaseService.getSafeLocations().then(setLocations);
  }, []);

  const filteredLocations = useMemo(() => {
    return locations.filter((location) => {
      const typeMatches = filter === "todos" || location.type === filter;
      const queryMatches =
        query.length === 0 ||
        location.name.toLowerCase().includes(query.toLowerCase()) ||
        location.address.toLowerCase().includes(query.toLowerCase());

      return typeMatches && queryMatches;
    });
  }, [locations, query, filter]);

  return { locations: filteredLocations, query, setQuery, filter, setFilter };
}
