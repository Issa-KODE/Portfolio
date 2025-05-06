/* eslint-disable react/no-unescaped-entities */
// import { Code, Hand, Sheet } from "lucide-react";
// import Image from "next/image";

import Faq from "./Faq";

export default function About() {
  return (
    <section className="mt-20 pt-20">
      <div className="flex flex-col lg:flex-row lg:gap-x-30">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Qui suis-je ?
          </h2>

          <div className="mt-10 space-y-6 lg:text-lg lg:mt-12">
            <p>
              Bonjour, moi c'est{" "}
              <span className="text-lg font-bold text-blue-400">
                Issa Petit
              </span>{" "}
              développeur web frontend et backend depuis 3 ans. Étant
              autodidacte, j'ai commencé par apprendre{" "}
              <strong>HTML et CSS</strong> en premier lieu, puis{" "}
              <strong>JavaScript.</strong>
            </p>

            <p>
              Ayant ressenti le besoin d'aller plus loin j'ai décidé d'entrer
              dans une école qui m'apporterait plus de cadre et de
              connaissances. J'ai pu y apprendre{" "}
              <strong>React, Node.js et MySQL pour les Base de données.</strong>{" "}
              Suite à cela j'ai pu obtenir un dîplome de Niveau 5 Développeur
              web Full-Stack.
            </p>

            <p>
              Toujours dans l'optique de me perfectionner j'ai continué
              d'apprendre en tant qu'autodidacte jusqu'à aquérir de nombreuses
              compétences notamment sur{" "}
              <strong>Next.js, Typescript ainsi que React Native</strong> pour
              les applications mobiles.
            </p>

            <p>
              À ce jour j'ai réalisé plusieurs projets web et mobiles, avec les
              pratiques les plus modernes. Disponible pour collaborer en equipe
              j'aurais le plaisir de vous aider.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mt-20 text-3xl font-bold sm:text-4xl md:text-5xl lg:mt-0">
            FAQ
          </h2>

          <Faq />
        </div>
      </div>
    </section>
  );
}
