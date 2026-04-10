import { Link } from 'react-router-dom';
import {
  CreditCard, Clock, Shield, Zap, CheckCircle, ArrowRight,
  Briefcase, GraduationCap, ShoppingBag, Users, TrendingUp,
  AlertCircle, Sparkles
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import CreditScoreVisual from '../components/CreditScoreVisual';
import { useScrollReveal } from '../hooks/useScrollReveal';

const eligibilityCriteria = [
  'Indian citizen aged 21–55 years',
  'Valid PAN card & Aadhaar',
  'Active bank account',
  'Minimum credit score of 650+',
  'Regular income source (salaried or self-employed)',
];

const whoIsItFor = [
  { icon: Briefcase, title: 'Young Professionals', desc: 'Cover unexpected expenses or bridge the gap between paydays.' },
  { icon: GraduationCap, title: 'Students', desc: 'Education-related expenses, gadgets, or certification courses.' },
  { icon: ShoppingBag, title: 'Freelancers', desc: 'Smooth out income gaps and manage project-based cash flows.' },
  { icon: Users, title: 'Small Business Owners', desc: 'Quick working capital for inventory, equipment, or operations.' },
];

const comparisonData = [
  { feature: 'Application Process', zippay: '100% Digital', traditional: 'Branch Visit Required' },
  { feature: 'Documentation', zippay: 'PAN + Aadhaar Only', traditional: 'Multiple Documents' },
  { feature: 'Approval Time', zippay: 'Under 10 Minutes', traditional: '3-7 Business Days' },
  { feature: 'Disbursal Speed', zippay: 'Instant to Bank', traditional: '1-3 Days' },
  { feature: 'Hidden Charges', zippay: 'Zero', traditional: 'Often Present' },
  { feature: 'Prepayment Penalty', zippay: 'None', traditional: 'Usually Yes' },
];

const loanDetails = [
  { label: 'Loan Amount', value: '₹5,000 – ₹5,00,000' },
  { label: 'Tenure', value: '3 – 36 Months' },
  { label: 'Interest Rate', value: 'Starting 1.5% p.m.' },
  { label: 'Processing Fee', value: 'Up to 2%' },
  { label: 'Prepayment', value: 'Free. Anytime.' },
];

export default function Product() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const detailsRef = useScrollReveal();
  const eligRef = useScrollReveal();
  const whoRef = useScrollReveal();
  const compareRef = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="hero-mesh pt-32 pb-12 relative">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-6 inline-flex">
                <Sparkles className="w-3.5 h-3.5" />
                Product
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Short-Term{' '}
                <span className="gradient-text">Digital Loans</span>
                <br />Built for Speed
              </h1>
              <p className="text-lg text-text-secondary max-w-lg leading-relaxed mb-8">
                From ₹5,000 to ₹5,00,000 — get the credit you need with transparent terms,
                flexible repayment, and instant disbursal.
              </p>
              <Link to="/contact" className="btn-primary">
                Apply Now
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>

            {/* Loan Details Card */}
            <div className="flex justify-center">
              <div className="gradient-border rounded-3xl w-full max-w-sm">
                <div className="bg-bg-card rounded-3xl p-8 relative z-10">
                  <h3 className="text-base font-bold text-text-primary mb-6 flex items-center gap-2">
                    <CreditCard className="w-4.5 h-4.5 text-primary-400" />
                    Loan Overview
                  </h3>
                  <div className="space-y-0">
                    {loanDetails.map((d, i) => (
                      <div key={i} className="flex items-center justify-between py-3.5 border-b border-white/[0.04] last:border-0">
                        <span className="text-sm text-text-muted">{d.label}</span>
                        <span className="text-sm font-semibold text-text-primary">{d.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper>
        <div ref={detailsRef} className="fade-up">
          <SectionHeader
            badge="Benefits"
            title={<>Why our loans are <span className="gradient-text">different</span></>}
            subtitle="Designed with the borrower in mind — not the bank."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: 'Instant Process', desc: 'Apply and get approved in minutes, not days.', accent: 'from-violet-500 to-purple-600' },
              { icon: Shield, title: 'No Collateral', desc: 'Unsecured personal loans — no assets needed.', accent: 'from-blue-500 to-cyan-500' },
              { icon: Clock, title: 'Flexible Tenure', desc: 'Choose from 3 to 36 months based on your comfort.', accent: 'from-emerald-500 to-teal-500' },
              { icon: TrendingUp, title: 'Growing Limits', desc: 'Your credit limit increases with on-time repayments.', accent: 'from-amber-500 to-orange-500' },
            ].map((b, i) => (
              <div key={i} className="gradient-border rounded-3xl card-lift">
                <div className="bg-bg-card rounded-3xl p-7 text-center relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.accent} flex items-center justify-center mx-auto mb-4`}>
                    <b.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-text-secondary">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Eligibility */}
      <SectionWrapper gradient>
        <div ref={eligRef} className="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Eligibility"
                title={<>Are you <span className="gradient-text">eligible?</span></>}
                subtitle="Meeting these simple criteria makes you a candidate for instant credit."
                center={false}
              />
              <div className="space-y-3">
                {eligibilityCriteria.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <p className="text-text-primary font-medium text-sm">{c}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="gradient-border rounded-3xl">
                <div className="bg-bg-card rounded-3xl p-8 relative z-10">
                  <h3 className="text-center text-xs font-bold text-text-muted uppercase tracking-wider mb-6">Your Score Check</h3>
                  <CreditScoreVisual score={720} />
                  <div className="mt-6 text-center">
                    <Link to="/contact" className="btn-primary !text-sm">
                      Check Your Eligibility
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who Is It For */}
      <SectionWrapper>
        <div ref={whoRef} className="fade-up">
          <SectionHeader
            badge="Made For You"
            title={<>Who is <span className="gradient-text">Zippay</span> for?</>}
            subtitle="Designed for anyone who values speed, simplicity, and transparency."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {whoIsItFor.map((w, i) => (
              <div key={i} className="gradient-border rounded-3xl card-lift">
                <div className="bg-bg-card rounded-3xl p-7 flex gap-5 items-start relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shrink-0 shadow-lg">
                    <w.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-2">{w.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper gradient>
        <div ref={compareRef} className="fade-up">
          <SectionHeader
            badge="Comparison"
            title={<>Zippay vs <span className="gradient-text">Traditional Lending</span></>}
            subtitle="See why thousands are switching to digital-first credit."
          />
          <div className="rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-primary-500/5 bg-bg-card relative">
            {/* Highlighted column background for Zippay */}
            <div className="absolute top-0 bottom-0 left-1/3 w-1/3 bg-primary-500/[0.03] border-x border-primary-500/10 pointer-events-none" />
            
            <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="py-5 px-8 text-sm font-bold tracking-wider text-text-muted uppercase w-1/3">Feature</th>
                    <th className="py-5 px-8 text-center w-1/3">
                      <span className="flex items-center justify-center gap-2 text-primary-400 font-bold text-base">
                        <Zap className="w-5 h-5" /> Zippay
                      </span>
                    </th>
                    <th className="py-5 px-8 text-center text-sm font-bold tracking-wider text-text-muted uppercase w-1/3">Traditional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors duration-300">
                      <td className="py-6 px-8 font-semibold text-text-primary text-[15px]">{row.feature}</td>
                      <td className="py-6 px-8 text-center">
                        <span className="inline-flex items-center justify-center gap-2 text-primary-400 font-bold text-[15px] w-full drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                          <CheckCircle className="w-4.5 h-4.5" />
                          {row.zippay}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <span className="inline-flex items-center justify-center gap-2 text-text-muted font-medium text-[15px] w-full">
                          <AlertCircle className="w-4.5 h-4.5" />
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
