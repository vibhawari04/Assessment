import React, { useState } from "react";
import underline from "../../assets/underline.png";
import menu from "../../assets/menu.png";
import cross from "../../assets/cross.png";
import { Link } from "react-router-dom";

const Navbar = ({ openMenu, setOpenMenu }) => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  const [subSectionOn, setSubSectionOn] = useState(false);

  return (
    <div className="absolute top-0 w-full mt-5 flex flex-col justify-center">
      <div className="mx-4  sm:mx-auto sm:w-[85%] md:w-[85%] lg:w-[50%] xl:w-[85%]  flex flex-row sm:flex-row gap-4 sm:gap-20 justify-between px-4 items-center">
        <p className="font-poppins text-4xl text-white">ShopKart</p>
        <div className="hidden sm:flex sm:flex-row sm:gap-5 sm:font-sans sm:font-bold sm:text-white sm:text-medium ">
          <p>WISHLIST (0)</p>
          <p>BAG (0)</p>
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-white  block sm:hidden "
        >
          {openMenu ? <img src={cross} /> : <img src={menu} />}
        </button>
      </div>
      <div>
        <img
          src={underline}
          className="mx-auto mx-4 px-2 sm:mx-auto sm:w-[85%] md:w-[75%] lg:w-[50%] xl:w-[85%] "
        />
      </div>

      {/* rough */}
      <div
        className={`md:flex md:items-center md:w-[75%] lg:w-[50%]  justify-start px-10  xl:w-[85%] md:mx-auto ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <ul
          className={`${
            openMenu ? "block flex flex-col gap-10" : "hidden"
          } sm:flex sm:flex-row  justify-between relative gap-x-20  md:w-[75%] lg:w-[50%] items-center `}
        >
          {navbar.map((section) => (
            <li
              key={section.id}
              className="text-white text-2xl font-bold hover:font-light transition-all duration-100 hover:border-b font-sans"
            >
              {section.id === "product" ? (
                <div>
                  <Link
                    to={`/${section.id}`}
                    onClick={() => setSubSectionOn(!subSectionOn)}
                  >
                    {section.name}
                  </Link>
                  {/* Render sub-sections for the "product" section */}
                  <div
                    className={`absolute  mt-2 ${
                      subSectionOn ? "block top-10" : "hidden"
                    } `}
                  >
                    {" "}
                    <ul
                      className={`${
                        subSectionOn ? "block" : "hidden"
                      }   flex flex-col gap-5 font-light `}
                    >
                      {section?.child.map((subsection) => (
                        <li key={subsection.id} className="text-xl">
                          <Link to={`/${section.id}/${subsection.id}`}>
                            {subsection.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to={`/${section.id}`}>{section.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* end */}

      {/* <div className="text-white mt-20">helo</div> */}
    </div>
  );
};

export default Navbar;
