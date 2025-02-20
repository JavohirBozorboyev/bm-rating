"use client";

import MainHero from "@/module/main/MainHero";
import MainRatingList from "@/module/main/MainRatingList";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  console.log(data);

  return (
    <div className=" flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <MainHero />

      <MainRatingList />
    </div>
  );
}
