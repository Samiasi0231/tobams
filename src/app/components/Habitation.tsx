import Image from "next/image";

const Habitation = () => {
  return (
    <section style={{ backgroundColor: "#060714" }} className="relative text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Right Side - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image
            src="/Left - Image.png" 
            alt="Paint Bucket and Pie Chart"
            width={400}  
            height={400} 
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <p className="text-gray-300 uppercase text-sm tracking-wide">Overline</p>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
            Habitant tristique <br /> aliquam in vel <br /> scelerisque
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-lg">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam <br /> tempor pulvinar ultricies dolor feugiat aliquam commodo.
          </p>

          {/* Icon Section */}
          <div className="flex flex-col lg:flex-row gap-4 mt-6 items-center lg:items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/Icon.svg"  
                alt="Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <p className="text-center lg:text-left">
                Sollicitudin sapiens <br /> <span className="text-sm text-gray-500">Cursus fermentum</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Group.svg"  
                alt="Group"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <p className="text-center lg:text-left">
                Pulvinar metus <br /> <span className="text-sm text-gray-500">Nunc sed</span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-x-2 sm:space-y-0">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
              Get started
            </button>
            <button className="border border-gray-500 px-6 py-3 rounded-lg text-gray-300 hover:bg-gray-800">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habitation;
