import Link from "next/link";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="bg-white p-3 rounded-lg inline-block mb-4">
              <Image
                src="/logo.png"
                alt="श्री नाथ Associates"
                width={200}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6">
              सर्व प्रकारचे बँक व फायनान्स लोन उपलब्ध. आपल्या स्वप्नांना आर्थिक आधार.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">महत्त्वाच्या लिंक्स</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> मुख्यपृष्ठ</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> आमच्याबद्दल</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> सेवा</Link></li>
              <li><Link href="/rules" className="text-gray-400 hover:text-white transition flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> नियम व अटी</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> संपर्क</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">आमच्या सेवा</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> गृह कर्ज</li>
              <li className="text-gray-400 flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> व्यवसाय कर्ज</li>
              <li className="text-gray-400 flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> वैयक्तिक कर्ज</li>
              <li className="text-gray-400 flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> पोल्ट्री लोन</li>
              <li className="text-gray-400 flex items-center"><ArrowRight size={16} className="mr-2 text-[#D32F2F]" /> मुद्रा योजना</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">संपर्क</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="text-[#D32F2F] mr-3 mt-1" size={20} />
                <div className="text-gray-400">
                  <a href="tel:+919860946943" className="block hover:text-white">९८६०९४६९४३</a>
                  <a href="tel:+919371513506" className="block hover:text-white">९३७१५१३५०६</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#D32F2F] mr-3 mt-1" size={20} />
                <span className="text-gray-400">श्रीनाथ Associates<br />
                  मालती अपार्टमेंट, गणेश नगर,<br />
                  एसटी स्टँड पाठीमागील रोड, <br />
                  वारणा सहकारी बँकेच्या वरती, <br />
                  उरुण-ईश्वरपूर 415 409.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} श्रीनाथ Associates.   All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
