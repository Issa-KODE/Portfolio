import Image from "next/image";
import Form from "./Form";
export default function Contact() {
  return (
    <section className="pt-50">
        <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Besoin d&apos;un projet ?
        </h3>
        <div className="flex flex-col lg:flex-row lg:gap-x-20 mt-5">
          <Form />

          <div className="mt-15 rounded-lg p-5 border border-gray-300 lg:mt-7">
            <h4 className="text-[20px] font-semibold md:text-2xl">
              Suivez-moi
            </h4>

            <p className="text-sm sm:text-[16px] mt-3 mb-8 text-[#222]">
              Suivez mon contenu afin de suivre les dernières actualitées et ne
              rien manquées.
            </p>

            <ul className="mx-auto flex gap-x-2 w-full max-w-md justify-between">
              <li className="w-20">
                <h5 className="text-sm sm:text-[16px] text-center">GitHub</h5>

                <div className="mt-2 flex aspect-square cursor-pointer items-center justify-center rounded-xl border border-gray-900/30 hover:bg-gray-900/5 sm:w-20">
                  <div>
                    <Image src={"/github.webp"} alt="" width={80} height={80} />
                  </div>
                </div>
              </li>
              <li className="w-20">
                <h5 className="text-sm sm:text-[16px] text-center">LinkedIn</h5>

                <div className="mt-2 flex aspect-square cursor-pointer items-center justify-center rounded-xl border border-gray-900/30 hover:bg-gray-900/5 sm:w-20">
                  <div>
                    <Image
                      src={"/linkedIn.webp"}
                      alt=""
                      width={55}
                      height={55}
                    />
                  </div>
                </div>
              </li>
              <li className="w-20">
                <h5 className="text-sm sm:text-[16px] text-center">X</h5>

                <div className="mt-2 flex aspect-square cursor-pointer items-center justify-center rounded-xl border border-gray-900/30 hover:bg-gray-900/5 sm:w-20">
                  <div>
                    <Image
                      src={"/twitter-X.png"}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
}
