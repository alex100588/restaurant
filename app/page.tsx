"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content hero */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Bine ai venit la Restaurant
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 drop-shadow-md">
          Experiență culinară unică
        </p>
      </div>
    </main>
  );
}
