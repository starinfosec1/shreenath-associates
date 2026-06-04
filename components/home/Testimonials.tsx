"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    "id": 1,
    "name": "चैतन्य श्रीकांत कदम",
    "role": "ग्राहक",
    "text": "श्रीनाथ असोसिएट्स ही कंपनी खूप चांगल्या पद्धतीने काम करते व कमीत कमी दिवसा मध्ये कर्जाची मंजूरी मिळवून देते. माझे वैयक्तिक कर्जाचे काम लवकरात लवकर व कमी दिवसात करून दिल्याबद्दल मी श्रीनाथ असोसिएट्स या कंपनीचा आभारी आहे.",
    "rating": 5,
    "location": "मसूचीवाडी"
  },
  {
    "id": 2,
    "name": "सुरज माने",
    "role": "ग्राहक",
    "text": "श्रीनाथ असोसिएट्स ही कंपनी खूप छान काम करते व कमी दिवसा मध्ये लोन मंजूर व अमाउंट बँक खात्यावरती जमा होते तसेच अण्णासाहेब पाटील महामंडळ योजनासारख्या अनेक योजना एकाच छताखाली मिळतात, मला माझ्या कर्जाची अमाउंट ८ दिवसामध्ये मिळाली त्याबद्‌द‌ल मी यांचा आभारी आहे",
    "rating": 5,
    "location": "शिवपूरी"
  },
  {
    "id": 3,
    "name": "लालासो सदाशिव पाटील",
    "role": "व्यावसायिक व शेतकरी",
    "text": "मी एक व्यवसायीक असून शेती हा माझा जोडधंदा आहे तरी मला व्यवसाय वाढीसाठी आर्थिक गरज भासत होती त्यामुळे माझ्या मित्राकडून श्रीनाथ असोसिएट्स चा नंबर मिळाला त्यानंतर मला श्री. अभिषेक सर यांनी सर्व लोन संधर्भात माहिती दिली आणि मला लवकरात लवकर लोन मंजूर करून दिली त्याबद्दल अभिषेक संराचे धन्यवाद",
    "rating": 5,
    "location": "ता. वाळवा, जि. सांगली"
  },
];

export default function Testimonials() {
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
            ग्राहकांचे <span className="text-[#D32F2F]">अभिप्राय</span>
          </motion.h2>
          <p className="text-lg text-gray-600">आमच्या समाधानी ग्राहकांच्या प्रतिक्रिया</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl relative transition-shadow duration-300 hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-8 text-gray-200" size={60} />
              <div className="flex text-yellow-400 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#111111]">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
