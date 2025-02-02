'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft, FaRegClock } from "react-icons/fa";

// Define the NFTCard props type
type NFTCardProps = {
  image: string;
  title: string;
  timeLeft: string;
  ethPrice: string;
  bidders?: string[]; // Optional array of image URLs for bidders
  likes: number;
};

const NFTCard = ({ image, title, timeLeft, ethPrice, bidders = [], likes }: NFTCardProps) => {
  return (
    <div className="p-2 rounded-lg border border-gray-300 flex-shrink-0 w-60 sm:w-[280px] h-[410px] flex flex-col bg-[#060714]">
      {/* NFT Image */}
      <div className="relative w-full h-[280px]">
        <Image
          src={image}
          alt="NFT Art"
          width={280}
          height={80}
          className="rounded-lg h-[280px]"
        />
      </div>

      {/* Card Content */}
      <div className="mt-2 text-white flex flex-col flex-grow">
        {/* Title and ETH Price */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">{title}</p>
          <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">{ethPrice} ETH</span>
        </div>

        {/* Time Left */}
        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
          <FaRegClock />
          <span>{timeLeft} min left</span>
        </div>

        <hr className="bg-slate-100 mt-4" />

        {/* Bidding & Likes */}
        <div className="mt-4 flex justify-between items-center text-gray-400 text-xs">
          <div className="flex items-center">
            {bidders.length > 0 ? (
              bidders.map((bidder, index) => (
                <Image
                  key={index}
                  src={bidder}
                  alt={`Bidder ${index + 1}`}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full border border-gray-600 -ml-2"
                />
              ))
            ) : (
              <span>No bidders</span>
            )}
            <span className="ml-2">{bidders.length} people are bidding</span>
          </div>
          <span className="text-red-400">❤️ {likes}</span>
        </div>
      </div>
    </div>
  );
};

const PopularAuctions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nftData = [
    {
      image: "/Image (27).png",
      title: "Dui accumsan leo ornare eu",
      timeLeft: "22:59",
      ethPrice: "1.11",
      bidders: ["/03.png", "/02.png", "/04.png"],
      likes: 570,
    },
    {
      image: "/Image (24).png",
      title: "Lorem ipsum dolor sit amet",
      timeLeft: "18:30",
      ethPrice: "2.45",
      bidders: ["/01.png", "/02.png", "/03.png"],
      likes: 850,
    },
    {
      image: "/Item (20).png",
      title: "Vestibulum scelerisque viverra",
      timeLeft: "12:10",
      ethPrice: "3.00",
      bidders: ["/03.png", "/02.png", "/04.png"],
      likes: 430,
    },
    {
      image: "/Image (25).png",
      title: "Vestibulum scelerisque viverra",
      timeLeft: "12:10",
      ethPrice: "3.00",
      bidders: ["/03.png", "/02.png", "/04.png"],
      likes: 430,
    },
    {
      image: "/Image (26).png",
      title: "Vestibulum scelerisque viverra",
      timeLeft: "12:10",
      ethPrice: "3.00",
      bidders: ["/03.png", "/02.png", "/04.png"],
      likes: 430,
    },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nftData.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? nftData.length - 1 : prevIndex - 1));
  };

  return (
    <section className="relative bg-gray-950 text-white py-6 px-6 md:px-12 lg:px-24">
      <h3 className="text-center text-sm">Overline</h3>
      <h1 className="text-center font-bold">Most popular live auctions</h1>
      <div className="gap-2 flex justify-center flex-wrap mb-6">
        <button className="py-1 border rounded-lg px-2 text-sm">Architecture</button>
        <button className="py-1 border rounded-lg px-2 text-sm">Photography</button>
        <button className="py-1 border rounded-lg px-2 text-sm">Games</button>
        <button className="py-1 border rounded-lg px-2 text-sm">Music</button>
      </div>

      <div className="relative w-full max-w-4xl mx-auto py-16 overflow-hidden">
        {/* Cards Wrapper */}
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {nftData.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 w-full flex justify-between px-2 -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button className="py-1 border rounded-lg px-2 text-sm">Show me more</button>
        </div>
      </div>
    </section>
  );
};

export default PopularAuctions;
