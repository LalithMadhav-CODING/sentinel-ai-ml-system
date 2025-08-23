"use client";

import { useEffect, useState } from "react";

export default function GlitchText({ text }: { text: string }) {
  const [glitch, setGlitch] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(
        text
          .split("")
          .map((char) =>
            Math.random() > 0.9
              ? String.fromCharCode(33 + Math.random() * 94)
              : char
          )
          .join("")
      );
    }, 200);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-green-400 glitch-text">
      {glitch}
    </h1>
  );
}
