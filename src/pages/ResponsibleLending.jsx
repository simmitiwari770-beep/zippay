import { Link } from "react-router-dom";
import {
  Shield,
  Heart,
  Scale,
  Eye,
  AlertTriangle,
  CheckCircle,
  Users,
  Landmark,
  BookOpen,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const principles = [
  {
    icon: Scale,
    title: "Fair Pricing",
    desc: "We charge competitive, transparent interest rates with no hidden fees. What you see is what you pay — always.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Every charge, every term, every condition is clearly communicated before you accept any credit offer.",
  },
  {
    icon: Heart,
    title: "Borrower Well-being",
    desc: "We assess your ability to repay comfortably. We never lend more than what we believe you can manage.",
  },
  {
    icon: Users,
    title: "Respectful Collections",
    desc: "If you face difficulties, we work with you — not against you. Our collection practices are ethical and empathetic.",
  },
  {
    icon: Landmark,
    title: "Regulatory Compliance",
    desc: "We operate in full compliance with RBI guidelines and all applicable financial regulations.",
  },
  {
    icon: BookOpen,
    title: "Financial Education",
    desc: "We help our users understand credit, build healthy habits, and make informed financial decisions.",
  },
];

const commitments = [
  "Clear communication of charges",
  "No hidden terms",
  "Encouraging timely repayments",
  "Supporting informed financial decisions",
];

export default function ResponsibleLending() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const principlesRef = useScrollReveal();
  const commitRef = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="hero-mesh pt-32 pb-12 relative">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-blob" />
        <div
          ref={heroRef}
          className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-6 inline-flex mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              Responsible Lending
            </span>
            <h1 className="mb-6">
              Responsible Credit, <span className="text-primary-600">Built-In</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
              Zippay is committed to responsible lending practices that prioritize user well-being and financial discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <SectionWrapper>
        <div ref={principlesRef} className="fade-up">
          <SectionHeader
            badge="Our Principles"
            title={
              <>
                How we lend <span className="gradient-text">responsibly</span>
              </>
            }
            subtitle="Every decision we make is guided by these core principles."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="gradient-border rounded-3xl card-lift">
                <div className="bg-bg-card rounded-3xl p-7 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {p.desc}
                  </p>
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
                badge="What This Means"
                title={
                  <>
                    Our <span className="gradient-text">Promises</span>
                  </>
                }
                subtitle="We ensure that every aspect of our lending process is transparent and supportive."
                center={false}
              />
            </div>
            <div className="space-y-3">
              {commitments.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-primary-100 hover:border-primary-200 transition-all shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                  <p className="text-text-secondary font-medium text-sm">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Alert Banner */}
      <div className="border-y border-amber-500/20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 py-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-bold text-amber-700 mb-1 text-sm">
              Important Notice
            </h3>
            <p className="text-sm text-amber-700/80 leading-relaxed">
              Zippay never asks for any upfront payment or deposit before loan
              disbursal. If anyone contacts you claiming to represent Zippay and
              asks for money, please report it immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Help */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-xl bg-primary-600/15 border border-primary-100 flex items-center justify-center mx-auto mb-6">
            <Users className="w-7 h-7 text-primary-600" />
          </div>
          <h2 className="mb-4">
            User Responsibility
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8 font-medium">
            Users are encouraged to borrow responsibly and ensure timely repayment 
            to maintain a healthy credit profile.
          </p>
          <Link to="/contact" className="btn-primary">
            Speak to a Support Advisor
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}
