import React from 'react';
import { FaHandHoldingWater, FaHandshake, FaLevelUpAlt } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const WhyLove = () => {
    return (
       <div className="flex flex-col md:flex-row place-items-center md:gap-10 gap-5 bg-white container mx-auto md:p-0 p-8">

       {/* Left side */}
       <div className="md:w-1/2 ">
         <h2 className="text-lg md:text-4xl font-extrabold text-[#5F0623] mb-2 md:mb-4">
           Why Suppliers Love Care Me
         </h2>
         <p className="text-sm md:text-xl md:w-10/12 mt-2 text-gray-500 font-semibold">
           All the benefits that come with selling on Care Me are designed to
           help you sell more, and make it easier to grow your business.
         </p>
       </div>

       {/* Right  side */}
       <div className="md:w-1/2 border border-gray-300 rounded-sm  p-5 md:p-6">
    
               <div className="flex pb-5 gap-x-7">
                 <div>
                   <FaHandHoldingWater className="text-3xl md:text-4xl  text-[#5F0623]" />
                 </div>
                 <div>
                   <h1 className="font-bold text-lg md:text-2xl mb-3">
                     0% Commission Fee
                   </h1>
                   <p className="text-sm md:text-lg text-gray-500 ">
                     Suppliers selling on Meesho keep 100% of their profit by not
                     paying any commission
                   </p>
                 </div>
               </div>
               <div className="h-[1px] bg-gray-300 w-full"></div>

            <div className="flex  py-5 gap-x-7">
                 <div>
                   <RiMoneyDollarCircleFill className="text-3xl md:text-4xl  text-[#5F0623]" />
                 </div>
                 <div>
                   <h1 className="font-bold text-lg md:text-2xl mb-3">
                   0 Penalty Charges
                   </h1>
                   <p className="text-sm md:text-lg text-gray-500 ">
                     Suppliers selling on Meesho keep 100% of their profit by not
                     paying any commission
                   </p>
                 </div>
               </div>
               <div className="h-[1px] bg-gray-300 w-full"></div>
     
               <div className="flex  py-5 gap-x-7">
                 <div>
                   <FaLevelUpAlt className="text-3xl md:text-4xl  text-[#5F0623]" />
                 </div>
                 <div>
                   <h1 className="font-bold text-lg md:text-2xl mb-3">
                   Growth for Every Supplier
                   </h1>
                   <p className="text-sm md:text-lg text-gray-500 ">
                   From small to large and unbranded to branded, and now open for
                     Sellers who don't have a Regular GSTIN too, Meesho fuels growth
                     for all suppliers.
                   </p>
                 </div>
               </div>
               <div className="h-[1px] bg-gray-300 w-full"></div>

          
               <div className="flex  pt-5 gap-x-7">
                 <div>
                   <FaHandshake className="text-3xl md:text-4xl  text-[#5F0623]" />
                 </div>
                 <div>
                   <h1 className="font-bold text-lg md:text-2xl mb-3">
                   Ease of Doing Business
                   </h1>
            
                   <ul className="mt-2">
                     <li className="flex items-center gap-x-2 text-sm md:text-lg text-gray-500">
                       <LuArrowUpRight className="text-xl text-[#5F0623] " />
                       Easy Product Listing
                     </li>
                     <li className="flex items-center gap-x-2 text-sm md:text-lg text-gray-500">
                       <LuArrowUpRight className="text-xl text-[#5F0623] " />
                       Lowest Cost Shipping
                     </li>
                     <li className="flex items-center gap-x-2 text-sm md:text-lg text-gray-500">
                       <LuArrowUpRight className="text-xl text-[#5F0623] " />
                       7-Day Payment Cycle from the delivery date
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
     </div>
    );
};

export default WhyLove;