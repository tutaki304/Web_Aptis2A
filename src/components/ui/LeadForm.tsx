"use client";
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
                <option value="VEPT">VEPT</option>
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
}