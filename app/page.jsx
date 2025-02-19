"use client";
import BmLogo from "@/assets/BmLogo";
import CircularText from "@/components/bits/CircularText";
import CountUp from "@/components/bits/CountUp";
import Magnet from "@/components/bits/Magnet";
import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";
import Link from "next/link";
import { useRef } from "react";
import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
} from "@tabler/icons-react";

export default function Home() {
  const containerRef = useRef(null);
  return (
    <div className=" flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <header className=" container px-4 mx-auto py-24 min-h-screen grid grid-cols-12 items-center ">
        <div className=" col-span-12 lg:col-span-7 2xl:col-span-6 flex flex-col justify-between h-full gap-5 ">
          <p></p>
          <div>
            <h1 className=" text-5xl xl:text-6xl text-center lg:text-left xl:text-nowrap 2xl:text-8xl z-20 relative  text-white font-extrabold uppercase tracking-[3px] ">
              Boborahim Mashrab
            </h1>
            <h1 className=" text-4xl mt-4 xl:text-6xl text-center lg:text-left text-gray-300 font-extrabold ">
              Xususiy Maktabi
            </h1>
            <p className="mt-10 text-gray-300 xl:text-lg text-center lg:text-left ">
              Boborahim Mashrab xususiy maktabi zamonaviy sharoitlar bilan
              ta'minlangan ixtisoslashtirilgan maktab bo'lib, 1-sinfdan
              11-sinfgacha bo'lgan o'quvchilar taxsil oladi. Ixtisoslik
              yo'nalishlari matematika, informatika (I.T), ingliz tili, rus
              tili, kimyo hamda biologiya fanlari bo'lib darslar o'zbek tilida
              olib boriladi
            </p>
            <article className="flex justify-center lg:justify-start">
              <Link href={""}>
                <ShinyText className="  border border-gray-600 text-lg p-2 px-4 flex items-center gap-2 mt-8 hover:scale-105 duration-300">
                  Bog'lanish <IconArrowRight size={17} />
                </ShinyText>
              </Link>
            </article>
          </div>
          <article className="mt-10 flex gap-10 flex-wrap justify-center  lg:justify-start  ">
            <Link href={"/"}>
              <ShinyText
                text="Instagram"
                disabled={false}
                speed={3}
                className="custom-class flex items-center gap-2 b duration-200 fill-white text-xl"
              >
                <IconBrandInstagram size={30} color="#aaa" />
                Instagram
              </ShinyText>
            </Link>
            <Link href={"/"}>
              <ShinyText
                text="Instagram"
                disabled={false}
                speed={3}
                className="custom-class flex items-center gap-2 b duration-200 fill-white text-xl"
              >
                <IconBrandFacebook size={30} color="#aaa" />
                Facebook
              </ShinyText>
            </Link>
            <Link href={"/"}>
              <ShinyText
                text="Instagram"
                disabled={false}
                speed={3}
                className="custom-class flex items-center gap-2 b duration-200 fill-white text-xl"
              >
                <IconBrandTelegram size={30} color="#aaa" />
                Telegram
              </ShinyText>
            </Link>
          </article>
        </div>
        <div className="col-span-12 lg:col-span-5 2xl:col-span-6 flex justify-center lg:justify-end mt-10 lg:mt-0 ">
          <Magnet padding={1000} disabled={false} magnetStrength={30}>
            <BmLogo
              className={
                "w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] drop-shadow-2xl   fill-gray-100 2xl:fill-gray-700 hover:fill-gray-200 lg:hover:fill-gray-700/50 duration-500 "
              }
            />
          </Magnet>
        </div>
      </header>

      <div className="relative z-10">
        <div className=" relative flex justify-center items-center flex-col">
          <div className="container p-4 mx-auto flex items-center ">
            <ShinyText
              disabled={false}
              speed={3}
              className="custom-class text-3xl lg:text-5xl text-center font-bold uppercase"
            >
              Best of the best
            </ShinyText>
          </div>
          <article className="container  p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-96 backdrop-blur-sm"
              >
                <article className="absolute top-0  right-0 left-0 bottom-0 p-5 flex flex-col justify-center gap-5">
                  <h1 className="text-4xl text-center text-gray-300 font-bold">
                    2
                  </h1>
                  <h1 className="text-2xl text-center text-gray-400 ">
                    Mirzamatov Muhsinbek
                  </h1>
                  <article className="flex gap-3 items-center justify-center">
                    <CountUp
                      from={0}
                      to={10020}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-center text-gray-200 font-bold uppercase my-2 text-2xl"
                    />
                    <h2 className="text-center text-gray-200 font-bold uppercase my-2 text-2xl">
                      ball
                    </h2>
                  </article>
                </article>
              </PixelCard>
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-96 backdrop-blur-sm "
              >
                <article className="absolute top-0  right-0 left-0 bottom-0 p-5 flex flex-col justify-center gap-5">
                  <h1 className="text-4xl text-center text-gray-300 font-bold">
                    1
                  </h1>
                  <h1 className="text-2xl text-center text-gray-400 ">
                    Mirzamatov Muhsinbek
                  </h1>
                  <h2 className="text-center text-gray-200 font-bold uppercase my-2 text-2xl">
                    112000 ball
                  </h2>
                </article>
              </PixelCard>
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-96 backdrop-blur-sm "
              >
                <article className="absolute top-0  right-0 left-0 bottom-0 p-5 flex flex-col justify-center gap-5">
                  <h1 className="text-4xl text-center text-gray-300 font-bold">
                    3
                  </h1>
                  <h1 className="text-2xl text-center text-gray-400 ">
                    Mirzamatov Muhsinbek
                  </h1>
                  <h2 className="text-center text-gray-200 font-bold uppercase my-2 text-2xl">
                    112000 ball
                  </h2>
                </article>
              </PixelCard>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
//  <CircularText
//             text="REACT*BITS*COMPONENTS*"
//             onHover="speedUp"
//             spinDuration={20}
//             className="custom-class"
//           />
