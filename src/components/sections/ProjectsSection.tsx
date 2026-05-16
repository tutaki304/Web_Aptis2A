import SlideUp from "@/components/animations/SlideUp";
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
}