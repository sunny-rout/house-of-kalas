import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Kalas — Performing Arts Academy in Mumbai",
  description:
    "House of Kalas is a performing arts home in Mumbai where every student learns, grows, and shines through dance. Book a trial class today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
