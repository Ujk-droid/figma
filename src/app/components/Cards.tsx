import React from 'react';
import Image from "next/image";

const Cards = () => {
  return (
    <main className="p-4">

      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full md:w-[80%] h-full">
          {/* Top Section */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl font-bold">Our Products</h1>
          </div>

          {/* Product Cards with 3D and Mobile Interaction */}
          <div className="flex flex-wrap justify-center md:justify-evenly gap-4 md:gap-6 mt-4">
            {[
              { src: "/assets/b.webp", price: "120 $" },
              { src: "/assets/b.jpg", price: "90 $" },
              { src: "/assets/st.jpg", price: "100 $" },
              { src: "/assets/lap.webp", price: "110 $" }
            ].map((product, index) => (
              <div 
                key={index} 
                className="w-[150px] md:w-[200px] bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 active:scale-95"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={product.src}
                  alt="product"
                  width={150}
                  height={100}
                  className="rounded-md"
                />
                <div className="text-sm mt-2">Fresh and warranted</div>
                
                {/* Star Rating */}
                <div className="flex text-yellow-500 mt-2">
                  ★★★★☆
                </div>
                
                <span className="font-semibold text-lg mt-1">{product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition-colors">
          thanks for Watching
        </button>
      </div>
    </main>
  );
}

export default Cards;
