import React from 'react';
import Image from "next/image";

const Products = () => {
  return (
    <main className="p-4">

      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full md:w-[80%] h-full">
          {/* Top Section */}
          <div className="mb-8 text-center md:text-left">
            <span className="border-l-4 border-red-400 text-red-500 font-bold px-2">Always</span>
            <h2 className="font-bold text-2xl md:text-4xl mt-2">Best Selling Products</h2>
          </div>

          {/* Product Cards with 3D and Mobile Interaction */}
          <div className="flex flex-wrap justify-center md:justify-evenly gap-4 md:gap-6 mt-4">
            {[
              { src: "/assets/ck.webp", price: "120 $" },
              { src: "/assets/mr.jpeg", price: "90 $" },
              { src: "/assets/sh.webp", price: "100 $" },
              { src: "/assets/k.jpeg", price: "110 $" }
            ].map((product, index) => (
              <div 
                key={index} 
                className="w-[150px] md:w-[200px] bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:rotate-y-6 md:hover:rotate-y-0 md:hover:rotate-6 active:scale-95"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={product.src}
                  alt="product"
                  width={150}
                  height={100}
                  className="rounded-md"
                />
                <div className="text-sm mt-2">Fresh and waranted</div>
                
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
       
      </div>
    </main>
  );
}

export default Products;
