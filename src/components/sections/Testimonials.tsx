import SlideUp from "@/components/animations/SlideUp";
import { students } from "@/constants/data";
import Image from "next/image";

const PLACEHOLDER_COLORS = [
  "from-blue-400 to-blue-600",
  "from-indigo-400 to-indigo-600",
  "from-violet-400 to-violet-600",
  "from-sky-400 to-sky-600",
  "from-teal-400 to-teal-600",
  "from-orange-400 to-orange-600",
];

function StudentCard({ name, badge, photo, colorIdx }: { name: string; badge: string; photo: string; colorIdx: number }) {
  const gradient = PLACEHOLDER_COLORS[colorIdx % PLACEHOLDER_COLORS.length];
  return (
    <div className="relative mx-2 shrink-0 w-44 h-60 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-md">
      {/* Ảnh hoặc placeholder */}
      {photo ? (
        <Image src={photo} alt={name} fill className="object-cover object-top" />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <span className="text-white text-4xl font-extrabold opacity-40 select-none">
            {name.split(" ").pop()?.charAt(0)}
          </span>
        </div>
      )}

      {/* Gradient overlay phía dưới */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Tên + badge điểm */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex items-end justify-between gap-2">
        <span className="text-white text-xs font-semibold leading-tight drop-shadow line-clamp-2">{name}</span>
        <span className="shrink-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap shadow">
          {badge}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = students.slice(0, Math.ceil(students.length / 2));
  const row2 = students.slice(Math.ceil(students.length / 2));

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Học viên tiêu biểu
            </h2>
            <p className="text-slate-600">Hàng trăm học viên đã đạt chứng chỉ Aptis và vượt chỉ tiêu kỳ vọng sau khóa học tại 2A Education.</p>
          </div>
        </SlideUp>
      </div>

      <div className="flex flex-col gap-4">
        {/* Hàng 1 — trượt sang trái */}
        <div className="marquee-track overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...row1, ...row1, ...row1, ...row1].map((s, i) => (
              <StudentCard key={i} name={s.name} badge={s.badge} photo={s.photo} colorIdx={i} />
            ))}
          </div>
        </div>

        {/* Hàng 2 — trượt sang phải */}
        <div className="marquee-track overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...row2, ...row2, ...row2, ...row2].map((s, i) => (
              <StudentCard key={i} name={s.name} badge={s.badge} photo={s.photo} colorIdx={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
