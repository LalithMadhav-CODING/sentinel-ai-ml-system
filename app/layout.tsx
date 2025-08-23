import "./globals.css";
import "../styles/cyberpunk.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Sentinel AI/ML System",
  description: "Cyberpunk AI assistant with secret discovery mechanism",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-green-400 font-mono scanlines">
        {children}
      </body>
    </html>
  );
}
