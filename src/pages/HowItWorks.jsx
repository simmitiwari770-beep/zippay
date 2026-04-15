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
      </section>
      {/* Journey Roadmap — Premium Fintech Vertical Redesign */}
      <SectionWrapper>
        <div ref={stepsRef} className="fade-up">
          <div className="max-w-4xl mx-auto space-y-12">
            {mainSteps.map((s, i) => (
              <div key={i} className="group relative flex items-stretch gap-8 md:gap-16">
                {/* Visual Step Indicator Column */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-3xl bg-white border-2 border-primary-50 flex items-center justify-center shadow-xl shadow-primary-900/5 group-hover:bg-primary-600 transition-all duration-500 relative z-20">
                    <s.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  {/* Vertical Progress Line */}
                  <div className="hidden md:block w-0.5 h-full bg-primary-50 group-last:hidden mt-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0 bg-primary-600 group-hover:h-full transition-all duration-700 delay-100" />
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="flex-1 bg-white border border-primary-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm group-hover:shadow-[0_20px_60px_rgba(124,58,237,0.08)] group-hover:border-primary-100 transition-all duration-500 relative overflow-hidden">
                  {/* Background Accents */}
                  <div className="absolute -top-6 -right-6 text-[10rem] font-black text-primary-900/[0.02] pointer-events-none transition-all group-hover:text-primary-600/[0.04]">
                    {s.step}
                  </div>
                  
                  <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-3 space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-black text-primary-600 uppercase tracking-[0.2em] bg-primary-50 px-3 py-1 rounded-full">
                          Step {s.step}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-primary-900 tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed font-medium">
                        {s.desc}
                      </p>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <div className="bg-primary-50/50 rounded-3xl p-6 space-y-4 border border-primary-50/50">
                        {s.details.map((d, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                              <CheckCircle className="w-3 h-3 text-emerald-500" />
                            </div>
                            <span className="text-sm font-bold text-primary-900 tracking-tight">
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

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
          className="fade-up relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary-600 to-primary-900 p-12 md:p-20 text-center text-white"
        >
          <div className="hero-glow !bg-white/5" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter">
              Start Your Journey <br />
              <span className="text-primary-300">In Under 10 Minutes.</span>
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Don't wait for banks. Join Zippay and experience the 
              power of truly instant digital credit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact" className="px-10 py-4 bg-white text-primary-700 rounded-[1.25rem] font-black text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2">
                Get Started Now
                <Zap className="w-4 h-4" />
              </Link>
              <Link to="/about" className="px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.25rem] font-black text-base hover:bg-white/20 transition-all flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
