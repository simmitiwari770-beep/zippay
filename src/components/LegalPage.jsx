import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles } from 'lucide-react';

export default function LegalPage({ title, badge, lastUpdated, children }) {
  const heroRef = useScrollReveal({ threshold: 0.05 });

  return (
    <main>
      <section className="hero-mesh pt-32 pb-16 relative">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-600/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="badge mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              {badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-text-primary">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-sm text-text-muted">Last updated: {lastUpdated}</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border rounded-3xl">
            <div className="bg-bg-card rounded-3xl p-8 md:p-12 relative z-10">
              <div className="prose-dark">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
