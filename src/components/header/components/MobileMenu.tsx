"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const items = menuRef.current.querySelectorAll<HTMLElement>("a");

    if (isOpen) {
      tlRef.current = gsap.timeline();
      tlRef.current.set(menuRef.current, { display: "block" });
      tlRef.current.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      tlRef.current.fromTo(
        items,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: "power2.out" },
        "<"
      );
    } else {
      tlRef.current = gsap.timeline({
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
      tlRef.current.to(items, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      });
      tlRef.current.to(
        menuRef.current,
        { opacity: 0, y: -20, duration: 0.2, ease: "power2.in" },
        "<"
      );
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="lg:hidden bg-white border-b border-gray-200 w-full top-full left-0 z-40 shadow-md"
      style={{ display: "none" }} 
    >
      <nav className="flex flex-col px-4 py-4 gap-5">
        <Link href="#" className="link-button p-5" onClick={closeMenu}>GULF CARD</Link>
        <Link href="#" className="link-button p-5" onClick={closeMenu}>საერთაშორისო ბარათები</Link>
        <Link href="#" className="link-button p-5" onClick={closeMenu}>ტენდერი</Link>
        <Link href="#" className="link-button p-5" onClick={closeMenu}>ვაუჩერული სისტემა</Link>
        <Link href="#" className="link-button p-5" onClick={closeMenu}>საბითუმო მომსახურება</Link>
        <div className="pt-3 mt-3 border-t border-gray-200 flex flex-col gap-5">
          <Link href="#" className="link-button-light flex items-center gap-1 text-[#00205B] p-5" onClick={closeMenu}>
            Gulf Retail
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link href="#" className="link-button-light flex items-center gap-1 text-[#00205B] p-5" onClick={closeMenu}>
            Sun Stores
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
