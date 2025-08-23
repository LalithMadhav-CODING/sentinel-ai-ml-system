"use client";

import { useEffect, useState } from "react";

const messages = [
  "Initializing Sentinel AI/ML System...",
  "Loading core modules...",
  "Applying cyberpunk theme...",
  "System ready. Welcome, Operative.",
];

export default function BootSequence() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (currentMessage < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessage((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentMessage]);

  return (
    <div className="mt-6 text-lg">
      {messages.slice(0, currentMessage + 1).map((msg, i) => (
        <p key={i} className="animate-fadeIn">{msg}</p>
      ))}
    </div>
  );
}
