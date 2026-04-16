import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CreditScoreVisual({ score = 782, maxScore = 900 }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const circumference = 2 * Math.PI * 45;

  const getColor = (s) => {
    if (s >= 750) return "#10b981";
    if (s >= 650) return "#f59e0b";
    return "#ef4444";
  };

  const getLabel = (s) => {
    if (s >= 750) return "Excellent";
    if (s >= 650) return "Good";
    return "Average";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrentScore(Math.round(eased * score));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, score]);

  const strokeDashoffset = circumference - (currentScore / maxScore) * circumference;

  return (
    <div
      ref={ref}
      className="bg-white border border-slate-200/60 rounded-[40px] p-8 shadow-[0_40px_80px_rgba(15,23,42,0.08)] w-full max-w-2xl mx-auto relative overflow-hidden group transition-all duration-700 hover:shadow-[0_60px_120px_rgba(124,58,237,0.12)]"
    >
      {/* Subtle BG glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_0%,#7c3aed_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[14px] bg-green-50 flex items-center justify-center border border-green-100">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight leading-tight">Zippay Limit</h4>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Analysis</p>
              </div>
            </div>
          </div>

          {/* Status Pill */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getColor(currentScore), boxShadow: `0 0 8px ${getColor(currentScore)}` }}
            />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: getColor(currentScore) }}>
              {getLabel(currentScore)}
            </span>
          </div>
        </div>

        {/* Main Content — Horizontal Layout */}
        <div className="flex items-center gap-8">
          {/* Left — Circular Gauge */}
          <div className="relative shrink-0 w-44 h-44">
            <div
              className="absolute inset-5 rounded-full blur-[25px] opacity-20 transition-colors duration-1000 animate-pulse pointer-events-none"
              style={{ backgroundColor: getColor(currentScore) }}
            />
            <svg className="w-full h-full -rotate-90 relative z-10" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(15,23,42,0.04)" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="45" fill="none"
                stroke={getColor(currentScore)}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                  filter: `drop-shadow(0 0 10px ${getColor(currentScore)}60)`,
                  transition: "stroke 1s ease, stroke-dashoffset 0.1s linear",
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-5xl font-black text-slate-900 tabular-nums tracking-tighter leading-none">
                {currentScore}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                of {maxScore}
              </span>
            </div>
          </div>

          {/* Right — Metrics + Button */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex justify-between items-center py-3 px-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <span className="text-sm text-slate-500 font-medium">Approved Limit</span>
              <span className="text-base font-black text-primary-600">₹3,50,000</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <span className="text-sm text-slate-500 font-medium">Interest Rate</span>
              <span className="text-base font-bold text-slate-900">1.5% p.m.</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <span className="text-sm text-slate-500 font-medium">Processing Time</span>
              <span className="text-base font-bold text-slate-900">&lt; 10 min</span>
            </div>

            <Link to="/contact" className="w-full mt-1 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs tracking-wider uppercase hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-600/25 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn whitespace-nowrap">
              Unlock Full Credit
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
