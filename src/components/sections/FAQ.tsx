"use client";
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
                className={`bg-white rounded-2xl border transition-all cursor-pointer overflow-hidden ${openIdx === idx ? 'border-blue-300 shadow-md' : 'border-slate-200'}`}
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
}