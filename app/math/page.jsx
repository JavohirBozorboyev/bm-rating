import BmLogo from "@/assets/BmLogo";
import Magnet from "@/components/bits/Magnet";
import CountdownTimer from "@/components/CountDown";
import { ShinyButton } from "@/components/magic/ShinyButton";
import React from "react";

const page = () => {
  return (
    <div className=" relative overflow-hidden flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen ">
      <div className="container px-4 mx-auto pt-20 ">
        <article>
          <h1 className="text-2xl 2xl:text-3xl text-center mb-4 text-white uppercase font-bold">
            Ro'yhatga olishgacha
          </h1>
          <CountdownTimer />
        </article>
        {/* <div className="flex justify-center absolute  right-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Magnet padding={1000} disabled={false} magnetStrength={50}>
            <BmLogo
              className={
                "w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] fill-gray-900 opacity-25"
              }
            />
          </Magnet>
        </div> */}
        <article className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          <div>
            <h1 className="text-xl font-medium  text-white">
              Ro'yhatdan O'tish
            </h1>
            <div className="mt-5">
              <label htmlFor="name" className="text-white text-sm font-light ">
                Ism Familiya
              </label>
              <input
                name="name"
                type="text"
                placeholder="Ism Familiya"
                className="p-2 px-4 w-full mt-1  bg-transparent border border-slate-800 rounded text-sm  text-white autofill:bg-transparent "
              />
            </div>
            <div className="mt-5">
              <label htmlFor="name" className="text-white text-sm font-light ">
                Maktab
              </label>
              <input
                name="name"
                type="text"
                placeholder="Maktab"
                className="p-2 px-4 w-full mt-1  bg-transparent border border-slate-800 rounded text-sm  text-white autofill:bg-transparent "
              />
            </div>
            <div className="mt-5">
              <label htmlFor="name" className="text-white text-sm font-light ">
                Sinf
              </label>
              <select
                name="name"
                type="text"
                className="p-2 px-4 w-full mt-1  bg-transparent border border-slate-800 rounded text-sm  text-slate-500  autofill:bg-transparent "
              >
                <option value="">Sinfni tanlang</option>
                <option value="1">1-Sinf</option>
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="name" className="text-white text-sm font-light ">
                Telefon raqam
              </label>
              <input
                name="name"
                type="text"
                placeholder="+998 "
                defaultValue={"+998"}
                maxLength={13}
                className="p-2 px-4 w-full mt-1  bg-transparent border border-slate-800 rounded text-sm  text-white autofill:bg-transparent "
              />
            </div>
            <button className="backdrop-blur-3xl  border border-slate-700 p-3 rounded-md mt-10 w-full text-white active:scale-95 duration-300">
              Ro'yhatdan o'tish
            </button>
          </div>
          <div>
            <Magnet padding={1000} disabled={false} magnetStrength={50}>
              <BmLogo
                className={
                  "w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]  fill-slate-400 opacity-25"
                }
              />
            </Magnet>
          </div>
          <div>
            <h1 className="text-xl font-medium  text-white">Statistika</h1>
            <div className="mt-5 border-b border-slate-700 p-1 flex items-center justify-between">
              <p className="text-white ">1-sinf</p>
              <p className="text-white">24 / 30</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
