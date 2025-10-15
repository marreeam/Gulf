"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  title: string;
  links: { href: string; label: string }[];
}

export default function Dropdown({ title, links }: DropdownProps) {
  const [open, setOpen] = useState(false);

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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
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
