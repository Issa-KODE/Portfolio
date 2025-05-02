import Image from "next/image";

export default function Technos() {
  return <section className="pt-25 lg:pt-40">
    <div>
      <h2 className="text-[50px] font-bold bg-gradient-to-b from-[#177CFF] to-[#2BA1EA]/50 text-transparent bg-clip-text">Techs utilisées.</h2>
      <p>Les meilleures technologies afin de livrer un produit adéquat.</p>
    </div>

    <ul className="mt-20 grid gap-5 md:grid-cols-2 lg:mt-30">
      <li className="relative overflow-hidden bg-gradient-to-bl from-[#171717]/50 to-[#C0C0C0]/50 h-[250px] rounded-xl group">
        <div className="absolute z-1 bottom-10 left-12">
          <Image src={"/nextjs.png"} alt="" width={100} height={100} className="mb-5"/>
          <h3 className="text-[25px] font-bold">Next.js</h3>
        </div>

        <div className="absolute -top-12 -right-12">
          <Image src={"/nextjs.png"} alt="" width={300} height={200} className="mb-5 opacity-50"/>
        </div>
      </li>

      <li className="relative z-1 overflow-hidden bg-gradient-to-b from-[#20CFFF] to-[#3F7CEE] rounded-xl h-[250px] lg:">
        <div className="text-white mt-20 ml-5">
          <h3 className="font-bold mb-2 text-3xl">React</h3>
          <p>React framework JavaScript éprouvé afin de construire des interfaces utilisateur dynamiques et intéractives.</p>
        </div>

        <div>
          <Image src={"/react.png"} alt="" width={300} height={300} className="absolute -z-1 -top-10 -right-15 opacity-40"/>
        </div>
      </li>

      <li className="relative z-1 overflow-hidden bg-gradient-to-b from-[#01679A]/50 to-[#20CFFF]/70 rounded-xl h-[250px]">
        <div className="flex flex-col gap-y-5 text-white mt-8 ml-5">
          <Image src={"/tailwindLogo.png"} alt="" width={50} height={50}/>
          <h3 className="font-bold mb-2 text-3xl">Tailwind CSS</h3>
          <p className="w-70">Frameworwk CSS incontournable simple d&apos;utilisation.</p>
        </div>

        <div>
          <Image src={"/tailwindLogo.png"} alt="" width={500} height={500} className="absolute -z-1 -top-8 -right-45 opacity-40"/>
        </div>
      </li>

      <li className="relative overflow-hidden bg-gradient-to-bl from-[#0D52FF]/70 to-[#144C74]/70 h-[250px] rounded-xl group">
        <div className="flex flex-col items-center absolute z-1 bottom-0 -left-15">
          <h3 className="text-[18px] font-semibold text-white mr-2">Typescript</h3>
          <Image src={"/typescript.png"} alt="" width={300} height={300}/>
        </div>

        <div className="absolute -top-3 -right-35">
          <Image src={"/typescript.png"} alt="" width={500} height={500} className="block mb-5 opacity-30"/>
        </div>
      </li>
    </ul>

    <div className="relative z-1 bg-[#222] my-20 py-10 px-20 rounded-xl lg:py-20 lg:px-25 xl:px-35 xl:my-30">
        <ul className="grid gap-y-10 place-items-center justify-between grid-cols-[repeat(2,_95px)] md:grid-cols-[repeat(4,_125px)]">
          <li className="relative group bg-gradient-to-b from-[#222] to-[#333] border border-[#6D6969]/70 flex justify-center items-center rounded-[10px] w-[95px] aspect-square xl:w-[115px] hover:cursor-pointer">
            <Image src={"/nodejs.png"} alt="" width={58} height={66} className="w-9 xl:w-12"/>
            <div className="absolute -z-1 w-[60px] h-[60px] blur-[50px] bg-[#2FB528] transition-all duration-300 group-hover:w-[70px] group-hover:h-[70px]"/>
          </li>

          <li className="relative group bg-gradient-to-b from-[#222] to-[#333] border border-[#6D6969]/70 flex justify-center items-center rounded-[10px] w-[95px] aspect-square xl:w-[115px] hover:cursor-pointer">
            <Image src={"/html.png"} alt="" width={103} height={56} className="w-15 xl:w-20"/>
            <div className="absolute -z-1 w-[60px] h-[60px] blur-[50px] bg-[#AE5027] transition-all duration-300 group-hover:w-[70px] group-hover:h-[70px]"/>
          </li>

          <li className="relative group bg-gradient-to-b from-[#222] to-[#333] border border-[#6D6969]/70 flex justify-center items-center rounded-[10px] w-[95px] aspect-square xl:w-[115px] hover:cursor-pointer">
            <Image src={"/css3.png"} alt="" width={81} height={81} className="w-12 xl:w-15"/>
            <div className="absolute -z-1 w-[60px] h-[60px] blur-[50px] bg-[#1E37B7] transition-all duration-300 group-hover:w-[70px] group-hover:h-[70px]"/>
          </li>

          <li className="relative group bg-gradient-to-b from-[#222] to-[#333] border border-[#6D6969]/70 flex justify-center items-center rounded-[10px] w-[95px] aspect-square xl:w-[115px] hover:cursor-pointer">
            <Image src={"/js.png"} alt="" width={50} height={50} className="rounded w-9 xl:w-11"/>
            <div className="absolute -z-1 w-[60px] h-[60px] blur-[50px] bg-[#CEAA18] transition-all duration-300 group-hover:w-[70px] group-hover:h-[70px]"/>
          </li>
        </ul>

        <div className="flex flex-col gap-y-5 mt-15 mx-auto md:flex-row md:justify-between md:gap-x-5 xl:gap-x-15 xl:mt-20">
          <div className="bg-gradient-to-b from-[#fff] to-[#A6A6A6] rounded-lg border-[3px] border-[#1F662E] text-center h-12 md:flex-1">
            <Image src={"/mongoDB.png"} alt="" width={120} height={50} className="inline-flex"/>
          </div>

          <div className="bg-white rounded-lg border-[3px] border-[#2968DB] text-center h-12 mt-5 md:flex-1 md:mt-0">
            <Image src={"/postgreSQL.png"} alt="" width={150} height={100} className="inline-flex h-full object-cover"/>
          </div>
        </div>
    </div>
  </section>
}