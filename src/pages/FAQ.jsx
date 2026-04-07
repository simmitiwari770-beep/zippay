import { useState } from 'react';
import { ChevronDown, Search, Sparkles } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqCategories = {
  General: [
    { q: 'What is Zippay?', a: 'Zippay is an instant digital credit platform that provides fast, paperless, short-term personal loans. Our fully online process — from eligibility check to disbursal — is designed to get you funds in minutes, not days.' },
    { q: 'Is Zippay a bank or an NBFC?', a: 'Zippay operates as a digital lending platform in partnership with RBI-registered NBFCs and banks. We act as a technology platform that connects borrowers with our lending partners.' },
    { q: 'Is Zippay safe to use?', a: 'Absolutely. We use 256-bit encryption, SOC2 certified infrastructure, and follow all RBI guidelines for digital lending. Your data and transactions are completely secure.' },
  ],
  'Eligibility & Application': [
    { q: 'Who can apply for a Zippay loan?', a: 'Any Indian citizen aged 21-55 years with a valid PAN card, Aadhaar, an active bank account, and a regular income source (salaried or self-employed) can apply.' },
    { q: 'What documents do I need?', a: 'We keep it minimal — just your PAN card, Aadhaar card, and a selfie for KYC verification. No physical documents or branch visits required.' },
    { q: 'How long does the application process take?', a: 'The entire process — from sign-up to fund disbursal — typically takes under 10 minutes. Our AI-powered system evaluates your profile in real-time.' },
    { q: 'What credit score do I need?', a: 'We recommend a minimum credit score of 650+. However, our AI scoring considers multiple factors beyond traditional credit scores, so even if your score is lower, you may still be eligible.' },
  ],
  'Loans & Repayment': [
    { q: 'What is the loan amount range?', a: 'You can borrow from ₹5,000 to ₹5,00,000 depending on your credit profile, income, and repayment capacity.' },
    { q: 'What are the interest rates?', a: 'Our interest rates start from 1.5% per month, depending on your credit profile and loan tenure. The exact rate is communicated transparently before you accept the offer.' },
    { q: 'Can I repay early?', a: 'Yes! We encourage early repayment and charge zero prepayment or foreclosure penalties. You can close your loan anytime without any extra charges.' },
    { q: 'What repayment options are available?', a: 'We support multiple repayment methods — UPI, auto-debit (NACH), net banking, and in-app payment. Choose what works best for you.' },
    { q: 'What happens if I miss an EMI?', a: 'We send timely reminders before your due date. If you miss a payment, a late fee may apply as per your loan agreement. If you\'re facing difficulties, contact us — we\'re here to help you find a solution.' },
  ],
  'Security & Privacy': [
    { q: 'How does Zippay protect my data?', a: 'We use bank-grade 256-bit encryption, SOC2 certified infrastructure, and strict access controls. Your data is never shared with third parties without your explicit consent.' },
    { q: 'Does Zippay access my phone contacts or photos?', a: 'No. We never access your personal contacts, photos, or any other private data on your phone. We only request permissions that are essential for the loan process.' },
  ],
};

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-sm font-semibold text-text-primary group-hover:text-primary-400 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary-400' : ''
          }`}
        />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p className="text-sm text-text-secondary leading-relaxed pb-6 pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchTerm, setSearchTerm] = useState('');
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const faqRef = useScrollReveal();

  const categories = Object.keys(faqCategories);

  const filteredFAQs = searchTerm
    ? Object.values(faqCategories)
        .flat()
        .filter((faq) =>
          faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : faqCategories[activeCategory];

  return (
    <main>
      {/* Hero */}
      <section className="hero-mesh pt-48 pb-24 relative">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute inset-0 grid-overlay" />
        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="badge">
              <Sparkles className="w-3.5 h-3.5" />
              Support Center
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8">
              Got <span className="gradient-text">Questions?</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
              Find quick answers to everything you need to know about Zippay.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-dark !pl-14 !py-4 !rounded-2xl border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <SectionWrapper>
        <div ref={faqRef} className="fade-up">
          {!searchTerm && (
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                      : 'bg-white/5 text-text-secondary border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div className="glass-card !p-0">
              <div className="px-6 md:px-10">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, i) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-text-muted">No results found. Try a different search term.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Still Need Help */}
      <section className="relative overflow-hidden py-32 bg-bg-alt/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-600/10 rounded-full blur-[100px]" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
            Still Have <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-text-secondary mb-10 text-lg">
            Our support team is available to help you with any queries.
          </p>
          <a href="mailto:support@zippay.in" className="btn-primary mx-auto">
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
