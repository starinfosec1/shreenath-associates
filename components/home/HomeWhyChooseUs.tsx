"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, FileText, UserCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "जलद सेवा",
    desc: "तुमच्या वेळेची किंमत ओळखून आम्ही कमीत कमी वेळेत कर्ज मंजूर करून देतो.",
  },
  {
    icon: ShieldCheck,
    title: "विश्वासार्ह मार्गदर्शन",
    desc: "योग्य आणि पारदर्शक मार्गदर्शन, जे तुमच्या भल्यासाठी आहे.",
  },
  {
    icon: FileText,
    title: "कमी कागदपत्रे",
    desc: "फक्त आवश्यक कागदपत्रांसह सुलभ प्रक्रिया.",
  },
  {
    icon: UserCheck,
    title: "अनुभवी टीम",
    desc: "आमची तज्ज्ञ टीम तुम्हाला योग्य तो सल्ला देईल.",
  },
];

export default function HomeWhyChooseUs() {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                आम्हाला का <span className="text-[#D32F2F]">निवडावे?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                आम्ही केवळ कर्ज देत नाही, तर तुमच्या प्रगतीत भागीदार बनतो. 
                आमचा उद्देश तुम्हाला योग्य व्याजदरात आणि सुलभ प्रक्रियेने कर्ज उपलब्ध करून देणे हा आहे.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div 
                      key={i} 
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center">
                        <Icon className="text-[#D32F2F]" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                        <p className="text-gray-400">{feature.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img
                src="/images/business_loan.png"
                alt="Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/80 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
