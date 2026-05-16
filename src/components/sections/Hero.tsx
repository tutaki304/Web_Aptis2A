import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Target,
  UserCheck,
  Monitor,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Phone,
  Globe,
  PenLine,
} from "lucide-react";

const badges = [
  { icon: CalendarDays, label: "12 buổi\ntrọng tâm" },
  { icon: Target, label: "Đề thi thực tế\ncập nhật thường xuyên" },
  { icon: UserCheck, label: "Cá nhân hóa\nlộ trình" },
  { icon: Monitor, label: "Web luyện thi\nđộc quyền" },
  { icon: MessageSquare, label: "Chấm Speaking &\nWriting 1–1 miễn phí" },
  { icon: MapPin, label: "Online /\nOffline" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#dff5f3] via-[#f0edfb] to-[#f5e8f4]">
      {/* Main hero */}
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-0 lg:pt-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">

          {/* ===== LEFT COLUMN ===== */}
          <div className="w-full lg:w-1/2 flex flex-col pb-8 lg:pb-12">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-4">
              <span className="text-[#1a2456]">Aptis không khó –</span>
              <br />
              <span className="text-orange-500">nhưng rớt là thật</span>
              <br />
              <span className="text-[#1a2456]">nếu học sai cách!</span>
            </h1>

            {/* Cam kết đầu ra */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white px-5 py-3 rounded-2xl shadow-lg shadow-emerald-500/30 mb-5 w-fit">
              <ShieldCheck size={22} className="shrink-0" />
              <span className="font-extrabold text-lg tracking-tight leading-none">
                Cam kết đầu ra 100%
              </span>
              <span className="text-emerald-100 text-sm font-medium border-l border-emerald-300/60 pl-3 leading-tight">
                Không đạt — hoàn học phí
              </span>
            </div>

            {/* Sub */}
            <p className="text-slate-600 text-base leading-relaxed mb-7 max-w-lg">
              Khóa Aptis ESOL 12 buổi giúp bạn học đúng trọng tâm, luyện sát format đề và được hỗ trợ theo lộ trình phù hợp.
            </p>

            {/* Feature grid 2x3 */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {badges.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 bg-white/60 border border-white/80 backdrop-blur-sm rounded-xl p-3"
                >
                  <Icon size={18} className="text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-700 leading-snug whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <div className="flex items-start gap-2.5 mb-7 bg-white/60 border border-white/80 backdrop-blur-sm rounded-xl px-4 py-3">
              <ShieldCheck size={20} className="text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">
                Học đúng chiến lược – luyện đúng trọng tâm –{" "}
                tự tin đạt mục tiêu{" "}
                <span className="text-orange-500 font-bold">Aptis ESOL.</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/30"
              >
                <PenLine size={16} />
                Đăng ký test đầu vào miễn phí
                <span className="ml-0.5">›</span>
              </Link>
              <Link
                href="https://zalo.me/0853739928"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 hover:border-blue-400 hover:text-blue-700 px-6 py-3.5 rounded-full font-bold text-sm transition-all"
              >
                <Image src="/icons/zalo.svg" alt="Zalo" width={20} height={20} unoptimized />
                Nhắn Zalo tư vấn
              </Link>
            </div>
          </div>

          {/* ===== RIGHT COLUMN — hero image ===== */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Glow blob phía sau ảnh */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div
                className="w-[80%] h-[80%] rounded-full blur-3xl opacity-70"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.35) 0%, rgba(94,234,212,0.25) 50%, transparent 75%)" }}
              />
            </div>

            <div className="relative w-full max-w-xl lg:max-w-none drop-shadow-[0_24px_48px_rgba(100,80,200,0.18)]">
              <Image
                src="/images/trang1anhbia.png"
                alt="2A Education — Aptis ESOL"
                width={720}
                height={540}
                priority
                className="object-contain w-full h-auto
                  drop-shadow-[0_8px_32px_rgba(80,60,180,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM INFO BAR ===== */}
      <div className="bg-[#1a2456] text-white mt-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4 text-sm font-semibold">
            <a href="tel:0853739928" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone size={16} className="text-orange-400" />
              Hotline: <span className="text-white">0853.739.928</span>
            </a>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-orange-400" />
              Website: <span className="text-white">onthiaptis.com</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-400" />
              CS1: <span className="text-white">TP.HCM</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-400" />
              CS2: <span className="text-white">Đồng Nai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
