"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

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
  {
    "id": 4,
    "name": "महेश पवार",
    "role": "ग्राहक",
    "text": "श्री नाथ असोसीएट्स ही संस्था खूप छान काम करते, माझं KYC लोन हे १५ दिवसांच्या आत झाल्याबददल खूप आभारी आहे. तसेच मी आता BL ची फाईल पण दिलेली आहे.",
    "rating": 5,
    "location": "ईश्वरपूर"
  },
  {
    "id": 5,
    "name": "सुरज खोत",
    "role": "ग्राहक",
    "text": "आपले काम चांगल आहे लवकरात लवकर बँकेचे काम पूर्ण करून दिल्या बद्दल मी तुमचा आभारी आहे",
    "rating": 5,
    "location": "शिवपूरी, वाळवा, सांगली"
  },
  {
    "id": 6,
    "name": "अनिल माने",
    "role": "ग्राहक",
    "text": "श्री नाथ असोसिएट्स ही कंपनी खूप छान काम करते व कमी दिवसामध्ये लोन मंजूर करून खात्यावरती अमाउंट जमा होते. श्रीनाथ असोसिएट्स या कंपनीने मला चार दिवसात लोन मंजूर करून दिली त्याबद्दल मी श्रीनाथ असोसिएट्स चा आभारी आहे.",
    "rating": 5,
    "location": "ईश्वरपूर"
  },
  {
    "id": 7,
    "name": "महादेव लोकरे",
    "role": "ग्राहक",
    "text": "श्री नाथ असोसिएट्स ही कंपनी खूप छान काम करते व कमी दिवसामध्ये लोन मंजूर करून खात्यावरती अमाउंट जमा होते. बजाज फायनांस या कंपनी कडून मला २ दिवसात लोन मिळवून दिली मी श्रीनाथ असोसिएट्स चा आभारी आहे.",
    "rating": 5,
    "location": "नवेखेड"
  },
];

export default function ReviewsPage() {
  return (
    <div className="py-20 bg-white">
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            ग्राहकांचे <span className="text-[#D32F2F]">अभिप्राय</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            आमच्या कामाची पावती म्हणजेच ग्राहकांनी दिलेला हा विश्वास.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b71c1c] transition-colors"
            >
              <Star size={20} fill="currentColor" />
              Google वर रिव्ह्यू द्या
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={80} className="text-[#D32F2F]" />
                </div>

                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg mb-8 italic relative z-10 min-h-[80px]">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center font-bold text-[#D32F2F] text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111111]">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role} • {review.location}</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-green-500" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
