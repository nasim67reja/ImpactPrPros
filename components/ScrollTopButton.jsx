import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={` text-black fixed cursor-pointer bottom-8 right-8 p-3 rounded-full ${
        showButton ? "opacity-100" : "opacity-0"
      } transition-opacity`}
      onClick={handleClick}
    >
      <div className="p-4 border-2 border-gray-400 rounded-full bg-white">
        <FaArrowUp className="text-gray-600 text-[2rem]" />
      </div>
    </div>
  );
};

export default ScrollTopButton;
