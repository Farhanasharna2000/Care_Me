import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Account",
      description: (
        <>
          All you need is:
          <ul className="list-disc  font-semibold text-sm md:text-base text-left pl-0
             md:pl-7">
            <li>GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)</li>
            <li>Bank Account</li>
          </ul>
        </>
      ),
    },
    {
      title: "List Products",
      description: "List the products you want to sell in your supplier panel.",
    },
    {
      title: "Get Orders",
      description: "Start getting orders from crores of Indians actively shopping on our platform.",
    },
    {
      title: "Lowest Cost Shipping",
      description: "Products are shipped to customers at lowest costs.",
    },
    {
      title: "Receive Payments",
      description: "Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.",
    },
  ];

  return (
    <div className="container mx-auto bg-white p-8 pt-0
     md:p-0">
      <h2 className="text-center mb-6 text-[#5F0623] font-extrabold text-2xl md:text-4xl">
        How it works
      </h2>

      {/* Steps */}
      <div className="bg-blue-50 p-6 md:p-8 rounded-md flex flex-col md:flex-row md:justify-between  gap-8 md:gap-0 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col  w-full md:w-56 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">

              {/* Step number */}
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#5F0623] text-white
               text-xl md:text-3xl font-bold">
                {index + 1}
              </div>
              
              {/* Line after number (only on desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-[-2rem] left-[5.5rem] w-32 h-[2px] bg-[#5F0623]" />
              )}
            </div>

            <h3 className="font-bold text-lg md:text-xl mt-4 md:mt-5 mb-2 text-center md:text-left">
              {step.title}
            </h3>

            <p className="font-semibold text-sm md:text-base text-center md:text-left">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
