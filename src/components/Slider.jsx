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
  
  const CustomRightArrow = ({ onClick }) => {
    return <button onClick={onClick} />;
  };
  <Carousel customRightArrow={<CustomRightArrow />} />;

  return (
    <div className="overflow-hidden">
      {/* Top Carousel Section */}
      <div className="flex items-center justify-between">
        <div></div>
        <BgCarousel />
      </div>
      
      {/* Overview Section */}
      <div className="bg-gradient-to-b from-[#3C805D] to-[#6BE6A8] h-[574px] -mt-32 flex justify-center items-center md:justify-start md:h-auto">
        <div className="p-8 md:p-16 lg:p-32 flex flex-col items-start gap-5 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-semibold">Overview</p>
          <p className="w-full md:w-[428px] font-semibold text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Vector Image */}
      <div className="w-full">
        <Image src={Vector2} alt="image" className="w-full transition-all duration-300" />
      </div>

      {/* Color Selection and Featured Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:justify-evenly px-4 py-10 lg:px-0">
        {/* Color Selection */}
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:-mt-32">
          <div className="flex flex-col gap-3">
            <div className={`${color} w-full h-[200px] md:w-[408px] md:h-[400px] rounded-2xl`}></div>
            <div className="flex items-center gap-4">
              {colors.slice(4, 7).map((item, index) => (
                <div
                  key={index}
                  className={`${item.title} h-[80px] w-[80px] md:h-[120px] md:w-[120px] rounded-3xl cursor-pointer transition-all duration-300 ${
                    color === item.title ? "border-4 md:border-8 border-black" : ""
                  }`}
                  onClick={() => setColor(item.title)}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {colors.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className={`${item.title} h-[80px] w-[80px] md:h-[120px] md:w-[120px] rounded-3xl cursor-pointer transition-all duration-300 ${
                  color === item.title ? "border-4 md:border-8 border-black" : ""
                }`}
                onClick={() => setColor(item.title)}
              ></div>
            ))}
          </div>
        </div>

        {/* Collection Featured Section */}
        <div className="w-full lg:w-[496px] h-auto flex flex-col gap-4 px-5 text-center lg:text-left lg:-mt-10">
          <p className="text-2xl md:text-3xl font-semibold">Collection Featured</p>
          <p className="font-semibold text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
