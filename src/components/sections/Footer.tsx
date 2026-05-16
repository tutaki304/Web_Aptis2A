export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm">
        <p className="mb-2">© {new Date().getFullYear()} 2A Education - Trung tâm Đào tạo & Luyện thi Tiếng Anh.</p>
        <p className="text-xs opacity-60">Landing page nội bộ phục vụ tuyển sinh Aptis & IELTS.</p>
      </div>
    </footer>
  );
}