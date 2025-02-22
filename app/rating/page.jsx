"use client";
import MainRatingList from "@/module/main/MainRatingList";

const page = () => {
  return (
    <div className="flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-10">
      <MainRatingList />
    </div>
  );
};

export default page;
