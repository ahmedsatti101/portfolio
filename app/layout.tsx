"use client";

import { useEffect, useRef } from "react";
import { Zain } from "next/font/google";
import "./globals.css";

const zain = Zain({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-zain",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyRef = useRef<HTMLBodyElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!bodyRef.current) return;

      const mouseX = (ev.clientX / window.innerWidth) * 100;
      const mouseY = (ev.clientY / window.innerHeight) * 100;

      bodyRef.current.style.setProperty("--x", `${mouseX}%`);
      bodyRef.current.style.setProperty("--y", `${mouseY}%`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <html lang="en">
      <body
        ref={bodyRef}
        className={`min-xl:bg-transparent min-xl:rounded-full min-xl:bg-no-repeat min-xl:min-h-screen ${zain.variable} font-sans
                   min-xl:bg-[radial-gradient(at_var(--x)_var(--y),#376ab2_0%,#2c447b_100%)] bg-[#2c447b]`}
      >
        {children}
      </body>
    </html>
  );
}
