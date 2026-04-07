import {
  Shield, Heart, Scale, Eye, AlertTriangle,
  CheckCircle, Users, Landmark, BookOpen, HelpCircle, Sparkles
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const principles = [
  { icon: Scale, title: 'Fair Pricing', desc: 'We charge competitive, transparent interest rates with no hidden fees. What you see is what you pay — always.' },
  { icon: Eye, title: 'Full Transparency', desc: 'Every charge, every term, every condition is clearly communicated before you accept any credit offer.' },
  { icon: Heart, title: 'Borrower Well-being', desc: 'We assess your ability to repay comfortably. We never lend more than what we believe you can manage.' },
  { icon: Users, title: 'Respectful Collections', desc: 'If you face difficulties, we work with you — not against you. Our collection practices are ethical and empathetic.' },
  { icon: Landmark, title: 'Regulatory Compliance', desc: 'We operate in full compliance with RBI guidelines and all applicable financial regulations.' },
  { icon: BookOpen, title: 'Financial Education', desc: 'We help our users understand credit, build healthy habits, and make informed financial decisions.' },
];

const commitments = [
  'We never charge prepayment or foreclosure penalties',
  'We provide a complete fee schedule before loan acceptance',
  'We offer flexible EMI options based on your income',
  'We send timely reminders — not aggressive collection calls',
  'We give you the right to file complaints and get resolution',
  'We regularly review our practices for fairness and compliance',
];

export default function ResponsibleLending() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const principlesRef = useScrollReveal();
  const commitRef = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="hero-mesh pt-32 pb-20 relative">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="badge mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              Responsible Lending
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Lending with{' '}
              <span className="gradient-text">Integrity</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              At Zippay, responsible lending isn't just policy — it's our foundation.
              We believe credit should empower you, never burden you.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <SectionWrapper>
        <div ref={principlesRef} className="fade-up">
          <SectionHeader
            badge="Our Principles"
            title={<>How we lend <span className="gradient-text">responsibly</span></>}
            subtitle="Every decision we make is guided by these core principles."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="gradient-border rounded-3xl card-lift">
                <div className="bg-bg-card rounded-3xl p-7 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Commitments */}
      <SectionWrapper gradient>
        <div ref={commitRef} className="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Our Commitment"
                title={<>What we <span className="gradient-text">promise</span> you</>}
                subtitle="These aren't just words. These are commitments we uphold with every single loan."
                center={false}
              />
            </div>
            <div className="space-y-3">
              {commitments.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-text-primary font-medium text-sm">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Alert Banner */}
      <div className="border-y border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 py-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="font-bold text-amber-300 mb-1 text-sm">Important Notice</h3>
            <p className="text-sm text-amber-200/70 leading-relaxed">
              Zippay never asks for any upfront payment or deposit before loan disbursal.
              If anyone contacts you claiming to represent Zippay and asks for money, please report it immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Help */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="w-7 h-7 text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-3">Need Help?</h2>
          <p className="text-text-secondary mb-6">
            If you're facing financial difficulties or have concerns about your loan,
            our support team is here to help you find a solution.
          </p>
          <a href="mailto:grievance@zippay.in" className="btn-primary !text-sm">
            Contact Grievance Officer
          </a>
        </div>
      </SectionWrapper>
    </main>
  );
}
