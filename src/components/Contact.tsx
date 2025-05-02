import Image from "next/image"
import Form from "./Form"
export default function Contact() {
  return <section className="pt-50">
    <h2 className="text-6xl font-semibold mb-15">Contactez-moi</h2>

    <div className="bg-[#111] px-6 pt-8 pb-12 rounded-xl xl:px-10 xl:pt-12 xl:pb-15">
      <h3 className="text-white text-2xl xl:text-3xl">Besoin d&apos;un projet ?</h3>
      <div className="flex flex-col lg:flex-row lg:gap-x-5">
        <Form />

        <div className="border border-gray-300/20 my-10"/>

        <div className="p-5 rounded-lg bg-white/95 mt-7">
          <h4 className="text-[20px] font-semibold md:text-2xl">Suivez-moi</h4>

          <p className="mt-3 mb-8 text-[#222]">Suivez mon contenu afin de suivre les dernières actualitées et ne rien manquées.</p>

          <ul className="grid grid-cols-3">
            <li className="w-20">
              <h5 className="text-center">GitHub</h5>

              <div className="border border-gray-900/30 rounded-xl w-20 aspect-square flex justify-center items-center mt-2 cursor-pointer hover:bg-gray-900/5">
                <div>
                  <Image src={"/github.webp"} alt="" width={80} height={80}/>
                </div>
              </div>
            </li>
            <li className="w-20">
              <h5 className="text-center">LinkedIn</h5>

              <div className="border border-gray-900/30 rounded-xl w-20 aspect-square flex justify-center items-center mt-2 cursor-pointer hover:bg-gray-900/5">
                <div>
                  <Image src={"/linkedIn.webp"} alt="" width={55} height={55}/>
                </div>
              </div>
            </li>
            <li className="w-20">
              <h5 className="text-center">X</h5>

              <div className="border border-gray-900/30 rounded-xl w-20 aspect-square flex justify-center items-center mt-2 cursor-pointer hover:bg-gray-900/5">
                <div>
                  <Image src={"/twitter-X.png"} alt="" width={60} height={60}/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
}