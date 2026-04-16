import { Link } from "react-router-dom";
import {
  CreditCard,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  BadgeCheck,
  ArrowRight,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Users,
  TrendingUp,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import CreditScoreVisual from "../components/CreditScoreVisual";
import { useScrollReveal } from "../hooks/useScrollReveal";

const eligibilityCriteria = [
  "Indian citizen aged 21–55 years",
  "Valid PAN card & Aadhaar documentation",
  "Active bank account with net-banking",
  "Minimum credit score of 650+",
  "Regular verifiable income source",
];

const whoIsItFor = [
  {
    icon: Briefcase,
    title: "Salaried Professionals",
    desc: "Designed for individuals with a regular income seeking quick short-term credit solutions.",
  },
  {
    icon: Users,
    title: "Self-employed Individuals",
    desc: "Tailored credit options for business owners and freelancers managing their cash flows.",
  },
  {
    icon: GraduationCap,
    title: "Young Professionals",
    desc: "Perfect for first-time borrowers starting their career and looking for reliable credit.",
  },
  {
    icon: Zap,
    title: "Digitally Active Users",
    desc: "Optimized for users who prefer a completely digital and seamless financial experience.",
  },
];

const comparisonData = [
  {
    feature: "No physical paperwork",
    zippay: "Verified",
    traditional: "Heavy Documentations",
  },
  {
    feature: "Faster decisioning",
    zippay: "Real-time",
    traditional: "Days/Weeks",
  },
  {
    feature: "Easy repayment tracking",
    zippay: "Integrated",
    traditional: "Offline Tracking",
  },
  {
    feature: "Complete digital experience",
    zippay: "100%",
    traditional: "Hybrid/Manual",
  },
];

const loanDetails = [
  { label: "Loan Amount", value: "₹5,000 – ₹5,00,000", highlight: true },
  { label: "Tenure", value: "3 – 36 Months" },
  { label: "Interest Rate", value: "Starting 1.5% p.m." },
  { label: "Processing Fee", value: "Up to 2%" },
  { label: "Prepayment", value: "Free. Anytime." },
];

export default function Product() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const detailsRef = useScrollReveal();
  const eligRef = useScrollReveal();
  const whoRef = useScrollReveal();
  const compareRef = useScrollReveal();

  return (
    <main className="overflow-hidden">
      {/* Product Hero — Professional Finance Redesign */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-white">
        <div className="hero-glow !bg-primary-600/[0.03]" />
        <div
          ref={heroRef}
          className="fade-up container-custom relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-xl">
              <span className="badge mb-6">
                <Shield className="w-3.5 h-3.5" />
                Regulated Digital Credit Product
              </span>
              <h1 className="mb-6">
                Zippay <br />
                <span className="text-primary-600">Digital Credit</span>
              </h1>
              <p className="text-base text-text-secondary leading-relaxed mb-10 font-medium">
                Zippay provides instant access to digital loan solutions designed for short-term financial needs.
              </p>
              <Link to="/contact" className="btn-primary">
                Apply for Credit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Loan Details Card */}
            <div className="relative">
              <div className="absolute -inset-10 bg-primary-500/5 blur-[100px] rounded-full" />
              <div className="bg-white border border-slate-100 rounded-3xl p-10 md:p-12 relative z-10 shadow-xl shadow-primary-900/5 group">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/20">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg">Credit Overview</h3>
                    <p className="text-xs text-primary-600 font-bold uppercase tracking-widest">Instant Approval</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {loanDetails.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0"
                    >
                      <span className="text-text-secondary font-medium">
                        {d.label}
                      </span>
                      <span className={`font-bold ${d.highlight ? "text-primary-600" : "text-primary-900"}`}>
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — Premium Grid */}
      <SectionWrapper>
        <div ref={detailsRef} className="fade-up">
          <SectionHeader
            badge="The Edge"
            title={
              <>
                Key <span className="gradient-text">Highlights</span>
              </>
            }
            subtitle="Explore why thousands of users prefer Zippay for their short-term financial needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Quick Eligibility Checks",
                desc: "Get instant eligibility results with minimal inputs via our advanced AI engine.",
                accent: "from-blue-500 to-indigo-600",
              },
              {
                icon: BadgeCheck,
                title: "Fully Digital Onboarding",
                desc: "Complete your entire application process digitally without any physical paperwork.",
                accent: "from-purple-500 to-violet-600",
              },
              {
                icon: Clock,
                title: "Short-term & Flexible",
                desc: "Choose from various short-term, flexible repayment options that fit your budget.",
                accent: "from-emerald-500 to-teal-600",
              },
              {
                icon: Shield,
                title: "Transparent Fees",
                desc: "Enjoy a transparent fee structure with zero hidden charges throughout your loan tenure.",
                accent: "from-amber-500 to-orange-600",
              },
            ].map((b, i) => (
              <div key={i} className="glass-card text-center group active:scale-95 transition-all">
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.accent} flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary-900/10 group-hover:scale-110 transition-all duration-500`}>
                    <b.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl mb-3">
                    {b.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-medium">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Eligibility — High Contrast Section */}
      <SectionWrapper gradient className="!pt-8">
        <div ref={eligRef} className="fade-up">
          {/* Centered Badge */}
          <div className="flex justify-center mb-16">
            <span className="badge">Who Qualifies?</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-between py-1">
              <div>
                <h2 className="mb-4">
                  Simple Criteria for <br />
                  <span className="gradient-text">Instant Credit</span>
                </h2>
                <p className="text-base text-text-secondary leading-relaxed font-medium mb-12">
                  We believe in financial inclusion. If you meet these criteria, you're ready to go.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col justify-between gap-4">
                {eligibilityCriteria.map((c, i) => (
                  <div
                    key={i}
                    className="flex-1 flex items-center gap-6 p-6 rounded-3xl bg-white/50 border border-primary-100/50 hover:bg-white transition-all duration-500 shadow-sm"
                  >
                    <CheckCircle className="w-7 h-7 text-primary-600 shrink-0" />
                    <p className="text-primary-900 font-bold text-base">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-20 bg-primary-500/5 blur-[150px] rounded-full" />
              <div className="glass-card !p-12 relative z-10 shadow-2xl h-full flex flex-col justify-center">
                <div className="text-center mb-10">
                  <h3 className="text-sm font-black text-primary-600 uppercase tracking-[0.2em] mb-2">Real-time Check</h3>
                  <p className="h2 !text-3xl md:!text-4xl">Credit Health</p>
                </div>
                <CreditScoreVisual score={782} />
                <div className="mt-12 text-center">
                  <Link to="/contact" className="btn-primary w-full justify-center !rounded-2xl py-4">
                    Check My Full Eligibility
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who Is It For — Redesigned Grid */}
      <SectionWrapper>
        <div ref={whoRef} className="fade-up">
          <SectionHeader
            badge="Who Can Apply?"
            title={
              <>
                Designed for <span className="gradient-text">Everyone</span>
              </>
            }
            subtitle="Whatever your background, Zippay provides the digital financial safety net you deserve."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {whoIsItFor.map((w, i) => (
              <div key={i} className="glass-card !p-8 flex gap-6 items-start group hover:bg-white transition-all duration-700">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center shrink-0 border border-primary-200 group-hover:bg-primary-600 transition-all duration-700">
                  <w.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-all duration-700" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2">
                    {w.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison — Architectural Table */}
      <SectionWrapper gradient>
        <div ref={compareRef} className="fade-up">
          <SectionHeader
            badge="Why Zippay?"
            title={
              <>
                Why Digital Credit with <span className="gradient-text">Zippay?</span>
              </>
            }
            subtitle="Experience the benefits of a modern lending platform built for the digital age."
          />
          <div className="rounded-3xl border border-slate-100 overflow-hidden max-w-5xl mx-auto shadow-xl shadow-primary-900/5 bg-white relative">
            <div className="absolute top-0 bottom-0 left-1/3 w-1/3 bg-slate-50/50 border-x border-slate-100 pointer-events-none" />

            <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-primary-100 bg-primary-50/50">
                    <th className="py-8 px-10 text-xs font-black tracking-[0.2em] text-primary-900 uppercase w-1/3">
                      Feature
                    </th>
                    <th className="py-8 px-10 text-center w-1/3">
                      <span className="flex items-center justify-center gap-3 text-primary-600 font-black text-xl italic uppercase tracking-tighter">
                        <Zap className="w-6 h-6" fill="currentColor" /> Zippay
                      </span>
                    </th>
                    <th className="py-8 px-10 text-center text-xs font-black tracking-[0.2em] text-text-muted uppercase w-1/3">
                      Traditional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-50">
                  {comparisonData.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-primary-50/30 transition-colors duration-500"
                    >
                      <td className="py-8 px-10 font-bold text-primary-900 text-lg">
                        {row.feature}
                      </td>
                      <td className="py-8 px-10 text-center">
                        <span className="inline-flex items-center justify-center gap-3 text-primary-600 font-black text-lg">
                          <CheckCircle className="w-6 h-6 fill-primary-100" />
                          {row.zippay}
                        </span>
                      </td>
                      <td className="py-8 px-10 text-center">
                        <span className="inline-flex items-center justify-center gap-3 text-text-muted font-medium text-lg">
                          <AlertCircle className="w-5 h-5 opacity-40" />
                          {row.traditional}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
