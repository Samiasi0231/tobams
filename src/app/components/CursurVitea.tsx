"use client";
import Image from "next/image";

const CursurVitea = () => {
  return (
    <section style={{ backgroundColor: "#060714" }} className="relative py-6 px-20 md:px-12 lg:px-24">
      <div className="flex justify-center">
        <hr className="w-3/4" style={{ borderColor: "#262840" }} />
      </div>
      <div className="py-12 gap-10 flex justify-center">
        <div className="flex flex-col">
          <Image src="/User Icon.svg" alt="User Icon" width={20} height={20} className="ml-8" />
          <p className="text-center text-4xl font-bold">300K</p>
          <span className="text-xs text-center">Users Active</span>
        </div>
        <div className="flex flex-col">
          <Image src="/Artworks Icon.svg" alt="Artworks Icon" width={20} height={20} className="ml-8" />
          <p className="text-center text-4xl font-bold">52,5K</p>
          <span className="text-xs text-center">Artworks</span>
        </div>
        <div className="flex flex-col">
          <Image src="/Vector (1).svg" alt="Vector Icon" width={20} height={20} className="ml-8" />
          <p className="text-center text-4xl font-bold">17,5K</p>
          <span className="text-xs text-center">Artists</span>
        </div>
        <div className="flex flex-col">
          <Image src="/Wallet Icon.svg" alt="Wallet Icon" width={20} height={20} className="ml-8" />
          <p className="text-center text-4xl font-bold">35,58K</p>
          <span className="text-xs text-center">ETH Spent</span>
        </div>
      </div>
      <div>
      <Image src="/Vector (1).png" alt="Guide Icon" width={400} height={40} />
        <div className="w-auto h-96 bg-gray-900">
          <div className="max-w-7xl px-20 grid md:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="text-white py-6">
              <p className="uppercase text-sm tracking-widest text-gray-400">Overline</p>
              <h1 className="text-4xl font-bold leading-tight mt-3">
                Cursus vitae <br /> sollicitudin donec <br /> nascetur. Join now
              </h1>
              <p className="text-gray-400 mt-4">
                Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-medium text-sm">
                  Get started
                </button>
                <button className="px-6 py-3 border border-gray-600 rounded-lg text-gray-300 font-medium text-sm hover:bg-gray-800">
                  Learn more
                </button>
              </div>
            </div>
            {/* Right Side User Cards */}
            <div>
              <Image src="/Users.png" alt="Users Image" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursurVitea;
