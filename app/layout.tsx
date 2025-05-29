"use client";

import { useEffect, useRef } from "react";
import { Zain } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
        className={`min-xl:rounded-full min-xl:bg-no-repeat min-xl:min-h-screen ${zain.variable} font-sans text-[#a5a5a5]
                   min-xl:bg-[radial-gradient(circle_75px_at_var(--x)_var(--y),#2c447b_20%,#193051_100%)] bg-[#193051]`}
        style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
      >
        <title>Ahmed Mohamed</title>
        <header className="flex w-full items-center justify-between min-md:text-[22px]">
          <div className="max-md:m-2 flex gap-2 min-md:p-4">
            <Image src="/brand-github.svg" alt="Github logo" width={30} height={30} className="min-md:h-[50px] min-md:w-[40px]"/>
            <Image src="/brand-linkedin.svg" alt="Linkedin logo" width={30} height={30} className="min-md:h-[50px] min-md:w-[40px]" />
          </div>
          <div className="flex-row-reverse m-3 lg:text-3xl">
            <button className="max-md:hidden p-2">About</button>
            <button className="max-md:hidden p-2">Experience</button>
            <button className="max-md:hidden p-2">Projects</button>
            <button className="max-md:hidden p-2">Skills</button>
            <button className="max-md:border-1 border-solid rounded-lg max-md:px-1 min-md:p-2 max-md:text-lg">Contact me</button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
