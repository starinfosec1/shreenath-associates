"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileCheck, Phone, X, Award, Briefcase, FileText } from "lucide-react";
import Image from "next/image";

const servicesList = [
  {
    title: "मुद्रा योजना (Mudra Loan)",
    docs: ["व्यवसायाचा प्रस्ताव (Project Report)", "कोटेशन", "आधार कार्ड", "पॅन कार्ड"],
    image: "/images/mudra_loan.png"
  },
  {
    title: "अण्णासाहेब पाटील (L.O.I)",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "उत्पन्नाचा दाखला", "रेशन कार्ड",
      "शाळा सोडल्याचा दाखला", "कास्ट सर्टिफिकेट", "प्रकल्प अहवाल"
    ],
    image: "/images/annasaheb-patil.png"
  },
  {
    title: "OBC आर्थिक विकास महामंडळ (L.O.I)",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "जातीचा दाखला", "रेशन कार्ड", "लाईट बिल",
      "२ फोटो", "भाडे करार पत्र", "प्रोजेक्ट रिपोर्ट", "तांत्रिक व्यवसायाच्या आवश्यक प्रमाणपत्र", "बँक खात्याची माहिती"
    ],
    image: "/images/OBC-Yojana.jpg"
  },
  {
    title: "शॉप ॲक्ट लायसन्स",
    docs: [
      "१ पासपोर्ट साईज फोटो",
      "लाईट बिल",
      "आधार कार्ड",
      "पॅन कार्ड",
      "दुकानदाराच्या नावाचे बोर्डचा फोटो",
    ],
    image: "/images/shop-act.jpg"
  },
  {
    title: "वसंतराव नाईक आर्थिक विकास महामंडळ (L.O.I)",
    docs: [
      "आधार कार्ड", "रहिवाशी दाखला", "पॅन कार्ड", "रेशन कार्ड", "वीज बिल",
      "मोबाईल नंबर", "२ पासपोर्ट साईज फोटो", "प्रतिज्ञापत्र", "डोमासाईल",
      "जातीचा दाखला", "जन्म प्रमाणपत्र", "शाळा सोडल्याचा दाखला",
      "व्यवसाय सुरु करणार त्याचे कोटेशन", "बँक खात्याची माहिती"
    ],
    image: "/images/vasantrao.jpg"
  },
  {
    title: "फूड लायसनस",
    docs: [
      "आधार कार्ड",
      "१ पासपोर्ट साईज फोटो",
      "लाईट बिल (दुकानाचे)",
      "७/१२ किंवा ८ अ/भाडे करार",
    ],
    image: "/images/food-liscence.png"
  },
  {
    title: "ITR फायल",
    docs: [
      "पॅन कार्ड",
      "आधार कार्ड",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट",
      "Form 16",
      "Form 26AS",
      "AIS (Annual Information Statement)",
      "Salary Slips",
      "गुंतवणुकीचे पुरावे (LIC, PPF, ELSS)",
      "Home Loan Interest Certificate",
      "भाडे पावत्या (लागू असल्यास)",
      "FD Interest Certificate",
      "GST Returns (व्यवसाय असल्यास)",
      "Profit & Loss Statement (व्यवसायासाठी)",
      "Capital Gain Statement (शेअर्स / म्युच्युअल फंड असल्यास)",
      "TDS Certificates"
    ],
    image: "/images/itr-filing.png"
  },
  {
    title: "प्रोजेक्ट रिपोर्ट",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक स्टेटमेंट (६ ते १२ महिन्यांचे)",
      "ITR / इन्कम टॅक्स रिटर्न",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "GST प्रमाणपत्र (लागू असल्यास)",
      "दुकान परवाना / Shop Act",
      "भाडे करार / मालमत्ता कागदपत्रे",
      "व्यवसायाचे कोटेशन / मशिनरी कोटेशन",
      "प्रॉफिट अँड लॉस स्टेटमेंट",
      "बॅलन्स शीट",
      "प्रोजेक्ट खर्चाचा तपशील",
      "स्वतःच्या गुंतवणुकीचा पुरावा",
      "कर्ज रकमेची आवश्यकता तपशील",
      "व्यवसायाचा अंदाजित नफा-तोटा अहवाल",
      "व्यवसायाचे संपूर्ण माहिती पत्रक",
      "भागीदारी करार (Partnership असल्यास)",
      "MOA / AOA (कंपनी असल्यास)",
      "जमीन / जागेचे कागदपत्र",
      "वीज बिल",
      "अनुभव प्रमाणपत्र (लागू असल्यास)"
    ],
    image: "/images/Project-report.jpg"
  },
  {
    title: "CMEGP कर्ज योजना",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "रहिवासी पुरावा",
      "जन्म दाखला / स्कूल लिव्हिंग सर्टिफिकेट",
      "डोमिसाईल प्रमाणपत्र (महाराष्ट्र बाहेर जन्म असल्यास)",
      "शैक्षणिक प्रमाणपत्र",
      "प्रोजेक्ट रिपोर्ट",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "बँक पासबुक / बँक स्टेटमेंट",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "जात प्रमाणपत्र (लागू असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "अपंगत्व प्रमाणपत्र (लागू असल्यास)",
      "माजी सैनिक प्रमाणपत्र (लागू असल्यास)",
      "EDP / REDP / Skill Development प्रशिक्षण प्रमाणपत्र",
      "भाडे करार / जागेचे कागदपत्र",
      "लाईट बिल",
      "GST प्रमाणपत्र (लागू असल्यास)",
      "शॉप ॲक्ट परवाना",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "संस्थेचे नोंदणी प्रमाणपत्र",
      "Authorization Letter",
      "Undertaking Form",
      "ITR / Income Proof",
      "Profit & Loss Statement",
      "Balance Sheet",
      "मशिनरी / उपकरणांचे कोटेशन"
    ],
    image: "/images/cmegp.png"
  },
  {
    title: "PMEGP कर्ज योजना",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "रहिवासी पुरावा",
      "जन्म दाखला / शाळा सोडल्याचा दाखला",
      "शैक्षणिक प्रमाणपत्र (किमान ८ वी पास - लागू असल्यास)",
      "प्रोजेक्ट रिपोर्ट",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट",
      "जात प्रमाणपत्र (SC/ST/OBC असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "अपंगत्व प्रमाणपत्र (लागू असल्यास)",
      "माजी सैनिक प्रमाणपत्र (लागू असल्यास)",
      "भाडे करार / जागेचे कागदपत्र",
      "७/१२ उतारा / मालमत्ता कागदपत्र",
      "लाईट बिल",
      "मशिनरी / उपकरणांचे कोटेशन",
      "GST प्रमाणपत्र (लागू असल्यास)",
      "शॉप अॅक्ट परवाना",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "संस्थेचे नोंदणी प्रमाणपत्र",
      "Authorization Letter",
      "EDP प्रशिक्षण प्रमाणपत्र",
      "ITR / इन्कम प्रूफ",
      "Profit & Loss Statement",
      "Balance Sheet",
      "NOC (लागू असल्यास)"
    ],
    image: "/images/pmegp.png"
  },
  {
    title: "महात्मा फुले योजना",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "रहिवासी पुरावा",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट",
      "७/१२ उतारा",
      "८-अ उतारा",
      "पीक कर्जाचा तपशील",
      "कर्ज खाते क्रमांक",
      "बँकेचे कर्ज प्रमाणपत्र",
      "शेतकऱ्याचे स्वघोषणापत्र",
      "जमिनीचे कागदपत्र",
      "उत्पन्नाचा दाखला",
      "जात प्रमाणपत्र (लागू असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "शेती संबंधित कागदपत्रे",
      "कर्ज थकबाकी प्रमाणपत्र",
      "पासबुक झेरॉक्स",
      "रेशन कार्ड",
      "मतदान ओळखपत्र",
      "डोमिसाईल प्रमाणपत्र",
      "NOC (लागू असल्यास)"
    ],
    image: "/images/mahatmaphule1.jpg"
  },
  {
    title: "PMFME योजना",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "रहिवासी पुरावा",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "फूड लायसन्स / FSSAI प्रमाणपत्र",
      "प्रोजेक्ट रिपोर्ट",
      "व्यवसायाचा अंदाजित खर्च तपशील",
      "मशिनरी / उपकरणांचे कोटेशन",
      "भाडे करार / जागेचे कागदपत्र",
      "७/१२ उतारा / मालमत्ता कागदपत्र",
      "लाईट बिल",
      "GST प्रमाणपत्र (लागू असल्यास)",
      "शॉप ॲक्ट परवाना",
      "जात प्रमाणपत्र (लागू असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "ITR / इन्कम प्रूफ",
      "Profit & Loss Statement",
      "Balance Sheet",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "संस्थेचे नोंदणी प्रमाणपत्र",
      "Authorization Letter",
      "NOC (लागू असल्यास)",
      "अन्न प्रक्रिया व्यवसायाचा अनुभव प्रमाणपत्र (लागू असल्यास)"
    ],
    image: "/images/pmfme.jpg"
  },
  {
    title: "मायक्रो लोन (Micro Loan)",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
    ],
    image: "/images/micro-loan.jpg"
  },
  {
    title: "यंत्रसामग्री कर्ज (Machinery Loan)",
    docs: ["मशिनरीचे कोटेशन", "व्यवसाय पुरावा", "KYC कागदपत्रे"],
    image: "/images/machinery.jpg"
  },
  {
    title: "व्यावसायिक वाहन कर्ज (Commercial Vehicle Loan)",
    docs: [
      "आधार कार्ड / मतदान कार्ड", "योजना मंजुरी प्रमाणपत्र", "७ / १२", "पॅन कार्ड",
      "शोरूम कोटेशन", "मार्जिन मनी रिसीट", "डिलेवरी चलन",
      "Other Income Proof (दूध बिल, ऊस बिल पावती, Bank Statement, ITR)"
    ],
    image: "/images/vehical-loan.png"
  },
  {
    title: "उद्योग आधार",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "बँकेचे पासबुक", "लाईट बिल"
    ],
    image: "/images/udyog-aadhar.png"
  },
  {
    title: "पोल्ट्री लोन",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "७/१२ / ८ अ", "२ वर्ष ITR", "पोल्ट्री Vaccinated सर्टिफिकेट",
      "सोसायटी NOC", "एक वर्षाचे बँक स्टेटमेंट", "पोल्ट्री उभा करण्यासाठी ग्रामपंचायत NOC",
      "पोल्ट्री प्रोजेक्ट रिपोर्ट", "उद्योग आधार", "२ फोटो"
    ],
    image: "/images/poultry-loan.png"
  },
  {
    title: "गाय व म्हैस कर्ज",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "फोटो", "७/१२ खाते उतारा", "दुधाची बिले १२ महिन्याची",
      "एक वर्षाचे बँक स्टेटमेंट", "डेअरीची हमीपत्र", "मागील कर्जाचा खाते उतारा",
      "कमीत कमी ३० हजार कर्ज परतफेडीचा अनुभव आवश्यक", "इतर कोणतेही कर्ज असेल तर त्याचे स्टेटमेंट"
    ],
    image: "/images/poultry_loan.png"
  },
  {
    title: "वैयक्तिक कर्ज (Personal Loan)",
    docs: ["आधार कार्ड", "पॅन कार्ड", "उत्पन्नाचा पुरावा", "बँक स्टेटमेंट"],
    image: "/images/personal-loan.png"
  },
  {
    title: "व्यवसाय कर्ज (Business Loan)",
    docs: ["आधार कार्ड", "पॅन कार्ड", "उद्योग आधार", "ITR", "बँक स्टेटमेंट"],
    image: "/images/business_loan.png"
  },
  {
    title: "गृह कर्ज (Home Loan)",
    docs: ["आधार कार्ड", "पॅन कार्ड", "उत्पन्नाचा पुरावा", "मालमत्तेची कागदपत्रे"],
    image: "/images/home_loan.png"
  },
  {
    title: "मॉर्टगेज कर्ज (Mortgage Loan)",
    docs: ["मालमत्तेची मूळ कागदपत्रे", "KYC", "उत्पन्नाचा पुरावा"],
    image: "/images/mortgage.png"
  },
  {
    title: "CC (Cash Credit) कर्ज",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक स्टेटमेंट (६ ते १२ महिन्यांचे)",
      "ITR / इन्कम टॅक्स रिटर्न",
      "GST रिटर्न",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "शॉप ॲक्ट परवाना",
      "व्यवसाय नोंदणी प्रमाणपत्र",
      "प्रॉफिट अँड लॉस स्टेटमेंट",
      "बॅलन्स शीट",
      "CA कडील आर्थिक अहवाल",
      "स्टॉक स्टेटमेंट",
      "डेब्टर / क्रेडिटर लिस्ट",
      "प्रोजेक्ट रिपोर्ट / व्यवसाय योजना",
      "भाडे करार / मालमत्ता कागदपत्र",
      "७/१२ उतारा / मालमत्ता पुरावा",
      "लाईट बिल",
      "मशिनरी / उपकरणांचे कोटेशन (लागू असल्यास)",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "MOA / AOA (कंपनी असल्यास)",
      "Authorization Letter",
      "NOC (लागू असल्यास)",
      "कोलॅटरल / तारण कागदपत्रे",
      "CIBIL रिपोर्ट (लागू असल्यास)",
      "वर्किंग कॅपिटल आवश्यकता तपशील"
    ],
    image: "/images/cash-credit.jpg"
  },
  {
    title: "मौलाना अबुल कलाम आझाद योजना",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "रहिवासी पुरावा",
      "डोमिसाईल प्रमाणपत्र",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट",
      "उत्पन्नाचा दाखला",
      "शैक्षणिक प्रमाणपत्र",
      "शाळा सोडल्याचा दाखला / जन्म दाखला",
      "Bonafide Certificate",
      "कॉलेज प्रवेश पत्र",
      "फी स्ट्रक्चर",
      "मागील वर्षाची गुणपत्रिका",
      "SSC / HSC मार्कशीट",
      "उद्याम नोंदणी प्रमाणपत्र (व्यवसायासाठी असल्यास)",
      "प्रोजेक्ट रिपोर्ट (व्यवसाय कर्जासाठी)",
      "भाडे करार / जागेचे कागदपत्र",
      "७/१२ उतारा / मालमत्ता कागदपत्र",
      "लाईट बिल",
      "जात प्रमाणपत्र (लागू असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "प्रतिज्ञापत्र (Affidavit)",
      "गॅरंटर कागदपत्रे",
      "ITR / इन्कम प्रूफ",
      "मशिनरी / उपकरणांचे कोटेशन (लागू असल्यास)"
    ],
    image: "/images/maulana-abul-kalam-azad.jpg"
  },
  {
    title: "आवास कर्ज योजना",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "रहिवासी पुरावा",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "उत्पन्नाचा दाखला",
      "बँक पासबुक / बँक स्टेटमेंट",
      "Salary Slips / Form 16 (नोकरी असल्यास)",
      "ITR / इन्कम टॅक्स रिटर्न",
      "रेशन कार्ड",
      "मतदान ओळखपत्र",
      "जात प्रमाणपत्र (लागू असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "अपंगत्व प्रमाणपत्र (लागू असल्यास)",
      "भाडे करार / पत्त्याचा पुरावा",
      "जमिनीचे कागदपत्र / ७/१२ उतारा",
      "मालमत्ता खरेदी करार",
      "सेल डीड / टायटल डीड",
      "घराचा मंजूर नकाशा",
      "लाईट बिल",
      "मालमत्ता कर पावती",
      "NOC (लागू असल्यास)",
      "स्वतःचे पक्के घर नसल्याचे प्रतिज्ञापत्र",
      "PMAY अर्ज फॉर्म",
      "आधार लिंक बँक खाते तपशील",
      "बिल्डर-बायर करार (लागू असल्यास)",
      "RERA प्रमाणपत्र (लागू असल्यास)"
    ],
    image: "/images/avas.png"
  },
  {
    title: "NLMC योजना",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "रहिवासी पुरावा",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट",
      "उत्पन्नाचा दाखला",
      "प्रोजेक्ट रिपोर्ट (DPR)",
      "जमिनीचे कागदपत्र / ७/१२ उतारा",
      "भाडे करार (जमीन भाड्याने असल्यास)",
      "जागेचा फोटो व GPS लोकेशन फोटो",
      "लाईट बिल / पाणी बिल",
      "मशिनरी / उपकरणांचे कोटेशन",
      "पशुधन संबंधित माहिती",
      "शेड / बांधकामाचा अंदाजपत्रक",
      "उद्याम नोंदणी प्रमाणपत्र (लागू असल्यास)",
      "GST प्रमाणपत्र (लागू असल्यास)",
      "शॉप ॲक्ट परवाना",
      "जात प्रमाणपत्र (लागू असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "NOC (लागू असल्यास)",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "संस्थेचे नोंदणी प्रमाणपत्र",
      "Authorization Letter",
      "ITR / इन्कम प्रूफ",
      "Profit & Loss Statement",
      "Balance Sheet",
      "पशुखाद्य / कच्चा माल तपशील",
      "अनुभव प्रमाणपत्र (लागू असल्यास)"
    ],
    image: "/images/nlmc.jpg"
  },
  {
    title: "कृषी कर्ज",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "रहिवासी पुरावा",
      "७/१२ उतारा",
      "८-अ उतारा",
      "फेरफार उतारा",
      "जमिनीचे कागदपत्र",
      "शेतीचा नकाशा",
      "पीक पेरणीचा तपशील",
      "बँक पासबुक / बँक स्टेटमेंट",
      "उत्पन्नाचा दाखला",
      "कर्ज खाते तपशील",
      "मागील कर्जाचे नो ड्यू सर्टिफिकेट",
      "लाईट बिल",
      "पाणीपट्टी पावती",
      "भाडे करार (जमीन भाड्याने असल्यास)",
      "जात प्रमाणपत्र (लागू असल्यास)",
      "जात वैधता प्रमाणपत्र",
      "उद्याम नोंदणी प्रमाणपत्र (Agri Business असल्यास)",
      "प्रोजेक्ट रिपोर्ट (ट्रॅक्टर / डेअरी / पोल्ट्री / ग्रीनहाऊस असल्यास)",
      "मशिनरी / उपकरणांचे कोटेशन",
      "ट्रॅक्टर / कृषी उपकरणांचे कोटेशन",
      "शेती संबंधित अनुभव प्रमाणपत्र (लागू असल्यास)",
      "NOC (लागू असल्यास)",
      "कोलॅटरल / तारण कागदपत्रे",
      "CIBIL रिपोर्ट (लागू असल्यास)"
    ],
    image: "/images/krushi-karj.png"
  },
  {
    title: "वर्किंग कॅपिटल कर्ज",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट (६ ते १२ महिन्यांचे)",
      "ITR / इन्कम टॅक्स रिटर्न (२ ते ३ वर्षांचे)",
      "GST रिटर्न",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "शॉप ॲक्ट परवाना",
      "व्यवसाय नोंदणी प्रमाणपत्र",
      "प्रॉफिट अँड लॉस स्टेटमेंट",
      "बॅलन्स शीट",
      "CA कडील ऑडिट रिपोर्ट",
      "कॅश फ्लो स्टेटमेंट",
      "स्टॉक स्टेटमेंट",
      "डेब्टर / क्रेडिटर लिस्ट",
      "वर्किंग कॅपिटल आवश्यकता तपशील",
      "प्रोजेक्ट रिपोर्ट / व्यवसाय योजना",
      "भाडे करार / मालमत्ता कागदपत्र",
      "७/१२ उतारा / मालमत्ता पुरावा",
      "लाईट बिल",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "MOA / AOA (कंपनी असल्यास)",
      "Authorization Letter",
      "कोलॅटरल / तारण कागदपत्रे",
      "CIBIL रिपोर्ट (लागू असल्यास)",
      "मशिनरी / उपकरणांचे कोटेशन (लागू असल्यास)",
      "NOC (लागू असल्यास)"
    ],
    image: "/images/working-capital.jpg"
  },
  {
    title: "प्रोजेक्ट फंडिंग",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "रहिवासी पुरावा",
      "बँक पासबुक / बँक स्टेटमेंट (६ ते १२ महिन्यांचे)",
      "ITR / इन्कम टॅक्स रिटर्न (२ ते ३ वर्षांचे)",
      "प्रॉफिट अँड लॉस स्टेटमेंट",
      "बॅलन्स शीट",
      "CA ऑडिट रिपोर्ट",
      "कॅश फ्लो स्टेटमेंट",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "GST प्रमाणपत्र व GST रिटर्न",
      "शॉप ॲक्ट परवाना",
      "व्यवसाय नोंदणी प्रमाणपत्र",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "MOA / AOA (कंपनी असल्यास)",
      "Authorization Letter / प्राधिकृत पत्र",
      "डिटेल प्रोजेक्ट रिपोर्ट (DPR)",
      "व्यवसाय योजना (Business Plan)",
      "प्रोजेक्ट खर्चाचा तपशील",
      "मशिनरी / उपकरणांचे कोटेशन",
      "स्वतःच्या गुंतवणुकीचा पुरावा",
      "वर्किंग कॅपिटल आवश्यकता तपशील",
      "जमिनीचे कागदपत्र / ७/१२ उतारा",
      "भाडे करार / लीज करार",
      "लाईट बिल",
      "NOC (लागू असल्यास)",
      "कोलॅटरल / तारण कागदपत्रे",
      "CIBIL रिपोर्ट",
      "नेट वर्थ सर्टिफिकेट",
      "अनुभव प्रमाणपत्र (लागू असल्यास)",
      "प्रकल्पाचे अंदाजित उत्पन्न व खर्च तपशील",
      "सरकारी परवाने / मंजुरी कागदपत्रे (लागू असल्यास)"
    ],
    image: "/images/project-funding.png"
  },
  {
    title: "वर्किंग कॅपिटल",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "बँक पासबुक / बँक स्टेटमेंट (६ ते १२ महिन्यांचे)",
      "ITR / इन्कम टॅक्स रिटर्न (२ ते ३ वर्षांचे)",
      "GST रिटर्न",
      "उद्योजक नोंदणी प्रमाणपत्र (Udyam Registration)",
      "शॉप ॲक्ट परवाना",
      "व्यवसाय नोंदणी प्रमाणपत्र",
      "प्रॉफिट अँड लॉस स्टेटमेंट",
      "बॅलन्स शीट",
      "CA ऑडिट रिपोर्ट",
      "कॅश फ्लो स्टेटमेंट",
      "स्टॉक स्टेटमेंट",
      "डेब्टर / क्रेडिटर लिस्ट",
      "वर्किंग कॅपिटल आवश्यकता तपशील",
      "प्रोजेक्ट रिपोर्ट / व्यवसाय योजना",
      "भाडे करार / मालमत्ता कागदपत्र",
      "७/१२ उतारा / मालमत्ता पुरावा",
      "लाईट बिल",
      "भागीदारी करारपत्र (Partnership असल्यास)",
      "MOA / AOA (कंपनी असल्यास)",
      "Authorization Letter",
      "कोलॅटरल / तारण कागदपत्रे",
      "CIBIL रिपोर्ट (लागू असल्यास)",
      "मशिनरी / उपकरणांचे कोटेशन",
      "NOC (लागू असल्यास)",
      "बिझनेस कंटिन्यूटी प्रूफ",
      "टॅक्स ऑडिट रिपोर्ट"
    ],
    image: "/images/working-capital.png"
  },
  {
    title: "क्रेडिट कार्ड",
    docs: [
      "आधार कार्ड",
      "पॅन कार्ड",
      "२ पासपोर्ट साईज फोटो",
      "मोबाईल नंबर",
      "ई-मेल आयडी",
      "रहिवासी पुरावा",
      "बँक पासबुक / बँक स्टेटमेंट (३ ते ६ महिन्यांचे)",
      "Salary Slips (पगार स्लिप - नोकरी असल्यास)",
      "Form 16",
      "ITR / इन्कम टॅक्स रिटर्न",
      "उत्पन्नाचा पुरावा",
      "नोकरीचे ओळखपत्र / Employee ID",
      "ऑफर लेटर / Appointment Letter",
      "व्यवसाय नोंदणी प्रमाणपत्र (व्यवसाय असल्यास)",
      "GST प्रमाणपत्र (लागू असल्यास)",
      "प्रॉफिट अँड लॉस स्टेटमेंट (व्यवसायासाठी)",
      "बॅलन्स शीट",
      "शॉप अॅक्ट परवाना",
      "भाडे करार / पत्त्याचा पुरावा",
      "लाईट बिल / टेलिफोन बिल",
      "इतर बँकेचे क्रेडिट कार्ड स्टेटमेंट (लागू असल्यास)",
      "FD Receipt (FD आधारित कार्ड असल्यास)",
      "CIBIL स्कोर तपशील (लागू असल्यास)"
    ],
    image: "/images/credit-card.jpg"
  },

];

