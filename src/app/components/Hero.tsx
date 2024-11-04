import React from 'react';
import { FaApple } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='flex justify-center w-full mt-12'>
      <div className="bg-black w-[90%] md:w-[80%] h-[280px] flex flex-col md:flex-row justify-between items-center p-4 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center items-center text-center md:text-left">
          <div className="flex justify-center items-center mb-2">
            <span className='text-4xl'>
              <FaApple />
            </span>
            <span className='ml-2'>Phone 14 Series</span>
          </div>
          <h1 className='text-3xl font-sans font-bold mb-2'>
            Up to 100% Off Voucher
          </h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            Shop Now
          </button>
        </div>
        
        {/* Right Section */}
        <div className="mt-4 md:mt-0">
          <Image 
            src={"https://public.blenderkit.com/thumbnails/assets/74ba7ac5ff6c4669b2b39d68aca6cbc5/files/thumbnail_29676fdd-343c-4fd1-8da0-f6fa95460940.png.256x256_q85.png.webp?webp_generated=1642847202"} 
            alt="Phone Image" 
            width={280} 
            height={350} 
            className="object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
