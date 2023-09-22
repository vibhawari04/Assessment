import React from "react";
import Navbar from "./Navbar";
import Rectanle31 from "../../assets/Rectangle31.png";
import Rectangle from "../../assets/Rectangle.png";
import human from "../../assets/human.png";
import star from "../../assets/Star.png";
import star2 from "../../assets/star2.png";
import { useState } from "react";
import year from "../../assets/year.png";
import { FiArrowUpRight } from "react-icons/fi";
const HeroSection = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative h-auto overflow-hidden">
      <img
        src={Rectanle31}
        height={"100vh"}
        width={"100vw"}
        className="w-full h-auto relative"
      />
      <img
        src={Rectangle}
        height={"100vh"}
        width={"100vw"}
        className="w-full no-repeat h-auto absolute top-0"
      />

      <div className="h-auto">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>

      <div
        className={`  sm:mx-auto z-10 sm:w-[85%] md:w-[85%] lg:w-[50%] xl:w-[85%] h-[50%] text-white absolute left-[10%] top-[30%] ${
          openMenu ? "hidden" : "block"
        } `}
      >
        <div className="inherit  ">
          <p className="text-[10rem]    absolute left-0 z-10 font-syne font-extrabold">
            Fresh
          </p>
        </div>
        <div className="inherit">
          <img
            src={year}
            className="w-[45rem]  absolute  z-10 top-[15rem] left-[20%] "
          />
        </div>
        <div className="inherit">
          <p className="absolute left-20 text-[10rem] top-[20rem] z-10 font-syne font-extrabold">
            Look
          </p>
        </div>
        <div className="inherit">
          {" "}
          <div className="bg-yellow  absolute top-[8.5rem] -right-[25rem] w-full h-[500px] z-0"></div>
          <img
            src={human}
            className="absolute h-[50rem] -top-[5rem] z-10 right-[10rem]"
          />
          <img src={star} className="absolute z-5 right-[10rem] -top-[5rem]" />
        </div>
        <div className=" font-sans absolute md:right-0 md:text-black md:right-20 md:top-[33rem] ">
          {" "}
          <p>Oregon jacket</p>
          <p>$124</p>
        </div>
      </div>
      <div className="w-[976px] border border-white absolute bottom-[10rem] z-10"></div>
      <img src={star2} className="absolute z-10 bottom-[7.2rem] left-[60rem]" />
      <div className="absolute z-10 text-white bottom-10 left-20 flex flex-row text-sans text-xl gap-2 items-center border p-1">
        <p>See more</p>
        <FiArrowUpRight className="text-2xl" />{" "}
      </div>
    </div>
  );
};

export default HeroSection;
