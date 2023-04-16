import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import { truncateString } from "./reuse/TruncateString";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div
      data-aos="fade-down"
      className="max-w-sm-[42rem] xl:max-w-sm rounded overflow-hidden shadow-lg  mb-[6rem] xl:mb-0 h-[600px] "
    >
      <img className="w-full lg:h-[205px] " src={imageSrc} alt={title} />

      <div className="px-4 py-[2rem]">
        <div className="font-bold text-[2.4rem] md:text-[2rem] leading-[1.2] my-[1rem] text-center">
          {title}
        </div>
        <p className="text-gray-500 text-[15px] leading-[1.6] text-justify mt-[2rem]">
          {/* {truncateString(description, 200)} */}
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="max-w-[145rem] px-[3rem] mx-auto">
      <div className="py-8 my-[8rem] md:my-[10rem]" id="services">
        <h2 className="text-[4rem] md:text-[4.8rem] mb-[3rem] md:mb-[4rem] font-bold  text-center">
          Our Services
        </h2>
        <p className="text-[2rem] mb-[2.5rem] md:mb-[3rem] text-center">
          PRESS AND BRANDING
        </p>
        <div className="flex   flex-wrap lg:flex-nowrap   ">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-center justify-center"
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

const cards = [
  {
    imageSrc: "/image/logos.png",
    title: <>Press Releases</>,
    description:
      "Press releases are a powerful tool for generating publicity, increasing brand visibility, and attracting potential customers or investors, while also providing valuable information to journalists. Be featured in major Publications Guaranteed!",
  },
  {
    imageSrc: "/image/socialMedia.jpeg",
    title: <>Social Media</>,
    description:
      "Social media is a powerful tool for connecting with and engaging your audience, establishing your brand as a thought leader, and monitoring customer feedback. It's a must-have for any brand in today's digital age.",
  },
  {
    imageSrc: "/image/live-events-promotions.jpg",
    title: <>Live Events & Promotions</>,
    description:
      "Custom tent/booth design, banners, step and repeat walls, digital advertising, logos, promotional models can enhance brand visibility and create a memorable impression at events, increasing brand recognition and engagement with attendees.",
  },
  {
    imageSrc: "/image/celebrityImage.jpg",
    title: "Celebrity Endorsements",
    description:
      "Celebrity endorsements can boost brand credibility, visibility, and sales, but must be carefully planned to ensure authenticity and alignment between the brand and the celebrity. We have access to the A,B and C class entertainment industry. We can pair you and your business with the perfect celebrity match..",
  },
  {
    imageSrc: "/image/tv-image-podcast.jpg",
    title: "TV, Blog & Podcasts",
    description:
      "Being featured on TV shows, vlogs, and podcasts is a powerful way for clients to reach new audiences, showcase their expertise, and engage with a wider audience, but requires identifying the right platforms, pitching relevant topics, and building relationships with media contacts.",
  },
];
