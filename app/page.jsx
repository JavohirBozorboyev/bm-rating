"use client";

import MainHero from "@/module/main/MainHero";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className=" flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <MainHero />
    </div>
  );
}
