import { Code, Hand, Sheet } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="pt-20">
      <div className="text-center xl:mb-60">
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl xl:text-7xl">
          À propos de moi
        </h2>
        <p className="mt-3 text-sm md:text-lg xl:mt-5">
          Développeur web, passionné par la technologie et l&apos;innovation.
        </p>
      </div>

      <div className="lg:mx-auto lg:max-w-4xl xl:max-w-6xl">
        <div className="mt-20 flex flex-col items-center justify-between md:mt-30 lg:flex-row">
          <p className="order-2 mt-10 text-center text-[#555] uppercase sm:text-xl lg:order-1 lg:w-[40%] lg:text-left lg:text-2xl xl:text-3xl">
            Bonjour,{" "}
            <span className="font-bold text-blue-300 lg:text-3xl xl:text-4xl">
              Issa Petit
            </span>{" "}
            Développeur depuis{" "}
            <span className="font-bold text-blue-300">4 ans</span>.
          </p>
          <span className="lg:order-2">
            <Hand className="h-20 w-20 text-blue-300 sm:h-35 sm:w-35 md:h-40 md:w-40 lg:h-50 lg:w-50 xl:h-60 xl:w-60" />
          </span>
        </div>

        <div className="my-20 flex flex-col items-center justify-between md:my-30 lg:flex-row xl:my-40">
          <span>
            <Code className="h-20 w-20 sm:h-40 sm:w-40 lg:h-50 lg:w-50 xl:h-60 xl:w-60" />
          </span>
          <p className="mt-10 text-center text-[#555] uppercase sm:text-xl lg:w-[40%] lg:text-left lg:text-2xl xl:text-3xl">
            <span className="font-bold text-black xl:text-4xl">
              Autodidacte
            </span>{" "}
            et formé dans un Bootcamp.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between md:mb-20 lg:flex-row xl:mb-40">
          <p className="order-2 mt-10 text-center text-[#555] uppercase sm:text-xl lg:w-[40%] lg:text-left lg:text-2xl xl:text-3xl">
            <span className="text-zin-600 font-bold xl:text-4xl">Auteur</span>{" "}
            de nombreux projets.
          </p>
          <span className="lg:order-2">
            <Sheet className="h-20 w-20 text-zinc-600 sm:h-40 sm:w-40 xl:h-60 xl:w-60" />
          </span>
        </div>
      </div>

      <div className="mr-3 md:mr-7">
        <div className="relative mt-20 text-center">
          <Image
            className="inline-block"
            src={"/parcours.svg"}
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
