"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to show the button with a fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/919860946943?text=नमस्कार,%20मला%20कर्जाविषयी%20माहिती%20हवी%20आहे."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
    </a>
  );
}
