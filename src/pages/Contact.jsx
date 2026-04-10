import { useState } from 'react';
import { Mail, MessageSquare, HelpCircle, Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const supportCards = [
  { icon: Mail, title: 'Email Support', desc: 'Get a response within 24 hours', action: 'support@zippay.in', href: 'mailto:support@zippay.in' },
  { icon: MessageSquare, title: 'In-App Chat', desc: 'Real-time support inside the app', action: 'Open App', href: '#' },
  { icon: HelpCircle, title: 'Help Center', desc: 'Browse articles and guides', action: 'Visit FAQ', href: '/faq' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const formRef = useScrollReveal();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter valid 10-digit number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <main>
      {/* Hero */}
      <section className="hero-mesh pt-32 pb-16 relative">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute inset-0 grid-overlay" />
        <div ref={heroRef} className="fade-up max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="badge">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8">
              We'd Love to <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Have questions, feedback, or need support? Our team is ready to help you
              get the credit you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Support Cards */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {supportCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="glass-card flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-600/10 group-hover:border-primary-500/20 transition-all">
                <card.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{card.title}</h3>
              <p className="text-sm text-text-secondary mb-6">{card.desc}</p>
              <span className="text-sm font-bold text-primary-400 flex items-center gap-1.5 transition-all group-hover:gap-2.5">
                {card.action}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="fade-up">
          <SectionHeader
            badge="Contact Us"
            title={<>Send us a <span className="gradient-text">message</span></>}
            subtitle="Fill out the form below and we'll get back to you within 24 hours."
          />

          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="glass-card text-center py-16">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Message Sent!</h3>
                <p className="text-text-secondary mb-10">
                  Thank you for reaching out. A support expert will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary-400 font-bold hover:text-primary-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="glass-card !p-8 md:!p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Full Name</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="John Doe"
                        className={`input-dark ${errors.name ? 'border-red-500/30' : ''}`}
                      />
                      {errors.name && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Email Address</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="john@example.com"
                        className={`input-dark ${errors.email ? 'border-red-500/30' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Phone Number</label>
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="9876543210"
                        className={`input-dark ${errors.phone ? 'border-red-500/30' : ''}`}
                      />
                      {errors.phone && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Subject</label>
                      <input
                        type="text" name="subject" value={formData.subject} onChange={handleChange}
                        placeholder="How can we help?"
                        className="input-dark"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Your Message</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      placeholder="Tell us what you're looking for..."
                      rows={5}
                      className={`input-dark resize-none ${errors.message ? 'border-red-500/30' : ''}`}
                    />
                    {errors.message && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center !py-4"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
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
