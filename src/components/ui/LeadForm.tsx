"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Loader2, ChevronDown, Check } from "lucide-react";

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm";

type Option = { value: string; label: string };

function SelectField({
  label, required, value, onChange, options, placeholder,
}: {
  label: string; required?: boolean; value: string;
  onChange: (v: string) => void; options: Option[]; placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1">
        {label}{required && " *"}
      </label>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`w-full px-4 py-3 rounded-xl border text-left text-sm flex justify-between items-center transition-all bg-white ${
            open ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <span className={selected ? "text-slate-800" : "text-slate-400"}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors ${
                  value === opt.value
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {opt.label}
                {value === opt.value && <Check size={14} className="text-blue-500" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: "", phone: "", goal: "", format: "", level: "", note: "",
  });

  const setField = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {
      goal:   !formData.goal,
      format: !formData.format,
    };
    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div id="lead-form" className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
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
            <input required type="text" placeholder="Nhập họ và tên" value={formData.name} onChange={setField("name")} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Số điện thoại / Zalo *</label>
            <input required type="tel" minLength={9} placeholder="Nhập số điện thoại/Zalo" value={formData.phone} onChange={setField("phone")} className={inputClass} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <SelectField
                label="Mục tiêu chứng chỉ" required value={formData.goal}
                onChange={(v) => setFormData((p) => ({ ...p, goal: v }))}
                placeholder="Chọn mục tiêu"
                options={[
                  { value: "Aptis B1",    label: "Aptis B1" },
                  { value: "Aptis B2",    label: "Aptis B2" },
                  { value: "Aptis C1/C2", label: "Aptis C1/C2" },
                  { value: "IELTS",       label: "IELTS" },
                  { value: "VSTEP",       label: "VSTEP" },
                  { value: "VEPT",        label: "VEPT" },
                  { value: "Chưa biết",   label: "Chưa biết, cần tư vấn" },
                ]}
              />
              {errors.goal && <p className="text-red-500 text-xs mt-1">Vui lòng chọn mục tiêu</p>}
            </div>
            <div>
              <SelectField
                label="Hình thức học" required value={formData.format}
                onChange={(v) => setFormData((p) => ({ ...p, format: v }))}
                placeholder="Chọn hình thức"
                options={[
                  { value: "Online",           label: "Online" },
                  { value: "Offline TP.HCM",   label: "Offline TP.HCM" },
                  { value: "Offline Đồng Nai", label: "Offline Đồng Nai" },
                  { value: "Chưa quyết định",  label: "Chưa quyết định" },
                ]}
              />
              {errors.format && <p className="text-red-500 text-xs mt-1">Vui lòng chọn hình thức</p>}
            </div>
          </div>

          <SelectField
            label="Trình độ hiện tại" value={formData.level}
            onChange={(v) => setFormData((p) => ({ ...p, level: v }))}
            placeholder="Chọn trình độ (không bắt buộc)"
            options={[
              { value: "Mất gốc",          label: "Mất gốc" },
              { value: "Cơ bản",           label: "Cơ bản" },
              { value: "Đã từng học Aptis", label: "Đã từng học Aptis" },
              { value: "Đã thi chưa đạt",  label: "Đã từng thi nhưng chưa đạt" },
              { value: "Không rõ",         label: "Không rõ trình độ" },
            ]}
          />

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Ghi chú thêm</label>
            <textarea placeholder="Ví dụ: cần bằng gấp, thời gian rảnh..." rows={3} value={formData.note} onChange={setField("note")} className={`${inputClass} resize-none`} />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
            {loading ? <><Loader2 size={18} className="animate-spin" /> Đang gửi...</> : <>Nhận tư vấn miễn phí <Send size={18} /></>}
          </button>
        </form>
      )}
    </div>
  );
}
