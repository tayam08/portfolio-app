import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Taebeen Am | LLM Agent · RAG · Financial AI",
  description: "LLM Agent · RAG · Financial AI Portfolio — Economics + Mathematics, building AI applications for finance, insurance, and risk domains end-to-end: problem definition, MVP, deployment, iteration.",
  openGraph: {
    title: "Taebeen Am | LLM Agent · RAG · Financial AI",
    description: "LLM Agent · RAG · Financial AI · End-to-End Product Development — Economics + Mathematics",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
