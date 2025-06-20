"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
// import IMG1 from "../../public/IMG_2262.JPG";

const page = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px] uppercase">
        BM-Maktab<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

export default page;

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={"/img1.jpg"}
        alt="1"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-40 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src={"/img2.jpg"}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-40 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src={"/img3.jpg"}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src={"/img4.jpg"}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src={"/img5.jpg"}
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-44 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src={"/img6.jpg"}
        alt="Example image"
        rotate="-3deg"
        top="50%"
        left="20%"
        className="w-44 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src={"/img7.jpg"}
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="25%"
        className="w-36 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src={"/img8.jpg"}
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-40 md:w-80"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
