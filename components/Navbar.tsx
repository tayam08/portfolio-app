"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Experience", href: "/resume" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink-100">
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-ink hover:text-navy transition-colors"
        >
          Taebeen Am<span className="text-navy ml-0.5">.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-150 ${
                  isActive(item.href)
                    ? "text-ink border-b border-ink pb-0.5"
                    : "text-ink-400 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-ink-400 hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ink-100 bg-paper">
          <ul className="max-w-7xl mx-auto px-8 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-ink font-semibold"
                      : "text-ink-400 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
