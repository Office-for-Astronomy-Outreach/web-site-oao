import type { NextApiRequest, NextApiResponse } from "next";
import type { Event } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | { error: string }>
) {
  const apiUrl = "http://api.iauoutreach.org";

  // Normaliza los parámetros: convierte arrays a strings (usando solo el primero)
  const safeQuery: Record<string, string> = {};
  Object.entries(req.query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      safeQuery[key] = value[0]; // solo usamos el primer valor si viene en array
    } else if (value !== undefined) {
      safeQuery[key] = value;
    }
  });

  const queryString = new URLSearchParams(safeQuery).toString();

  try {
    const response = await fetch(`${apiUrl}/events?${queryString}`);
    const events = await response.json();

    return res.status(200).json(events);
  } catch (apiError) {
    console.warn("API request failed", apiError);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
