"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "गृह कर्ज (Home Loan)",
    desc: "स्वप्नातील घरासाठी सोपे गृह कर्ज.",
    image: "/images/home_loan.png",
  },
  {
    id: 2,
    title: "व्यवसाय कर्ज (Business Loan)",
    desc: "तुमच्या व्यवसायाच्या प्रगतीसाठी भांडवल.",
    image: "/images/business_loan.png",
  },
  {
    id: 3,
    title: "पोल्ट्री लोन (Poultry Loan)",
    desc: "पोल्ट्री व शेतीपूरक व्यवसायासाठी अर्थसहाय्य.",
    image: "/images/poultry-loan.png",
  },
  {
    id: 4,
    title: "वाहन कर्ज (Vehicle Loan)",
    desc: "नवीन व जुन्या वाहनांसाठी सुलभ कर्ज.",
    image: "/images/vehical-loan.png",
  },
  {
    id: 5,
    title: "मुद्रा योजना (Mudra Loan)",
    desc: "लघु व सूक्ष्म उद्योगांसाठी मुद्रा कर्ज योजना.",
    image: "/images/mudra_loan.png",
  },
  {
    id: 6,
    title: "वैयक्तिक कर्ज (Personal Loan)",
    desc: "अडचणीच्या वेळी तात्काळ वैयक्तिक कर्ज.",
    image: "/images/personal-loan.png",
  },
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#111111] mb-4"
          >
            आमच्या <span className="text-[#D32F2F]">सेवा</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            आम्ही सर्व प्रकारचे कर्ज व फायनान्स सुविधा अगदी सोप्या प्रक्रियेत उपलब्ध करून देतो.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain md:object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#D32F2F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-[#D32F2F] font-bold hover:text-red-800 transition-colors"
                >
                  अधिक माहिती <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white rounded-full font-bold text-lg transition-colors"
          >
            सर्व सेवा पहा
          </Link>
        </div>
      </div>
    </section>
  );
}
