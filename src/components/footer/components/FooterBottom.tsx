"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-200 pt-8 flex flex-col gap-5">
      <div>
        <Image src="/images/logo.png" alt="Gulf Logo" width={64} height={64} className="object-contain" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>2022</span>
          <span>წესები</span>
          <span>კონფიდენციალურობა</span>
        </div>
        <button className="flex items-center gap-2 link-button-light">
          <span>ქართული</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
