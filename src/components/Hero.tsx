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
        threshold: 0.3,
      },
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
    <section className="pt-30 sm:pb-10 lg:pt-20">
      <div className="flex flex-col md:mt-10 lg:mt-25 lg:mb-50 lg:h-[300px] lg:flex-row lg:items-center lg:justify-between lg:gap-x-5 xl:h-[350px] 2xl:gap-x-0">
        <div className="lg:w-1/2">
          <h2 className="bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-5xl xl:text-6xl">
            Hello, <span className="text-blue-400">Issa Petit</span> Développeur
            web.
          </h2>

          <Button
            className="my-5 w-full cursor-pointer md:my-10 md:p-5 lg:my-5 lg:w-auto"
            asChild
          >
            <Link href="mailto:issa.petit@outlook.fr">Contactez moi</Link>
          </Button>

          <p className="mt-3 text-gray-700 sm:text-xl">
            Un développeur web passionné avec un don pour la création
            d&apos;expériences d&apos;utilisateurs.
          </p>
        </div>

        <div className="my-10 md:mt-20 md:mb-30 lg:my-0 lg:h-full lg:w-1/2">
          <Image
            src={"/wireframe.avif"}
            alt=""
            width={500}
            height={500}
            sizes="
              (max-width: 540px) 540px,
              (max-width: 768px) 768px,
              (max-width: 1200px) 1200px,
              540px
            "
            className="w-full rounded-xl object-cover lg:h-full lg:w-auto"
          />
        </div>
      </div>

      <div
        ref={targetRef}
        className="relative mt-15 rounded-[20px] border border-transparent bg-[#111] p-5 text-[#f1f1f1] sm:px-8 sm:pt-10 sm:pb-15 lg:p-13 2xl:mt-15 2xl:px-[75px] 2xl:pt-15 2xl:pb-22"
      >
        <div className="lg:max-w-xl">
          <h3
            className={`text-2xl opacity-0 transition-opacity duration-800 sm:text-3xl lg:text-2xl xl:text-4xl ${isVisible && "opacity-100"}`}
          >
            Obtenez un travail rapide et efficace.
          </h3>
          <p
            className={`mt-3 mb-10 text-sm text-[#A1A1A1] opacity-0 transition-opacity duration-1000 sm:mt-5 sm:mb-15 lg:mt-4 lg:mb-11 xl:text-lg ${isVisible && "opacity-100"}`}
          >
           Nous pensons que la technologie est la réponse aux plus grands défis du monde.
          </p>
        </div>

        <div className="flex flex-col overflow-hidden lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-y-10 sm:gap-y-15 md:flex-row md:gap-x-5 lg:flex-col lg:gap-x-0 lg:gap-y-10">
            {/* Cards */}
            <div
              className={`light-cards w-full -translate-x-[50%] rounded-[20px] border border-[#222] bg-[#222] px-5 py-3 opacity-0 md:translate-x-0 md:translate-y-[100%] lg:w-[300px] lg:-translate-x-[50%] lg:translate-y-0 xl:w-[350px] 2xl:h-[185px] 2xl:w-[370px] 2xl:px-9 2xl:py-5.5 ${
                isVisible &&
                "translate-x-0 border-[#2341bb] opacity-100 md:-translate-y-0! lg:translate-x-0!"
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold xl:text-lg 2xl:text-2xl">
                  Rapidité
                </h4>
                <Image
                  className="aspect-square w-[30px] 2xl:w-[48px]"
                  src={"/eclair.png"}
                  alt=""
                  width={48}
                  height={48}
                />
              </div>
              <p className="mt-4 mb-2 text-sm xl:font-semibold 2xl:mt-9 2xl:mb-7">
                Gagnez du temps grâce à notre service réactif et efficace.
              </p>
            </div>

            <div
              className={`light-cards w-full -translate-x-[50%] rounded-[20px] border border-[#222] bg-[#222] px-5 py-3 opacity-0 mb-5 md:translate-x-0 md:translate-y-[100%] lg:w-[300px] lg:-translate-x-[50%] lg:translate-y-0 xl:w-[350px] xl:py-4 2xl:h-[185px] 2xl:w-[370px] 2xl:px-9 2xl:py-5.5 ${
                isVisible &&
                "translate-x-0 border-[#A62194] opacity-100 md:-translate-y-0! lg:translate-x-0!"
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold xl:text-lg 2xl:text-2xl">
                  Efficacité
                </h4>
                <Image
                  className="aspect-square w-[30px] 2xl:w-[48px]"
                  src={"/eclair.png"}
                  alt=""
                  width={48}
                  height={48}
                />
              </div>
              <p className="mt-4 mb-2 text-sm xl:font-semibold 2xl:mt-9 2xl:mb-7">
                Rendre un projet complet et fonctionel est notre priorité.
              </p>
            </div>
          </div>

          {/* Arrow connector */}
          <Image
            className={`absolute top-1/2 left-1/2 hidden opacity-0 transition-all duration-2000 lg:block lg:w-[30%] lg:-translate-x-[40%] lg:-translate-y-[70px] xl:-translate-x-[37%] xl:translate-y-[20px] 2xl:w-[385px] 2xl:-translate-x-[54%] 2xl:translate-y-0 ${
              isVisible && "opacity-100"
            }`}
            src={"/connector-line-blue.svg"}
            alt=""
            width={244}
            height={7}
          />
          <Image
            className={`absolute top-1/2 left-1/2 hidden opacity-0 transition-all duration-2000 lg:block lg:w-[30%] lg:-translate-x-[40%] lg:translate-y-[195px] xl:-translate-x-[37%] 2xl:w-[385px] 2xl:-translate-x-[54%] 2xl:translate-y-[185px] ${
              isVisible && "opacity-100"
            }`}
            src={"/connector-line-purple.svg"}
            alt=""
            width={244}
            height={7}
          />

          {/* Light Circle */}
          <div
            className={`relative hidden aspect-square rounded-full opacity-0 transition-all duration-2000 lg:block lg:h-auto lg:w-[300px] lg:border-t lg:border-b lg:border-t-[#2341bb] lg:border-b-[#A62194] 2xl:w-[425px] ${
              isVisible && "opacity-100"
            }`}
          >
            <div
              className={`absolute top-1/2 left-1/2 aspect-square w-[140px] -translate-[50%] rounded-full bg-[#border-[#2341bb]]/10 opacity-0 blur-lg transition-all duration-2000 ${
                isVisible && "opacity-100 lg:bg-[#0048FF]/20"
              }`}
            />
            <div className="absolute top-1/2 left-1/2 aspect-square w-[250px] -translate-[50%] rounded-full bg-gradient-to-b from-[#1EA676] to-[#144878] lg:w-[125px]" />
            <div className="absolute top-1/2 left-1/2 flex aspect-square w-[240px] -translate-[50%] items-center justify-center rounded-full bg-white lg:w-[115px]">
              <Image src={"/code.png"} alt="" width={78} height={78} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
