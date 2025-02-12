import type { NextApiRequest, NextApiResponse } from "next";
import type { Region } from "@/types";
import { promises as fs } from "fs";
import path from "path"; // Usa path para manejar rutas correctamente

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Region | { error: string }>
) {
  const apiUrl = process.env.API_BASE_PATH || "";
  const { slug } = req.query;

  try {
    // Intentar obtener datos del servidor
    const response = await fetch(`${apiUrl}/regions/${slug}`);

    if (!response.ok) {
      console.error("Error fetching data from API, trying local JSON...");
      throw new Error("Region not found in API");
    }

    const region = await response.json();
    return res.status(200).json(region);
  } catch (apiError) {
    console.warn(
      "API request failed, attempting to load local JSON...",
      apiError
    );

    try {
      // Si la API falla, intentar obtener datos desde un archivo JSON local
      const filePath = path.join(
        process.cwd(),
        "public",
        "regions-json",
        `${slug}.json`
      );
      const fileContent = await fs.readFile(filePath, "utf-8");
      const localData = JSON.parse(fileContent);

      return res.status(200).json(localData);
    } catch (localError) {
      console.error("Error loading local JSON data", localError);
      return res
        .status(500)
        .json({ error: "Error fetching data from both API and local JSON" });
    }
  }
}
