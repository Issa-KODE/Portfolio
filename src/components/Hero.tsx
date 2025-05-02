"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Arrête l'observateur après le premier déclenchement
        }
      },
      {
        threshold: 0.3
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-30 pb-10 lg:pt-20">
      <div className="flex flex-col md:mt-10 lg:flex-row lg:items-center lg:justify-between lg:h-[300px] lg:mt-25 lg:mb-50 lg:gap-x-5 xl:h-[350px] 2xl:gap-x-0">
        <div className="lg:w-1/2">
          <h2 className="bg-gradient-to-b from-gray-900 to-gray-600 text-transparent bg-clip-text text-4xl md:text-5xl xl:text-6xl">
            Hello, <span className="text-blue-400">Issa Petit</span>{" "}
            Développeur web à votre service.
          </h2>

          <Button
            className="cursor-pointer my-5 w-full md:p-5 md:my-10 lg:my-5 lg:w-auto"
            asChild
          >
            <Link href="#contact">Contactez moi</Link>
          </Button>

          <p className="mt-3 text-xl text-gray-700">
            Un développeur web passionné avec un don pour la création
            d&apos;expériences d&apos;utilisateurs.
          </p>
        </div>

        <div className="my-10 md:mt-20 md:mb-30 lg:my-0 lg:h-full lg:w-1/2">
          <Image
            src={"/wireframe.avif"}
            alt=""
            width={700}
            height={700}
            className="w-full rounded-xl object-cover lg:h-full lg:w-auto"
          />
        </div>
      </div>

      <div
        ref={targetRef}
        className="relative rounded-[20px] bg-[#111] text-[#f1f1f1] border border-transparent mt-15 px-8 pt-10 pb-15 lg:p-13 2xl:mt-15 2xl:px-[75px] 2xl:pt-15 2xl:pb-22"
      >
        <div className="lg:max-w-xl">
          <h3 className={`opacity-0 text-3xl transition-opacity duration-800 lg:text-2xl xl:text-4xl ${isVisible && "opacity-100"}`}>
            Obtenez un travail rapide et efficace.
          </h3>
          <p className={`opacity-0 text-sm mt-5 mb-15 text-[#A1A1A1] transition-opacity duration-1000 lg:mt-4 lg:mb-11 xl:text-lg ${isVisible && "opacity-100"}`}>
            We believe technology is the answer to the world’s greatest
            challenges. It’s also the cause, so we find ourselves in bit of a
            catch 22 situation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center overflow-hidden">
          <div className="flex flex-col gap-y-15 md:flex-row md:gap-x-5 lg:gap-x-0 lg:flex-col lg:gap-y-10">
            {/* Cards */}
            <div
              className={`w-full -translate-x-[50%] opacity-0 border border-[#222] bg-[#222] rounded-[20px] light-cards py-3 px-5 md:translate-x-0 md:translate-y-[100%] lg:-translate-x-[50%] lg:translate-y-0 lg:w-[300px] xl:w-[350px] 2xl:w-[370px] 2xl:h-[185px] 2xl:py-5.5 2xl:px-9 ${
                isVisible && "opacity-100 translate-x-0 border-[#2341bb] md:-translate-y-0! lg:translate-x-0!"
              }`}
            >
              <div className="flex justify-between items-center">
                <h4 className="xl:text-lg 2xl:text-2xl font-semibold">Rapidité</h4>
                <Image className="w-[30px] 2xl:w-[48px] aspect-square" src={"/eclair.png"} alt="" width={48} height={48} />
              </div>
              <p className="text-sm mt-4 mb-2 xl:font-semibold 2xl:mt-9 2xl:mb-7">
                Gagnez du temps grâce à notre service réactif et efficace.
              </p>
            </div>

            <div
              className={`w-full -translate-x-[50%] opacity-0 border border-[#222] bg-[#222] rounded-[20px] light-cards py-3 px-5 md:translate-x-0 md:translate-y-[100%] lg:-translate-x-[50%] lg:translate-y-0 lg:w-[300px] xl:w-[350px] xl:py-4 2xl:w-[370px] 2xl:h-[185px] 2xl:py-5.5 2xl:px-9 ${
                isVisible && "opacity-100 translate-x-0 border-[#A62194] md:-translate-y-0! lg:translate-x-0!"
              }`}
            >
              <div className="flex justify-between items-center">
                <h4 className="xl:text-lg 2xl:text-2xl font-semibold">Efficacité</h4>
                <Image className="w-[30px] 2xl:w-[48px] aspect-square" src={"/eclair.png"} alt="" width={48} height={48} />
              </div>
              <p className="text-sm mt-4 mb-2 xl:font-semibold 2xl:mt-9 2xl:mb-7">
                Rendre un projet complet et fonctionel est notre priorité.
              </p>
            </div>
          </div>
          
          {/* Arrow connector */}
          <Image
            className={`hidden lg:block opacity-0 absolute top-1/2 left-1/2 transition-all duration-2000 lg:-translate-x-[40%] lg:-translate-y-[70px] lg:w-[30%] xl:-translate-x-[37%] xl:translate-y-[20px] 2xl:-translate-x-[54%] 2xl:translate-y-0 2xl:w-[385px] ${
              isVisible && "opacity-100"
            }`}
            src={"/connector-line-blue.svg"}
            alt=""
            width={244}
            height={7}
          />
          <Image
            className={`hidden lg:block opacity-0 absolute top-1/2 left-1/2 transition-all duration-2000 lg:-translate-x-[40%] lg:translate-y-[195px] lg:w-[30%] xl:-translate-x-[37%] 2xl:-translate-x-[54%] 2xl:translate-y-[185px] 2xl:w-[385px] ${
              isVisible && "opacity-100"
            }`}
            src={"/connector-line-purple.svg"}
            alt=""
            width={244}
            height={7}
          />

          {/* Light Circle */}
          <div
            className={`hidden lg:block opacity-0 relative aspect-square rounded-full transition-all duration-2000 lg:h-auto lg:border-t lg:border-b lg:border-t-[#2341bb] lg:border-b-[#A62194] lg:w-[300px] 2xl:w-[425px] ${
              isVisible && "opacity-100"
            }`}
          >
            <div
              className={`opacity-0 absolute left-1/2 top-1/2 -translate-[50%] bg-[#border-[#2341bb]]/10 w-[140px] aspect-square blur-lg rounded-full transition-all duration-2000 ${
                isVisible && "lg:bg-[#0048FF]/20 opacity-100"
              }`}
            />
            <div className="absolute left-1/2 top-1/2 -translate-[50%] bg-gradient-to-b from-[#1EA676] to-[#144878] w-[250px] lg:w-[125px] aspect-square rounded-full" />
            <div className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-[50%] bg-white w-[240px] lg:w-[115px] aspect-square rounded-full">
              <Image src={"/code.png"} alt="" width={78} height={78} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
