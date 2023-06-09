import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-backg text-white py-[6rem]" data-aos="fade-up">
      <div className="container">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] lg:gap-[2rem] px-[3rem] lg:px-[1rem]  justify-items-center">
            {/* 1 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className=" center lg:block mb-[5rem]">
                  {/* <Image
                    src="/image/impactPr.png"
                    alt="logo"
                    width={147}
                    height={147}
                    className=" w-[147px] lg:w-[147px] lg:h-[147px] h-[147px]"
                  /> */}

                  <Image
                    src="/image/logo.png"
                    alt="logo"
                    width={114}
                    height={19}
                    className="translate-y-[1.8rem]"
                  />
                </div>
                <p className="text-[14px] lg:text-[15px] opacity-80 text-center lg:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  ab quo facere, explicabo voluptatum aspernatur deserunt.
                  Ullam, fuga a, dignissimos laborum fugit iste veniam possimus
                  dolor voluptas, cumque optio saepe.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex flex-col gap-[2rem] md:gap-[5rem] py-[2.5rem] opacity-80">
              <h4 className="text-center lg:text-start">CONTACT INFO</h4>
              <p className="text-[14px] lg:text-[15px]  text-center lg:text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eum
                quaerat nesciunt facere blanditiis quam
              </p>
            </div>

            {/* 3 */}

            <div className="flex flex-col  gap-[2rem] md:gap-[5rem] py-[2.5rem] opacity-80">
              <h4 className="text-center lg:text-start">USEFUL LINKS</h4>
              <p className="text-[14px] lg:text-[15px] px-[6px] md:px-[10px] lg:px-[16px] text-center lg:text-start">
                Apollo Beach, Arcadia, Auburndale, Avon Park, Bartow, Brandon,
                Bradenton, Brooksville, Clearwater, Crystal River, Dade City,
                Davenport, Dundee, Dunedin, Haines City, Holiday, Homosassa,
                Inverness,
              </p>
            </div>

            {/* 4 */}

            <div className="flex flex-col gap-[2rem] md:gap-[5rem] py-[2.5rem] opacity-80">
              <h4 className="text-center lg:text-start">SERVICE</h4>

              <ul className="text-[13px] lg:text-[15px] column-custom gap-[5px]  ">
                <li>
                  <a href="#services">Press Releases</a>
                </li>
                <li>
                  <a href="#services">Social Media</a>
                </li>

                <li>
                  <a href="#services">Live Events & Promotions</a>
                </li>

                <li>
                  <a href="#services">Celebrity Endorsements</a>
                </li>
                <li>
                  <a href="#services">TV, Blog & Podcasts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-[0.5px] border-white pt-[4rem] flex-col-reverse gap-[4rem] lg:flex-row">
          <p className="text-[14px] lg:text-[15px] opacity-80 text-center  ">
            ©2023 Impact pr pros ®All Rights Reserved.
          </p>
          <div className="center gap-[1rem]">
            <a href="https://www.facebook.com/">
              <img src="/images/facebook.svg" alt="facebook -logo" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src="/images/linkedin.svg" alt="linkedin -logo" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/images/instagram.svg" alt="instagram -logo" />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src="/images/you-tube.svg"
                alt="youtube -logo"
                className="translate-y-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
