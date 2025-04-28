import React from "react";
import {
  TbSquareLetterFFilled,
  TbSquareLetterIFilled,
  TbSquareLetterYFilled,
} from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <footer className="md:pt-16 md:pb-12 bg-[#5F0623]">
        <div className="container mx-auto p-8 md:p-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-white text-3xl  md:text-4xl">
              Care Me
            </h3>
            <p className="text-md md:text-lg text-white my-8 md:w-8/12">
              Sell your products to crores of customers on Meesho at 0%
              commission
            </p>
            <button
              className="bg-[#FF8102] px-7 py-2 border-2 cursor-pointer border-[#5a1515] font-bold rounded-lg
             text-white text-xs md:text-lg"
            >
              Start Selling
            </button>
          </div>

          {/* Nav links  */}
          <div>
            <h3 className="font-semibold text-white text-lg  md:text-2xl">
              Sell on Care Me
            </h3>
            <ul className="mt-4 space-y-4  text-white text-md md:text-lg">
              <li>Sell Online</li>
              <li>Pricing & Commission</li>
              <li>How it works</li>
              <li>Shipping & Returns</li>
              <li>Grow Your Business</li>
              <li>Learning Hub</li>
            </ul>
          </div>

          {/* Contact and Social Links */}
          <div>
            <h2 className="font-semibold text-white text-lg  md:text-2xl">
              Contact Us
            </h2>
            <h2 className="text-white text-md md:text-lg  mt-6">
              support@caremebd.com
            </h2>
            <div className="flex gap-x-1 mt-5 md:mt-7">
              <TbSquareLetterFFilled className="text-4xl   text-white" />
              <TbSquareLetterIFilled className="text-4xl   text-white" />
              <TbSquareLetterYFilled className="text-4xl   text-white" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white w-full md:my-12 container mx-auto "></div>

        {/* Footer Bottom */}
        <div className="md:mt-12 py-8 md:py-0 text-center text-white text-md md:text-lg">
          © 2015 Care Me. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
