import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://techjoy.vercel.app"),
  title: {
    default: "TECHJOY | Recycle Technology. Power the Future.",
    template: "%s | TECHJOY"
  },
  description:
    "TECHJOY is a premium electronic recycling and phone buyback platform with rewards, corporate ESG tools, and transparent impact tracking.",
  openGraph: {
    title: "TECHJOY",
    description: "Recycle devices, earn rewards, and drive measurable climate impact.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
