"use client";

import Grainient from "@/components/Grainient";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import * as L from "lucide-react";

import me from "@/public/me.png";

export default function About() {
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
  }

  return (
    <div className="max-h-screen overflow-hidden">
      <Header></Header>
      <section className="w-full p-10 flex items-center justify-center">
        <div className="flex flex-row items-center gap-8">
          <Image
            src={me}
            alt="myself"
            height={600}
            className="rounded-md"
            placeholder="blur"
          ></Image>
          <div className="w-150 flex flex-col justify-between h-150">
            <p className="text-6xl font-semibold">Sobre Mim</p>
            <p className="text-pretty">
              Atualmente cursando Design Gráfico, com foco eo web design e na
              criação de experiências digitais bem estruturadas. Trabalho com
              UI/UX, product design e brand design, pensando não só na estética,
              mas em como cada interface funciona, se organiza e se conecta com
              quem usa.
              <br />
              <br />
              Tenho como principal ferramenta o Figma, onde desenvolvo layouts,
              protótipos e sistemas visuais com consistência. Também desenvolvo
              em React e Next.js, o que me permite criar projetos mais completos
              e próximos da realidade final, unindo design e implementação.
              <br />
              <br />
              Me interesso por projetos com identidade forte, linguagem
              contemporânea e espaço para explorar interações, microanimações e
              soluções bem pensadas. Busco sempre evoluir na forma como construo
              experiências digitais, equilibrando criatividade, estratégia e
              execução.
            </p>
            <div className="flex flex-col gap-2 w-full ">
              <div className="flex w-full justify-between gap-2">
                <Link
                  href="https://www.linkedin.com/in/arthurzop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row w-full items-center justify-center p-2 border-1 hover:bg-off-white hover:text-eerie-black cursor-pointer"
                >
                  Linkedin
                  <L.ArrowUpRight
                    height={16}
                    className="hidden group-hover:block"
                  />
                </Link>
                <Link
                  href="https://www.behance.net/arthurzop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row w-full items-center justify-center p-2 border-1 hover:bg-off-white hover:text-eerie-black cursor-pointer"
                >
                  Behance
                  <L.ArrowUpRight
                    height={16}
                    className="hidden group-hover:block"
                  />
                </Link>
                <Link
                  href="https://github.com/arthurzop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row w-full items-center justify-center p-2 border-1 hover:bg-off-white hover:text-eerie-black cursor-pointer"
                >
                  Github
                  <L.ArrowUpRight
                    height={16}
                    className="hidden group-hover:block"
                  />
                </Link>
                <a
                  href="/cv-artur.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row w-full items-center justify-center p-2 border-1 hover:bg-off-white hover:text-eerie-black cursor-pointer"
                >
                  CV
                  <L.ArrowUpRight
                    height={16}
                    className="hidden group-hover:block"
                  />
                </a>
              </div>
              <div
                className="w-full bg-off-white text-eerie-black p-2 px-4 flex justify-between items-center cursor-pointer rounded hover:bg-fluorescent-adolescent hover:text-off-white"
                onClick={() => {
                  copy("@medeirosartur48@gmail.com");
                }}
              >
                <p className="w-full text-center font-semibold">
                  Entre em contato: medeirosartur48@gmail.com
                </p>
                <L.Copy height={16} width={16} className=""></L.Copy>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed inset-0 -z-10 opacity-20">
        <Grainient
          color1="#001457"
          color2="#0E3062"
          color3="#124188"
          timeSpeed={2}
          colorBalance={0}
          warpStrength={3}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
    </div>
  );
}
