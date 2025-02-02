"use client";

import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <section
      className="text-center mt-8 py-20 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/Squares.png')", 
      }}
    >
      <div style={{ backgroundColor: "#060714" }} className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10">
        <h2 className="mb-4">NON FUNGIBLE TOKENS</h2>
        <h1 className="md:text-4xl font-bold text-6xl flex justify-center items-center">
          A new NFX
          <div className="text-accent flex items-center">
            <Image src="/Frame (1).png" alt="Frame" className="hidden sm:block" width={20} height={20} /> 
          </div>
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center">
          <span className="text-accent flex items-center">
            <br />
            <Image src="/Frame.png" alt="Frame" className=" hidden sm:block" width={20} height={20}/>
          </span>
          Experience
        </h1>
        <p className="mt-4 text-gray-400 text-lg md:text-xl">Discover, and collect sell</p>

        <div className="mt-6 flex justify-center gap-2">
          <div className="relative w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <input
  type="text"
  placeholder="Search items, collections, and creators ||Category"
  className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-600 w-full"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
/>

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      {/* Brand Images - Adjusted for Mobile */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        <Image src="/Ritter Sport.png" alt="Ritter Sport" className="max-w-[120px] sm:max-w-[150px]" width={50} height={50} /> 
        <Image src="/Nike.png" alt="Nike" className="max-w-[120px] sm:max-w-[150px]"width={50} height={50} /> 
        <Image src="/Adidas.png" alt="Adidas" className="max-w-[120px] sm:max-w-[150px]"width={50} height={50} /> 
        <Image src="/New Holland.png" alt="New Holland" className="max-w-[120px] sm:max-w-[150px]" width={50} height={50} />
      </div>
    </section>
  );
};

export default Hero;
