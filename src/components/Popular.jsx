import React from "react";

const Popular = () => {
  return (
    <div className=" container mx-auto p-8 pt-0 md:px-0 md:pt-20 md:pb-30">
      <h1 className=" mb-6 text-[#5F0623] font-extrabold text-xl md:text-4xl">
        Popular Categories to Sell Online
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-10 ">
        <p className="text-lg md:text-xl text-gray-500  ">Sell Sarees Online</p>
        <p className="text-lg md:text-xl text-gray-500  ">
          Sell Tshirts Online
        </p>
        <p className="text-lg md:text-xl text-gray-500  ">
          Sell Watches Online
        </p>
        <p className="text-lg md:text-xl text-gray-500  ">
          Sell Clothes Online
        </p>
        <p className="text-lg md:text-xl text-gray-500  ">
          Sell Jewellery Online
        </p>
        <p className="text-lg md:text-xl text-gray-500  ">Sell Shirts Online</p>
        <p className="text-lg md:text-xl text-gray-500  ">
          Sell Electronics Online
        </p>
        <p className="text-lg md:text-xl text-gray-500  ">Sell Socks Online</p>
      </div>
    </div>
  );
};

export default Popular;
