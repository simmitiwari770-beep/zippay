import { useState, useEffect } from "react";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Verma",
    role: "Product Designer",
    content: "Zippay transformed how I handle emergency expenses. The disbursal was virtually instant, and the interface is world-class.",
    rating: 5,
    company: "Refine Design",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Sneha Kapur",
    role: "Freelance Developer",
    content: "The transparency is what sold me. No hidden fees, no confusing terms. Just pure speed and reliability when you need it most.",
    rating: 5,
    company: "GigFlow",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Rahul Sharma",
    role: "Entrepreneur",
    content: "I've tried multiple apps, but Zippay's AI engine is on another level. Approval in under a minute is not just a claim—it's reality.",
    rating: 5,
    company: "StartupLab",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 ">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`glass-card !p-8 flex flex-col h-full transition-all duration-700 ${activeIndex === i
                ? "border-primary-500 shadow-2xl shadow-primary-600/10 -translate-y-2"
                : "opacity-40 scale-95 md:opacity-100 md:scale-100"
              }`}
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, starI) => (
                <Star key={starI} className="w-4 h-4 text-primary-500 fill-primary-500" />
              ))}
            </div>

            <p className="text-lg font-medium text-primary-900 leading-relaxed mb-8 flex-1 italic">
              "{t.content}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-primary-900 flex items-center gap-2">
                  {t.name}
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {t.role} • {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Nav Only */}
      <div className="flex justify-center gap-3 mt-12 md:hidden">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-primary-600" : "w-4 bg-primary-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
