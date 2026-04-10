import { Link } from 'react-router-dom';
import {
  Zap, Shield, Clock, FileText, ArrowRight, ChevronRight,
  Smartphone, TrendingUp, Lock, CreditCard, Star,
  CheckCircle, Sparkles, BadgeCheck, Award, Users, Globe
} from 'lucide-react';
import { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import CreditScoreVisual from '../components/CreditScoreVisual';
import Testimonials from '../components/Testimonials';
import { useScrollReveal } from '../hooks/useScrollReveal';

const trustPoints = [
  { icon: Shield, text: 'RBI Compliant', category: 'Compliance' },
  { icon: Lock, text: '256-bit Encryption', category: 'Security' },
  { icon: Award, text: 'SOC2 Certified', category: 'Security' },
  { icon: Users, text: '50K+ Users', category: 'Growth' },
  { icon: CreditCard, text: '₹100Cr+ Disbursed', category: 'Growth' },
  { icon: Star, text: '98% Satisfaction', category: 'Trust' },
  { icon: Globe, text: '150+ Cities', category: 'Growth' },
  { icon: Zap, text: 'Instant Disbursal', category: 'Performance' },
  { icon: CheckCircle, text: 'Zero Hidden Fees', category: 'Trust' },
  { icon: Shield, text: 'AI-Powered Scoring', category: 'Innovation' },
  { icon: Shield, text: 'Digital KYC', category: 'Innovation' },
  { icon: Sparkles, text: '24/7 Support', category: 'Trust' },
];

const trustBadges = trustPoints.map(p => p.text);

const features = [
  { icon: Zap, title: 'Instant Approval', desc: 'AI-powered credit decisioning in under 2 minutes. No waiting, no branch visits.', accent: 'from-violet-500 to-purple-600' },
  { icon: FileText, title: 'Zero Paperwork', desc: 'Fully digital process. Just PAN, Aadhaar, and a selfie — that\'s it.', accent: 'from-blue-500 to-cyan-500' },
  { icon: Shield, title: 'Bank-Grade Security', desc: '256-bit encryption, SOC2 certified infrastructure. Your data stays safe.', accent: 'from-emerald-500 to-teal-500' },
  { icon: CreditCard, title: 'Flexible Credit', desc: 'From ₹5,000 to ₹5L with terms from 3-36 months. Your choice.', accent: 'from-amber-500 to-orange-500' },
  { icon: TrendingUp, title: 'Growing Limits', desc: 'Repay on time and watch your credit limit grow automatically.', accent: 'from-pink-500 to-rose-500' },
  { icon: Lock, title: 'No Hidden Fees', desc: 'Transparent pricing. Zero prepayment or foreclosure penalties. Ever.', accent: 'from-primary-500 to-primary-700' },
];

const steps = [
  { num: '01', title: 'Sign Up', desc: 'Create your account in 60 seconds with just your mobile number.' },
  { num: '02', title: 'Verify KYC', desc: 'Complete digital KYC with PAN, Aadhaar, and a quick selfie.' },
  { num: '03', title: 'Get Offer', desc: 'AI evaluates your profile and delivers a personalized credit offer.' },
  { num: '04', title: 'Get Funds', desc: 'Accept and receive funds directly in your bank account — instantly.' },
];

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '₹100Cr+', label: 'Disbursed' },
  { value: '<10min', label: 'Avg. Approval' },
  { value: '98%', label: 'Satisfaction' },
];

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'process', label: 'Process' },
  { id: 'why-zippay', label: 'Why Zippay' },
  { id: 'trust', label: 'Trust' },
  { id: 'social-proof', label: 'Social Proof' },
  { id: 'final', label: 'Final' },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const trustRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="relative">
      {/* Radio Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`radio-nav-dot ${activeSection === section.id ? 'active' : ''}`}
            data-label={section.label}
          />
        ))}
      </div>

      {/* Hero */}
      <section id="hero" className="hero-mesh min-h-screen flex items-center relative pt-32 pb-16">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="grid-overlay" />

        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <span className="badge">
                <Sparkles className="w-3.5 h-3.5" />
                Instant Digital Credit Platform
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
                Credit at the
                <br />
                <span className="gradient-text">speed of now.</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-12">
                Get up to ₹5,00,000 in your bank account in under 10 minutes.
                No paperwork. No branch visits. Just instant, transparent credit.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="btn-primary">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="btn-secondary">
                  How It Works
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {['RBI Compliant', '256-bit Encryption', 'Zero Hidden Fees'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-bold text-text-muted uppercase tracking-wider">
                    <div className="glow-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute -inset-10 bg-primary-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="glass-card !p-10 w-[420px]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-lg">
                      <BadgeCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Zippay Limit</p>
                      <p className="text-xs text-text-muted">Real-time Analysis</p>
                    </div>
                  </div>

                  <CreditScoreVisual score={780} />

                  <div className="mt-10 space-y-4">
                    {[
                      { label: 'Approved Limit', value: '₹3,50,000', highlight: true },
                      { label: 'Interest Rate', value: '1.5% p.m.' },
                      { label: 'Processing Time', value: '< 10 min' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                        <span className="text-sm text-text-muted">{item.label}</span>
                        <span className={`text-sm font-bold ${item.highlight ? 'text-accent' : 'text-white'}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Marquee */}
      <div className="trust-marquee">
        <div className="marquee-content">
          {[...trustBadges, ...trustBadges].map((badge, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              <span className="text-sm font-bold text-text-muted uppercase tracking-widest">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <SectionWrapper id="features">
        <SectionHeader
          badge="Features"
          title={<>Built for <span className="gradient-text">Speed and Trust</span></>}
          subtitle="Designed to make borrowing faster, safer, and completely transparent."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass-card group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper id="process" gradient>
        <SectionHeader
          badge="Process"
          title={<>Four Steps to <span className="gradient-text">Instant Credit</span></>}
          subtitle="Sign up to funds in your account in under 10 minutes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="glass-card group">
              <span className="step-number">{s.num}</span>
              <div className="w-12 h-12 rounded-xl bg-primary-600/10 border border-primary-500/20 flex items-center justify-center mb-6">
                <span className="text-sm font-bold text-primary-400">{s.num}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose */}
      <SectionWrapper id="why-zippay">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeader
              badge="Why Zippay"
              title={<>The smarter way to <span className="gradient-text">borrow</span></>}
              subtitle="Banks make you wait. We don't."
              center={false}
            />
            <div className="space-y-6">
              {[
                { title: 'Fully Paperless Process', desc: 'No physical documents, no branch visits. Ever.' },
                { title: 'Zero Hidden Charges', desc: 'What you see is what you pay. No surprises.' },
                { title: 'Bank-Grade Security', desc: 'Your data is encrypted and SOC2 certified.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute inset-0 bg-primary-600/5 blur-[120px] rounded-full" />
            <div className="glass-card !p-8 w-80 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">ZIPPAY APP</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Approved Credit</p>
                <p className="text-3xl font-black text-white">₹3,50,000</p>
              </div>
              <button className="btn-primary w-full justify-center">Withdraw Funds</button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Security & Trust grid */}
      <SectionWrapper id="trust" gradient>
        <div ref={trustRef} className="fade-up">
          <SectionHeader
            badge="Security & Trust"
            title={<>Our commitment to <span className="gradient-text">safe credit</span></>}
            subtitle="Zippay follows bank-grade security protocols and RBI regulations to protect you."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <div key={i} className="trust-grid-card group">
                <div className="trust-icon-box">
                  <point.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{point.text}</h4>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none">
                  {point.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Social Proof */}
      <SectionWrapper id="social-proof" gradient>
        <SectionHeader
          badge="Social Proof"
          title={<>Loved by <span className="gradient-text">Thousands</span></>}
          subtitle="Join 50K+ users who've already switched to faster lending."
        />
        <Testimonials />
      </SectionWrapper>

      {/* CTA Final */}
      <section id="final" className="py-16 relative overflow-hidden">
        <div className="hero-glow opacity-20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <SectionHeader
            badge="Get Started"
            title={<>Ready for <span className="gradient-text">Instant Credit?</span></>}
            subtitle="Apply now and get funds in under 10 minutes."
          />
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="btn-primary">Apply Now</Link>
            <Link to="/product" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
