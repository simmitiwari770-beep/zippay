import { Link } from 'react-router-dom';
import {
  UserPlus, BadgeCheck, CircleDollarSign, CreditCard,
  ArrowRight, CheckCircle, Bell, Wallet, Shield, Sparkles
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const mainSteps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    desc: 'Download the app or visit our website. Sign up with your mobile number and email. It takes less than 60 seconds.',
    details: ['Enter basic details', 'Verify mobile via OTP', 'Set up your profile'],
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    icon: BadgeCheck,
    title: 'Complete KYC Verification',
    desc: 'Our fully digital KYC is quick and hassle-free. Just share your PAN, Aadhaar, and a selfie — no physical documents needed.',
    details: ['PAN card verification', 'Aadhaar e-verification', 'Selfie-based identity check'],
    accent: 'from-violet-500 to-purple-600',
  },
  {
    step: '03',
    icon: CircleDollarSign,
    title: 'Get Your Credit Limit',
    desc: 'Our AI-powered engine evaluates your profile in real-time and delivers a personalized credit offer within minutes.',
    details: ['AI credit scoring', 'Personalized limit up to ₹5L', 'Transparent interest rate offer'],
    accent: 'from-primary-500 to-primary-700',
  },
  {
    step: '04',
    icon: CreditCard,
    title: 'Receive Funds Instantly',
    desc: 'Accept your credit offer and the funds are transferred directly to your bank account — instantly.',
    details: ['Choose your loan amount', 'Select repayment tenure', 'Instant bank transfer'],
    accent: 'from-emerald-500 to-teal-500',
  },
];

const afterSteps = [
  { icon: Bell, title: 'Smart Reminders', desc: 'Get timely notifications before EMI due dates. Never miss a payment.' },
  { icon: Wallet, title: 'Easy Repayment', desc: 'Multiple repayment options — UPI, auto-debit, net banking, or in-app payment.' },
  { icon: Shield, title: 'Secure Always', desc: 'Bank-grade encryption protects every transaction. Your data is always safe.' },
];

export default function HowItWorks() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const stepsRef = useScrollReveal();
  const afterRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="hero-mesh pt-32 pb-12 relative">
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              From Sign-Up to{' '}
              <span className="gradient-text">Funds in Minutes</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Our streamlined process is designed to get you credit faster than ever.
              Four simple steps — that's all it takes.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <SectionWrapper>
        <div ref={stepsRef} className="fade-up">
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/30 via-primary-500/10 to-transparent md:-translate-x-px" />

            {mainSteps.map((s, i) => (
              <div key={i} className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Center icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-xl shadow-primary-500/10`}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-28 md:ml-0 md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? 'md:pr-0 md:text-right md:mr-auto' : 'md:pl-0 md:ml-auto'
                }`}>
                  <div className="gradient-border rounded-3xl card-lift">
                    <div className="bg-bg-card rounded-3xl p-7 relative z-10">
                      <span className="badge !text-[10px] mb-3 inline-flex">Step {s.step}</span>
                      <h3 className="text-lg font-bold text-text-primary mb-2">{s.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                      <div className={`space-y-2 ${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {s.details.map((d, j) => (
                          <div key={j} className={`flex items-center gap-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="text-xs text-text-muted font-medium">{d}</span>
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

      {/* After Approval */}
      <SectionWrapper gradient>
        <div ref={afterRef} className="fade-up">
          <SectionHeader
            badge="After Approval"
            title={<>We've got you <span className="gradient-text">covered</span></>}
            subtitle="Our support doesn't end at disbursal. We're with you through every step of repayment."
          />
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {afterSteps.map((s, i) => (
              <div key={i} className="gradient-border rounded-3xl card-lift">
                <div className="bg-bg-card rounded-3xl p-7 text-center relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center mx-auto mb-5">
                    <s.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-600/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div ref={ctaRef} className="fade-up max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
            Ready to Experience <span className="gradient-text">Instant Credit?</span>
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            It takes less than 10 minutes. Start your journey now.
          </p>
          <Link to="/contact" className="btn-primary !px-10 !py-4 !text-base">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
