import SlideUp from "@/components/animations/SlideUp";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/ui/LeadForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Đăng ký tư vấn lộ trình Aptis
            </h2>
            <p className="text-slate-600">
              Để lại thông tin, 2A sẽ liên hệ tư vấn lộ trình học phù hợp với trình độ và mục tiêu của bạn.
            </p>
          </div>
        </SlideUp>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Thông tin liên hệ */}
          <SlideUp className="lg:col-span-2">
            <div className="bg-blue-600 rounded-3xl p-8 text-white h-full flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-extrabold mb-1">2A Education</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Trung tâm đào tạo & luyện thi Aptis ESOL, IELTS, VSTEP uy tín tại TP.HCM và Đồng Nai.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <a href="tel:0853739928" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
                  <Phone size={18} className="text-orange-400 shrink-0" />
                  <span>0853.739.928 — Ms. Hải Vân</span>
                </a>
                <a href="mailto:aptis.ielts.2a@gmail.com" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
                  <Mail size={18} className="text-orange-400 shrink-0" />
                  <span>aptis.ielts.2a@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-orange-400 shrink-0" />
                  <span>onthiaptis.com</span>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-blue-500/50">
                  <MapPin size={18} className="text-orange-400 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <p>CS1: 20-22-24 Huỳnh Mẫn Đạt, P. Chợ Quán, TP.HCM</p>
                    <p>CS2: 653 Nguyễn Ái Quốc, P. Long Bình, Đồng Nai</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex gap-3">
                <Link
                  href="tel:0853739928"
                  className="flex-1 text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  Gọi ngay
                </Link>
                <Link
                  href="https://zalo.me/0853739928"
                  target="_blank"
                  className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  Nhắn Zalo
                </Link>
              </div>
            </div>
          </SlideUp>

          {/* Lead Form */}
          <SlideUp delay={100} className="lg:col-span-3">
            <LeadForm />
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
