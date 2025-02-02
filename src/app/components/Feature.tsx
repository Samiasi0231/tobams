import Image from "next/image";

const Features = () => {
  return (
    <section style={{ backgroundColor: "#060714" }} className="relative text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:ml-10">
          <p className="text-gray-300 uppercase text-sm tracking-wide">
            Overline
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
            Sapien ipsum <br /> scelerisque <br /> convallis fusce
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-xl">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor <br /> pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold w-full sm:w-auto">
              Get started
            </button>
            <button className="border border-gray-500 px-6 py-3 rounded-lg text-gray-300 hover:bg-gray-800 w-full sm:w-auto">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image
            src="/Right - Image.png" 
            alt="Paint Bucket and Pie Chart"
            width={400} 
            height={400} 
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
