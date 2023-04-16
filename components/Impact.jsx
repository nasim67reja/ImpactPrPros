import React from "react";
import Layout from "./Layout";

const Impact = () => {
  return (
    <div
      data-aos="fade-up"
      id="impact"
      className="bg-black  py-[8rem] md:py-[10rem] text-white"
    >
      <Layout>
        <h2 className=" text-[4rem] md:text-[4.8rem] mb-[3.5rem] md:mb-[5rem] font-bold  text-center">
          Why Impact PR Pros
        </h2>
        <div className="flex justify-between gap-[10rem] flex-wrap sm:flex-nowrap">
          {/* 1 */}
          <div>
            <h3 className="font-bold  mb-[3rem] flex justify-center items-center">
              <p className="relative  w-fit pb-6">
                Social Proof
                <span className="w-[40px] h-[2px] bg-white block absolute bottom-0 left-[30%]"></span>
              </p>
            </h3>
            <p className="text-[16px] leading-[1.5]">
              You will be able to put “As seen on Forbes, GQ, CNN, etc” on your
              website and social media profiles. This is a huge boost in social
              proof which can lead to more sales.
            </p>
          </div>
          {/* 2 */}

          <div>
            <h3 className="font-bold  mb-[3rem] flex justify-center items-center">
              <p className="relative  w-fit pb-6">
                SEO
                <span className="w-[40px] h-[2px] bg-white block absolute bottom-0 left-[30%] translate-x-[-1.5rem]"></span>
              </p>
            </h3>
            <p className="text-[16px] leading-[1.5]">
              When someone ‘Googles’ your name what do they see? You can control
              your search results by leveraging pr placements. This is crucial
              in any marketing or branding strategy.
            </p>
          </div>

          {/* 3 */}

          <div>
            <h3 className="font-bold  mb-[3rem] flex justify-center items-center">
              <p className="relative  w-fit pb-6">
                Verification
                <span className="w-[40px] h-[2px] bg-white block absolute bottom-0 left-[30%]"></span>
              </p>
            </h3>
            <p className="text-[16px] leading-[1.5]">
              You need the ‘right’ press to get verified on Instagram, Facebook,
              Twitter, Tik Tok, and YouTube. We cannot only guarantee you press,
              but can also assist with verification.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Impact;
