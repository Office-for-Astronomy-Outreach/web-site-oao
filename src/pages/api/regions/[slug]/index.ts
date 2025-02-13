import type { NextApiRequest, NextApiResponse } from "next";
import type { Region } from "@/types";
import { promises as fs } from "fs";
import { projectPath } from "@/utils/path";
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

    const region = await response.json();

    return res.status(200).json(region);
  } catch (apiError) {
    console.warn(
      "API request failed, attempting to load local JSON...",
      apiError
    );

    try {
      const filePath = path.join(
        process.cwd(),
        `${projectPath}`,
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
