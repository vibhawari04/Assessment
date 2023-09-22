import React, { useEffect, useRef, useState } from "react";
import blackStar from "../../assets/blackStar.png";
import { MdArrowRightAlt } from "react-icons/md";
import Card from "./Card";

const ProductSection = () => {
  const [data, setData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const scrollAmount = 900;

  function productScroll(direction) {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (direction === "back") {
        scrollPositionRef.current = Math.max(
          0,
          scrollPositionRef.current - scrollAmount
        );
      } else if (direction === "next") {
        scrollPositionRef.current = Math.min(
          maxScroll,
          scrollPositionRef.current + scrollAmount
        );
      }

      container.scrollTo({
        left: scrollPositionRef.current,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network is not ok");
        }

        const details = await response.json();
        console.log("details ", details);
        setData(details);
      } catch (error) {
        console.log("error aya bhaishab ", error);
      }
    };
    fetchProductData();
  }, []);

  console.log("data ", data);
  return (
    <div className="sm:mx-auto sm:w-[85%] md:w-[85%] lg:w-[50%] xl:w-[85%] relative p-[5rem]">
      <div className="flex flex-row justify-between">
        <div className="flex w-fit   flex-col justify-start text-left gap-2">
          <p className=" w-fit font-syne text-black text-6xl  pl-6 font-bold">
            New products
          </p>
          <div className="">
            <img src={blackStar} className="w-[500px]" />
          </div>
        </div>
        {/* right side buttons for forward and backward */}
        <div className={`flex flex-row gap-10 `}>
          <button onClick={() => productScroll("back")}>
            <MdArrowRightAlt className=" rotate-180 text-6xl font-extralight" />
          </button>
          <button onClick={() => productScroll("next")}>
            <MdArrowRightAlt className="text-6xl " />
          </button>
        </div>
      </div>
      <div className="w-full relative  flex flex-row  p-20">
        {/* options */}
        <div className=" relative left-20">
          <ul className="flex flex-col gap-10 text-2xl text-black font-sans">
            <li className="transition-all duration-200  hover:ease-out hover:scale-125 hover:font-semibold">
              Apparel
            </li>
            <li className="transition-all duration-200 hover:ease-out hover:scale-125 hover:font-semibold">
              Accessories
            </li>
            <li className="transition-all duration-200 hover:ease-out hover:scale-125 hover:font-semibold">
              Best sellers
            </li>
            <li className="transition-all duration-200 hover:ease-out hover:scale-125 hover:font-semibold">
              50% off
            </li>
          </ul>
        </div>
        {/* show cards */}
        <div
          className={`flex flex-row gap-5  overflow-hidden px-20 relative -right-[20rem]  `}
          ref={containerRef}
        >
          {data.map((data) => {
            return (
              <div>
                <Card key={data.id} data={data} />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
