"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      {/* Hero Section */}
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            आमच्याबद्दल <span className="text-[#D32F2F]">माहिती</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            २०२२ पासून अविरत सेवा देणारी संस्था! आजपर्यंत यशस्वीरित्या १४.८९+ कोटी कर्जाचे वितरण, पारदर्शक आणि प्रामाणिक सुविधा!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business_loan.png"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                तुमच्या प्रगतीत आमचा सहभाग
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                मी अभिषेक सूर्यवंशी, श्रीनाथ Associates च्या माध्यमातून आम्ही लोकांना विविध प्रकारचे बँक कर्ज आणि फायनान्स सेवा मिळवून देण्यास मदत करतो. शेतकरी, लघु उद्योजक, नोकरदार आणि व्यावसायिक सर्वांसाठी योग्य मार्गदर्शन करणे हे आमचे ध्येय आहे.
              </p>

              <h3 className="text-2xl font-bold text-[#111111] mt-10 mb-6">आमचे मुख्य उद्देश:</h3>
              <ul className="space-y-4">
                {[
                  "कमी कागदपत्रांमध्ये कर्ज मंजुरी मिळवून देणे.",
                  "विविध सरकारी योजनांची अचूक माहिती व मार्गदर्शन.",
                  "ग्राहकांच्या गरजेनुसार योग्य बँक आणि व्याजदर निवडण्यास मदत.",
                  "संपूर्ण प्रक्रियेत पारदर्शकता आणि प्रामाणिकपणा."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-[#D32F2F] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
