import type { Metadata } from "next";
import { Montserrat, Gloock } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LenisProvider from "@/app/components/LenisProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRIMSAI | Partenaire de Croissance pour la Beauté",
  description: "CRIMSAI aide les professionnels de la beauté à connecter leur visibilité, leur acquisition et leur fidélisation au sein d'un système de croissance cohérent.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${gloock.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-encre">
        <LenisProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
