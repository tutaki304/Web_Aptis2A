import SlideUp from "@/components/animations/SlideUp";
import { learningSteps } from "@/constants/data";

export default function LearningPath() {
  return (
    <section id="roadmap" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Lộ trình học Aptis tại 2A</h2>
          </div>
        </SlideUp>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-12 pb-4">
            {learningSteps.map((step, idx) => (
              <SlideUp key={step.step} delay={idx * 100}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-10 h-10 bg-orange-500 rounded-full text-white font-bold flex items-center justify-center -left-[21px] top-0 border-4 border-slate-900">
                    {step.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base">{step.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}