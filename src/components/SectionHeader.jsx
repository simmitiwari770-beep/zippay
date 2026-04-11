export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="badge mb-4 inline-flex">
          <span className="glow-dot !w-1.5 !h-1.5" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg max-w-2xl leading-relaxed text-text-secondary ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
