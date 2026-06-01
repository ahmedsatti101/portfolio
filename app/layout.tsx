"use client";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html
      lang="en"
      className={`${jetBrains.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#e5d3bf]">
        <Box>
          <AppBar
            position="static"
            color="transparent"
            elevation={0}
          >
            <Toolbar style={{ paddingRight: 0 }}>
              {windowSize > 425 && (
                <div className="mt-7 flex flex-col uppercase text-2xl font-extrabold">
                  <p>
                    Ahmed Mohamed
                  </p>
                  <p>
                    Software Engineer
                  </p>
                </div>
              )}

              <Box sx={{ flexGrow: 1 }} />

              {windowSize > 425 && (
                <div className="flex flex-row items-center gap-6 mr-6 text-xl font-medium">
                  <a href="mailto:ahmedysatti@gmail.com" className="hover:text-black/[.50]">
                    <p>Contact</p>
                  </a>
                  <a href="/next.svg" target="_blank" rel="noopener noreferrer" className="hover:text-black/[.50]">
                    <p>Resume</p>
                  </a>
                </div>
              )}

              {windowSize <= 425 && (
                <IconButton sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        <main className="flex-grow">
          {children}
        </main>
        <footer
          className="w-full flex flex-col items-center justify-center gap-3 text-lg lg:text-xl font-medium text-black/[.50] bg-base-300 text-base-content p-4">
          <aside className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center justify-center gap-2">
              <a
                href="https://www.linkedin.com/in/ahmed-mohamed-566115221"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://github.com/ahmedsatti101"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                Github
              </a>
            </div>
            <p className="flex items-center justify-center gap-1">
              <CopyrightOutlinedIcon fontSize="small" /> {new Date().getFullYear()} Ahmed Mohamed
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
