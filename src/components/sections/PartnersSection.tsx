import SlideUp from "@/components/animations/SlideUp";
import { partners } from "@/constants/data";
import Image from "next/image";

function PartnerCard({ name, abbr, color, photo }: { name: string; abbr: string; color: string; photo: string }) {
  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm mx-3 shrink-0 w-52 overflow-hidden">
      <div className="w-full h-32 relative">
        {photo ? (
          <Image src={photo} alt={name} fill className="object-cover" />
        ) : (
          <div className={`${color} w-full h-full flex items-center justify-center`}>
            <span className="text-white text-2xl font-extrabold tracking-widest opacity-80">{abbr}</span>
          </div>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-xs font-semibold text-slate-700 leading-snug line-clamp-2">{name}</p>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Đối tác & khách hàng tiêu biểu</h2>
            <p className="text-slate-600">2A Education đã đồng hành cùng nhiều trường học, cơ sở giáo dục và nhóm học viên trong các chương trình đào tạo tiếng Anh, luyện thi Aptis, IELTS và VSTEP.</p>
          </div>
        </SlideUp>
      </div>

      <div className="marquee-track overflow-hidden">
        <div className="flex animate-marquee-left">
          {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
            <PartnerCard key={i} name={p.name} abbr={p.abbr} color={p.color} photo={p.photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
