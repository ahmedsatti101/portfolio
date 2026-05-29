import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
      className={`${jetBrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#e5d3bf]">{children}</body>
    </html>
  );
}
