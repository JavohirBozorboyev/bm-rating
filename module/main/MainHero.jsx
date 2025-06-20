import React from "react";
import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconPhone,
} from "@tabler/icons-react";
import Magnet from "@/components/bits/Magnet";
import BmLogo from "@/assets/BmLogo";
import BubbleText from "@/components/hoverdev/BubbleText";

const MainHero = () => {
  return (
    <>
      <header className=" container px-4 mx-auto py-24 min-h-screen grid grid-cols-12 items-center ">
        <div className=" col-span-12 lg:col-span-7 2xl:col-span-6 flex flex-col justify-between h-full gap-5 ">
          <p></p>
          <div>
            <article
              data-aos-duration="3000"
              data-aos="fade-down-right"
              className="z-20 relative"
            >
              <BubbleText
                className={
                  " text-5xl xl:text-6xl text-center lg:text-left lg:text-nowrap 2xl:text-8xl z-20 relative  text-white font-extrabold uppercase tracking-[3px]  "
                }
              >
                Boborahim Mashrab
              </BubbleText>
            </article>

            <article
              data-aos-duration="2500"
              data-aos="fade-down-right"
              className="z-20 relative"
            >
              <BubbleText
                className={
                  " text-2xl mt-4 xl:text-6xl text-center lg:text-left text-gray-300 font-extrabold uppercase"
                }
              >
                Xususiy Maktabi
              </BubbleText>
            </article>

            <p
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="mt-10 text-gray-300 xl:text-lg text-center lg:text-left "
            >
              Boborahim Mashrab xususiy maktabi zamonaviy sharoitlar bilan
              ta'minlangan ixtisoslashtirilgan maktab bo'lib, 1-sinfdan
              11-sinfgacha bo'lgan o'quvchilar taxsil oladi. Ixtisoslik
              yo'nalishlari Matematika, Informatika (I.T), Ingliz tili, Rus
              tili, Kimyo hamda Biologiya fanlari bo'lib darslar o'zbek tilida
              olib boriladi.
            </p>
            <article className="flex justify-center lg:justify-start">
              <Link
                href={"tel:+998907522500"}
                data-aos-duration="2000"
                data-aos="fade-down-right"
                className="border border-slate-900 mt-8 rounded-full hover:scale-105 duration-300 active:scale-95"
              >
                <ShinyText speed={2} className=" text-lg p-2 px-6 flex items-center gap-2 ">
                  <IconPhone size={18} color="#aaa" /> Bog'lanish{" "}
                </ShinyText>
              </Link>
            </article>
          </div>
          <article className="mt-10 flex gap-10 flex-wrap justify-center  lg:justify-start  ">
            <Link
              href={"https://www.instagram.com/boborahim_mashrab_maktabi/"}
              target="_blank"
              data-aos-duration="2000"
              data-aos="fade-up"
            >
              <ShinyText
                disabled={false}
                speed={3}
                className="custom-class flex items-center gap-2 b duration-200 fill-white text-xl"
              >
                <IconBrandInstagram size={30} color="#aaa" />
                Instagram
              </ShinyText>
            </Link>
            {/* <Link href={"/"} target="_blank">
              <ShinyText
                disabled={false}
                speed={3}
                className="custom-class flex items-center gap-2 b duration-200 fill-white text-xl"
              >
                <IconBrandFacebook size={30} color="#aaa" />
                Facebook
              </ShinyText>
            </Link> */}
            <Link
              data-aos-duration="2500"
              data-aos="fade-up"
              target="_blank"
              href={"https://t.me/Boborahim_mashrab"}
            >
              <ShinyText
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
              data-aos="zoom-in"
              data-aos-duration="2500"
              className={
                "w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] drop-shadow-2xl   fill-gray-100 2xl:fill-gray-700 hover:scale-95 duration-500 "
              }
            />
          </Magnet>
        </div>
      </header>
    </>
  );
};

export default MainHero;
