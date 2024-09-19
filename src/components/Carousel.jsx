"use client"

import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BgCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleAfterChange = (previousSlide, { currentSlide }) => {
      setActiveIndex(currentSlide);
    };
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <Carousel responsive={responsive} afterChange={handleAfterChange} className="w-[900px]  h-96 overflow-visible mt-20 z-10">
          <div
            className={`bg-[#FF9A9A] ${
              activeIndex === 0 ? "h-96" : "h-60"
            } w-52 transition-all duration-300`}
          ></div>
          <div
            className={`bg-[#CFAAFF] ${
              activeIndex === 1 ? "h-96" : "h-60"
            } w-52 transition-all duration-300`}
          ></div>
          <div
            className={`bg-[#A0FCD9] ${
              activeIndex === 2 ? "h-96" : "h-60"
            } w-52 transition-all duration-300`}
          ></div>
          <div
            className={`bg-yellow-500 ${
              activeIndex === 3 ? "h-96" : "h-60"
            } w-52 transition-all duration-300`}
          ></div>
          <div
            className={`bg-slate-500 ${
              activeIndex === 4 ? "h-96" : "h-60"
            } w-52 transition-all duration-300`}
          ></div>
          <div
            className={`bg-purple-500 ${
              activeIndex === 5 ? "h-96" : "h-60"
            } w-52 transition-all duration-300`}
          ></div>
        </Carousel>
  )
}

export default BgCarousel