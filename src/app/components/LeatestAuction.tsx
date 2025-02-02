'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';

const LeatestAuction: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60); // Initial time in minutes
  const ethPrice: number = 1.5;
  const bidders: number[] = [101, 1];
  const likes: number = 15;

  const images: string[] = ['/Item (6).png', '/Item (7).png'];

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ backgroundColor: '#060714' }} className="text-white py-12 px-2 md:px-12 lg:px-24">
      <div className="flex flex-wrap gap-6 justify-center">
       {/* Sale Offer Card */}
<div className="card w-96 border bg-gray-950 rounded-lg p-4 sm:flex-col">
  <h2 className="font-extrabold text-2xl text-center">
    Check out the <br /> hottest Sale offers
  </h2>

  {/* Images Container */}
  <div className="relative mt-4 flex gap-4">
    {/* Display First Image */}
    <div className="flex-1 flex flex-col">
      <Image 
        src={images[currentImageIndex]} 
        alt="Sale item" 
        width={180} 
        height={220} 
        className="rounded-md object-cover w-full h-[280px]"
      />
      <span className="text-xs mt-2">Fames habitasse risus <br /> ultricies tortor sit</span>
      <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
        <FaRegClock className="w-3 h-3" />
        <span className="text-nowrap">{timeLeft} min left</span>
        <span className="bg-gray-800 py-1 text-nowrap px-2 rounded-md text-xs">{ethPrice} ETH</span>
      </div>
      <div className="mt-4 flex justify-between items-center text-xs">
    <span className='text-nowrap'>{bidders.length} people are bidding</span>
    <span className="text-red-400 text-nowrap">❤️ {likes}</span>
  </div>
    </div>

    {/* Display Second Image */}
    <div className="flex-1 flex flex-col">
      <Image 
        src={images[(currentImageIndex + 1) % images.length]} 
        alt="Sale item" 
        width={180} 
        height={220} 
        className="rounded-md object-cover w-full h-[280px]"
      />
      <span className="text-xs mt-2">Fames ultricies <br /> tortor sit</span>
      <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
        <FaRegClock className="w-3 h-3" />
        <span className="text-nowrap">{timeLeft} min left</span>
        <span className="bg-gray-800 text-nowrap py-1 px-2 rounded-md text-xs">{ethPrice} ETH</span>
      </div>
      <div className="mt-4 flex justify-between items-center text-xs">
    <span className='text-nowrap'>{bidders.length} people are bidding</span>
    <span className="text-red-400 text-nowrap">❤️ {likes}</span>
  </div>
    </div>

    {/* Carousel Button */}
    <button 
      onClick={handleNextSlide} 
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-950 p-2 rounded-full shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

 

  <button className="w-full mt-4 py-2 border text-white rounded-lg">Show me more</button>
</div>


        {/* NFT Creation Guide */}
        <div className="card w-80 border border-gray-700 rounded-lg p-4">
          <Image src="/Vector (1).png" alt="Guide Icon" width={200} height={40} />
          <Image src="/Image (4).png" alt="NFT Guide"   width={180} 
        height={220} 
        className="rounded-md object-cover w-full h-[380px]"/>
          <p className="text-sm text-center">Get started creating & selling your NFTs</p>
          <p className="text-xs text-center text-gray-400">Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
          <button className="w-full mt-6 py-2 border text-white rounded-lg">Show me more</button>
        </div>

        {/* Top NFT Deals */}
        <div className="card w-80 border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl mt-3 font-bold text-center">Top NFT at a lower price</h2>
          <div className="mt-4 space-y-3">
            {['/Image (5).png', '/Image (6).png', '/Item (8).png', '/Item (9).png'].map((src, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image src={src} alt={`NFT ${index}`} width={50} height={50} className="rounded-md" />
                <div>
                  <p className="text-sm">Vulputate velit viverra <br /> volutpat tristique</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaRegClock className="w-3 h-3" />
                    <span>{timeLeft} min left</span>
                    <span className="bg-gray-800 py-1 px-2 rounded-md text-xs">{ethPrice} ETH</span>
                  </div>
                  <div className="flex gap-2 justify-between text-xs">
                    <span>{bidders.length} people are bidding</span>
                    <span className="text-red-400">❤️ {likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-16 py-2 border text-white rounded-lg">Show me more</button>
        </div>
      </div>
    </section>
  );
};

export default LeatestAuction;
