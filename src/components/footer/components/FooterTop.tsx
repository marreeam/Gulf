"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import Dropdown from "./Dropdown";

interface FooterTopProps {
  onCopy: (text: string) => void;
}

export default function FooterTop({ onCopy }: FooterTopProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {/* Menu */}
      <div>
        <h3 className="bold-medium-text mb-7 hidden md:block">მენიუ</h3>
        <ul className="space-y-3 hidden md:block">
          <li><Link href="#" className="link-button-light">Gulf card</Link></li>
          <li><Link href="#" className="link-button-light">GPS technology</Link></li>
          <li><Link href="#" className="link-button-light">საერთაშორისო ბარათები</Link></li>
          <li><Link href="#" className="link-button-light">ვაუჩერული სისტემა</Link></li>
          <li><Link href="#" className="link-button-light">საბითუმო მომსახურება</Link></li>
        </ul>
        <Dropdown
          title="მენიუ"
          links={[
            { href: "#", label: "Gulf card" },
            { href: "#", label: "GPS technology" },
            { href: "#", label: "საერთაშორისო ბარათები" },
            { href: "#", label: "ვაუჩერული სისტემა" },
            { href: "#", label: "საბითუმო მომსახურება" },
          ]}
        />
      </div>
      <div>
        <h3 className="bold-medium-text mb-7 hidden md:block">კომპანია</h3>
        <ul className="space-y-3 hidden md:block">
          <li><Link href="#" className="link-button-light">ჩვენ შესახებ</Link></li>
          <li><Link href="#" className="link-button-light">ბლოგი</Link></li>
          <li><Link href="#" className="link-button-light">სადგურების რუქა</Link></li>
          <li><Link href="#" className="link-button-light">კონტაქტი</Link></li>
        </ul>
        <Dropdown
          title="კომპანია"
          links={[
            { href: "#", label: "ჩვენ შესახებ" },
            { href: "#", label: "ბლოგი" },
            { href: "#", label: "სადგურების რუქა" },
            { href: "#", label: "კონტაქტი" },
          ]}
        />
      </div>

      <div>
        <h3 className="bold-medium-text mb-7">შემოგვიერთდი</h3>
        <div className="flex gap-5">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div>
        <h3 className="bold-medium-text mb-7">დაგვიკავშირდი</h3>
        <ul className="space-y-3">
          <li className="flex gap-1 items-center">
            <button className="link-button-light" onClick={() => onCopy("*0007")}>*0007</button>
          </li>
          <li className="flex gap-1 items-center">
            <button className="link-button-light" onClick={() => onCopy("gulf@info.ge")}>gulf@info.ge</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
