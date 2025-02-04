"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaRegClock } from "react-icons/fa";

type NFTCardProps = {
  image: string;
  title: string;
  timeLeft: string;
  ethPrice: string;
  bidders?: string[];
  likes: number;
};

const NFTCard = ({ image, title, timeLeft, ethPrice, bidders = [], likes }: NFTCardProps) => {
  return (
    <div className="bg-gray-950 p-2 rounded-lg border border-gray-300 flex-shrink-0 w-full sm:w-[280px] h-[520px] flex flex-col">
      {/* NFT Image */}
      <div className="relative w-full h-[380px]">
        <Image
          src={image}
          alt="NFT Art"
          width={280}  
          height={380} 
          className="rounded-lg  object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="mt-2 text-white flex flex-col flex-grow">
        {/* Title and ETH Price */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">{title}</p>
          <span className="bg-gray-800 px-2 py-1 rounded-md text-white text-xs">
            {ethPrice} ETH
          </span>
        </div>

        {/* Time Left */}
        <div className="flex items-center space-x-1 text-gray-400 text-xs mt-2">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <FaRegClock />
            <span>{timeLeft} min left</span>
          </div>
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
                  width={20}  
                  height={20}
                  className="rounded-full border border-gray-600 -ml-2"
                  alt={`Bidder ${index + 1}`}
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

const Author = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nftData = [
    {
      image: "/unsplash_z7pnyucFR5s.png",
      title: "Lorem ipsum dolor sit amet",
      timeLeft: "18:30",
      ethPrice: "2.45",
      bidders: ["/01.png", "/02.png", "/03.png"],
      likes: 850,
    },
    {
      image: "/unsplash_TVQFl9R-MLQ@2x.png",
      title: "Lorem ipsum dolor sit amet",
      timeLeft: "18:30",
      ethPrice: "2.45",
      bidders: ["/01.png", "/02.png", "/03.png"],
      likes: 850,
    },
    {
      image: "/unsplash_p203ekCK4Ac.png",
      title: "Lorem ipsum dolor sit amet",
      timeLeft: "18:30",
      ethPrice: "2.45",
      bidders: ["/01.png", "/02.png", "/03.png"],
      likes: 850,
    },
 
    {
      image: "/unsplash_SvGzLn7y_sw.png",
      title: "Lorem ipsum dolor sit amet",
      timeLeft: "18:30",
      ethPrice: "2.45",
      bidders: ["/01.png", "/02.png", "/03.png"],
      likes: 850,
    },
    {
      image: "/unsplash_AJgFLjnmSs4.png",
      title: "Lorem ipsum dolor sit amet",
      timeLeft: "18:30",
      ethPrice: "2.45",
      bidders: ["/01.png", "/02.png", "/03.png"],
      likes: 850,
    },
    {
      image: "/Item (18).png",
      title: "Lorem ipsum dolor sit amet",
      timeLeft: "18:30",
      ethPrice: "2.45",
      bidders: ["/01.png", "/02.png", "/03.png"],
      likes: 850,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === nftData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nftData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section style={{ backgroundColor: "#060714" }} className="w-full text-white text-center px-4 sm:px-20 py-8">
    <h3 className="text-sm text-center text-gray-400">Overline</h3>
      <h1 className="text-xl font-bold mb-4">More form this author</h1>

      <div className="relative w-full max-w-full sm:max-w-4xl mx-auto">
        {/* Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex gap-2 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {nftData.map((nft, index) => (
              <NFTCard key={index} {...nft} />
            ))}
          </div>
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
      </div>
      
      <div className="flex justify-center mt-4">
        <button className="px-6 border py-2">Show me more</button>
      </div>
    </section>
  );
};

export default Author;


