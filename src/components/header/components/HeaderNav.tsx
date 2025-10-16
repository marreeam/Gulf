"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, AlignJustify, X } from "lucide-react";

interface HeaderNavProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function HeaderNav({ mobileMenuOpen, toggleMobileMenu }: HeaderNavProps) {
  return (
    <div className="px-8 py-3 sm:px-8 lg:px-16">
      <div className="mx-auto">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image src="/logo.png" alt="Gulf Logo" fill className="object-contain" />
            </div>
            <span className="text-xl hidden sm:inline font-bold text-gray-900">ბიზნესი</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button className="flex items-center gap-1 link-button">
              GULF CARD
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="#" className="link-button">საერთაშორისო ბარათები</Link>
            <Link href="#" className="link-button">ტენდერი</Link>
            <Link href="#" className="link-button">ვაუჩერული სისტემა</Link>
            <Link href="#" className="link-button">საბითუმო მომსახურება</Link>
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-900 hover:text-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
  )
}
