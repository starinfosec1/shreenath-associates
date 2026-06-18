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
  title: "श्रीनाथ Associates | Expert Loan & Finance Consultancy",
  description: "श्रीनाथ Associates - Your trusted Loan & Finance Consultancy. सर्व प्रकारचे बँक आणि फायनान्स लोन (गृह कर्ज, व्यवसाय कर्ज, मुद्रा लोन) त्वरित आणि सुलभ प्रक्रियेसह उपलब्ध.",
  keywords: [
    "लोन सेवा",
    "गृह कर्ज",
    "व्यवसाय कर्ज",
    "मुद्रा लोन",
    "पोल्ट्री लोन",
    "कृषी कर्ज",
    "finance services",
    "personal loan",
    "business loan",
    "home loan consultant",
    "poultry loan",
    "Shreenath Associates",
    "best loan consultant",
    "instant loan approval",
    "financial advisory",
    "MSME business loan",
    "project funding expert",
    "CMEGP and PMEGP loan consultant"
  ],
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

