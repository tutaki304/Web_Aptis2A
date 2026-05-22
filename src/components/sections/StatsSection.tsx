import SlideUp from "@/components/animations/SlideUp";
import { Users, GraduationCap, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Users,         value: "1.000+", label: "Học viên đã đào tạo",            color: "text-blue-600",    border: "border-blue-100",   bg: "bg-blue-50" },
  { icon: GraduationCap, value: "500+",   label: "Học viên đang học",              color: "text-violet-600",  border: "border-violet-100", bg: "bg-violet-50" },
  { icon: Target,        value: "90.3%",  label: "Học viên đạt mục tiêu đầu ra",   color: "text-emerald-600", border: "border-emerald-100",bg: "bg-emerald-50" },
  { icon: TrendingUp,    value: "25%",    label: "Học viên vượt chỉ tiêu lên B2",  color: "text-orange-500",  border: "border-orange-100", bg: "bg-orange-50" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Những con số nổi bật</h2>
            <p className="text-slate-500 text-sm">Kết quả thực tế từ học viên 2A Education</p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, value, label, color, border, bg }, i) => (
            <SlideUp key={i} delay={i * 100}>
              <div className={`${bg} ${border} border rounded-2xl p-6 flex flex-col items-center text-center`}>
                <Icon size={24} className={`${color} mb-3 opacity-80`} />
                <div className={`text-4xl md:text-5xl font-black mb-2 ${color}`}>{value}</div>
                <p className="text-slate-500 text-xs md:text-sm leading-snug">{label}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8 px-4">
          * Kết quả phụ thuộc vào trình độ đầu vào, mức độ tham gia học tập và mục tiêu từng học viên.
        </p>
      </div>
    </section>
  );
}
