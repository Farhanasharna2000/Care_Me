import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between md:py-6 md:px-0 p-8">
        {/* Logo */}
        <div className="md:text-2xl text-lg font-bold text-[#5F0623]">
          Care Me
        </div>

        {/* Desktop Navigation links*/}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-black font-semibold hover:text-[#5F0623] transition"
          >
            Sell Online
          </a>
          <a
            href="#"
            className="text-black font-semibold hover:text-[#5F0623] transition"
          >
            How it works
          </a>
          <a
            href="#"
            className="text-black font-semibold hover:text-[#5F0623] transition"
          >
            Pricing & Commission
          </a>
          <a
            href="#"
            className="text-black font-semibold hover:text-[#5F0623] transition"
          >
            Shipping & Returns
          </a>
        </nav>

        {/* Buttons */}
        <div className=" md:flex md:space-x-9 space-x-2">
          <button
            className="text-xs md:text-base md:px-10 px-2 py-1.5 border-2 border-[#5F0623] text-[#5F0623] 
          rounded-md hover:bg-[#5F0623] hover:text-white transition"
          >
            Login
          </button>
          <button
            className="text-xs md:text-base md:px-9 py-2 px-2 md:py-1.5 bg-[#5F0623] text-white rounded-md
           hover:bg-[#450000] transition"
          >
            Start Selling
          </button>

          {/* Mobile navigation links */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn p-2 border-none ">
              <Menu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
            >
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-[#5F0623] transition"
                >
                  Sell Online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-[#5F0623] transition"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-[#5F0623] transition"
                >
                  Pricing & Commission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-[#5F0623] transition"
                >
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
