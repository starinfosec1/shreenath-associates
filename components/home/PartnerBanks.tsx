"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const banks = [
  { name: "SBI", image: "/banks/sbi.png" },
  { name: "HDFC BANK", image: "/banks/hdfc.png" },
  { name: "ICICI Bank", image: "/banks/icici.png" },
  { name: "Axis Bank", image: "/banks/axis.png" },
  { name: "Bajaj Finserv", image: "/banks/bajaj.png" },
  { name: "Kotak", image: "/banks/kotak.png" },
  { name: "IDFC FIRST Bank", image: "/banks/idfc.png" },
  { name: "IndusInd Bank", image: "/banks/indus.png" },
  { name: "Muthoot Finance", image: "/banks/muthoot.png" },
  { name: "RBL BANK", image: "/banks/rbl.png" },
  { name: "Union Bank", image: "/banks/union.png" },
  { name: "Hero FinCorp", image: "/banks/hero.png" },
  { name: "Chola", image: "/banks/chola.png" }
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
          className="flex space-x-12 px-6 whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Double the array for seamless loop */}
          {[...banks, ...banks].map((bank, i) => (
            <div
              key={i}
              className="px-6 py-4 bg-white rounded-xl shadow-sm border border-gray-100 opacity-70 hover:opacity-100 hover:scale-105 transition-all flex items-center justify-center min-w-[280px] h-[130px] relative group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Fallback to text if image fails/not loaded by rendering text visually hidden or using title */}
                <Image
                  src={bank.image}
                  alt={bank.name}
                  fill
                  className="object-contain p-2"
                  onError={(e) => {
                    // Fallback to displaying the name if image is missing
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement?.nextElementSibling) {
                      e.currentTarget.parentElement.nextElementSibling.classList.remove('hidden');
                    }
                  }}
                />
              </div>
              <span className="hidden font-bold text-xl text-[#111111] absolute text-center w-full">{bank.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
