"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";
import { useState } from "react";

// Placeholder array for the sanction letter images.
// You just need to add the images inside the public/letters/ folder.
// Ensure your image names match these below, or update this array accordingly.
const sanctionLetters = [
  { id: 1, src: "/letters/1.png", title: "मंजुरी पत्र १" },
  { id: 2, src: "/letters/2.png", title: "मंजुरी पत्र २" },
  { id: 3, src: "/letters/3.png", title: "मंजुरी पत्र ३" },
  { id: 4, src: "/letters/4.png", title: "मंजुरी पत्र ४" },
  { id: 5, src: "/letters/5.png", title: "मंजुरी पत्र ५" },
  { id: 6, src: "/letters/6.png", title: "मंजुरी पत्र ६" },
];

export default function HappyCustomersPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            आमचे <span className="text-[#D32F2F]">समाधानी ग्राहक</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            आम्ही मिळवून दिलेल्या कर्ज मंजुरीची यशस्वी उदाहरणे (Sanction Letters).
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 flex justify-center items-center gap-3">
              <Award className="text-[#D32F2F]" size={36} />
              यशस्वी कर्ज मंजुरी पत्रे
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              खालील पत्रे आमच्या यशस्वी कामाची आणि ग्राहकांनी आमच्यावर टाकलेल्या विश्वासाची पोचपावती आहेत.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sanctionLetters.map((letter, index) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(letter.src)}
              >
                <div className="relative h-64 md:h-80 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={letter.src}
                    alt={letter.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image is missing
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/hero_bg.png"; // temporary fallback
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-6 border-t border-gray-100 bg-white flex justify-between items-center">
                  <h3 className="text-lg font-bold text-[#111111]">{letter.title}</h3>
                  <CheckCircle2 className="text-green-500" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] rounded-xl overflow-hidden bg-white/5">
            <button
              className="absolute top-4 right-4 z-10 bg-[#D32F2F] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Sanction Letter Full View"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
