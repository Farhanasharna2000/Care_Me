import React from "react";

import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <>
      <div className="bg-[#EBE3E3] overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
             {/* left */}
             <div className="flex flex-col  p-8 md:pl-10 col-span-1 md:col-span-6 space-y-6 ">
            <h1 className="text-3xl md:text-4xl lg:text-4xl leading-tight font-extrabold ">
              Sell online to 14 Cr+ customers at{" "}
              <span className="text-[#5F0623]">0% Commission</span>
            </h1>
            <div className="text-base md:text-lg lg:text-lg">
              <p>Become a Care Me seller and grow your business across Bangladesh</p>
              <p><span className="bg-[#5F0623] text-white px-2 py-1 rounded-lg mr-2">New!</span>Don’t have a GSTIN? You can still sell on Meesho. <a href="#" className="text-[#5F0623]">Know more</a></p>
            </div>

            <div class="flex rounded-md shadow-sm">
              <input
                type="text"
                class="flex-1 block w-full min-w-0 rounded-none rounded-l-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-[#5F0623] bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5F0623] sm:text-sm sm:leading-6"
                placeholder="Enter Your Mobile Number"
              />
              <button
                type="button"
                class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md bg-[#5F0623] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5F0623]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5F0623]"
              >
                Start Selling
              </button>
            </div>
          </div>
          {/* right */}
          <div className="bg-[#450000] col-span-1 md:col-span-6 rounded-tl-full h-full relative">
            <div className="relative md:h-[530px] ">
              <img
                src={bannerImage}
                alt="Banner"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
