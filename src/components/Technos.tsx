import Image from "next/image";

export default function Technos() {
  return (
    <section className="pt-25 lg:pt-40">
      <div>
        <h2 className="text-[#177CFF] bg-clip-text text-4xl font-bold sm:text-[50px]">
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
    </section>
  );
}
