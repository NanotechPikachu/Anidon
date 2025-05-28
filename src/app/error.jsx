"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-30 lg:mt-40 mx-4">
      <div className="flex flex-col items-center text-lg gap-3 text-center text-blue-100 justify-center">
        <p className="text-6xl text-red-500/60">500</p>
        <p>Uh..Oh! Seems like the website encountered an unexpected error.</p>
        <p>
          Why don&apos;t you retrace your steps back{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            home
          </Link>
          ?
        </p>
      </div>
    </div>
  );
}
