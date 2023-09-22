import React from "react";
import footer from "../../assets/footer.png";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div className="relative">
            <img src={footer} className="md:w-full justify-center h-auto " />
          </div>
          <div className="absolute z-10 flex flex-col md:flex-row top-20 w-full justify-evenly">
            <div className=" text-grey-15   p-2 w-[17%] flex flex-col justify-start  gap-2 text-left z-10">
              <h1 className="font-sans font-semibold text-3xl">Newslleter</h1>
              <p className="font-sans  text-xl">
                Get news about articles and updates in your inbox.
              </p>
            </div>
            <div className=" w-[35%] right-[40rem]  text-grey-20 ">
              <form className="flex flex-col gap-[5rem] p-5">
                <input
                  type="text"
                  git
                  remote
                  add
                  origin
                  https:placeholder="NAME"
                  className="bg-transparent p-3 border-b outline-none text-white border-b-white "
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-transparent p-3 border-b outline-none  text-white border-b-white "
                />
                <input
                  type="text"
                  placeholder="MESSAGE"
                  className="bg-transparent p-3  outline-none border-b border-b-white  text-white box-border-none"
                />
                <button
                  type="Submit"
                  className="border border-[3px] w-[10rem] hover:pointer absolute right-[25rem] z-10 -bottom-[11rem] h-[10rem] text-yellow  border-yellow rounded-full text-3xl font-sans"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="absolute  -bottom-[15rem] text-left left-[20rem]  text-white w-[20%] md:w-[60%] h-auto ">
              <p className="font-syne font-bold text-[9rem] leading-[7rem]">
                GET<br></br> IN TOUCH
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black  text-white text-center p-5">
        <p className="font-poppins text-xl">
          Copyright 2022 All Right Reserved By SG
        </p>
      </div>
    </div>
  );
};

export default Footer;
