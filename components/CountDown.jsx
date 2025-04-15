"use client";

import { useState, useEffect } from "react";

const CountdownTimer = ({
  setIsActive, // Tugaganida false qilib qo'yamiz
  isActive, // true -> hisoblayapti, false -> tugagan
}) => {
  const getEndTime = () => {
    return new Date("2025-04-19T09:00:00"); // Maqsadli vaqt
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
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      // Agar vaqt tugagan bo‘lsa
      if (
        updatedTime.days === 0 &&
        updatedTime.hours === 0 &&
        updatedTime.minutes === 0 &&
        updatedTime.seconds === 0
      ) {
        setIsActive(false);
        clearInterval(timer); // Ortiqcha ishlashning oldini oladi
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {isActive ? (
        <div className="flex gap-4 lg:justify-center text-3xl mt-5  md:text-5xl 2xl:text-5xl font-extrabold select-none">
          <div>
            <span className="text-white ">{timeLeft.days}</span>{" "}
            <span className="text-gray-500 font-medium text-base lg:text-2xl">
              kun
            </span>
          </div>
          <div>
            <span className="text-white ">{timeLeft.hours}</span>{" "}
            <span className="text-gray-500 font-medium text-base lg:text-2xl">
              soat
            </span>
          </div>
          <div>
            <span className="text-white ">{timeLeft.minutes}</span>{" "}
            <span className="text-gray-500 font-medium text-base lg:text-2xl">
              daqiqa
            </span>
          </div>
          <div>
            <span className="text-white ">{timeLeft.seconds}</span>{" "}
            <span className="text-gray-500 font-medium text-base lg:text-2xl">
              soniya
            </span>
          </div>
        </div>
      ) : (
        <div className="text-center text-3xl text-green-500 font-bold mt-5">
          Vaqt tugadi!
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
