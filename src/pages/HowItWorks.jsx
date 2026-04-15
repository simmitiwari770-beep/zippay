import { Link } from "react-router-dom";
import {
  UserPlus,
  BadgeCheck,
  CircleDollarSign,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Bell,
  Wallet,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const mainSteps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Sign Up",
    desc: "Create your account using basic details in just a few seconds via our secure OTP gateway.",
    details: ["Mobile authentication", "Basic profile", "Instant setup"],
    accent: "from-blue-600 to-indigo-700",
  },
  {
    step: "02",
    icon: BadgeCheck,
    title: "Eligibility Check",
    desc: "Get instant eligibility results with minimal inputs through our real-time AI credit engine.",
    details: ["Real-time results", "No impact check", "Paperless inquiry"],
    accent: "from-purple-600 to-violet-800",
  },
  {
    step: "03",
    icon: UserPlus,
    title: "Verification",
    desc: "Complete your quick digital verification process securely on our encrypted platform.",
    details: ["Digital KYC", "Identity verification", "Secure processing"],
    accent: "from-primary-600 to-primary-900",
  },
  {
    step: "04",
    icon: CreditCard,
    title: "Credit Access",
    desc: "Receive approved credit directly into your bank account almost immediately after approval.",
    details: ["Instant disbursal", "Direct transfer", "Funds available"],
    accent: "from-emerald-600 to-teal-800",
  },
  {
    step: "05",
    icon: Wallet,
    title: "Repayment",
    desc: "Repay digitally through simple, secure methods that fit your monthly budget perfectly.",
    details: ["Digital repayment", "Flexible options", "Track in app"],
    accent: "from-amber-600 to-orange-800",
  },
];

const afterSteps = [
  {
    icon: Bell,
    title: "Smart Reminders",
    desc: "Never pay a late fee. Get proactive notifications before your repayment cycle begins.",
  },
  {
    icon: Wallet,
    title: "Seamless Repayment",
    desc: "Authorize auto-debit or pay manually via any UPI app, Net Banking, or Credit Card.",
  },
  {
    icon: Shield,
    title: "Ironclad Security",
    desc: "Every transaction is protected by bank-grade AES-256 encryption protocols.",
  },
];

export default function HowItWorks() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const stepsRef = useScrollReveal();
  const afterRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <main className="overflow-hidden">
      {/* Hero — Flagship Redesign */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-glow" />
        <div
          ref={heroRef}
          className="fade-up container-custom relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mx-auto mb-6">
              <Sparkles className="w-4 h-4" />
              The Zippay Methodology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-primary-900">
              Simple. Fast. <br />
              <span className="text-primary-600">Digital.</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
              We've engineered a frictionless journey that turns a few clicks 
              into instant buying power. Here's exactly how it works.
            </p>
          </div>
        </div>
      </section>      {/* Process Steps — Professional Compact Grid */}
      <SectionWrapper>
        <div ref={stepsRef} className="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-primary-100 -z-10" />

            {mainSteps.map((s, i) => (
              <div key={i} className="flex flex-col items-center group">
                {/* Step Marker & Icon */}
                <div className="relative mb-10">
                  <div className={`w-20 h-20 rounded-[2rem] bg-white border-2 border-primary-50 flex items-center justify-center shadow-xl shadow-primary-900/5 group-hover:border-primary-600 group-hover:bg-primary-50 transition-all duration-500 relative z-10`}>
                    <s.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-900 text-white text-[10px] font-black flex items-center justify-center shadow-lg border-2 border-white">
                    {s.step}
                  </div>
                </div>

                {/* Content Card — Compact Fintech Style */}
                <div className="text-center space-y-4 px-4">
                  <h3 className="text-xl font-black text-primary-900 tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm font-medium text-text-secondary leading-relaxed">
                    {s.desc}
                  </p>
                  
                  {/* Micro Details List */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {s.details.map((d, j) => (
                      <span key={j} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-primary-50 text-primary-600 rounded-full border border-primary-100">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>apper>

      {/* Post-Approval — Premium Banner Grid */}
      <SectionWrapper gradient>
        <div ref={afterRef} className="fade-up">
          <SectionHeader
            badge="Final Phase"
            title={
              <>
                Reliability Beyond <span className="gradient-text">Disbursal</span>
              </>
            }
            subtitle="Our commitment to your financial health extends far beyond the moment funds reach your account."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {afterSteps.map((s, i) => (
              <div key={i} className="glass-card !p-12 text-center group hover:scale-[1.05] transition-all duration-700">
                <div className="w-20 h-20 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mx-auto mb-10 group-hover:bg-primary-600 transition-all duration-700">
                  <s.icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-all duration-700" />
                </div>
                <h3 className="text-2xl font-black text-primary-900 mb-4">
                  {s.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA — Cinematic Banner */}
      <SectionWrapper>
        <div
          ref={ctaRef}
          className="fade-up relative overflow-hidden rounded-[60px] bg-gradient-to-br from-primary-600 to-primary-900 p-16 md:p-32 text-center text-white"
        >
          <div className="hero-glow !bg-white/5" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter">
              Start Your Journey <br />
              <span className="text-primary-300">In Under 10 Minutes.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-2xl mx-auto font-medium">
              Don't wait for banks. Join Zippay and experience the 
              power of truly instant digital credit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-12 py-5 bg-white text-primary-700 rounded-3xl font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-black/20">
                Get Started Now
                <Zap className="w-5 h-5" />
              </Link>
              <Link to="/about" className="px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl font-black text-xl hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
