"use client";

import Grainient from "@/components/Grainient";
import Header from "@/components/header";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/projectCard";
import { useEffect, useState } from "react";
import ScrollTop from "@/components/scrollTop";

export default function Portfolio() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 120); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />

      <section className="grid grid-cols-1 p-4 relative z-0 gap-6 md:grid-cols-4 md:p-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      {showTop && <ScrollTop></ScrollTop>}

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
