"use client";
import BmLogo from "@/assets/BmLogo";
import Magnet from "@/components/bits/Magnet";
import CountdownTimer from "@/components/CountDown";
import BubbleText from "@/components/hoverdev/BubbleText";
import axios from "axios";
import React, { useState, useEffect } from "react";

const page = () => {
  const [posts, setPosts] = useState([]);
  const [isActive, setIsActive] = useState(true); // true -> hisoblayapti, false -> tugagan
  const [classData] = useState({
    5: 36,
    6: 36,
    7: 30,
    8: 30,
    9: 30,
  });

  // 🔁 fetchPosts ni tashqariga olib chiqamiz
  const fetchPosts = async () => {
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
  };

  const AddNewStudent = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      full_name: formData.get("name"),
      school: formData.get("school"),
      group: formData.get("class"),
      phone_number: formData.get("phone"),
    };

    try {
      if (data.full_name.length < 3) {
        alert("Ismni to'liq kiriting!");
        return;
      }
      if (!data.group) {
        alert("Sinfni tanlang!");
        return;
      }
      if (!data.phone_number || data.phone_number.length < 13) {
        alert("Telefon raqamini kiriting!");
        return;
      }

      let res = await axios.post(
        "https://bmmatholim.pythonanywhere.com/contact/",
        data
      );
      if (res.status === 201) {
        alert("Muvaffaqiyatli yuborildi!");
        e.target.reset();
        fetchPosts(); // 🟢 POST'dan keyin statistika yangilanadi
      }
    } catch (error) {
      console.error("Yuborishda xatolik:", error);
      alert("Bu telefon raqam bilan ro'yhatdan o'tilgan!");
      e.target.reset();
    }
  };

  useEffect(() => {
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
            Matematika Musobaqasi
          </BubbleText>

          <CountdownTimer isActive={isActive} setIsActive={setIsActive} />
        </div>

        <article className="mt-10 grid grid-cols-12 gap-5 md:gap-10 lg:gap-10 xl:gap-2 2xl:items-center pb-10 lg:pb-2">
          <form
            onSubmit={AddNewStudent}
            className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3"
          >
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
                Maktabingiz
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
                Sinfingiz
              </label>
              <select
                name="class"
                type="text"
                className="p-2 px-4 w-full mt-1  bg-transparent border border-slate-800 rounded text-sm  text-slate-500  autofill:bg-transparent "
              >
                <option value="">Sinfni tanlang</option>
                {posts?.map((item) => {
                  return (
                    <option
                      key={item?.class_number}
                      value={item?.class_number}
                      className={`${
                        item?.aplications_count >= classData[item?.class_number]
                          ? "hidden"
                          : ""
                      }`}
                      disabled={
                        item?.aplications_count >= classData[item?.class_number]
                      }
                    >
                      {item?.class_number}-sinf
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="name" className="text-white text-sm font-light ">
                Telefon raqamingiz
              </label>
              <input
                name="phone"
                type="text"
                placeholder="+998 "
                defaultValue={"+998"}
                maxLength={13}
                className="p-2 px-4 w-full mt-1  bg-transparent border border-slate-800 rounded text-sm  text-white autofill:bg-transparent "
              />
            </div>
            <button
              disabled={!isActive}
              className="backdrop-blur-3xl   border border-slate-700 p-3 rounded-md mt-10 w-full text-white hover:scale-95 active:scale-95 duration-300"
            >
              {isActive ? "Ro'yhatdan o'tish" : "vaqt tugadi"}
            </button>
          </form>
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
            <h1 className="text-xl font-medium  text-white">Statistika</h1>
            {posts.length == 0 ? (
              <p className="text-gray-300 mt-4">Yuklanmoqda...</p>
            ) : (
              posts?.map((item) => {
                return (
                  <div
                    data-aos-duration={`${item?.class_number * 1000}`}
                    data-aos="fade-up"
                    key={item?.class_number}
                    className="mt-5 border-b border-slate-700 p-1 flex items-center justify-between"
                  >
                    <p className="text-white ">{item?.class_number}-sinf</p>
                    <p className="text-white">
                      {item?.aplications_count} /{" "}
                      {classData[item?.class_number]}
                    </p>
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
