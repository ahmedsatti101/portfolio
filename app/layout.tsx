"use client";

import { useEffect, useRef } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyRef = useRef<HTMLBodyElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!bodyRef.current) return;

      const mouseX = ev.clientX / window.innerWidth;
      const mouseY = ev.clientY / window.innerHeight;
      bodyRef.current.style.setProperty("--x", `${mouseX}px`);
      bodyRef.current.style.setProperty("--y", `${mouseY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [])
  
  return (
    <html lang="en">
      <body
        ref={bodyRef}
        //className="bg-[#2c447b] bg-no-repeat min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}

//background transparent radial-gradient(at calc(var(--mouse-x, 0) * 100%) calc(var(--mouse-y, 0) * 100%), #376ab2, #2c447b) no-repeat 0 0
