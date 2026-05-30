import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrains.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#e5d3bf]">
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