const getCategory = (title: string) => {
  const yojanaKeywords = ["योजना", "L.O.I", "महामंडळ"];
  const docKeywords = ["लायसन्स", "लायसनस", "फायल", "रिपोर्ट", "आधार"];

  if (yojanaKeywords.some(keyword => title.includes(keyword))) {
    return "yojana";
  }
  if (docKeywords.some(keyword => title.includes(keyword))) {
    return "documents";
  }
  return "loan";
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"loan" | "yojana" | "documents">("loan");
  const [selectedService, setSelectedService] = useState<typeof servicesList[0] | null>(null);

  const filteredServices = servicesList.filter(service => {
    return getCategory(service.title) === activeTab;
  });

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            आमच्या <span className="text-[#D32F2F]">सेवा</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            तुमच्या सर्व आर्थिक व शासकीय योजनांच्या गरजेसाठी आम्ही योग्य मार्गदर्शन करतो.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            <button
              onClick={() => setActiveTab("loan")}
              className={`px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 flex items-center gap-2 shadow-sm ${activeTab === "loan"
                  ? "bg-[#D32F2F] text-white shadow-red-500/20 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              <Award size={20} />
              कर्ज सेवा (Loans)
            </button>
            <button
              onClick={() => setActiveTab("yojana")}
              className={`px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 flex items-center gap-2 shadow-sm ${activeTab === "yojana"
                  ? "bg-[#D32F2F] text-white shadow-red-500/20 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              <Briefcase size={20} />
              शासकीय योजना (Schemes)
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 flex items-center gap-2 shadow-sm ${activeTab === "documents"
                  ? "bg-[#D32F2F] text-white shadow-red-500/20 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              <FileText size={20} />
              इतर सेवा व कागदपत्रे
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative h-48 w-full bg-white overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white leading-tight">
                    {service.title}
                  </h2>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-gray-500 mb-5 flex items-center gap-1.5 text-sm">
                    <FileCheck size={16} className="text-[#D32F2F]" />
                    {service.docs.length} कागदपत्रे आवश्यक
                  </p>

                  <button
                    className="w-full py-3 bg-[#111111] text-white rounded-xl font-bold hover:bg-[#D32F2F] transition-colors flex items-center justify-center gap-2 text-base"
                  >
                    माहिती व कागदपत्रे पहा
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white p-6 md:p-8 shadow-2xl overflow-hidden border border-gray-100 z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  {selectedService.image && (
                    <div className="relative w-full sm:w-40 h-28 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={selectedService.image}
                        alt={selectedService.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <span className="inline-block px-3 py-1 bg-red-50 text-[#D32F2F] text-xs font-semibold rounded-full mb-2">
                      {getCategory(selectedService.title) === "loan"
                        ? "कर्ज सेवा"
                        : getCategory(selectedService.title) === "yojana"
                          ? "शासकीय योजना"
                          : "इतर सेवा व कागदपत्रे"}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111111] pr-6">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="border-t border-b border-gray-100 py-6 my-4">
                  <h3 className="text-lg font-bold text-[#D32F2F] flex items-center mb-4">
                    <FileCheck size={20} className="mr-2" /> आवश्यक कागदपत्रे:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[35vh] overflow-y-auto pr-2">
                    {selectedService.docs.map((doc: string, i: number) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-[#D32F2F] font-bold mr-2">•</span>
                        <span className="text-base md:text-lg">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href={`https://wa.me/919860946943?text=नमस्कार,%20मला%20${encodeURIComponent(selectedService.title)}%20विषयी%20माहिती%20हवी%20आहे.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#1fae54] transition-colors text-base md:text-lg shadow-md"
                  >
                    <Phone size={20} className="mr-2" /> WhatsApp वर चौकशी करा
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors text-base md:text-lg"
                  >
                    बंद करा
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
