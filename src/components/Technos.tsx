import { technos } from "@/lib/constants";
import Image from "next/image";

export default function Technos() {
  return (
    <section className="pt-25 lg:pt-40">
      <div>
        <h2 className="bg-gradient-to-b from-[#177CFF] to-[#2BA1EA]/50 bg-clip-text text-4xl font-bold text-transparent sm:text-[50px]">
          Techs utilisées.
        </h2>
        <p className="text-sm sm:text-[16px]">
          Les meilleures technologies afin de livrer un produit adéquat.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:mt-20 md:grid-cols-2 lg:mt-30">
        <li className="group relative h-[250px] overflow-hidden rounded-xl bg-gradient-to-bl from-[#171717]/50 to-[#C0C0C0]/50">
          <div className="absolute bottom-10 left-12 z-1">
            <Image
              src={"/nextjs.png"}
              alt=""
              width={100}
              height={100}
              className="mb-5"
            />
            <h3 className="text-[25px] font-bold">Next.js</h3>
          </div>

          <div className="absolute -top-12 -right-12">
            <Image
              src={"/nextjs.png"}
              alt=""
              width={300}
              height={200}
              className="mb-5 opacity-50"
            />
          </div>
        </li>

        <li className="lg: relative z-1 h-[250px] overflow-hidden rounded-xl bg-gradient-to-b from-[#20CFFF] to-[#3F7CEE]">
          <div className="mt-20 ml-5 text-white">
            <h3 className="mb-2 text-3xl font-bold">React</h3>
            <p>
              React framework JavaScript éprouvé afin de construire des
              interfaces utilisateur dynamiques et intéractives.
            </p>
          </div>

          <div>
            <Image
              src={"/react.png"}
              alt=""
              width={300}
              height={300}
              className="absolute -top-10 -right-15 -z-1 opacity-40"
            />
          </div>
        </li>

        <li className="relative z-1 h-[250px] overflow-hidden rounded-xl bg-gradient-to-b from-[#01679A]/50 to-[#20CFFF]/70">
          <div className="mt-8 ml-5 flex flex-col gap-y-5 text-white">
            <Image src={"/tailwindLogo.png"} alt="" width={50} height={50} />
            <h3 className="mb-2 text-3xl font-bold">Tailwind CSS</h3>
            <p className="w-70">
              Frameworwk CSS incontournable simple d&apos;utilisation.
            </p>
          </div>

          <div>
            <Image
              src={"/tailwindLogo.png"}
              alt=""
              width={500}
              height={500}
              className="absolute -top-8 -right-45 -z-1 opacity-40"
            />
          </div>
        </li>

        <li className="group relative h-[250px] overflow-hidden rounded-xl bg-gradient-to-bl from-[#0D52FF]/70 to-[#144C74]/70">
          <div className="absolute bottom-0 -left-15 z-1 flex flex-col items-center">
            <h3 className="mr-2 text-[18px] font-semibold text-white">
              Typescript
            </h3>
            <Image src={"/typescript.png"} alt="" width={300} height={300} />
          </div>

          <div className="absolute -top-3 -right-35">
            <Image
              src={"/typescript.png"}
              alt=""
              width={500}
              height={500}
              className="mb-5 block opacity-30"
            />
          </div>
        </li>
      </ul>

      <div className="relative z-1 my-20 rounded-xl bg-[#222] px-10 py-8 sm:px-20 sm:py-10 lg:px-25 lg:py-20 xl:my-30 xl:px-35">
        <ul className="grid grid-cols-[repeat(2,_75px)] place-items-center justify-between gap-y-10 sm:grid-cols-[repeat(2,_95px)] md:grid-cols-[repeat(4,_125px)]">
          {technos.map((t, index) => (
            <li className="technos group" key={index}>
              <Image
                src={t.img}
                alt={t.alt}
                width={t.width}
                height={t.height}
                className={t.classNameImg}
              />
              <div
                className={`technos-light group-hover:h-[70px] group-hover:w-[70px] ${t.bgLight}`}
              />
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 flex flex-col gap-y-5 sm:mt-15 md:flex-row md:justify-between md:gap-x-5 xl:mt-20 xl:gap-x-15">
          <div className="h-12 rounded-lg border-[3px] border-[#1F662E] bg-gradient-to-b from-[#fff] to-[#A6A6A6] text-center md:flex-1">
            <Image
              src={"/mongoDB.png"}
              alt=""
              width={120}
              height={50}
              className="inline-flex"
            />
          </div>

          <div className="mt-5 h-12 rounded-lg border-[3px] border-[#2968DB] bg-white text-center md:mt-0 md:flex-1">
            <Image
              src={"/postgreSQL.png"}
              alt=""
              width={150}
              height={100}
              className="inline-flex h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
