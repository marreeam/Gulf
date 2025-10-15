"use client";

import { useState } from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderNav from "./components/HeaderNav";
import MobileMenu from "./components/MobileMenu";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="w-full bg-white">
      <HeaderTop />
      <HeaderNav mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={mobileMenuOpen} closeMenu={closeMobileMenu} />
    </header>
  );
}
