"use client";
import Image from "next/image";
import BgCarousel from "./Carousel";
import { Vector2 } from "@/assets";
import { useState } from "react";
import Carousel from "react-multi-carousel";

const Slider = () => {
  const colors = [
    { title: "bg-[#0FA958]" },
    { title: "bg-[#BE92FB]" },
    { title: "bg-[#FFACAC]" },
    { title: "bg-[#DB4126]" },
    { title: "bg-[#2E4E3E]" },
    { title: "bg-[#26DBDB]" },
    { title: "bg-[#B126DB]" },
  ];

  const [color, setColor] = useState(colors[0].title);
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  <Carousel customRightArrow={<CustomRightArrow />} />;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div></div>
        <BgCarousel />
      </div>
      <div className="bg-gradient-to-b from-[#3C805D] to-[#6BE6A8] h-[574px] -mt-32">
        <div className="p-32 flex flex-col gap-5">
          <p className="text-3xl font-semibold">Overview</p>
          <p className="w-[428px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div>
        <Image src={Vector2} alt="image" className="w-full transition-all duration-300" />
      </div>

      <div className="flex  justify-evenly">
        <div className="flex gap-2 -mt-60">
          <div className="flex flex-col gap-3">
            <div className={`${color} w-[408px] h-[400px] rounded-2xl`}></div>
            <div className="flex items-center gap-4">
              {colors?.slice(4, 7).map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.title
                  } h-[120px] w-[120px] rounded-3xl cursor-pointer ${
                    color === item.title ? "border-8 border-black" : ""
                  }`}
                  onClick={() => setColor(item.title)}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              {colors.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.title
                  } h-[120px] w-[120px] rounded-3xl cursor-pointer transition-all duration-300 ${
                    color === item.title ? "border-8 border-black" : ""
                  }`}
                  onClick={() => setColor(item.title)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[496px] h-[253px] flex flex-col gap-4 px-5 -mt-10">
          <p className="text-3xl font-semibold">Collection Featured</p>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit, sed
            do eiusmod tet ut <br /> labore et dolore magna aliqrit in vol{" "}
            <br /> uptate velit esse cillumsunt in culpa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
