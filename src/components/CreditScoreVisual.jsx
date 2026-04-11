import { useState, useEffect, useRef } from "react";

export default function CreditScoreVisual({ score = 780, maxScore = 900 }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset =
    circumference - circumference * (currentScore / maxScore);

  const getColor = (s) => {
    if (s >= 750) return "#06d6a0";
    if (s >= 650) return "#eab308";
    return "#ef4444";
  };

  const getLabel = (s) => {
    if (s >= 750) return "Excellent";
    if (s >= 650) return "Good";
    return "Needs Work";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
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

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <div className="relative w-40 h-40">
        {/* Background glow */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-20"
          style={{ background: getColor(currentScore) }}
        />
        <svg
          className="w-full h-full -rotate-90 relative z-10"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="7"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={getColor(currentScore)}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            style={{
              transition: "stroke-dashoffset 2s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <span className="text-3xl font-extrabold text-text-primary tabular-nums">
            {currentScore}
          </span>
          <span className="text-xs text-text-muted mt-1">
            out of {maxScore}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: getColor(currentScore),
            boxShadow: `0 0 8px ${getColor(currentScore)}`,
          }}
        />
        <span
          className="text-sm font-semibold"
          style={{ color: getColor(currentScore) }}
        >
          {getLabel(currentScore)}
        </span>
      </div>
    </div>
  );
}
