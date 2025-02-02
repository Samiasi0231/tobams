"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
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
            <p className="text-nowrap text-start ml-2 text-xs text-white mt-2">
              3.82 ETH
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Section */}
      <div className="mx-auto max-w-4xl mt-12 border-2 hover:border-purple-300 p-6">
        <div className="flex flex-col md:flex-row h-50">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r-2 border-gray-400 p-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Image src="/Frame.png" alt="logo" width={32} height={32} />
              <h1 className="font-semibold ml-2 text-white">NFT Market</h1>
            </div>
            <div className="flex gap-4 justify-center md:justify-start text-nowrap text-xs text-white">
              <p>Support</p>
              <p>Terms of Service</p>
              <p>License</p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r-2 border-gray-400 p-4 text-center md:text-left">
            <div className="flex flex-col text-white">
              <p>Auctions</p>
              <p>Roadmap</p>
              <p>Discover</p>
              <p>Community</p>
            </div>
            <button className="px-4 py-1 rounded-lg mt-5 bg-[#2A27C9] text-white">
              My Account
            </button>
            <div className="mt-6 flex justify-center md:justify-start gap-2">
              {["Vector (2).svg", "Vector (3).svg", "Vector (4).svg", "Twitter Icon.svg", "Vector (5).svg"].map((icon, i) => (
                <Image key={i} src={`/${icon}`} alt={`Icon ${i}`} width={20} height={20} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col  justify-between p-4 text-center md:text-left">
            <p className="text-xs text-white">
              Nibh volutpat, aliquam id sagittis elementum.
              <br /> Pellentesque laoreet velit, sed egestas in. Id
              <br /> nam semper dolor tellus vulputate eget turpis.
            </p>
            <div className="flex items-center border bg-white border-gray-300 rounded-lg overflow-hidden mx-auto md:mx-0 w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-1 w-full outline-none bg-transparent text-white placeholder-gray-400"
              />
              <button className="text-[#2A27C9] bg-white px-4 py-1">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
