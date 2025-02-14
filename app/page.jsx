import AppNavbar from "@/components/nav/AppNavbar";
import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="relative z-10 pt-20">
        <div className=" relative flex justify-center items-center flex-col">
          <div className="container p-4 mx-auto flex items-center ">
            <ShinyText
              text="Just some shiny text!"
              disabled={false}
              speed={3}
              className="custom-class text-3xl lg:text-5xl text-center font-bold"
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
