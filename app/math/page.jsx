"use client";
import BmLogo from "@/assets/BmLogo";
import Magnet from "@/components/bits/Magnet";
import CountdownTimer from "@/components/CountDown";
import BubbleText from "@/components/hoverdev/BubbleText";
import React, { useState, useEffect } from "react";

const page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://bmmatholim.pythonanywhere.com/statistics/"
        );
        if (!res.ok) throw new Error("Ma'lumot yuklashda xatolik!");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className=" relative overflow-hidden flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen ">
      <div className="container px-4 mx-auto pt-20 ">
        <div>
          <BubbleText
            className={
              " hidden lg:block text-3xl xl:text-6xl lg:text-center   2xl:text-7xl z-20 relative  text-slate-600 opacity-25  uppercase tracking-[3px]  "
            }
          >
            Matemetaika Musobaqasi
          </BubbleText>

          <CountdownTimer />
        </div>

        <article className="mt-10 grid grid-cols-12 gap-5 md:gap-10 lg:gap-10 xl:gap-2 2xl:items-center pb-10 lg:pb-2">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
            {/* <h1 className="text-xl font-medium  text-white">
              Ro'yhatdan O'tish
            </h1> */}
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
                name="school"
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
                name="class"
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
                name="tel"
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
          <div className="hidden lg:flex items-center justify-center lg:col-span-4 2xl:col-span-6 ">
            <Magnet padding={1000} disabled={false} magnetStrength={50}>
              <BmLogo
                className={
                  "w-96 h-96 2xl:w-[620px] 2xl:h-[620px]  fill-slate-600 opacity-25"
                }
              />
            </Magnet>
          </div>
          <div className="mt-20 md:mt-0 col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
            {posts.length == 0 ? (
              <p className="text-gray-300 mt-4">Yuklanmoqda...</p>
            ) : (
              posts?.map((item) => {
                return (
                  <div
                    key={item?.class_number}
                    className="mt-5 border-b border-slate-700 p-1 flex items-center justify-between"
                  >
                    <p className="text-white ">{item?.class_number}-sinf</p>
                    <p className="text-white">{item?.aplications_count} / 30</p>
                  </div>
                );
              })
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
