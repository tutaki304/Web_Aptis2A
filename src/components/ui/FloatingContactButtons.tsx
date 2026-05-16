"use client";
import { Phone, MessageCircle, Edit3 } from "lucide-react";
import Link from "next/link";

export default function FloatingContactButtons() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-between p-2 pb-safe">
      <Link href="tel:0853739928" className="flex flex-col items-center justify-center flex-1 py-1 text-slate-600 active:bg-slate-50 rounded-lg">
        <Phone size={20} className="text-blue-600 mb-1" />
        <span className="text-[10px] font-bold">Gọi ngay</span>
      </Link>
      <Link href="https://zalo.me/0853739928" target="_blank" className="flex flex-col items-center justify-center flex-1 py-1 text-slate-600 active:bg-slate-50 rounded-lg">
        <MessageCircle size={20} className="text-blue-500 mb-1" />
        <span className="text-[10px] font-bold">Nhắn Zalo</span>
      </Link>
      <Link href="#lead-form" className="flex flex-col items-center justify-center flex-1 py-2 bg-orange-500 text-white rounded-xl shadow-md active:bg-orange-600 mx-1">
        <Edit3 size={20} className="mb-0.5" />
        <span className="text-[11px] font-bold">Đăng ký</span>
      </Link>
    </div>
  );
}