import SlideUp from "@/components/animations/SlideUp";
import { Users, GraduationCap, TrendingUp, Target } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Những con số nổi bật</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <SlideUp delay={100}>
            <div className="text-center">
              <Users className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">400+</div>
              <p className="text-blue-100 text-xs md:text-sm">Học viên tiêu biểu đã và đang học</p>
            </div>
          </SlideUp>
          <SlideUp delay={200}>
            <div className="text-center">
              <GraduationCap className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">Nhiều</div>
              <p className="text-blue-100 text-xs md:text-sm">Chương trình đào tạo cho HS, GV, Cao học</p>
            </div>
          </SlideUp>
          <SlideUp delay={300}>
            <div className="text-center">
              <Target className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">90.3%</div>
              <p className="text-blue-100 text-xs md:text-sm">Học viên đạt mục tiêu đầu ra</p>
            </div>
          </SlideUp>
          <SlideUp delay={400}>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-3 md:mb-4 opacity-80" size={32} />
              <div className="text-3xl md:text-4xl font-black mb-2">75%</div>
              <p className="text-blue-100 text-xs md:text-sm">Học viên vượt mục tiêu lên B2</p>
            </div>
          </SlideUp>
        </div>
        <p className="text-center text-xs text-blue-200 mt-8 opacity-80 px-4">
          * Kết quả phụ thuộc vào trình độ đầu vào, mức độ tham gia học tập và mục tiêu từng học viên.
        </p>
      </div>
    </section>
  );
}