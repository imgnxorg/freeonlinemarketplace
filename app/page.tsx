import React from "react";
import Image from "next/image";

export default function Home(): JSX.Element {

  return (
    <div>
      <Image
        src="/images/bkgd.jpg"
        width={1920}
        height={1080}
        style={{ objectFit: "cover" }}
        alt="Background Image"
      />
      <div
        style={{ position: "absolute", top: 0, left: 0 }}
        className="w-full h-screen mix-blend-exclusion flex items-center justify-center"
      >
        <h1 className="relative -top-48 bg-gradient-to-r from-red-600 to-violet-500 bg-blend-exclusion font-bold text-7xl text-transparent inline-block gradient bg-clip-text">
          Free Online Marketplace
        </h1>
      </div>
    </div>
  );
}
