import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gradient-to-tl from-[#5d44ad] to-[#2e54ae] bg-no-repeat min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
