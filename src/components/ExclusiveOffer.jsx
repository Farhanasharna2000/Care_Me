import { AiFillSound } from "react-icons/ai";
import {  PiMoneyFill } from "react-icons/pi";

const ExclusiveOffer = () => {
  return (
    <div className="bg-[#5169f513] md:mb-30 md:mt-24 md:px-4 md:py-0 p-8">
      <div className="container mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2  items-center  md:py-5">
            
          {/* Left side */}
          <div>
            <h1 className="text-lg md:text-4xl w-10/12 font-bold mb-4 md:mb-0 text-[#5F0623]">
              Exclusive Supplier+ Rewards for the first 30 days
            </h1>
          </div>

          {/* Right side */}
          <div>
            <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
              {/* Card 1 */}
              <div className="flex-1 flex flex-col bg-white border border-gray-200 p-6 rounded-lg shadow-sm md:w-1/2 lg:relative lg:-top-16">
                <AiFillSound className="text-5xl text-[#5F0623] -rotate-45 mb-2" />
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  Free catalog visibility of ₹600
                </h2>
                <p className="text-base md:text-lg text-gray-500 leading-7">
                  Run advertisements for your catalogs to increase the
                  visibility of your products and get more orders. Currently,not
                  available for sellers who don't have a Regular GSTIN.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex-1 flex flex-col bg-white border border-gray-200 p-6 rounded-lg shadow-sm md:w-1/2 lg:relative lg:top-16">
                <PiMoneyFill className="text-5xl text-[#5F0623] mb-2" />
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  Free catalog visibility of ₹600
                </h2>
                <p className="text-base md:text-lg text-gray-500 leading-7">
                  Run advertisements for your catalogs to increase the
                  visibility of your products and get more orders. Currently,not
                  available for sellers who don't have a Regular GSTIN.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExclusiveOffer;
