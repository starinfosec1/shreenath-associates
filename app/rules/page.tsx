"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const rules = [
  "कागदपत्रे (फाईल) देतेवेळी प्रोसेसिंग फी (प्रक्रिया शुल्क) आवश्यक आहे. ही फी नॉन-रिफंडेबल (परतावा न मिळणारी) राहील.",
  "कर्ज मागणे हा अधिकार असला तरी कर्ज देणे - न देणे हे कस्टमरच्या कागदपत्रांवर अवलंबून आहे.",
  "आम्ही स्वतः कर्ज देत नाही बँकेद्वारे मिळवून देतो.",
  "ऐनवेळी बँकेमधील प्रकरणास विलंब झाल्यास ऑफिस जबाबदार राहणार नाही.",
  "बँक किंवा महामंडळ यामध्ये ऐनवेळी जावे लागल्यास आपली उपस्थिती अनिवार्य राहील.",
  "कोणतीही योजना किती कालावधीसाठी चालू राहील किंवा त्या योजनेच्या नियमांमध्ये काय बदल होतील याची ग्वाही आम्ही देत नाही.",
  "ऐनवेळी घेतलेले काम रद्द करणे व फीमध्ये फेरबदल करणे याचे अधिकार कंपनीकडे राहतील.",
  "एकदा कर्जासंबंधात काम करायला घेतले असता कस्टमरकडून काही चुकीची कागदपत्रे (FAKE DOCUMENTS) किंवा आधी दिलेल्या कागदपत्रांमध्ये काही कमतरता जाणवली व ती फाईल रद्द झाली तर याची जबाबदारी ऑफिसची राहणार नाही.",
  "काही बँका फाईल तयार करण्यासाठी LOGIN FEE घेत असतात. ती फी देण्यासाठी ऑफिसकडून कस्टमरवर कसल्याही प्रकारे दबाव टाकण्यात येत नाही. (फी देणे न देणे हे कस्टमरच्या सत-सत विवेक बुद्धीवर अवलंबून आहे) तद्नंतर ही कस्टमरने लॉगिन फी बँकेला दिली व नंतर काही कारणास्तव फाईल रद्द झाली तर त्या फी ची जबाबदारी ऑफिस घेत नाही.",
  "कधी-कधी बँका कर्जाच्या रक्कमेमध्ये शेवटच्या क्षणी बदल करतात. याची खबरदारी कस्टमरने घेणे. (उदा. बँकेकडून एखाद्याला 10 लाख रु. कर्ज मंजूर करतो असे सांगून शेवटच्या क्षणी बँक कमी करून 7 लाख रु. किंवा वाढवून 12 लाख रु. देऊ शकतो असे सांगू शकते.)",
  "ऑफिसकडून काही कागदपत्रां संदर्भात किंवा इतर कोणत्या कामासाठी फी ची मागणी करण्यात आली तर ती फी शहा-निशा करूनच देणे.",
  "व्यवसाय उभा करणे, त्यासाठी कर्जाची फाईल तयार करणे यासाठी धावपळ व खर्च छोट्या मोठ्या प्रमाणात होत असतो, त्यामुळे व्यावसायिकाचा फाईल करण्यासंबंधी निर्णय ठाम असावा.",
  "प्रत्येक रविवारी ऑफिसला सुट्टी राहील. (ऑफिसची वेळ सकाळी 10 ते 5 पर्यंत राहील)",
  "कृपया कर्जासंबंधी किंवा इतर माहितीसाठी संपर्क करायचा असेल तर ऑफिसच्या वेळेतच करावा. (कृपया फोन उचलला गेले नाही तर WHATSAPP वर MESSAGE करावा.)",
  "आम्ही आपली फाईल लवकरात लवकर कशी होईल या साठीच प्रयत्नशील असतो. कारण आपल्यात काही व्यवहार ठरलेले असतात. ते कर्ज मंजूर झाल्यावरच पूर्ण होणार असतात. बँका ह्या त्यांच्या नियमांप्रमाणेच काम करत असतात.",
  "या नियमांमध्ये बदल करण्याचा अधिकार कंपनीकडे राहील."
];

export default function RulesPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            नियम व <span className="text-[#D32F2F]">अटी</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            कृपया पुढील नियम आणि अटी काळजीपूर्वक वाचा.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
              <AlertCircle className="text-[#D32F2F] mr-4" size={36} />
              <h2 className="text-2xl font-bold text-[#111111]">महत्त्वाच्या सूचना</h2>
            </div>

            <ul className="space-y-6">
              {rules.map((rule, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {rule}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
