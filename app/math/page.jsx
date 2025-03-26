import CountdownTimer from "@/components/CountDown";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen ">
      <div className="container px-4 mx-auto pt-20">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default page;
