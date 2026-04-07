import { Target, Eye, Heart, Users, Award, Lightbulb, Globe, Sparkles } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We leverage AI, machine learning, and automation to reimagine every aspect of digital lending.' },
  { icon: Users, title: 'Customer Obsessed', desc: 'Every feature, every pixel, every policy — designed with our users at the center.' },
  { icon: Award, title: 'Radical Transparency', desc: 'No hidden fees, no confusing terms. We believe trust is built through clarity.' },
  { icon: Globe, title: 'Financial Inclusion', desc: 'Credit should be accessible to everyone. We\'re building for the underserved, not just the overserved.' },
];

const milestones = [
  { year: '2023', title: 'Founded', desc: 'Zippay was born from a vision to democratize instant digital credit for young India.' },
  { year: '2024', title: 'Beta Launch', desc: 'Launched with 5,000 early adopters. Achieved 98% satisfaction score in pilot.' },
  { year: '2024', title: '₹50Cr Disbursed', desc: 'Crossed ₹50 Crore in total disbursals within 8 months of launch.' },
  { year: '2025', title: '50K+ Users', desc: 'Surpassed 50,000 active users. Expanded to 150+ cities across India.' },
  { year: '2026', title: 'The Future', desc: 'Building towards becoming India\'s most trusted instant credit platform.' },
];

export default function About() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const visionRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="hero-mesh pt-48 pb-20 relative">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="badge mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Redefining Credit for{' '}
              <span className="gradient-text">Digital India</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              We started with a simple belief: everyone deserves access to fast, fair, and transparent credit.
              Zippay is building the future of personal lending — one instant disbursal at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy */}
      <SectionWrapper>
        <div ref={visionRef} className="fade-up">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Target, title: 'Our Vision', desc: 'To become India\'s most trusted and accessible instant credit platform — enabling financial freedom for millions.', accent: 'from-violet-500 to-purple-600' },
              { icon: Eye, title: 'Our Mission', desc: 'To eliminate the friction in personal lending through technology, transparency, and an unwavering focus on the user experience.', accent: 'from-blue-500 to-cyan-500' },
              { icon: Heart, title: 'Our Philosophy', desc: 'Credit should empower, not burden. We design every product with responsible lending at its core — fair rates, clear terms, flexible repayment.', accent: 'from-emerald-500 to-teal-500' },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-3xl card-lift">
                <div className="bg-bg-card rounded-3xl p-8 text-center h-full relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper gradient>
        <div ref={valuesRef} className="fade-up">
          <SectionHeader
            badge="Our Values"
            title={<>What drives us <span className="gradient-text">every day</span></>}
            subtitle="The principles that shape every decision we make."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="gradient-border rounded-3xl card-lift">
                <div className="bg-bg-card rounded-3xl p-7 flex gap-5 items-start relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-2">{v.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <div ref={timelineRef} className="fade-up">
          <SectionHeader
            badge="Journey"
            title={<>Our <span className="gradient-text">milestones</span></>}
            subtitle="From a bold idea to 50,000+ happy users."
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/30 via-primary-500/10 to-transparent md:-translate-x-px" />

            {milestones.map((m, i) => (
              <div key={i} className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_12px_rgba(124,58,237,0.4)]" />
                </div>

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="badge !text-[10px] mb-2 inline-flex">{m.year}</span>
                  <h3 className="text-base font-bold text-text-primary mb-1">{m.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Banner */}
      <div className="border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50K+', label: 'Active Users' },
              { value: '₹100Cr+', label: 'Disbursed' },
              { value: '150+', label: 'Cities Served' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-black gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
