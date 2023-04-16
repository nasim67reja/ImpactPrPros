import React from "react";
import Layout from "./Layout";
import backgroundImage from "../public/image/bg.png";
import Typewriter from "typewriter-effect";

export const Contact = () => {
  return (
    <div className="center  min-h-[75vh] backG " data-aos="zoom-in">
      <Layout>
        <div className="flex flex-col justify-center items-center h-fit px-[4rem] py-[5rem] text-white ">
          <h1 className="text-[4.5rem] md:text-[6rem] font-bold  text-center leading-[1.3]">
            Guaranteed PR Placement in Major
            <Typewriter
              options={{
                strings: ["Publications"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-[2.2rem] my-[4rem] text-center">
            IMPACT PR PROS will Increase Your Presence in the Media and Search
            Engines.
          </p>
          <a
            href="#contactUs"
            className="bg-blue-500 hover:bg-blue-700 text-white  py-[1.5rem] px-[5rem] rounded-full"
          >
            Contact Us
          </a>
        </div>
      </Layout>
    </div>
  );
};
