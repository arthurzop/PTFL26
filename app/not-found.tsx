"use client";
import Link from "next/link";
import Header from "@/components/header";
import Grainient from "@/components/Grainient";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-hidden">
      <Header />
      <section className="flex flex-col h-200 w-full items-center justify-center">
        <p className="text-[calc(10vw+8px)] font-bold">[404]</p>
        <p className="text-gs-200 text-2xl">Página não encontrada ://</p>

        <Link
          href="/"
          className="text-fluorescent-adolescent hover:underline pt-2"
        >
          Voltar pra home
        </Link>
      </section>

      <div className="fixed inset-0 -z-10 opacity-20">
        <Grainient
          {...{
            color1: "#001457",
            color2: "#0E3062",
            color3: "#124188",
            timeSpeed: 2,
            colorBalance: 0,
            warpStrength: 3,
            warpFrequency: 5,
            warpSpeed: 2,
            warpAmplitude: 50,
            blendAngle: 0,
            blendSoftness: 0.05,
            rotationAmount: 500,
            noiseScale: 2,
            grainAmount: 0.1,
            grainScale: 2,
            grainAnimated: false,
            contrast: 1.5,
            gamma: 1,
            saturation: 1,
            centerX: 0,
            centerY: 0,
            zoom: 0.9,
          }}
        />
      </div>
    </div>
  );
}
