import React from "react";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="bg-blue-50 md:py-20 md:mb-20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 container mx-auto gap-8 items-center p-8 md:p-0">
        {/* Left side */}
        <div className="md:col-span-6">
          <h1 className="text-lg md:text-4xl  font-extrabold text-[#5F0623] w-10/12">
            Care Me Supplier Support Available 24/7
          </h1>
        </div>

        {/* Right side */}
        <div className="md:col-span-6">
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 md:w-10/12">
            Meesho supplier support is available to solve all your doubts and
            issues before and after you start your online selling business.
          </p>

          <div className="flex items-start gap-4">
            <div className="py-2 px-4 bg-[#5F0623] rounded-lg">
              <CiMail className="text-white text-2xl md:text-3xl" />
            </div>
            <div>
              <p className="text-base md:text-lg text-[#5F0623] font-medium">
                You can reach out to
              </p>
              <p className="text-base md:text-lg text-gray-600">
                support@caremebd.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
