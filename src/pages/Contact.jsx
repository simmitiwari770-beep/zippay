import { useState } from "react";
import {
  Mail,
  MessageSquare,
  HelpCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Sparkles,
  Zap,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const supportCards = [
  {
    icon: MessageSquare,
    title: "In-app support",
    desc: "Get real-time assistance directly within the Zippay app.",
    action: "Open App",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email support",
    desc: "Send us an email at support@zippay.in for detailed queries.",
    action: "support@zippay.in",
    href: "mailto:support@zippay.in",
  },
  {
    icon: HelpCircle,
    title: "Help center & FAQs",
    desc: "Search our knowledge base for quick answers to common questions.",
    action: "Visit FAQ",
    href: "/faq",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const formRef = useScrollReveal();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <main className="overflow-hidden">
      {/* Contact Hero — Professional Redesign */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-white">
        <div className="hero-glow !bg-primary-600/[0.03]" />

        
        <div
          ref={heroRef}
          className="fade-up container-custom relative z-10 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <span className="badge mx-auto mb-6">
              <MessageSquare className="w-4 h-4" />
              Institutional Support Desk
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-primary-900">
              Need Help? <br />
              <span className="text-primary-600">We're Here.</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
              Connect with our specialized finance team. Whether you're seeking 
              technical support or product clarification, we're here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Support Pillars */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {supportCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="bg-white border border-slate-100 p-10 rounded-2xl flex flex-col items-center text-center group hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary-50 flex items-center justify-center mb-8 group-hover:bg-primary-600 transition-all duration-300">
                <card.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary mb-8 font-medium">{card.desc}</p>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all">
                {card.action}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>

        {/* Form Section — Premium Architectural Layout */}
        <div ref={formRef} className="fade-up">
          <SectionHeader
            badge="Direct Inquiry"
            title={
              <>
                Let's Start a <span className="gradient-text">Conversation</span>
              </>
            }
            subtitle="Fill out the architectural form below and our team will synthesize a response within 24 business hours."
          />

          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="glass-card !p-20 text-center shadow-2xl">
                <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-10">
                  <CheckCircle className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-4xl font-black text-primary-900 mb-6">
                  Inquiry Received.
                </h3>
                <p className="text-xl text-text-secondary mb-12 font-medium">
                  Your message has been successfully routed to our support 
                  experts. Expect a detailed response shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary !px-10 !py-5 !rounded-2xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div className="bg-white border-2 border-primary-100 p-12 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(124,58,237,0.05)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none">
                  <Zap className="w-64 h-64 text-primary-900" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-900/70 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Singh"
                        className={`input-dark !bg-white border-2 !border-primary-50 !rounded-2xl !p-5 !text-lg focus:!border-primary-500 transition-all ${errors.name ? "!border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 font-bold flex items-center gap-2 ml-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-900/70 ml-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`input-dark !bg-white border-2 !border-primary-50 !rounded-2xl !p-5 !text-lg focus:!border-primary-500 transition-all ${errors.email ? "!border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-bold flex items-center gap-2 ml-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-900/70 ml-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`input-dark !bg-white border-2 !border-primary-50 !rounded-2xl !p-5 !text-lg focus:!border-primary-500 transition-all ${errors.phone ? "!border-red-500" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 font-bold flex items-center gap-2 ml-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-900/70 ml-2">
                        Query Type
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry regarding limit"
                        className="input-dark !bg-white border-2 !border-primary-50 !rounded-2xl !p-5 !text-lg focus:!border-primary-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-900/70 ml-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can our financial team assist you today?"
                      rows={6}
                      className={`input-dark !bg-primary-50/30 !rounded-2xl !p-5 !text-lg resize-none ${errors.message ? "!border-red-500/50" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 font-bold flex items-center gap-2 ml-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center !py-4 shadow-xl shadow-primary-600/10 active:scale-95 transition-all"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-4">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>PROCESSING...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 uppercase tracking-widest font-bold">
                        <Send className="w-5 h-5" />
                        <span>Submit Inquiry</span>
                      </div>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
