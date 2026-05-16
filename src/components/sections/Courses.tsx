import SlideUp from "@/components/animations/SlideUp";
import { courses } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Các khóa học tại 2A Education</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <SlideUp key={course.id} delay={idx * 50}>
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                </div>
                <p className="text-slate-600 flex-1 mb-6 text-sm">{course.desc}</p>
                
                <Link href="#lead-form" className="flex items-center justify-between w-full bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-700 font-bold py-3 px-4 rounded-xl transition-colors">
                  {course.cta}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}