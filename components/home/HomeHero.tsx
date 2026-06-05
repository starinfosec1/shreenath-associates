"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full aspect-[1600/894] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_bg.png"
          alt="Finance Consultant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            आपल्या स्वप्नांना <br className="hidden md:block" />
            <span className="text-[#D32F2F]">आर्थिक आधार</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium">
            सर्व प्रकारचे बँक व फायनान्स लोन उपलब्ध. जलद आणि विश्वासार्ह सेवा.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://wa.me/919860946943?text=नमस्कार,%20मला%20कर्जाविषयी%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#1fae54] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              WhatsApp Inquiry
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#D32F2F] text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Contact Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
