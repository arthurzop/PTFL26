import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--bricolage",
});

export const metadata: Metadata = {
  title: "AM PTFL26",
  description: "Artur Medeiros' 2026 Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        bricolage.className,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children} </body>
    </html>
  );
}
