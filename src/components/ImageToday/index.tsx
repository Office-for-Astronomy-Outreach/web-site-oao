"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type ApodData = {
  title: string;
  date: string;
  explanation: string;
  url: string;
  media_type: "image" | "video";
};

export default function Apod() {
  const [data, setData] = useState<ApodData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("apodData");
    const today = new Date().toISOString().slice(0, 10);

    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === today) {
        setData(parsed);
        return;
      }
    }

    const API_KEY = "tb8TNofVVZXT0I4KZ2iKAzb27itoL9PAQ9yU9mcQ";
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        localStorage.setItem("apodData", JSON.stringify(result));
      })
      .catch(() => setError(true));
  }, []);

  if (error) return <p className="text-red-500">Error loading APOD.</p>;
  if (!data)
    return <p className="text-gray-500">Loading image of the day...</p>;

  return (
    <section className="">
      <div className="flex gap-4 flex-col">
        <div>
          <Link href="https://apod.nasa.gov/" target="_blank">
            <span className="hover:text-yellow-400 font-semibold text-xl mb-4">
              Astronomy Today
            </span>
            <br />
            <span className="">{data.title}</span>
            <br />
            <time>{data.date}</time>
          </Link>
        </div>
        <div className="mb-4 w-56">
          {data.media_type === "image" ? (
            <Image
              src={data.url}
              alt={data.title}
              className="rounded-lg w-full"
              width={300}
              height={200}
            />
          ) : (
            <div className="text-white">No image available.</div>
          )}
        </div>
      </div>
    </section>
  );
}
