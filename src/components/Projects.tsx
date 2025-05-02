"use client"
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false)
  // 177CFF,2BA1EA
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if(entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, 
      {
        threshold: 0.5
      }
    )

    if(targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if(targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    }
  }, [])


  return <section id="projects" className="relative mt-20">
      <h3 className="text-3xl text-[#222] font-semibold md:text-4xl md:max-w-xl lg:text-5xl lg:w-130">De nombreux projets déjà réalisées</h3>

      <ul ref={targetRef} className={`grid mt-18 mb-30 gap-y-15 grid-cols-1 md:grid-cols-2 md:gap-x-5 xl:grid-cols-3 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[50%] opacity-0"}`}>
        {PROJECTS.slice(1,4).map((project, index) => (
          <Link href="/" key={index}>
            <li className="relative w-full rounded-[15px] border border-[#275DC2]/40 pt-[24px] pb-[30px] px-6 hover:bg-slate-50 xl:h-[300px]">
              <h3 className="text-lg font-semibold md:text-[15px] lg:text-lg 2xl:text-xl">{project.title}</h3>

              <Image className="absolute top-4 right-4 w-6 h-6" src={"/arrow-block.svg"} alt="" width={17} height={17}/>

              <p className="text-sm mt-[16px] mb-[28px] w-[320px] md:text-[13px] lg:text-sm xl:text-[15px]">{project.description}</p>

              <div className="bg-gradient-to-b from-[#222] to-[#363636] px-4 pt-5 pb-8 rounded-md">
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <div className="w-[110px] h-[8px] bg-white rounded-full"/>
                    <div className="w-[80px] h-[8px] bg-white rounded-full"/>
                    <div className="w-[60px] h-[8px] bg-white rounded-full"/>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-5 h-5 rounded bg-white"/>
                      <div className="ml-4 w-30 h-5 rounded bg-white"/>
                    </div>

                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded bg-white"/>
                      <div className="ml-4 w-30 h-5 rounded bg-white"/>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          
          </Link>
        ))}
      </ul>

      <h3 className="text-[#317EBD] text-2xl mb-30">Conceptualisation diverses</h3>
      
      <div className="px-8 py-10 rounded-xl bg-gradient-to-b from-[#111] to-[#222] md:flex md:justify-between md:items-center xl:p-10">
        <div className="md:w-1/2 lg:my-0 xl:px-6 xl:py-8 xl:self-start xl:flex xl:flex-col xl:mr-5">
          <h4 className="text-2xl font-semibold mb-4 text-blue-300 lg:text-3xl ">Site Vitrine</h4>
          <p className="text-[#aaa] lg:text-lg lg:mb-10 xl:mt-2 xl:mb-15">La landing page est le meilleur outil à la disposition de votre site web pour inciter vos visiteurs à effectuer une action et ainsi remplir vos objectifs de croissance.</p>

          <Button asChild className="hidden lg:inline-flex w-full p-6 mt-auto border border-blue-400/30 hover:text-blue-300">
            <Link href="">Visiter le site</Link>
          </Button>
        </div>

        <div className="w-full mt-15 mb-5 md:w-[45%] md:m-0 xl:h-[250px]">
          <video
            className="rounded-xl w-full xl:h-full"
            // autoplay lorsque viexport
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

      <div className="my-30 px-8 py-10 rounded-xl bg-gradient-to-b from-[#222] to-[#333] md:flex md:justify-between md:items-center md:my-40 xl:my-60">
        <div className="mb-10 md:w-[60%] lg:mb-0 xl:w-1/2 xl:px-6 xl:py-8 xl:self-start xl:flex xl:flex-col xl:mr-5 xl:mb-0">
          <h4 className="text-2xl font-semibold mb-4 lg:text-3xl text-orange-500">Application Mobile</h4>
          <p className="text-[#f1f1f1] lg:text-lg lg:mb-10 xl:mt-7 xl:mb-35">Avec le mobile comme appareil le plus utilisé au quotidien, développer une application mobile permet de toucher une audience plus large et d’optimiser sa stratégie de croissance.</p>

          <Button asChild className="hidden lg:inline-flex w-full p-6 mt-auto border border-orange-400/30 hover:text-orange-500">
            <Link href="/">En savoir plus</Link>
          </Button>
        </div>

        <div className="text-center md:w-1/3 xl:w-auto">
          <Image className="inline-block md:w-full md:object-cover" src={"/mobil.png"} alt="" width={400} height={350}/>
        </div>
      </div>

      <div className="px-8 py-10 rounded-xl bg-gradient-to-b from-[#111] to-[#222] md:flex md:justify-between md:items-center lg:p-10">
        <div className="md:w-1/2 md:mb-10 lg:m-0 xl:px-6 xl:py-8 xl:self-start xl:flex xl:flex-col xl:mr-5 xl:h-[400px]">
          <h4 className="text-2xl font-semibold mb-4 lg:text-3xl text-green-400">Application Web</h4>
          <p className="text-[#aaa] lg:text-lg lg:mb-10 xl:mt-5">A web application is application software that is created with web technologies and runs via a web browser. Web applications emerged during the late 1990s.</p>

          <Button asChild className="hidden lg:inline-flex w-full p-6 mt-auto border border-green-400/30 hover:text-green-400">
            <Link href="#contact">Cela m&apos;intéresse !</Link>
          </Button>
        </div>

        <div className="h-[250px] mt-15 w-full md:h-[200px] md:m-0 md:w-[40%] xl:h-[300px] rounded-xl">
          <Image src={"/gif-project.gif"} alt="" width={500} height={300} className="inline-block rounded-xl h-full w-full"/>
        </div>
      </div>
  </section>
}