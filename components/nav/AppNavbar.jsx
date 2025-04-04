"use client";
import React from "react";
import Link from "next/link";
import BmLogo from "@/assets/BmLogo";

const LinkData = [
  {
    title: "Asosiy Sahifa",
    link: "/",
  },
  {
    title: "Matematika Musobaqasi",
    link: "/math",
  },
];
const AppNavbar = () => {
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container px-4 mx-auto  flex  justify-between py-3">
          <div className="flex gap-1 items-center justify-between w-full md:w-auto ">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary  text-white flex items-center gap-2 cursor-pointer uppercase"
            >
              <BmLogo className={"w-10 h-10"} />
              BM-Maktab
            </Link>
            <div className="md:hidden">
              {!active ? (
                <svg
                  onClick={handleClick}
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                    fillRule="nonzero"
                  />
                </svg>
              ) : (
                <svg
                  onClick={handleClick}
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-white"
                >
                  <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
              )}
            </div>
          </div>
          <div className="flex items-center ">
            <div className="hidden md:block ">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Asosiy Sahifa
                </Link>
                {/* <Link
                  href="/rating"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Reyting
                </Link> */}
                <Link
                  href="/math"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Matematika Musobaqasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          active ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-black/90 z-40 items-center justify-center flex-col gap-8 md:hidden`}
      >
        {LinkData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-2xl text-gray-300 hover:text-white"
            onClick={handleClick}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppNavbar;
