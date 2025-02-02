"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';  // Correct CSS import for Swiper
import Image from "next/image";

const Footer = () => {
  const images = [
    "Image (4).png",
    "Image (12).png",
    "Image (14).png",
    "Image (15).png",
    "Image (16).png",
    "Image (17).png",
    "Image (13).png",
    "Image (14).png",
    "Image (15).png",
    "Image (16).png",
    "Image (17).png",
    "Image (14).png",
    "Image (15).png",
    "Image (16).png",
    "Image (17).png",
    "Image (18).png",
    "Image (19).png",
  ];

  return (
    <section className="px-2 py-8 bg-[#060714]">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <Image
              src={`/${src}`}  
              alt="ETH Image"
              width={64}
              height={64} 
              className="w-16 h-16 rounded-lg object-cover"
            />
            <p className="text-nowrap text-start ml-2 text-xs text-white mt-2">3.82 ETH</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="footer mx-auto max-w-4xl mt-12 h-72 border-2 hover:border-purple-300">
        {/* Footer content here */}
        <div className="flex flex-wrap h-full">
          <div className="flex-1 border-r-2 border-gray-400 h-full p-4">
            <div className="flex mt-4 items-center">
              <Image
                src="/Frame.png"  
                alt="logo"
                width={32} 
                height={32} 
              />
              <h1 className="font-semibold ml-2">NFT Market</h1>
            </div>
            <div className="flex gap-4 mt-40 text-nowrap text-xs text-white">
              <p>Support</p>
              <p>Terms of Service</p>
              <p>License</p>
            </div>
          </div>

          <div className="flex-1 border-r-2 border-gray-400 h-full p-4">
            <div className="flex flex-col text-white">
              <p>Auctions</p>
              <p>Roadmap</p>
              <p>Discover</p>
              <p>Community</p>
            </div>
            <button className="px-4 py-1 rounded-lg mt-5 bg-[#2A27C9] text-white">
              My Account
            </button>
            <div className="mt-14 flex gap-2">
              <Image
                src="/Vector (2).svg"
                alt="Vector Icon 2"
                width={20}
                height={20}
                
              />
              <Image
                src="/Vector (3).svg"
                alt="Vector Icon 3"
                width={20}
                height={20}
                
              />
              <Image
                src="/Vector (4).svg"
                alt="Vector Icon 4"
                width={20}
                height={20}
              
              />
              <Image
                src="/Twitter Icon.svg"
                alt="Twitter Icon"
                width={20}
                height={20}
              
              />
              <Image
                src="/Vector (5).svg"
                alt="Vector Icon 5"
                width={20}
                height={20}
              
              />
            </div>
          </div>

          <div className="flex-1 h-full p-4">
            <p className="text-xs mt-2 text-center text-white">
              Nibh volutpat, aliquam id sagittis elementum.
              <br />Pellentesque laoreet velit, sed egestas in. Id
              <br />nam semper dolor tellus vulputate eget turpis.
            </p>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mt-36 w-full max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-1 w-full outline-none"
              />
              <button className="text-[#2A27C9] bg-white px-4 py-1">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
