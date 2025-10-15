"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function HeaderTop() {
  return (
    <div className="border-b px-8 py-3 sm:px-8 lg:px-16 border-gray-200">
      <div className="mx-auto">
        <div className="flex h-10 items-center justify-between text-sm">

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="#" className="flex items-center gap-1 link-button-light">
              Gulf Retail
              <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Link href="#" className="flex items-center gap-1 link-button-light">
              Sun Stores
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="md:hidden">
            <button className="flex items-center gap-1 link-button-light">
              Ge
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>

          <nav className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <Link href="/" className=" sm:block link-button-light">კარიერა</Link>
            <Link href="#" className="sm:block link-button-light">რუკა</Link>
            <Link href="#" className="hidden lg:block link-button-light">კონტაქტი</Link>
            <button className="hidden md:flex items-center gap-1 link-button-light">
              Ge
              <ChevronDown className="h-3 w-3" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
