"use client";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
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
    <section id="projects" className="relative mt-20">
      <h3 className="text-2xl font-semibold text-[#222] sm:text-3xl md:max-w-xl md:text-4xl lg:w-130 lg:text-5xl">
        De nombreux projets déjà réalisées
      </h3>

      <ul
        ref={targetRef}
        className={`mt-10 mb-15 grid grid-cols-1 gap-y-15 transition-all duration-1000 sm:mt-18 sm:mb-30 md:grid-cols-2 md:gap-x-5 xl:grid-cols-3 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[50%] opacity-0"}`}
      >
        {PROJECTS.slice(1, 4).map((project, index) => (
          <Link href="/" key={index}>
            <li className="relative w-full rounded-[15px] border border-[#275DC2]/40 px-3 pt-[24px] pb-[30px] hover:bg-slate-50 sm:px-6 xl:h-[300px]">
              <h3 className="text-lg font-semibold md:text-[15px] lg:text-lg 2xl:text-xl">
                {project.title}
              </h3>

              <Image
                className="absolute top-4 right-4 h-6 w-6"
                src={"/arrow-block.svg"}
                alt=""
                width={17}
                height={17}
              />

              <p className="mt-[16px] mb-[28px] text-sm md:text-[13px] lg:text-sm xl:text-[15px]">
                {project.description}
              </p>

              <div className="rounded-md bg-gradient-to-b from-[#222] to-[#363636] px-4 pt-5 pb-4 sm:pb-8">
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <div className="h-[8px] w-[110px] rounded-full bg-white" />
                    <div className="h-[8px] w-[80px] rounded-full bg-white" />
                    <div className="h-[8px] w-[60px] rounded-full bg-white" />
                  </div>

                  <div>
                    <div className="mb-3 flex items-center">
                      <div className="hidden h-5 w-5 rounded bg-white sm:block" />
                      <div className="ml-4 h-5 w-30 rounded bg-white" />
                    </div>

                    <div className="flex items-center">
                      <div className="hidden h-5 w-5 rounded bg-white sm:block" />
                      <div className="ml-4 h-5 w-30 rounded bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>

      <h3 className="mb-20 text-xl text-[#317EBD] sm:mb-30 sm:text-2xl">
        Conceptualisation diverses
      </h3>

      <div className="rounded-xl bg-gradient-to-b from-[#111] to-[#222] px-8 py-10 md:flex md:items-center md:justify-between xl:p-10">
        <div className="md:w-1/2 lg:my-0 xl:mr-5 xl:flex xl:flex-col xl:self-start xl:px-6 xl:py-8">
          <h4 className="mb-4 text-2xl font-semibold text-blue-300 lg:text-3xl">
            Site Vitrine
          </h4>
          <p className="text-[#aaa] lg:mb-10 lg:text-lg xl:mt-2 xl:mb-15">
            La landing page est le meilleur outil à la disposition de votre site
            web pour inciter vos visiteurs à effectuer une action et ainsi
            remplir vos objectifs de croissance.
          </p>

          <Button
            asChild
            className="mt-auto hidden w-full border border-blue-400/30 p-6 hover:text-blue-300 lg:inline-flex"
          >
            <Link href="">Visiter le site</Link>
          </Button>
        </div>

        <div className="mt-15 mb-5 w-full md:m-0 md:w-[45%] xl:h-[250px]">
          <video
            className="w-full rounded-xl xl:h-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Example video for Linked.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="my-30 rounded-xl bg-gradient-to-b from-[#222] to-[#333] px-8 py-10 md:my-40 md:flex md:items-center md:justify-between xl:my-60">
        <div className="mb-10 md:w-[60%] lg:mb-0 xl:mr-5 xl:mb-0 xl:flex xl:w-1/2 xl:flex-col xl:self-start xl:px-6 xl:py-8">
          <h4 className="mb-4 text-2xl font-semibold text-orange-500 lg:text-3xl">
            Application Mobile
          </h4>
          <p className="text-[#f1f1f1] lg:mb-10 lg:text-lg xl:mt-7 xl:mb-35">
            Avec le mobile comme appareil le plus utilisé au quotidien,
            développer une application mobile permet de toucher une audience
            plus large et d’optimiser sa stratégie de croissance.
          </p>

          <Button
            asChild
            className="mt-auto hidden w-full border border-orange-400/30 p-6 hover:text-orange-500 lg:inline-flex"
          >
            <Link href="/">En savoir plus</Link>
          </Button>
        </div>

        <div className="text-center md:w-1/3 xl:w-auto">
          <Image
            className="inline-block md:w-full md:object-cover"
            src={"/mobil.png"}
            alt=""
            width={400}
            height={350}
          />
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-b from-[#111] to-[#222] px-8 py-10 md:flex md:items-center md:justify-between lg:p-10">
        <div className="md:mb-10 md:w-1/2 lg:m-0 xl:mr-5 xl:flex xl:h-[400px] xl:flex-col xl:self-start xl:px-6 xl:py-8">
          <h4 className="mb-4 text-2xl font-semibold text-green-400 lg:text-3xl">
            Application Web
          </h4>
          <p className="text-[#aaa] lg:mb-10 lg:text-lg xl:mt-5">
            A web application is application software that is created with web
            technologies and runs via a web browser. Web applications emerged
            during the late 1990s.
          </p>

          <Button
            asChild
            className="mt-auto hidden w-full border border-green-400/30 p-6 hover:text-green-400 lg:inline-flex"
          >
            <Link href="#contact">Cela m&apos;intéresse !</Link>
          </Button>
        </div>

        <div className="mt-15 h-[250px] w-full rounded-xl md:m-0 md:h-[200px] md:w-[40%] xl:h-[300px]">
          <Image
            src={"/gif-project.gif"}
            alt=""
            width={500}
            height={300}
            className="inline-block h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
