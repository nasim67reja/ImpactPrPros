import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Button from "./reuse/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-[#fff] py-[0.4rem]">
        <div className="container ">
          <div className="flex justify-between items-center bg-white">
            <div className="center gap-[1rem] md:gap-[2rem]">
              <img src="images/location.svg" alt="location svg" />
              <p className="text-[10px] md:text-[13px] #5a5a5a  leading-[1.4]">
                Impact PR PROS franchise 3225, Se Habla Espanol
              </p>
            </div>
            <div className="center gap-[1rem] md:gap-[2rem]">
              <img src="images/phone.svg" alt="phone icon svg" />
              <p className="text-[12px] md:text-[16px] text-[#242261] leading-[1.4]">
                <span className="text-[10px] md:text-[13px]">
                  Impact PR PROS{" "}
                </span>
                <span className=" ml-[1rem] font-bold"> 7322980900</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222A2E]">
        <div className="container">
          <div className="flex justify-between items-center py-[1.4rem]">
            <div>
              <Image src="/image/logo.png" alt="logo" width={114} height={19} />
            </div>

            {/* large Screen */}
            <nav className="hidden md:block ">
              <ul className="flex items-center gap-[5rem] text-white ">
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all text-[16px] md:text-[17px]">
                  <a href="#services">Services</a>
                </li>
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all text-[16px] md:text-[17px]">
                  <a href="#impact">Why Us</a>
                </li>
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all text-[16px] md:text-[17px]">
                  <a href="#featured">Featured</a>
                </li>
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all text-[16px] md:text-[17px]">
                  <a href="#contactUs">Contact Us</a>
                </li>

                <li>
                  <a href="#contactUs">
                    <Button text="Get Service" />
                  </a>
                </li>
              </ul>
            </nav>

            {/* Small Screen */}

            <nav className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
              <ul className="flex flex-col items-center gap-[2.5rem]   absolute z-10 w-screen left-0 top-0 bg-[#222A2E] pt-[3rem] pb-[10rem] shadow-lg text-white">
                <li className="mb-[6rem]">
                  <Image
                    src="/image/logo.png"
                    alt="logo"
                    width={114}
                    height={19}
                  />
                </li>
                <li className="hover:opacity-75 transition-all text-[15px]">
                  <a href="#services" onClick={toggleMenu}>
                    Services
                  </a>
                </li>
                <li className="hover:opacity-75 transition-all text-[15px]">
                  <a href="#impact" onClick={toggleMenu}>
                    Why Us
                  </a>
                </li>
                <li className="hover:opacity-75 transition-all text-[15px] ">
                  <a href="#featured" onClick={toggleMenu}>
                    Featured
                  </a>
                </li>
                <li className="hover:opacity-75 transition-all text-[15px]">
                  <a href="#contactUs" onClick={toggleMenu}>
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="#contactUs" onClick={toggleMenu}>
                    <Button text="Get Service" />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="md:hidden  ">
              <button
                className=" absolute translate-x-[-50%] translate-y-[-50%] "
                style={{ zIndex: "10" }}
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <HiOutlineX className="text-white" />
                ) : (
                  <HiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
