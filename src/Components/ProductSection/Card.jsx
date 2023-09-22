import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col filter grayscale transition-all duration-200  w-[20rem] items-center">
      <div className="shadow shadow-gray-15 p-5 w-[310px] relative">
        <img src={data.image} width="310px" className="w-[310px] " />
        <div className="bg-black absolute right-0 bottom-0 p-3 text-center">
          <FiArrowUpRight className="text-4xl font-extrabold text-white" />
        </div>
      </div>
      <div className="text-left p-5 flex flex-col">
        <p className="text-black font-syne font-semibold  text-2xl">
          {data.title}
        </p>
        <p className="font-sans pt-3 text-md text-grey-15">
          {data.description}
        </p>
        <p className="font-syne font-semibold text-2xl pt-3">${data.price}</p>
      </div>
    </div>
  );
};

export default Card;
