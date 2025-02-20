import React, { useRef } from "react";
import CountUp from "@/components/bits/CountUp";
import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";

const MainRatingList = () => {
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
        <article></article>
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
    </>
  );
};

export default MainRatingList;
