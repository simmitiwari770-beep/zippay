export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-4 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="badge">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] text-primary-900">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl max-w-2xl leading-relaxed text-text-secondary font-medium opacity-80 ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
