"use client";

import BootSequence from "./components/BootSequence";
import MatrixRain from "./components/MatrixRain";
import GlitchText from "./components/GlitchText";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <MatrixRain />
      <div className="absolute z-10 text-center">
        <GlitchText text="⚡ SENTINEL AI/ML SYSTEM ⚡" />
        <BootSequence />
      </div>
    </main>
  );
}
