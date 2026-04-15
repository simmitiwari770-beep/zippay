import { Link } from "react-router-dom";
import {
  Zap,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  ChevronRight,
  Smartphone,
  TrendingUp,
  Lock,
  CreditCard,
  Star,
  CheckCircle,
  Sparkles,
  BadgeCheck,
  Award,
  Users,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Check,
  CloudLightning,
  X,
  Menu,
  IndianRupee,
  Activity,
  BarChart3,
  Wallet,
} from "lucide-react";
import { useState, useEffect } from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import CreditScoreVisual from "../components/CreditScoreVisual";
import Testimonials from "../components/Testimonials";
import { useScrollReveal } from "../hooks/useScrollReveal";

const sections = [
  { id: "hero", label: "Home" },
  { id: "features", label: "Features" },
  { id: "process", label: "Process" },
  { id: "why-zippay", label: "Why Zippay" },
  { id: "trust", label: "Trust" },
  { id: "testimonials", label: "Testimonials" },
  { id: "final", label: "Final" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const featuresRef = useScrollReveal();
  const processRef = useScrollReveal();

  const whyRef = useScrollReveal();
  const trustRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const activityRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="overflow-hidden fintech-bg">
      {/* Radio Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`radio-nav-dot ${activeSection === section.id ? "active" : ""}`}
            data-label={section.label}
          />
        ))}
      </div>

      {/* Hero Section — Attractive Professional Redesign */}
      <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden flex items-center bg-white">
        <div className="hero-glow !bg-primary-600/[0.05]" />


        <div
          ref={heroRef}
          className="fade-up container-custom relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="badge">
                <ShieldCheck className="w-3.5 h-3.5" />
                RBI Regulated • ISO 27001 Certified
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 text-primary-900">
                Instant Digital Loans. <br />
                <span className="text-primary-600">Anytime. Anywhere.</span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-12 font-medium">
                Get quick access to short-term digital credit with a simple, paperless, and fully online experience.
                No long queues. No confusion. Just fast approvals.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-8">
                <Link to="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/eligibility" className="px-8 py-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 hover:bg-white transition-all">
                  Check Eligibility
                </Link>
              </div>

              {/* Trust Indicators below CTA — Ultra-sleek variant */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
                {[
                  "RBI Compliant",
                  "256-bit Encryption",
                  "Zero Hidden Fees",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-slate-200 flex items-center justify-center bg-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </div>




            {/* Right Visual Element — Far Right Alignment */}
            <div className="hidden lg:flex justify-end relative">
              <div className="absolute -inset-10 bg-primary-600/[0.03] blur-[120px] rounded-full animate-pulse" />

              <div className="relative z-10 mr-[-1rem]">
                <CreditScoreVisual score={782} />
              </div>

              {/* Decorative accents */}
              <div className="absolute -bottom-10 right-20 w-32 h-32 bg-green-500/5 blur-[60px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Marquee — Glassy Redesign */}
      <div className="trust-marquee">
        <div className="marquee-content">
          {[
            "100% Digital Process",
            "Secure & Confidential",
            "Quick Eligibility Check",
            "Transparent Charges",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-6 text-primary-900/40 text-xs font-black uppercase tracking-[0.35em]"
            >
              <ShieldCheck className="w-6 h-6 text-primary-500/30" />
              {text}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "100% Digital Process",
            "Secure & Confidential",
            "Quick Eligibility Check",
            "Transparent Charges",
          ].map((text, i) => (
            <div
              key={i + 10}
              className="flex items-center gap-6 text-primary-900/40 text-xs font-black uppercase tracking-[0.35em]"
            >
              <ShieldCheck className="w-6 h-6 text-primary-500/30" />
              {text}
            </div>
          ))}
        </div>
      </div>



      {/* What is Zippay Section — High-End Professional Redesign */}
      <SectionWrapper id="about-zip" gradient>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-6">
                What is Zippay?
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-primary-950 leading-[1.05] tracking-tight mb-8">
                Credit That <br />
                <span className="text-primary-600">Moves at your Speed</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary-600 rounded-full mb-10" />
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Zippay is an institutional-grade digital lending platform designed for India's fast-moving lifestyle.
                Our infrastructure enables instant credit access through a zero-friction digital experience.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-medium capitalize-first tracking-tight">
                From real-time eligibility assessment to lightning-fast disbursals, we bridge the gap between financial needs and immediate liquidity with absolute transparency.
              </p>
            </div>
          </div>

          <div className="relative group">
            {/* Background elements */}
            <div className="absolute -inset-10 bg-primary-600/5 blur-[100px] rounded-full group-hover:bg-primary-600/10 transition-all duration-1000" />

            <div className="relative glass-card !p-12 border-primary-100/50 shadow-2xl shadow-primary-900/5 hover:-translate-y-2 transition-all duration-700">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/30">
                  <CloudLightning className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-primary-950 uppercase tracking-tight">Digital First</h4>
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">Our Core Advantage</p>
                </div>
              </div>

              <div className="grid gap-6">
                {[
                  { t: "No physical paperwork", d: "100% cloud-native documentation" },
                  { t: "Faster decisioning", d: "AI-driven algorithmic approvals" },
                  { t: "Real-time tracking", d: "Live status updates via our dashboard" },
                  { t: "Seamless integration", d: "Connects directly with your bank" }
                ].map((it, idx) => (
                  <div key={idx} className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-slate-100/60 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/[0.03] transition-all duration-500 group/item">
                    <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center mt-0.5 group-hover/item:bg-primary-600 transition-all duration-500">
                      <Check className="w-4 h-4 text-primary-600 group-hover/item:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-primary-950 uppercase tracking-wide mb-1 leading-tight">{it.t}</p>
                      <p className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-500 transition-colors">{it.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Features — Premium Grid */}
      <SectionWrapper id="features">
        <div ref={featuresRef} className="fade-up">
          <SectionHeader
            badge="Advanced Features"
            title={
              <>
                Our Key <span className="gradient-text">Features</span>
              </>
            }
            subtitle="Explore the powerful tools that make Zippay the preferred choice for digital credit."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BadgeCheck,
                title: "Instant Eligibility Check",
                desc: "Get instant eligibility results with minimal inputs and zero impact on your credit score during the inquiry.",
                accent: "from-blue-500 to-indigo-600",
              },
              {
                icon: Globe,
                title: "Fully Online Application",
                desc: "Complete the entire process from application to repayment digitally, anywhere in the country.",
                accent: "from-purple-500 to-violet-600",
              },
              {
                icon: FileText,
                title: "Minimal Documentation",
                desc: "No more stacks of paper. Experience a simple, paperless process with just your essential digital documents.",
                accent: "from-emerald-500 to-teal-600",
              },
              {
                icon: Lock,
                title: "Secure & Encrypted",
                desc: "Your data is protected by bank-level encryption and stored securely in our Tier-4 localized data centers.",
                accent: "from-sky-500 to-blue-600",
              },
              {
                icon: Zap,
                title: "Quick Disbursal",
                desc: "Watch the funds clear in your bank account via instant settlement rails almost immediately after approval.",
                accent: "from-amber-500 to-orange-600",
              },
              {
                icon: BarChart3,
                title: "Transparent Structure",
                desc: "No hidden fees or confusing terms. Clear communication of charges and a simple repayment setup.",
                accent: "from-pink-500 to-rose-600",
              },
            ].map((f, i) => (
              <div key={i} className="glass-card group hover:scale-[1.02] active:scale-95 transition-all">
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center mb-8 shadow-xl shadow-primary-900/10`}>
                    <f.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-primary-900 mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-base">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process — Interactive Steps */}
      <SectionWrapper id="process" gradient>
        <div ref={processRef} className="fade-up">
          <SectionHeader
            badge="Simplicity First"
            title={
              <>
                Three Steps to <span className="gradient-text">Credit</span>
              </>
            }
            subtitle="Applying for a loan shouldn't be a hurdle. With Zippay, it's a breeze."
          />
          <div className="flex flex-wrap gap-12 justify-center mt-16 relative">
            {/* Automatic Seamless Connecting Line */}
            <div className="absolute top-8 left-[8%] right-[8%] h-[2px] hidden md:block -z-0">
              <div className="absolute inset-0 bg-primary-100/30" />
              <div className="absolute top-0 left-0 h-full bg-primary-600 animate-connection shadow-[0_0_15px_rgba(109,40,217,0.6)]" />
            </div>

            {[
              {
                title: "Sign up on Zippay",
                desc: "Create your account using basic details in just a few seconds.",
              },
              {
                title: "Check eligibility",
                desc: "Get instant eligibility results with minimal inputs via our AI engine.",
              },
              {
                title: "Quick verification",
                desc: "Complete your paperless verification securely on our platform.",
              },
              {
                title: "Get instant credit",
                desc: "Receive approved credit directly into your bank account almost instantly.",
              },
              {
                title: "Repay with ease",
                desc: "Repay digitally through simple, secure methods that fit your schedule.",
              },
            ].map((s, i) => (
              <div key={i} className="relative text-center group flex-[1_1_180px]">
                <div className="mx-auto w-16 h-16 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-primary-600/10 group-hover:scale-110 group-hover:bg-primary-50 transition-all duration-500">
                  <span className="text-xl font-black text-primary-600">0{i + 1}</span>
                </div>
                <h3 className="text-base font-black text-primary-900 mb-1.5">{s.title}</h3>
                <p className="text-text-secondary text-[13px] leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose — Flagship Card Redesign */}
      <SectionWrapper id="why-zippay" className="!pt-8">
        <div ref={whyRef} className="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-primary-500/5 blur-[120px] rounded-full" />
              <div className="glass-card !p-0 overflow-hidden !rounded-3xl shadow-2xl relative z-10 group min-h-[440px]">
                <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-10 text-white relative h-full flex flex-col justify-end">
                  <div className="absolute top-10 right-10 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000 pointer-events-none">
                    <Smartphone className="w-40 h-40" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" fill="white" />
                      </div>
                      <span className="text-xl font-black tracking-widest uppercase">Zip App</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                      Credit Management <br /> Simplified.
                    </h3>
                    <p className="text-white/80 text-lg mb-8 max-w-sm leading-relaxed">
                      Track repayments, check eligibility, and get access to exclusive offers on our app.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="h-12 px-8 rounded-xl bg-white text-black border border-white/20 flex items-center justify-center font-black text-[10px] tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer shadow-lg outline-none">
                        APP STORE
                      </div>
                      <div className="h-12 px-8 rounded-xl bg-white text-black flex items-center justify-center font-black text-[10px] tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer">
                        PLAY STORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <SectionHeader
                badge="The Advantage"
                title={
                  <>
                    Why Choose <span className="gradient-text">Zippay?</span>
                  </>
                }
                subtitle="Join thousands of digital-first users who prefer speed."
                center={false}
              />

              <div className="space-y-4">
                {[
                  {
                    t: "Digital-First",
                    d: "Designed specifically for modern users.",
                  },
                  {
                    t: "Simple Sign-up",
                    d: "Experience a fast process without hurdles.",
                  },
                  {
                    t: "Clear Terms",
                    d: "Transparent charges and no hidden terms.",
                  },
                  {
                    t: "No Paperwork",
                    d: "Say goodbye to traditional document queues.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100/60 hover:border-primary-200 hover:shadow-xl transition-all duration-500 group/item"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-primary-600 transition-all duration-500">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 group-hover/item:text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-primary-900 mb-0.5 leading-tight">
                        {item.t}
                      </h4>
                      <p className="text-text-secondary leading-tight opacity-70 font-medium text-[11px]">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Security & Trust — Redesigned grid */}
      <SectionWrapper id="trust" gradient>
        <div ref={trustRef} className="fade-up">
          <SectionHeader
            badge="Security"
            title={
              <>
                Your Safety is our <span className="gradient-text">Priority</span>
              </>
            }
            subtitle="Regulated, Licensed, and Secured. Your financial trust is our most valuable asset."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "RBI Regulated", label: "Fully Compliant" },
              { icon: Lock, title: "SSL Security", label: "End-to-End Encrypted" },
              { icon: BadgeCheck, title: "ISO Certified", label: "Global Standard" },
              { icon: CloudLightning, title: "Edge Network", label: "Always Available" },
            ].map((t, i) => (
              <div key={i} className="trust-grid-card group hover:scale-105 transition-all">
                <div className="trust-icon-box">
                  <t.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-base font-black text-primary-900 mb-1">{t.title}</h4>
                <p className="text-[10px] text-text-muted font-black uppercase tracking-widest">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Live Activity Cards Section */}
      <SectionWrapper id="activity">
        <div ref={activityRef} className="fade-up">
          <SectionHeader
            badge="Live Platform"
            title={
              <>
                Real-time <span className="gradient-text">Dashboard</span>
              </>
            }
            subtitle="See what's happening on the Zippay platform right now. Updated every 30 seconds."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 — Instant Disbursal */}
            <div className="glass-card !p-6 group hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <IndianRupee className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-2xl font-black text-slate-900 mb-1">₹25,000</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Just Disbursed</p>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
              </div>
              <p className="text-[10px] text-slate-400 mt-2 font-semibold">To Rahul S. • 2 min ago</p>
            </div>

            {/* Card 2 — Credit Builder */}
            <div className="glass-card !p-5 group hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-violet-500" />
                </div>
                <span className="text-[10px] font-black text-violet-500 uppercase tracking-widest">Score Up</span>
              </div>
              <p className="text-lg font-black text-slate-900 mb-1">Credit Builder</p>
              <p className="text-[11px] font-medium text-text-secondary leading-snug mb-4">
                Watch your score improve as our AI reports every on-time repayment.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-8 bg-slate-50 rounded-xl flex items-center px-3">
                  <span className="text-xs font-bold text-slate-500">708</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <div className="flex-1 h-8 bg-violet-50 rounded-xl flex items-center px-3 border border-violet-100">
                  <span className="text-xs font-bold text-violet-600">755</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Dynamic Repayment */}
            <div className="glass-card !p-5 group hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-sky-500" />
                </div>
                <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">On Track</span>
              </div>
              <p className="text-lg font-black text-slate-900 mb-1">Dynamic Repayment</p>
              <p className="text-[11px] font-medium text-text-secondary leading-snug mb-4">
                Adjust your repayment schedule to match your cash flow fluctuations.
              </p>
              <div className="grid grid-cols-6 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${i < 3 ? "bg-sky-500" : "bg-slate-100"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Card 4 — Instant Top-ups */}
            <div className="glass-card !p-5 group hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Approved</span>
              </div>
              <p className="text-xl font-black text-slate-900 mb-1">Instant Top-ups</p>
              <p className="text-xs font-medium text-text-secondary leading-tight mb-4">
                Need more? Instantly top-up your existing credit limit without a fresh application.
              </p>
              <div className="flex items-center gap-2 p-2.5 bg-amber-50 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[10px] font-bold text-amber-700">Top-up ready in 8 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials section */}
      <SectionWrapper id="testimonials">
        <div ref={testimonialsRef} className="fade-up">
          <SectionHeader
            badge="Testimonials"
            title="What our Customers say"
            subtitle="Join over 50,000 satisfied Indians who have transformed their finances with Zippay."
          />
          <Testimonials />
        </div>
      </SectionWrapper>

      {/* Final CTA — Professional Banner */}
      <SectionWrapper id="final">
        <div
          ref={ctaRef}
          className="fade-up relative overflow-hidden rounded-2xl bg-primary-900 p-10 md:p-14 text-center text-white"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.1] tracking-tight">
              Need Instant Credit? <br />
              <span className="text-primary-300">Zippay Has You Covered.</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience the future of digital lending today.
              Simple, secure, and remarkably fast approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-10 py-3 bg-white text-primary-900 rounded-xl font-bold text-base hover:bg-slate-50 transition-all shadow-xl">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
