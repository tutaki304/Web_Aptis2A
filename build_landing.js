const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\\\Users\\\\LEGION\\\\Desktop\\\\Web_Aptis2A\\\\onthiaptis-landing';

const files = {
  'src/app/layout.tsx': `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luyện thi Aptis ESOL B1/B2 tại 2A Education",
  description: "Khóa luyện thi Aptis ESOL 12 buổi, học online/offline, luyện sát đề, chấm Speaking & Writing 1-1, tư vấn lộ trình miễn phí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={\`\${inter.className} pb-16 md:pb-0\`}>
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}`,

  'src/constants/data.ts': `export const features = [
  { id: 1, title: "Luyện sát đề cập nhật", desc: "Bám sát format Aptis ESOL, giúp học viên làm quen dạng bài và chiến lược xử lý từng kỹ năng." },
  { id: 2, title: "Cá nhân hóa lộ trình", desc: "Tư vấn mục tiêu B1/B2 phù hợp với trình độ hiện tại, thời gian học và nhu cầu chứng chỉ." },
  { id: 3, title: "Web luyện thi độc quyền", desc: "Học viên được luyện tập thêm qua hệ thống bài tập, đề luyện và tài liệu hỗ trợ." },
  { id: 4, title: "Chấm Speaking & Writing 1-1", desc: "Bài nói và bài viết được sửa lỗi chi tiết, giúp học viên cải thiện đúng điểm yếu." },
  { id: 5, title: "Học online/offline linh hoạt", desc: "Học viên có thể lựa chọn hình thức học phù hợp tại TP.HCM, Đồng Nai hoặc online." },
  { id: 6, title: "Hỗ trợ theo mục tiêu", desc: "Định hướng học theo mục tiêu B1, B2, C1/C2 hoặc nhu cầu riêng của từng nhóm học viên." }
];

export const courses = [
  { id: 1, title: "Aptis B1", desc: "Phù hợp với học sinh, sinh viên và người cần chứng chỉ tiếng Anh bậc 3/6.", cta: "Tư vấn khóa B1" },
  { id: 2, title: "Aptis B2", desc: "Phù hợp với sinh viên, giáo viên, học viên cao học và người đi làm cần chứng chỉ bậc 4/6.", cta: "Tư vấn khóa B2" },
  { id: 3, title: "Aptis C1/C2", desc: "Phù hợp với học viên cần năng lực tiếng Anh nâng cao hoặc mục tiêu chuyên môn cao hơn.", cta: "Tư vấn C1/C2" },
  { id: 4, title: "IELTS", desc: "Phù hợp với học sinh, sinh viên có mục tiêu xét tuyển, du học hoặc sử dụng chứng chỉ quốc tế.", cta: "Tư vấn IELTS" },
  { id: 5, title: "VSTEP", desc: "Phù hợp với học viên cần chứng chỉ tiếng Anh theo khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam.", cta: "Tư vấn VSTEP" }
];

export const learningSteps = [
  { step: 1, title: "Test đầu vào", desc: "Học viên được kiểm tra trình độ để xác định điểm mạnh, điểm yếu và mục tiêu phù hợp." },
  { step: 2, title: "Tư vấn mục tiêu", desc: "2A tư vấn lộ trình B1/B2/C1 phù hợp với trình độ hiện tại và thời gian cần chứng chỉ." },
  { step: 3, title: "Học 12 buổi trọng tâm", desc: "Tập trung chiến lược làm bài, luyện từng kỹ năng và hệ thống kiến thức cần thiết." },
  { step: 4, title: "Luyện đề và sửa lỗi", desc: "Học viên luyện đề, được sửa lỗi Speaking/Writing và chuẩn bị tâm lý trước kỳ thi." }
];

export const partners = [
  "Trường Đại học Kinh tế TP.HCM – UEH",
  "Trường Đại học Quốc tế Sài Gòn – SIU",
  "Trường Đại học Phan Thiết – UPT",
  "Trường Đại học Đồng Nai – DNU",
  "Trường THCS/PT Lê Lợi",
  "Các trường đại học, cao đẳng và THPT khác"
];

export const projects = [
  { id: 1, title: "THCS/PT Lê Lợi - Aptis B1 cho học sinh", size: "123 học viên, 6 lớp", result: "90,3% học viên đạt mục tiêu đầu ra, 25% vượt chỉ tiêu lên B2" },
  { id: 2, title: "THCS/PT Lê Lợi - Aptis B1 cho GV, NV", size: "54 học viên", result: "100% học viên đạt mục tiêu đầu ra, 24% vượt chỉ tiêu lên B2" },
  { id: 3, title: "THCS/PT Lê Lợi - Aptis B2/C1 cho GV TA", size: "11 học viên", result: "100% học viên đạt mục tiêu đầu ra" },
  { id: 4, title: "UEH Mekong - Aptis B2 cho HV cao học", size: "Nhiều đợt đào tạo", result: "Gần 85% học viên đạt mục tiêu đầu ra" }
];

export const benefits = [
  { id: 1, title: "Học sinh THPT", desc: "Có thể hỗ trợ xét miễn thi môn Ngoại ngữ theo quy định hiện hành." },
  { id: 2, title: "Sinh viên", desc: "Hỗ trợ chuẩn đầu ra ngoại ngữ và tăng lợi thế khi xét tốt nghiệp, xét tuyển tùy quy định." },
  { id: 3, title: "Giáo viên / viên chức", desc: "Hỗ trợ hồ sơ xét chuẩn năng lực ngoại ngữ, nâng hạng, thăng chức theo yêu cầu đơn vị." },
  { id: 4, title: "Người đi làm", desc: "Bổ sung chứng chỉ tiếng Anh cho hồ sơ công việc, du học, hội thảo hoặc môi trường quốc tế." }
];

export const faqs = [
  { q: "Aptis ESOL là gì?", a: "Aptis ESOL là bài thi đánh giá năng lực tiếng Anh do British Council phát triển, đánh giá các kỹ năng tiếng Anh theo khung tham chiếu phù hợp." },
  { q: "Khóa Aptis 12 buổi phù hợp với ai?", a: "Phù hợp với học viên cần học trọng tâm, có mục tiêu chứng chỉ rõ ràng và muốn được hướng dẫn chiến lược làm bài." },
  { q: "Mất gốc có học được không?", a: "Có. Học viên nên test đầu vào trước để được tư vấn lộ trình phù hợp với trình độ hiện tại." },
  { q: "Học online có hiệu quả không?", a: "Có, nếu học viên tham gia đầy đủ, làm bài luyện tập và được sửa lỗi thường xuyên." },
  { q: "Chưa biết nên học B1 hay B2 thì làm sao?", a: "Học viên nên đăng ký test đầu vào miễn phí để được tư vấn mục tiêu phù hợp." },
  { q: "Có được chấm Speaking và Writing không?", a: "Có. Học viên được hỗ trợ chấm và sửa lỗi Speaking/Writing theo lộ trình khóa học." },
  { q: "Có học lại nếu chưa đạt không?", a: "Có thể áp dụng chính sách hỗ trợ học lại theo điều kiện từng khóa học." }
];`,

  'src/components/ui/FloatingContactButtons.tsx': `"use client";
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
}`,

  'src/components/ui/LeadForm.tsx': `"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div id="lead-form" className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 mt-8 lg:mt-0">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Đăng ký tư vấn lộ trình Aptis miễn phí</h3>
        <p className="text-sm text-slate-500">Để lại thông tin, 2A sẽ liên hệ tư vấn lộ trình học phù hợp với trình độ và mục tiêu của bạn.</p>
      </div>

      {submitted ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 text-center py-10 font-medium">
          🎉 Cảm ơn bạn! 2A sẽ liên hệ tư vấn trong thời gian sớm nhất.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Họ và tên *</label>
            <input required type="text" placeholder="Nhập họ và tên" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Số điện thoại / Zalo *</label>
            <input required type="tel" minLength={9} placeholder="Nhập số điện thoại/Zalo" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Mục tiêu chứng chỉ *</label>
              <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm bg-white">
                <option value="">Chọn mục tiêu</option>
                <option value="Aptis B1">Aptis B1</option>
                <option value="Aptis B2">Aptis B2</option>
                <option value="Aptis C1/C2">Aptis C1/C2</option>
                <option value="IELTS">IELTS</option>
                <option value="VSTEP">VSTEP</option>
                <option value="Chưa biết">Chưa biết, cần tư vấn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Hình thức học *</label>
              <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm bg-white">
                <option value="">Chọn hình thức</option>
                <option value="Online">Online</option>
                <option value="Offline TP.HCM">Offline TP.HCM</option>
                <option value="Offline Đồng Nai">Offline Đồng Nai</option>
                <option value="Chưa quyết định">Chưa quyết định</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Trình độ hiện tại</label>
            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm bg-white">
              <option value="">Chọn trình độ</option>
              <option value="Mất gốc">Mất gốc</option>
              <option value="Cơ bản">Cơ bản</option>
              <option value="Đã từng học Aptis">Đã từng học Aptis</option>
              <option value="Đã thi chưa đạt">Đã từng thi nhưng chưa đạt</option>
              <option value="Không rõ">Không rõ trình độ</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Ghi chú thêm</label>
            <textarea placeholder="Ví dụ: cần bằng gấp, thời gian rảnh..." rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
            Nhận tư vấn miễn phí <Send size={18} />
          </button>
        </form>
      )}
    </div>
  );
}`,

  'src/components/ui/Navbar.tsx': `"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
    <header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-4 md:py-5"}\`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="font-extrabold text-xl tracking-tight text-blue-600">
            2A Education <span className="text-slate-400 text-sm font-medium hidden sm:inline-block ml-2 border-l border-slate-300 pl-2">Aptis & IELTS 2A</span>
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
}`,

  'src/components/sections/Hero.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/ui/LeadForm";

export default function Hero() {
  const badges = [
    "12 buổi trọng tâm", "Luyện sát đề cập nhật", "Web luyện thi độc quyền", "Chấm Speaking & Writing 1-1", "Online / Offline"
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-50 rounded-full blur-[80px] opacity-60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start">
          
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left mt-8 lg:mt-0">
            <SlideUp>
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                Aptis không khó – nhưng <span className="text-red-500">rớt là thật</span> nếu học sai cách
              </h1>
            </SlideUp>

            <SlideUp delay={100}>
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Nhiều học viên trượt không phải vì yếu tiếng Anh, mà vì học sai chiến lược, luyện không sát đề và thiếu người sửa lỗi cá nhân. Tại 2A Education, khóa luyện Aptis ESOL 12 buổi giúp học viên học đúng trọng tâm, luyện sát format đề và được hỗ trợ theo lộ trình phù hợp.
              </p>
            </SlideUp>

            <SlideUp delay={200}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                {badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 shadow-sm">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    {badge}
                  </div>
                ))}
              </div>
            </SlideUp>

            <SlideUp delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#lead-form" className="hidden lg:flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-orange-500/25">
                  Đăng ký test miễn phí
                </Link>
                <Link href="https://zalo.me/0853739928" target="_blank" className="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 px-8 py-3.5 rounded-xl font-bold text-base transition-all">
                  <MessageCircle size={20} />
                  Nhắn Zalo tư vấn
                </Link>
              </div>
            </SlideUp>
          </div>

          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mr-0 relative z-20">
            <SlideUp delay={400}>
               <LeadForm />
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/FeatureCards.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { features } from "@/constants/data";
import { CheckCircle } from "lucide-react";

export default function FeatureCards() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Khóa Aptis ESOL 12 buổi tại 2A có gì?</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <SlideUp key={item.id} delay={idx * 50}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/Courses.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { courses } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Các khóa học tại 2A Education</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <SlideUp key={course.id} delay={idx * 50}>
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                </div>
                <p className="text-slate-600 flex-1 mb-6 text-sm">{course.desc}</p>
                
                <Link href="#lead-form" className="flex items-center justify-between w-full bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-700 font-bold py-3 px-4 rounded-xl transition-colors">
                  {course.cta}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/LearningPath.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { learningSteps } from "@/constants/data";

export default function LearningPath() {
  return (
    <section id="roadmap" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Lộ trình học Aptis tại 2A</h2>
          </div>
        </SlideUp>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-12 pb-4">
            {learningSteps.map((step, idx) => (
              <SlideUp key={step.step} delay={idx * 100}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-10 h-10 bg-orange-500 rounded-full text-white font-bold flex items-center justify-center -left-[21px] top-0 border-4 border-slate-900">
                    {step.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base">{step.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/PartnersSection.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { partners } from "@/constants/data";
import { Building2 } from "lucide-react";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Đối tác & khách hàng tiêu biểu</h2>
            <p className="text-slate-600">2A Education đã đồng hành cùng nhiều trường học, cơ sở giáo dục và nhóm học viên trong các chương trình đào tạo tiếng Anh, luyện thi Aptis, IELTS và VSTEP.</p>
          </div>
        </SlideUp>

        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner, idx) => (
            <SlideUp key={idx} delay={idx * 50}>
              <div className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl flex items-center gap-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                <Building2 size={20} className="text-blue-500 shrink-0" />
                <span>{partner}</span>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/StatsSection.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { Users, GraduationCap, TrendingUp, Target } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Những con số nổi bật</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <SlideUp delay={100}>
            <div className="text-center">
              <Users className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">400+</div>
              <p className="text-blue-100 text-xs md:text-sm">Học viên tiêu biểu đã và đang học</p>
            </div>
          </SlideUp>
          <SlideUp delay={200}>
            <div className="text-center">
              <GraduationCap className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">Nhiều</div>
              <p className="text-blue-100 text-xs md:text-sm">Chương trình đào tạo cho HS, GV, Cao học</p>
            </div>
          </SlideUp>
          <SlideUp delay={300}>
            <div className="text-center">
              <Target className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">90.3%</div>
              <p className="text-blue-100 text-xs md:text-sm">Học viên đạt mục tiêu đầu ra</p>
            </div>
          </SlideUp>
          <SlideUp delay={400}>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">75%</div>
              <p className="text-blue-100 text-xs md:text-sm">Học viên vượt mục tiêu lên B2</p>
            </div>
          </SlideUp>
        </div>
        <p className="text-center text-xs text-blue-200 mt-8 opacity-80 px-4">
          * Kết quả phụ thuộc vào trình độ đầu vào, mức độ tham gia học tập và mục tiêu từng học viên.
        </p>
      </div>
    </section>
  );
}`,

  'src/components/sections/ProjectsSection.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { projects } from "@/constants/data";
import { Award, BookCheck } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Dự án đào tạo tiêu biểu</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <SlideUp key={proj.id} delay={idx * 100}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 pb-4 border-b border-slate-100">{proj.title}</h3>
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5"><Award size={18} className="text-orange-500 shrink-0" /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase">Quy mô</div>
                    <div className="font-medium text-slate-700 text-sm md:text-base">{proj.size}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><BookCheck size={18} className="text-green-500 shrink-0" /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase">Kết quả</div>
                    <div className="font-medium text-slate-700 text-sm md:text-base">{proj.result}</div>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/BenefitsSection.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { benefits } from "@/constants/data";
import { FileBadge } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Aptis ESOL mang lại lợi ích gì?</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((item, idx) => (
            <SlideUp key={item.id} delay={idx * 100}>
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 h-full">
                <h3 className="text-lg font-bold text-blue-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        <SlideUp delay={400}>
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 flex-col sm:flex-row">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <FileBadge size={24} className="text-slate-700" />
            </div>
            <div>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block sm:inline">Thông tin pháp lý: </strong>
                 Aptis ESOL có thể quy đổi theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam từ A1 đến C2 theo Quyết định số 925/QĐ-BGDĐT ngày 31/03/2023.
              </p>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}`,

  'src/components/sections/FAQ.tsx': `"use client";
import SlideUp from "@/components/animations/SlideUp";
import { faqs } from "@/constants/data";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Câu hỏi thường gặp</h2>
          </div>
        </SlideUp>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <SlideUp key={idx} delay={idx * 50}>
              <div 
                className={\`bg-white rounded-2xl border transition-all cursor-pointer overflow-hidden \${openIdx === idx ? 'border-blue-300 shadow-md' : 'border-slate-200'}\`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <div className="p-5 flex justify-between items-center gap-4">
                  <h3 className="font-bold text-slate-800">{faq.q}</h3>
                  {openIdx === idx ? <ChevronUp className="text-blue-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                </div>
                {openIdx === idx && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/ContactSection.tsx': `import SlideUp from "@/components/animations/SlideUp";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-1/2 text-white">
              <h2 className="text-3xl font-extrabold mb-4">Liên hệ 2A Education</h2>
              <p className="text-blue-100 mb-8 leading-relaxed text-sm">
                Bạn cần tư vấn lộ trình Aptis B1/B2 hoặc chưa biết nên bắt đầu từ đâu? Để lại thông tin, 2A sẽ hỗ trợ kiểm tra trình độ và tư vấn khóa học phù hợp.
              </p>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-400 shrink-0" />
                  <span>0853.739.928 - Ms. Hải Vân</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-400 shrink-0" />
                  <span>aptis.ielts.2a@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-orange-400 shrink-0" />
                  <span>onthiaptis.com</span>
                </div>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-blue-500/50">
                  <MapPin size={20} className="text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="mb-2">CS1: 20-22-24 Huỳnh Mẫn Đạt, P. Chợ Quán, TP.HCM</div>
                    <div>CS2: 653 Nguyễn Ái Quốc, P. Long Bình, Đồng Nai</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-white font-bold text-xl mb-6">Kết nối ngay</h3>
              <div className="space-y-4">
                <Link href="tel:0853739928" className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-colors">
                  Gọi Hotline
                </Link>
                <Link href="https://zalo.me/0853739928" target="_blank" className="flex items-center justify-center gap-2 w-full bg-white text-slate-900 hover:bg-slate-100 py-4 rounded-xl font-bold transition-colors">
                  Nhắn Zalo
                </Link>
                <Link href="https://forms.gle/fti6RpobE4HVjpjq8" target="_blank" className="flex items-center justify-center gap-2 w-full bg-transparent border border-slate-700 text-white hover:bg-slate-800 py-4 rounded-xl font-bold transition-colors">
                  Đăng ký nhanh
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/sections/Footer.tsx': `export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm">
        <p className="mb-2">© {new Date().getFullYear()} 2A Education - Trung tâm Đào tạo & Luyện thi Tiếng Anh.</p>
        <p className="text-xs opacity-60">Landing page nội bộ phục vụ tuyển sinh Aptis & IELTS.</p>
      </div>
    </footer>
  );
}`,

  'src/app/page.tsx': `import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureCards from "@/components/sections/FeatureCards";
import Courses from "@/components/sections/Courses";
import LearningPath from "@/components/sections/LearningPath";
import PartnersSection from "@/components/sections/PartnersSection";
import StatsSection from "@/components/sections/StatsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <Courses />
        <LearningPath />
        <PartnersSection />
        <StatsSection />
        <ProjectsSection />
        <BenefitsSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}`
};

Object.keys(files).forEach(filepath => {
  const fullPath = path.join(projectRoot, filepath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, files[filepath]);
  console.log('Created:', filepath);
});
