import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between   px-10 py-4 items-center bg-grey-20 text-grey-15 text-[10px] md:text-lg font-poppins">
      {/* left side div*/}
      <div className="flex flex-row gap-2 md:gap-5 items-center">
        <div className="flex gap-2 items-center">
          <CiDeliveryTruck className="text-xl" />
          <div>Free Delivery</div>
        </div>
        <div className="border w-0 h-5"></div>
        <p>Return Policy</p>
      </div>
      {/* right side div*/}
      <div className="flex flex-row gap-5">
        <p>Login</p>
        <p className=" hidden md:block">Follow Us</p>
        <div className="flex flex-row gap-5 items-center">
          <BiLogoFacebook />
          <BiLogoLinkedin />
          <BiLogoTwitter />
          <BiLogoInstagram />
        </div>
      </div>
    </div>
  );
};

export default Header;
