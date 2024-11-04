import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center border-b-2">
      <div className="w-[80%] h-full flex justify-between items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold">Exclusive</h1>
        </div>
        
        {/* Right */}
        <div>
          <ul className="flex gap-x-5 mr-4 text-xl font-semibold">
            <li>
              <Link href="/" className="hover:text-gray-500 hover:underline transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-500 hover:underline transition duration-300">About</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-500 hover:underline transition duration-300">Contact</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-500 hover:underline transition duration-300">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
