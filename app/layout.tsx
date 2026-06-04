import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "श्रीनाथ Associates | Loan & Finance Consultancy",
  description: "मराठी भाषेतील आधुनिक, SEO Friendly, fully responsive loan & finance consultancy website. सर्व प्रकारचे बँक व फायनान्स लोन उपलब्ध.",
  keywords: ["लोन सेवा", "गृह कर्ज", "व्यवसाय कर्ज", "मुद्रा लोन", "finance services", "personal loan", "business loan", "home loan consultant", "poultry loan"],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={`${mukta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative bg-white text-[#111111]">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

