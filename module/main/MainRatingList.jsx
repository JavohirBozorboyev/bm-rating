import React, { useRef } from "react";
import CountUp from "@/components/bits/CountUp";
import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";
import useSWR from "swr";
import CircularText from "@/components/bits/CircularText";
import ShapeBlur from "@/components/bits/ShapeBlur";
import BmLogo from "@/assets/BmLogo";

const MainRatingList = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;
  return (
    <>
      <div className=" relative flex justify-center items-center flex-col py-10">
        <div className="container p-4 mx-auto flex items-center ">
          <ShinyText
            disabled={false}
            speed={3}
            className="custom-class text-3xl lg:text-5xl text-center font-bold uppercase"
          >
            Eng yaxshi natijalar bilan
          </ShinyText>
        </div>
        <article className="container mt-10 p-4 ">
          <div className="grid grid-cols-10 gap-5 ">
            <article className="col-span-4 relative ">
              <article className="sticky top-20 flex justify-center group">
                <BmLogo
                  className={
                    "w-[500px] h-[500px] fill-gray-800 opacity-40 group-hover:scale-95 duration-300 "
                  }
                />
                <article className="absolute top-0  right-0 left-0 bottom-0 p-5 flex flex-col justify-center gap-5">
                  <h1 className="text-4xl text-center text-gray-300 font-bold">
                    1
                  </h1>
                  <ShinyText
                    disabled={false}
                    speed={3}
                    className="text-3xl text-center font-bold  "
                  >
                    Mirzamatov Muhsinbek
                  </ShinyText>

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
                <CircularText
                  text="BEST*OF*THE*BEST*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="absolute top-10 right-10  z-20 w-40 h-40  text-lg"
                />
              </article>
            </article>
            <article className="col-span-6 grid grid-cols-2 gap-2">
              <PixelCard
                variant="blue"
                alwaysAnimate={true}
                colors={"teal, crimson, white, gold"}
                className="cursor-pointer h-80 backdrop-blur-sm border-none "
              >
                <article className="absolute top-0  right-0 left-0 bottom-0 p-5 flex flex-col justify-center gap-5">
                  <h1 className="text-4xl text-center text-gray-300 font-bold">
                    2
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
                className="cursor-pointer h-80 backdrop-blur-sm border-none  "
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
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-80 backdrop-blur-sm border-none  "
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
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-80 backdrop-blur-sm border-none "
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
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-80 backdrop-blur-sm border-none "
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
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-80 backdrop-blur-sm border-none "
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
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-80 backdrop-blur-sm border-none "
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
              <PixelCard
                variant="blue"
                colors={"teal"}
                className="cursor-pointer h-80 backdrop-blur-sm border-none "
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
            </article>
          </div>
        </article>
      </div>
    </>
  );
};

export default MainRatingList;
