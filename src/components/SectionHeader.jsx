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
      <h2 className="mb-0">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed text-text-secondary font-medium opacity-80 ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
