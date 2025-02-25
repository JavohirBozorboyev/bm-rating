import React, { useRef } from "react";
import CountUp from "@/components/bits/CountUp";
import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";
import useSWR from "swr";
import CircularText from "@/components/bits/CircularText";
import BmLogo from "@/assets/BmLogo";

const MainRatingList = () => {
  const { data, error, isLoading } = useSWR("/api/ratings/top");
  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[90vh] flex-col gap-5">
        <BmLogo
          className={
            "w-[300px] h-[300px] fill-gray-800 opacity-40 group-hover:scale-95 duration-300  "
          }
        />
        <ShinyText
          disabled={false}
          speed={3}
          className="custom-class text-xl lg:text-3xl text-center font-bold "
        >
          Loading...
        </ShinyText>
      </div>
    );
  }

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
            <article className=" col-span-10 lg:col-span-4 relative  ">
              <article className="sticky top-20 flex justify-center group overflow-hidden">
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
                    {data?.[0]?.student?.fullname}
                  </ShinyText>

                  <article className="flex gap-3 items-end justify-center">
                    <CountUp
                      from={0}
                      to={data?.[0]?.totalScoreSum}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-center text-gray-200 font-bold uppercase my-2 text-2xl"
                    />
                    <h2 className="text-center text-gray-200 font-bold uppercase my-2 text-sm lg:text-base  xl:text-lg">
                      ball
                    </h2>
                  </article>
                </article>
                <CircularText
                  text="BEST*OF*THE*BEST*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="absolute top-0 right-5  z-20 font-light lg:font-bold w-36 h-36  lg:w-40 lg:h-40  text-lg"
                />
              </article>
            </article>
            <article className=" col-span-10  lg:col-span-6 grid grid-cols-2 lg:gap-5 overflow-hidden ">
              {data?.map((item, index) => (
                <PixelCard
                  key={index}
                  variant="blue"
                  alwaysAnimate={index === 0}
                  colors={"teal, crimson, white, gold"}
                  className="cursor-pointer lg:h-80 backdrop-blur-sm border-none overflow-hidden "
                >
                  <article className="absolute top-0  right-0 left-0 bottom-0 p-5 flex flex-col justify-center gap-5">
                    <h1 className=" text-2xl lg:text-4xl text-center text-gray-300 font-bold">
                      {index + 1}
                    </h1>
                    <h1 className="text-lg md:text-xl lg:text-2xl text-center text-gray-400 ">
                      {item?.student?.fullname}
                    </h1>
                    <h2 className="text-center text-gray-200 font-bold uppercase my-2 text-base md:text-xl lg:text-2xl ">
                      {item?.totalScoreSum}{" "}
                      <span className="text-sm xl:text-base">ball</span>
                    </h2>
                  </article>
                </PixelCard>
              ))}
            </article>
          </div>
        </article>
      </div>
    </>
  );
};

export default MainRatingList;
