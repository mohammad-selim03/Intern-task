"use client";
import { user1, user2, user3, user4 } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

const Discover = () => {
  const categories = [
    { title: "all categories", path: "/all-categories" },
    { title: "art", path: "/art" },
    { title: "celebrities", path: "/celebrities" },
    { title: "gaming", path: "/gaming" },
    { title: "sport", path: "/sport" },
    { title: "music", path: "/music" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].title);

  const data = [
    {
      title: "Art stuff",
      titleColor: "#9747FF",
      amount: "598 TK",
      bgColorOne: "#DED4F8",
      bgColorTwo: "#BE92FB",
      people: [
        { name: "Person 1", avatar: user1 },
        { name: "Person 2", avatar: user2 },
        { name: "Person 3", avatar: user3 },
        { name: "Person 4", avatar: user4 },
      ],
      status: {
        button1: {
          label: "DSVBD",
          color1: "#9747FF",
          color2: "#651BC6",
        },
        button2: {
          label: "DSVBD",
          color1: "#26DBDB",
          color2: "#A0FCD9",
        },
      },
      count: {
        available: 1,
        total: 9,
      },
    },
    {
      title: "ABCD",
      titleColor: "#047439",
      amount: "777 TK",
      bgColorOne: "#0FA958",
      bgColorTwo: "#94FFE6",
      people: [
        { name: "Person 1", avatar: user1 },
        { name: "Person 2", avatar: user2 },
        { name: "Person 3", avatar: user3 },
        { name: "Person 4", avatar: user4 },
      ],
      status: {
        button1: {
          label: "DSVBD",
          color1: "#9747FF",
          color2: "#651BC6",
        },
        button2: {
          label: "DSVBD",
          color1: "#6D8BB4",
          color2: "#016EFF",
        },
      },
      count: {
        available: 1,
        total: 19,
      },
    },
    {
      title: "EFGH",
      titleColor: "#000000",
      amount: "58 TK",
      bgColorOne: "#2768BF",
      bgColorTwo: "#E6E6E6",
      people: [
        { name: "Person 1", avatar: user1 },
        { name: "Person 2", avatar: user2 },
        { name: "Person 3", avatar: user3 },
        { name: "Person 4", avatar: user4 },
      ],
      status: {
        button1: {
          label: "DSVBD",
          color1: "#26DBDB",
          color2: "#A0FCD9",
        },
        button2: {
          label: "DSVBD",
          color1: "#9747FF",
          color2: "#E76666",
        },
      },
      count: {
        available: 1,
        total: 64,
      },
    },
    {
      title: "XYZ",
      titleColor: "#000000",
      amount: "0",
      bgColorOne: "#4C2F72",
      bgColorTwo: "#BE92FB",
      people: [
        { name: "Person 1", avatar: user1 },
        { name: "Person 2", avatar: user2 },
        { name: "Person 3", avatar: user3 },
        { name: "Person 4", avatar: user4 },
      ],
      status: {
        button1: {
          label: "DSVBD",
          color1: "#26DBDB",
          color2: "#A0FCD9",
        },
        button2: {
          label: "DSVBD",
          color1: "#9747FF",
          color2: "#E76666",
        },
      },
      count: {
        available: 1,
        total: 6,
      },
    },
  ];

  return (
    <div className="px-20 mt-32">
      <div>
        <h2 className="text-3xl font-extrabold uppercase mb-10">
          Discover More
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {categories?.map((category, index) => (
              <button
                key={index}
                className={`rounded-2xl capitalize gap-5 px-3 py-1 font-semibold ${
                  selectedCategory === category?.title
                    ? "bg-[#3F05D4] text-white"
                    : "bg-slate-200"
                }`}
                onClick={() => setSelectedCategory(category?.title)}
              >
                {category?.title}
              </button>
            ))}
          </div>
          <div className="bg-slate-200 flex items-center gap-2 px-4 py-1 rounded-2xl text-[#4000FF] font-semibold cursor-pointer hover:bg-[#4000FF] hover:text-white translate-full duration-300">
            <IoFilterSharp /> All Filters
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-8">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-[291.53px] h-[402.74px] bg-white shadow-xl border border-gray-100 rounded-2xl p-4"
            >
              <div
                className="w-[259.52px] h-[211.91px] rounded-xl"
                style={{
                  background: `linear-gradient(to right, ${item.bgColorOne}, ${item.bgColorTwo})`,
                }}
              ></div>

              <div className="flex -mt-8 px-4">
                {item.people.map((person, idx) => (
                  <Image
                    key={idx}
                    src={person.avatar}
                    alt={person.name}
                    className={`rounded-full border-2 border-white ${
                      idx !== 0 ? "-ml-3" : ""
                    }`}
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              {/* Card Content start here */}
              <div className="flex  flex-col justify-between">
                <h2
                  className="text-xl font-bold px-2 mt-4"
                  style={{ color: item.titleColor }}
                >
                  {item.title}
                </h2>
                <div className="flex items-center justify-between px-2 mt-5 mb-5 text-gray-500">
                  <span
                    style={{ color: item.titleColor }}
                    className="font-semibold"
                  >
                    {item.amount}
                  </span>
                  <span>
                    {item.count.available} of {item.count.total}
                  </span>
                </div>

                <div className="flex items-center justify-between px-2 mt-2">
                  <button
                    className="py-2 px-4 rounded-3xl text-white"
                    style={{
                      background: `linear-gradient(to right, ${item.status.button1.color1}, ${item.status.button1.color2})`,
                    }}
                  >
                    {item.status.button1.label}
                  </button>
                  <button
                    className="py-2 px-4 rounded-3xl text-white"
                    style={{
                      background: `linear-gradient(to right, ${item.status.button2.color1}, ${item.status.button2.color2})`,
                    }}
                  >
                    {item.status.button2.label}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* map twice for same code, we can do it with extend data and slice it for first 4 items and map it to display. and other is slice last 4 items and maping it..  */}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-8 mb-20 ">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-[291.53px] h-[402.74px] bg-white shadow-xl border border-gray-300 rounded-2xl p-4"
            >
              <div
                className="w-[259.52px] h-[211.91px] rounded-xl"
                style={{
                  background: `linear-gradient(to right, ${item.bgColorOne}, ${item.bgColorTwo})`,
                }}
              ></div>

              <div className="flex -mt-8 px-4">
                {item.people.map((person, idx) => (
                  <Image
                    key={idx}
                    src={person.avatar}
                    alt={person.name}
                    className={`rounded-full border-2 border-white ${
                      idx !== 0 ? "-ml-3" : ""
                    }`}
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <div className="flex  flex-col justify-between">
                <h2
                  className="text-xl font-bold px-2 mt-4"
                  style={{ color: item.titleColor }}
                >
                  {item.title}
                </h2>
                <div className="flex items-center justify-between px-2 mt-5 mb-5 text-gray-500">
                  <span
                    style={{ color: item.titleColor }}
                    className="font-semibold"
                  >
                    {item.amount}
                  </span>
                  <span>
                    {item.count.available} of {item.count.total}
                  </span>
                </div>

                <div className="flex items-center justify-between px-2 mt-2">
                  <button
                    className="py-2 px-4 rounded-3xl text-white"
                    style={{
                      background: `linear-gradient(to right, ${item.status.button1.color1}, ${item.status.button1.color2})`,
                    }}
                  >
                    {item.status.button1.label}
                  </button>
                  <button
                    className="py-2 px-4 rounded-3xl text-white"
                    style={{
                      background: `linear-gradient(to right, ${item.status.button2.color1}, ${item.status.button2.color2})`,
                    }}
                  >
                    {item.status.button2.label}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
