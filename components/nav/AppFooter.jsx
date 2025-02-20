import React from "react";
import Link from "next/link";
import BmLogo from "@/assets/BmLogo";
const AppFooter = () => {
  return (
    <>
      <footer className=" text-white py-12 bg-black">
        <div className="container px-4 mx-auto flex justify-between flex-wrap gap-5">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Link
              href={"/"}
              className="text-lg font-semibold flex flex-col md:flex-row items-center gap-2 uppercase cursor-pointer select-none"
            >
              <BmLogo className={"w-8 h-8"} />
              Boborahim Mashrab
            </Link>
          </div>

          <div className="flex justify-center gap-4 w-full md:w-auto">
            <Link
              href="#"
              className="text-gray-400 hover:text-white duration-300"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white duration-300"
            >
              Telegram
            </Link>
          </div>
        </div>
        <div className=" mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; 2025{" "}
            <a
              target="_blank"
              href="https://github.com/JavohirBozorboyev"
              className="underline"
            >
              Bozorboyev Javohir
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
