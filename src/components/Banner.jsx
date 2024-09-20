import { maleImg, menImg, Rectangle, Vector1 } from "@/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative ">
      {/* <div className="bg-[#363636] h-72 [clip-path:polygon(0%_0%,_100%_0%,_100%_60%,_50%_100%,_0_60%)] relative"></div> */}
      <div>
        <Image src={Vector1} alt="" className="w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-2xl mx-auto mt-10 md:mt-[-100px] relative z-10 px-8  ">
        <div className="bg-[#C02424] w-full h-[300px] hover:scale-125 transition-all duration-300"></div>
        <div className="bg-[#146FE8] w-full h-[260px] hover:scale-125 transition-all duration-300"></div>
        <div className="bg-[#E76666] w-full h-[300px] hover:scale-125 transition-all duration-300"></div>
        <div className="bg-[#A0FCD9] w-full h-[260px] hover:scale-125 transition-all duration-300"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mt-40 px-8">
        <div className="flex flex-col items-center gap-16">
          <div className="bg-gradient-to-r from-blue-400 to-[#1300EE] w-[274px] h-[285px] rounded-3xl relative">
            <span className="absolute top-32 right-20 font-semibold text-3xl text-white">
              Photo 1
            </span>
            <span className="absolute -bottom-8 -right-10 bg-white p-2 rounded-full">
              <Image
                src={menImg}
                alt="image"
                className="w-16 h-16 rounded-full"
              />
            </span>
          </div>
          <div className="bg-gradient-to-r from-red-400 to-[#A51D1D] w-[208px] h-[217px] rounded-3xl relative">
            <span className="absolute top-24 right-16 text-white font-semibold text-3xl">
              Photo 3
            </span>
            <span className="absolute -bottom-8 -right-10 bg-white p-2 rounded-full">
              <Image
                src={menImg}
                alt="image"
                className="w-16 h-16 rounded-full"
              />
            </span>
          </div>
        </div>

        <div className="relative">
          <Image
            src={Rectangle}
            alt="rectangle bg"
            className="w-60 h-72 rounded-3xl"
          />
          <span className="absolute top-32 right-16 font-semibold text-3xl">
            Photo 2
          </span>
          <span className="absolute -bottom-8 -right-10 bg-white p-2 rounded-full">
            <Image
              src={menImg}
              alt="image"
              className="w-16 h-16 rounded-full"
            />
          </span>
        </div>

        <div className="w-full lg:w-[469px] h-[345px] mt-16 lg:mt-0">
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e.
          </p>
          <div className="mt-5 flex justify-center lg:mx-0 font-semibold ">
            <button className=" border-2 border-[#4000FF] w-[121px] h-[52px]  text-[#4000FF] rounded-3xl hover:bg-[#4000FF] transition-all duration-300 hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
