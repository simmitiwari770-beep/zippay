import { useState } from "react";
import { ChevronDown, Search, Sparkles } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqCategories = {
  General: [
    {
      q: "Is Zippay fully digital?",
      a: "Yes, the entire process from application to repayment is digital.",
    },
    {
      q: "How fast is the approval?",
      a: "Eligibility checks and approvals are designed to be quick, subject to verification.",
    },
    {
      q: "Are there hidden charges?",
      a: "No. All applicable charges are clearly disclosed before proceeding.",
    },
    {
      q: "Is my data secure?",
      a: "Yes. Zippay follows strict security and data protection practices.",
    },
  ],
  "Eligibility & Application": [
    {
      q: "Who can apply for a Zippay loan?",
      a: "Any Indian citizen aged 21-55 years with a valid PAN card, Aadhaar, an active bank account, and a regular income source (salaried or self-employed) can apply.",
    },
    {
      q: "What documents do I need?",
      a: "We keep it minimal — just your PAN card, Aadhaar card, and a selfie for KYC verification. No physical documents or branch visits required.",
    },
    {
      q: "How long does the application process take?",
      a: "The entire process — from sign-up to fund disbursal — typically takes under 10 minutes. Our AI-powered system evaluates your profile in real-time.",
    },
    {
      q: "What credit score do I need?",
      a: "We recommend a minimum credit score of 650+. However, our AI scoring considers multiple factors beyond traditional credit scores, so even if your score is lower, you may still be eligible.",
    },
  ],
  "Loans & Repayment": [
    {
      q: "What is the loan amount range?",
      a: "You can borrow from ₹5,000 to ₹5,00,000 depending on your credit profile, income, and repayment capacity.",
    },
    {
      q: "What are the interest rates?",
      a: "Our interest rates start from 1.5% per month, depending on your credit profile and loan tenure. The exact rate is communicated transparently before you accept the offer.",
    },
    {
      q: "Can I repay early?",
      a: "Yes! We encourage early repayment and charge zero prepayment or foreclosure penalties. You can close your loan anytime without any extra charges.",
    },
    {
      q: "What repayment options are available?",
      a: "We support multiple repayment methods — UPI, auto-debit (NACH), net banking, and in-app payment. Choose what works best for you.",
    },
    {
      q: "What happens if I miss an EMI?",
      a: "We send timely reminders before your due date. If you miss a payment, a late fee may apply as per your loan agreement. If you're facing difficulties, contact us — we're here to help you find a solution.",
    },
  ],
  "Security & Privacy": [
    {
      q: "How does Zippay protect my data?",
      a: "We use bank-grade 256-bit encryption, SOC2 certified infrastructure, and strict access controls. Your data is never shared with third parties without your explicit consent.",
    },
    {
      q: "Does Zippay access my phone contacts or photos?",
      a: "No. We never access your personal contacts, photos, or any other private data on your phone. We only request permissions that are essential for the loan process.",
    },
  ],
};

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary-50 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-8 text-left group transition-all"
      >
        <span className="text-lg font-bold text-primary-900 group-hover:text-primary-600 transition-colors">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-primary-600 text-white rotate-180" : "bg-primary-50 text-primary-600"}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-base text-text-secondary leading-relaxed pb-8 pr-12 font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchTerm, setSearchTerm] = useState("");
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const faqRef = useScrollReveal();

  const categories = Object.keys(faqCategories);

  const filteredFAQs = searchTerm
    ? Object.values(faqCategories)
        .flat()
        .filter(
          (faq) =>
            faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    : faqCategories[activeCategory];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-50/50 -z-10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-[100px] animate-pulse" />
        
        <div
          ref={heroRef}
          className="fade-up container-custom relative z-10 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <span className="badge mx-auto mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Support Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-primary-900">
              Frequently Asked <span className="text-primary-600">Questions</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              Find quick answers to everything you need to know about Zippay.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400 group-focus-within:text-primary-600 transition-colors" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border-2 border-primary-100 rounded-2xl py-5 pl-16 pr-6 text-primary-900 font-medium placeholder:text-primary-200 focus:outline-none focus:border-primary-500 transition-all shadow-sm focus:shadow-xl focus:shadow-primary-600/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <SectionWrapper>
        <div ref={faqRef} className="fade-up">
          {!searchTerm && (
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
                    activeCategory === cat
                      ? "bg-primary-600 text-white shadow-xl shadow-primary-600/20 scale-105"
                      : "bg-white text-primary-900 border-2 border-primary-50 hover:border-primary-200 hover:bg-primary-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] border border-primary-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
              <div className="px-8 md:px-12">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, i) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))
                ) : (
                  <div className="py-24 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
                      <Search className="w-8 h-8 text-primary-200" />
                    </div>
                    <p className="text-xl font-bold text-primary-900 mb-2">No results found</p>
                    <p className="text-text-secondary font-medium text-base">
                      Try a different search term or check another category.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Still Need Help */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-50/30 -z-10" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-primary-900 mb-6">
            Still Have <span className="text-primary-600">Questions?</span>
          </h2>
          <p className="text-text-secondary mb-12 text-lg font-medium">
            Our support team is available to help you with any queries.
          </p>
          <div className="flex justify-center">
            <a href="mailto:support@zippay.in" className="px-12 py-4 bg-primary-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 hover:-translate-y-1">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
