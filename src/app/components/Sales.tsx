import React from 'react';
import Image from "next/image";

const Sales = () => {
  return (
    <main>

    <div className="w-full h-[300px] flex justify-center items-center lg:row sm:col">
      <div className="w-[80%] h-full">
        {/* Top Section */}
        <div className="mb-8">
          <span className="border-xl-8 border-red-400 text-red-500 font-bold">Today</span>
          <h2 className="font-bold text-4xl mt-2">Fresh Sales</h2>
        </div>

        {/* Product Cards */}
        <div className="flex justify-evenly gap-6 mt-4">
          {/* Product Card */}
          {[
            { src: "/assets/c.jpeg", price: "120 $" },
            { src: "/assets/m2.png", price: "90 $" },
            { src: "/assets/h2.jpg", price: "100 $" },
            { src: "/assets/k2.png", price: "110 $" }
          ].map((product, index) => (
            <div key={index} className="w-[200px] bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src={product.src}
                alt="product"
                width={180}
                height={120}
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
    <div>
    <button className='py-2 px-4 bg-red-500 ml-[550px] mt-[150px] rounded-md hover:bg-red-600' >View All Product</button></div>
    </main>
  );
}

export default Sales;
