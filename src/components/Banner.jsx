import React from "react";

import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <>
      <div className="bg-[#EBE3E3] ">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">

          {/* left side*/}
          <div className="flex flex-col col-span-1 md:col-span-6 p-8 md:pl-10 space-y-4 md:space-y-6 ">
            <h1 className="text-lg md:text-4xl  font-extrabold ">
              Sell online to 14 Cr+ customers at{" "}
              <span className="text-[#5F0623]">0% Commission</span>
            </h1>
            <div className="text-xs md:text-base font-semibold space-y-2">
              <p>
                Become a Care Me seller and grow your business across Bangladesh
              </p>
              <p>
                <span className="bg-[#5F0623] text-white font-bold px-3 py-1 rounded-lg mr-2">
                  New!
                </span>
                Don’t have a GSTIN? You can still sell on Meesho.{" "}
                <a href="#" className="text-[#5F0623] font-bold">
                  Know more
                </a>
              </p>
            </div>

            <div class="flex rounded-md shadow-sm md:w-9/12">
              <input
                type="text"
                class="flex-1 block w-full min-w-0 rounded-none rounded-l-md border-0 py-1.5 px-5  bg-white
                 placeholder:text-gray-300 "
                placeholder="Enter Your Mobile Number"
              />
              <button
                type="button"
                class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md bg-[#5F0623] hover:bg-[#450000]
                 px-6 py-2 text-xs md:text-base font-semibold text-white shadow-sm "
              >
                Start Selling
              </button>
            </div>
          </div>

          {/* right side*/}
          <div className="bg-[#450000] col-span-1 md:col-span-6 rounded-tl-full h-full relative">
            <div className="relative ">
              <img src={bannerImage} alt="Banner"  className="object-contain md:h-[440px] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
