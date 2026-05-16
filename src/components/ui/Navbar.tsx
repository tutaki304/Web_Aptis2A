"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Khóa học", href: "#courses" },
    { name: "Lộ trình", href: "#roadmap" },
    { name: "Đối tác", href: "#partners" },
    { name: "Feedback", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md py-3" : "bg-white py-4 md:py-5"}`} style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)" }}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logo2a.png" alt="2A Education" width={40} height={40} className="object-contain" />
          <div className="font-extrabold text-base tracking-tight text-[#1a2456] leading-tight">
            2A Education
            <span className="text-slate-400 text-xs font-medium hidden sm:block">Aptis &amp; IELTS 2A</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">{link.name}</Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#lead-form" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/20">
            Test đầu vào miễn phí
          </Link>
        </div>

        <button className="lg:hidden text-slate-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 p-3 hover:bg-blue-50 rounded-xl">
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-100 my-2"></div>
          <Link href="#lead-form" onClick={() => setMobileMenuOpen(false)} className="w-full text-center bg-orange-500 text-white px-5 py-3.5 rounded-xl font-bold text-sm">
            Test đầu vào miễn phí
          </Link>
        </div>
      )}
    </header>
  );
}