"use client";

import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion"
import { ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white border-b border-gray-200 w-full top-full left-0 z-40 shadow-md"
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
