"use client";
import BmLogo from "@/assets/BmLogo";
import CircularText from "@/components/bits/CircularText";
import CountUp from "@/components/bits/CountUp";
import Magnet from "@/components/bits/Magnet";
import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  return (
    <div className=" flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <header className=" container px-4 mx-auto py-24 flex flex-col justify-center items-center gap-10 ">
        <div className="col-span-5 flex justify-end">
          <Magnet padding={800} disabled={false} magnetStrength={50}>
            <BmLogo
              className={"w-[300px] h-[300px] drop-shadow-2xl   fill-white  "}
            />
          </Magnet>
        </div>
        <div className="flex  flex-col items-center col-span-7">
          <h1 className="text-6xl text-white uppercase">Boborahim Mashrab</h1>
          <p className="text-gray-200 text-xl mt-5 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Quam expedita aspernatur eos fugiat molestiae animi, in dolor
            corporis ea ut vel accusamus illum unde explicabo assumenda quod
            nesciunt aliquam ex.
          </p>
        </div>
      </header>
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="relative z-10">
        <div className=" relative flex justify-center items-center flex-col">
          <div className="container p-4 mx-auto flex items-center ">
            <ShinyText
              text="Best of the best"
              disabled={false}
              speed={3}
              className="custom-class text-3xl lg:text-5xl text-center font-bold uppercase"
            />
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
      <div className="w-full h-[1px] bg-white"></div>
    </div>
  );
}
//  <CircularText
//             text="REACT*BITS*COMPONENTS*"
//             onHover="speedUp"
//             spinDuration={20}
//             className="custom-class"
//           />
