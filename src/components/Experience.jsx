import React from "react";
import e1 from "../assets/experience1.png";
import e2 from "../assets/experience2.png";
import e3 from "../assets/experience3.png";
import { FaCirclePlay } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className="container mx-auto md:pb-16 md:pt-0 md:px-0 p-8">
      <h1 className="md:text-center mb-4 text-[#5F0623] font-extrabold text-lg md:text-4xl md:my-10">
        Experiences suppliers love to talk about
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Card 1 */}
        <div className="bg-white rounded-md border border-gray-300 p-4 relative flex flex-col justify-between">
          <div className="relative w-full h-52 md:h-56  rounded-lg">
            <img
              src={e1}
              alt="Amit and Rajat Jain"
              className="w-full h-full object-cover rounded-lg"
            />
            <FaCirclePlay
              className="absolute left-6 -bottom-6  md:-bottom-10 md:left-6 text-5xl md:text-6xl  bg-orange-400
             rounded-full p-1 text-[#450000]"
            />
          </div>

          <div className="md:pt-16 pt-10">
            <h2 className="text-lg  md:text-2xl font-bold mb-2 text-[#5F0623]">
              Amit and Rajat Jain
            </h2>
            <h3 className="text-base font-semibold md:mb-4 mb-2">
              Smartees, Tiruppur
            </h3>
            <p className="text-sm  md:text-base text-gray-600 mb-3">
              Our business has grown beyond our imagination, getting up to
              10,000 orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-md border border-gray-300 p-4 relative flex flex-col justify-between">
          <div className="relative w-full h-52 md:h-56  rounded-lg">
            <img
              src={e2}
              alt="Suman"
              className="w-full h-full object-cover rounded-lg"
            />
            <FaCirclePlay
              className="absolute left-6 -bottom-6  md:-bottom-10 md:left-6 text-5xl md:text-6xl  bg-orange-400
             rounded-full p-1 text-[#450000]"
            />
          </div>

          <div className="md:pt-16 pt-10">
            <h2 className="text-lg  md:text-2xl font-bold mb-2 text-[#5F0623]">
              Suman
            </h2>
            <h3 className="text-base font-semibold md:mb-4 mb-2">
              Keshav Fashion, Hisar
            </h3>
            <p className="text-sm  md:text-base text-gray-600 mb-3">
              Our business has grown beyond our imagination, getting up to
              10,000 orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-md border border-gray-300 p-4 relative flex flex-col justify-between">
          <div className="relative w-full h-52 md:h-56  rounded-lg">
            <img
              src={e3}
              alt="Mohit Rathi"
              className="w-full h-full object-cover rounded-lg"
            />
            <FaCirclePlay
              className="absolute left-6 -bottom-6  md:-bottom-10 md:left-6 text-5xl md:text-6xl  bg-orange-400
             rounded-full p-1 text-[#450000]"
            />
          </div>

          <div className="md:pt-16 pt-10">
            <h2 className="text-lg  md:text-2xl font-bold mb-2 text-[#5F0623]">
              Mohit Rathi
            </h2>
            <h3 className="text-base font-semibold md:mb-4 mb-2">
              Meira Jewellery, Ahmedabad
            </h3>
            <p className="text-sm  md:text-base text-gray-600 mb-3">
              Our business has grown beyond our imagination, getting up to
              10,000 orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
