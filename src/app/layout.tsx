import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  title: "State of the Map India 2026",
  description: "The State of Map India 2026 happening along with FOSS4G Asia 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
