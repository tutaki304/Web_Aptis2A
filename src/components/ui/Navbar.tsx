"use client";

import Link from "next/link";
import Button from "./Button";

const navLinks = [
  { label: "Tính năng", href: "#features" },
  { label: "Khoá học", href: "#courses" },
  { label: "Đánh giá", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          OnThiAPTIS
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button size="sm">Đăng ký ngay</Button>
      </nav>
    </header>
  );
}
