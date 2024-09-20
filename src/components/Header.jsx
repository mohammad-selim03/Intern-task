import { searchIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";



const Header = () => {
    const menus = [
        {title:"home", path:'/'},
        {title:"event", path:'/event'},
        {title:"contact", path:'/contact'},
        {title:"blog", path:'/blog'},
    ]
  return (
    <div className="flex items-center justify-between  px-2 md:px-16 bg-[#363636] text-white h-[101px]  border-b-black">
        <div className="flex items-center gap-20">
            {
                menus?.map((menu, index) => (
                    <Link key={index} href={menu?.path} className="flex items-center gap-4 capitalize text-gray-200">{menu?.title} <IoIosArrowDown className="text-gray-300"/></Link>
                ))
            }
        </div>
        <div className="relative">
            <input type="text" placeholder="Search" className="w-[298px] h-11 px-5 outline-none rounded-3xl text-gray-600 text-lg" />
            <div className="absolute top-1 cursor-pointer right-4 text-black text-2xl"><Image 
            src={searchIcon} alt="search-icon" /></div>
        </div>
    </div>

  )
}

export default Header