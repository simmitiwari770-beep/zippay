import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Software Engineer",
    avatar: "AM",
    rating: 5,
    text: "Got ₹50,000 credited in under 10 minutes. Zippay's process is genuinely instant — no paperwork, no branch visits. This is how lending should work.",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    avatar: "PS",
    rating: 5,
    text: "As a freelancer, I needed quick funds between projects. Zippay made it effortless. The transparency in repayment terms is what truly sets them apart.",
  },
  {
    name: "Rahul Singh",
    role: "MBA Student",
    avatar: "RS",
    rating: 4,
    text: "Clean app, minimal documentation, and genuinely fast disbursal. I was skeptical at first, but Zippay delivered exactly as promised. Highly recommend!",
  },
  {
    name: "Neha Gupta",
    role: "Marketing Manager",
    avatar: "NG",
    rating: 5,
    text: "The entire experience feels premium. From eligibility check to disbursal — everything is seamless. Zippay has set a new benchmark for digital lending.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <div className="relative">
      <div className="gradient-border rounded-3xl p-8 md:p-12 max-w-3xl mx-auto relative">
        {/* Inner card */}
        <div className="relative z-10">
          {/* Quote icon */}
          <Quote className="w-10 h-10 text-primary-500/20 mb-6" />

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-white/10"}`}
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-8 font-medium">
            "{t.text}"
          </p>

          {/* Author + Nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xs">
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold text-text-primary text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-xl border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-text-secondary" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-xl border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
              >
                <ChevronRight className="w-4 h-4 text-text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-primary-500" : "w-1.5 bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
