import React from "react";
import Link from "next/link";
import BmLogo from "@/assets/BmLogo";

const AppNavbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container px-4 mx-auto  flex  justify-between py-3">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary  text-white flex items-center gap-2 cursor-pointer uppercase"
          >
            <BmLogo className={"w-10 h-10"} />
            BM-Maktab
          </Link>
          <div className="flex items-center">
            <div className="hidden md:block ">
              <div className="flex items-center space-x-8">
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Resources
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Community
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-tr from-slate-600 to-cyan-950 px-4 py-2 text-white capitalize rounded-lg hover:scale-95 duration-300">
              get started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
