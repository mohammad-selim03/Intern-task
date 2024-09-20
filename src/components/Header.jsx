"use client";
import { useState } from "react";
import { searchIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // state we use for menu button toggle.

  const menus = [
    { title: "home", path: "/" },
    { title: "event", path: "/event" },
    { title: "contact", path: "/contact" },
    { title: "blog", path: "/blog" },
  ];

  return (
    <div className="flex items-center justify-between px-4 md:px-16 bg-[#363636] text-white h-[101px] border-b-black relative z-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold">Logo</div>{" "}
          <div className="hidden md:flex items-center gap-8">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.path}
                className="flex items-center gap-4 capitalize text-gray-200"
              >
                {menu.title}
                <IoIosArrowDown className="text-gray-300" />
              </Link>
            ))}
          </div>
        </div>

        <div className="md:hidden ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      <div className="relative hidden md:flex">
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] lg:w-[298px] h-11 px-5 outline-none rounded-3xl text-gray-600 text-lg"
        />
        <div className="absolute top-1 cursor-pointer right-4 text-black text-2xl">
          <Image src={searchIcon} alt="search-icon" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute inset-0 w-full h-[400px] mt-20 bg-[#363636] z-50 flex flex-col items-center justify-center gap-8 py-8 transition-transform duration-300">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className="capitalize text-gray-200 text-2xl hover:text-bold hover:underline transition-all duration-300"
            >
              {menu.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
