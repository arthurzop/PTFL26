"use client";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Grainient from "@/components/Grainient";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return notFound();

  const project = projects[index];

  const nextIndex = (index + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <div className="w-full h-dvh flex flex-col gap-4 overflow-hidden">
      <Header />
      <section className="flex overflow-hidden">
        {/* ESQUERDA FIXA */}
        <div className="w-2/5 p-8 flex flex-col justify-between sticky top-0">
          <div className="flex flex-col h-full justify-between">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-4xl font-semibold">
                {project.id}. {project.title}
              </h1>
              <p className="text-gs-400">{project.year}</p>
            </div>

            <p className="text-gs-200 text-2xl pt-8 text-justify font-light h-full">
              {project.description}
            </p>

            <div className="pt-8 w-full justify-between flex">
              <p className="font-light text-gs-200">
                Categorias: {project.category.join(" / ")}
              </p>

              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="hover:underline"
              >
                Próximo → {nextProject.title}
              </Link>
            </div>
          </div>
        </div>

        {/* DIREITA SCROLL */}
        <div className="w-3/5 h-dvh overflow-y-auto p-8 flex flex-col gap-6">
          {project.images.map((img, i) => (
            <div key={i} className="relative w-full aspect-square">
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
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
