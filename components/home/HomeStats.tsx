"use client";

import { motion, useInView } from "framer-motion";
import { Users, CheckCircle, Award, Landmark } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

const stats = [
  {
    id: 1,
    value: 1550,
    suffix: "+",
    icon: Users,
    description: "समाधानी ग्राहक",
  },
  {
    id: 2,
    value: 100,
    suffix: "%",
    icon: CheckCircle,
    description: "कर्ज मंजुरी",
  },
  {
    id: 3,
    value: 15,
    suffix: "+",
    icon: Landmark,
    description: "सरकारी योजना",
  },
  {
    id: 4,
    value: 5,
    suffix: "+",
    icon: Award,
    description: "वर्षांचा अनुभव",
  },
  {
    id: 5,
    value: 100,
    suffix: "+",
    icon: Landmark,
    description: "बँका",
  },
];

const toMarathiNumbers = (num: string | number) => {
  const marathiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  return num.toString().replace(/[0-9]/g, (w) => marathiDigits[+w]);
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {toMarathiNumbers(count)}{suffix}
    </span>
  );
}

export default function HomeStats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group"
              >
                <div className="mx-auto w-16 h-16 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#111111] mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xl font-semibold text-gray-800">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
