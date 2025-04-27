import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#5F0623]">
          Care Me
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-black font-semibold hover:text-[#5F0623] transition">Sell Online</a>
          <a href="#" className="text-black font-semibold hover:text-[#5F0623] transition">How it works</a>
          <a href="#" className="text-black font-semibold hover:text-[#5F0623] transition">Pricing & Commission</a>
          <a href="#" className="text-black font-semibold hover:text-[#5F0623] transition">Shipping & Returns</a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-5 py-2 border-2 border-[#5F0623] text-[#5F0623] rounded-md hover:bg-[#5F0623] hover:text-white transition">
            Login
          </button>
          <button className="px-5 py-2 bg-[#5F0623] text-white rounded-md hover:bg-[#350000] transition">
            Start Selling
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
