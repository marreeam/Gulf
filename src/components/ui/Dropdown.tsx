"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

interface DropdownProps {
  title: string;
  links: { href: string; label: string }[];
}

export default function Dropdown({ title, links }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (open) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between w-full bold-medium-text mb-2"
      >
        {title}
        <ChevronDown
          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
      >
        <ul className="flex flex-col space-y-2 pl-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="link-button-light block"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
