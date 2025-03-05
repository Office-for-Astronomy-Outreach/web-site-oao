import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    { id: string | number; name: string }[] | { error: string }
  >
) {
  const apiUrl = process.env.API_BASE_PATH || "";

  try {
    const response = await fetch(`${apiUrl}/categories`);

    if (!response.ok) {
      throw new Error("caegories not found");
    }

    const region = await response.json();
    res.status(200).json(region);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (errors) {
    res.status(500).json({ error: "Error fetching data from Rails API" });
  }
}
