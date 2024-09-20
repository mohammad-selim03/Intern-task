import { wared } from "@/assets";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="mt-52">
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="w-full md:w-[596px] h-full  md:h-[259px] px-3 md:px-0">
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in qui officia deserunt mollit anim id est laborum.
          </p>
          <div className=" mt-5 flex justify-center font-semibold">
            <button className="border-2 mb-5 md:mb-0 border-[#4000FF] w-[163px] h-[58px] text-[#4000FF]  rounded-3xl hover:bg-[#4000FF] transition-all duration-300 hover:text-white">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <div className="w-[395px] h-[395px] rounded-2xl relative -ml-16 md:-ml-0">
            <div className="absolute inset-0 h-[300px] bg-[#31096A] rounded-2xl  transform translate-x-16 top-12 "></div>
            <div className="absolute inset-0 h-[350px] bg-[#980FA7] rounded-2xl  transform translate-x-8 top-6"></div>
            <div className="absolute inset-0  bg-[#1F3B68] rounded-2xl  transform "></div>
            <div className="absolute top-5 left-10 text-white">
              <h2 className="text-3xl font-semibold italic">Lorem Ipsum</h2>
              <div className="flex items-center  gap-1">
                <p>
                  <Image src={wared} alt="img" className="w-10 h-10 mt-2" />
                </p>
                <p className="text-xs">Wade Warren</p>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 bg-gradient-to-l from-slate-300/20 to-slate-300/50 w-[316px] h-[71px] rounded-xl p-3 font-semibold text-white">
              <p>Lawrance Stroll</p>{" "}
              <p className="text-xs">Hegifueshho dhfsui foiehhsio</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Explore;
