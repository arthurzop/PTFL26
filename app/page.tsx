"use client";

import Grainient from "@/components/Grainient";
import Link from "next/link";
import Image from "next/image";

import logo from "../public/am-logo.svg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pb-2 justify-between z-0">
      <header className="flex w-full p-8 pb-2 justify-between items-center">
        <Image src={logo} alt="AM PTFL LOGO" height={48} />
        <nav className="flex gap-4 text-2xl">
          <Link href="/portfolio">
            <span className="hover:text-gs-200 hover:underline decoration-fluorescent-adolescent">
              !portfolio
            </span>
          </Link>
          <Link href="/sobre">
            <span className="hover:text-gs-200 hover:underline decoration-fluorescent-adolescent">
              !sobre mim
            </span>
          </Link>
        </nav>
      </header>
      <div className="flex w-full ps-8 text-gs-300 text-xl">
        UI/UX & Product Designer
      </div>
      <section className="flex-1 flex flex-col items-center justify-center gap-2">
        <p className="text-[calc(7vw+8px)] font-bold">web & design</p>
        <p className="text-[calc(7vw+8px)] font-bold">@ são paulo ↔ brasil</p>
        <p className="text-[calc(5vw+8px)] font-bold">open to work</p>
        <p className="text-[calc(2vw+8px)] font-light">ฅ^• ﻌ •^ฅ</p>
      </section>
      <p className="text-2xl font-light text-gs-300 mt-auto">
        web portfólio ✶ 2026
      </p>
      <div className="fixed inset-0 -z-10 opacity-20">
        <Grainient
          color1="#3975CF"
          color2="#303A4A"
          color3="#0028AD"
          timeSpeed={2}
          colorBalance={0.5}
          warpStrength={20}
          warpFrequency={1}
          warpSpeed={3}
          warpAmplitude={50}
          blendAngle={10}
          blendSoftness={4}
          rotationAmount={400}
          noiseScale={2}
          grainAmount={0.31}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.1}
          
        />
      </div>
    </div>
  );
}
