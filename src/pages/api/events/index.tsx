import type { NextApiRequest, NextApiResponse } from "next";
import type { Event } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | { error: string }>
) {
  const apiUrl = process.env.API_BASE_PATH || "";

  try {
    // Intentar obtener datos del servidor
    const response = await fetch(`${apiUrl}/events`);

    const events = await response.json();

    return res.status(200).json(events);
  } catch (apiError) {
    console.warn("API request failed", apiError);
  }
}
