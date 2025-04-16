"use client";

import { useEffect, useState } from "react";
import { DateTime, Duration } from "luxon";

const CountdownTimer = ({ setIsActive }) => {
  // 🎯 Tugash vaqti (UTC+5 bo‘yicha 2025-04-19 09:00:00)
  const targetTime = DateTime.fromISO("2025-04-19T09:00:00", {
    zone: "Asia/Tashkent", // yoki sizning mintaqangiz
  });

  const calculateTimeLeft = () => {
    const now = DateTime.now().setZone("Asia/Tashkent");
    const diff = targetTime
      .diff(now, ["days", "hours", "minutes", "seconds"])
      .toObject();

    if (diff.seconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff.days),
      hours: Math.floor(diff.hours),
      minutes: Math.floor(diff.minutes),
      seconds: Math.floor(diff.seconds),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      const isZero =
        updatedTime.days === 0 &&
        updatedTime.hours === 0 &&
        updatedTime.minutes === 0 &&
        updatedTime.seconds === 0;

      if (isZero) {
        setIsRunning(false);
        setIsActive(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [setIsActive]);

  return (
    <div>
      {isRunning ? (
        <div className="flex gap-4 lg:justify-center text-3xl mt-5 md:text-5xl font-extrabold select-none">
          <div>
            <span className="text-white">{timeLeft.days}</span>{" "}
            <span className="text-gray-500 font-medium text-base lg:text-2xl">
              kun
            </span>
          </div>
          <div>
            <span className="text-white">{timeLeft.hours}</span>{" "}
            <span className="text-gray-500 font-medium text-base lg:text-2xl">
              soat
            </span>
          </div>
          <div>
            <span className="text-white">{timeLeft.minutes}</span>{" "}
            <span className="text-gray-500 font-medium text-base lg:text-2xl">
              daqiqa
            </span>
          </div>
          <div>
            <span className="text-white">{timeLeft.seconds}</span>{" "}
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
