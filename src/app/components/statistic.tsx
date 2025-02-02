'use client';
import Image from 'next/image';

export default function Statistics() {
  return (
    <header className="mx-auto py-6 px-4" style={{ backgroundColor: "#060714" }}>
      <div className="flex justify-center items-center h-auto sm:h-screen">
        <div className="max-w-3xl w-full border rounded-xl p-6 sm:p-4 flex flex-col sm:flex-row gap-6" style={{ backgroundColor: "#060714" }}>
          
          {/* Image Section */}
          <div className="w-full sm:w-[250px] md:w-[320px] flex justify-center">
            <Image
              src="/Item (16).png"
              alt="Item"
              width={320} 
              height={500} 
              className="w-full h-auto sm:w-[250px] md:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col items-start">
            <h3 className="text-xl font-semibold text-white">Dui accumsan leo <br /> vestibulum ornare</h3>
            <p className="text-xs text-start text-gray-400 mt-2">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
            </p>

            {/* Creator and Collection */}
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <div className="flex items-center">
                <Image
                  src="/Ellipse (1).png"
                  alt="Creator"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-xs ml-2">Creator <br /><span className="text-sm text-white">@brook_sims</span></p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/Ellipse (2).png"
                  alt="Collection"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-xs ml-2">Collection <br /><span className="text-sm text-white">Afterlife</span></p>
              </div>
            </div>

            {/* Price and Timer */}
            <div className="w-full sm:w-64 mt-4 border rounded-lg p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="text-gray-400 text-sm">
                  Current price <br />
                  <span className="text-xl font-semibold text-white">5.25 ETH</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Time left <br />
                  <span className="text-xl font-semibold text-white">22:59 min</span><br />
                  <span className="text-xs text-gray-400">(01.01.2022 - 01:40:47)</span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-4 py-2 text-white rounded-lg" style={{ backgroundColor: "#4745D0" }}>
                Place a bid
              </button>
            </div>

            {/* Bid History */}
            <div className="mt-4 w-full">
              <p className="text-white text-sm">History of bids (12 people are bidding)</p>
              <Image
                src="/Frame 76.png"
                alt="Bid History"
                width={500} 
                height={200}
                className="w-full mt-2 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
