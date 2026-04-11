import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SectionWrapper({
  children,
  className = "",
  id,
  gradient = false,
}) {
  const ref = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-up py-16 md:py-16 relative overflow-hidden ${gradient ? "bg-bg-alt/50" : ""} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">{children}</div>
    </section>
  );
}
