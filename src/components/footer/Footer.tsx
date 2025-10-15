"use client";

import { useState } from "react";
import FooterTop from "./components/FooterTop";
import FooterBottom from "./components/FooterBottom";

export default function Footer() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <footer className="bg-white py-12 sm:py-14 px-4 sm:px-8 lg:px-28">
      <div className="container mx-auto">
        <FooterTop onCopy={handleCopy} />
        <FooterBottom />
        {copied && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm shadow-md z-50">
            {copied} copied!
          </div>
        )}
      </div>
    </footer>
  );
}
