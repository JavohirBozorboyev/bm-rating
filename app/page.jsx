"use client";
import CircularText from "@/components/bits/CircularText";
import CountUp from "@/components/bits/CountUp";
import VariableProximity from "@/components/bits/VariableProximity";
import AppNavbar from "@/components/nav/AppNavbar";
import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  return (
    <div className=" flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <header className="h-[50vh] container px-4 mx-auto my-20 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl text-white uppercase">Boborahim Mashrab</h1>
          <div ref={containerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={"Hover me! And then star React Bits on GitHub, or else..."}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
            <CircularText
              text="REACT*BITS*COMPONENTS*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
        </div>
      </header>
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
    </div>
  );
}
