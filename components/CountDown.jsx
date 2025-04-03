"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const getEndTime = () => {
    const targetDate = new Date("2025-04-17T00:00:00"); // 17-aprel 2025, soat 00:00:00
    return targetDate;
  };

  const calculateTimeLeft = () => {
    const endTime = getEndTime();
    const difference = +endTime - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 lg:justify-center text-3xl mt-5  md:text-5xl 2xl:text-5xl font-extrabold select-none">
      <div >
        <span className="text-white ">{timeLeft.days}</span>{" "}
        <span className="text-gray-500 font-medium text-base lg:text-2xl">kun</span>
      </div>
      <div>
        <span className="text-white ">{timeLeft.hours}</span>{" "}
        <span className="text-gray-500 font-medium text-base lg:text-2xl">soat</span>
      </div>
      <div>
        <span className="text-white ">{timeLeft.minutes}</span>{" "}
        <span className="text-gray-500 font-medium text-base lg:text-2xl">daqiqa</span>
      </div>
      <div>
        <span className="text-white ">{timeLeft.seconds}</span>{" "}
        <span className="text-gray-500 font-medium text-base lg:text-2xl">soniya</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
