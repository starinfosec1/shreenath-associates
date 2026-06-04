"use client";

import { motion } from "framer-motion";

const banks = [
  "SBI", "HDFC BANK", "ICICI Bank", "Axis Bank",
  "Bajaj Finserv", "Kotak", "IDFC FIRST Bank", "IndusInd Bank",
  "MANAPPURAM", "RBL BANK", "Union Bank", "Hero FinCorp", "Chola"
];

export default function PartnerBanks() {
  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-2xl font-bold text-black-400">आमचे बँकिंग भागीदार</h3>
        <p className="text-xl text-gray-600 mb-8">६०+ राष्ट्रीयकृत बँका, एनबीएफसी (NBFC) आणि फायनान्स कंपन्या</p>
      </div>

      <div className="relative flex w-full">
        <motion.div
          className="flex space-x-12 px-6 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {/* Double the array for seamless loop */}
          {[...banks, ...banks].map((bank, i) => (
            <div
              key={i}
              className="px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 text-xl font-bold text-[#111111] opacity-70 hover:opacity-100 hover:scale-105 transition-all flex items-center justify-center min-w-[200px]"
            >
              {bank}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
