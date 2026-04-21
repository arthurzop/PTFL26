"use client";

import Grainient from "@/components/Grainient";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pb-2 justify-between z-0">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-2">
        <p className="text-4xl md:text-[calc(7vw+8px)] text-center font-bold">
          web & design
        </p>

        <p className="text-4xl md:text-[calc(7vw+8px)] text-center font-bold">
          @ são paulo ↔ brasil
        </p>

        <p className="text-2xl md:text-[calc(3vw+8px)] text-center font-bold">
          open to work
        </p>

        <p className="text-xl md:text-[calc(2vw+8px)] text-center font-light">
          ฅ^• ﻌ •^ฅ
        </p>
      </section>

      <p className="text-xl font-light text-gs-300 mt-auto">
        web portfolio ✶ 2026
      </p>

      <div className="fixed inset-0 -z-10 opacity-20">
        <Grainient
          color1="#3975CF"
          color2="#000AB7"
          color3="#0028AD"
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
