import SlideUp from "@/components/animations/SlideUp";
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
}