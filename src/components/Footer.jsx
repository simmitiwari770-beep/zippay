import { Link } from 'react-router-dom';
import { Zap, ArrowUpRight, Mail, Globe } from 'lucide-react';

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Product', path: '/product' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Disclaimer', path: '/disclaimer' },
  { name: 'Grievance Redressal', path: '/grievance' },
  { name: 'Responsible Lending', path: '/responsible-lending' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.04]">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Zap className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">ZIP</span>
                <span className="text-primary-400">PAY</span>
              </span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-xs">
              Instant Digital Credit. Zero Hassle. Experience the future of personal lending — fast, transparent, and built for you.
            </p>
            <div className="flex gap-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-text-muted mb-5">Product</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-white flex items-center gap-1.5 group transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-text-muted mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-white flex items-center gap-1.5 group transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-text-muted mb-5">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">Email</p>
                <a href="mailto:support@zippay.in" className="text-sm text-text-primary hover:text-primary-400 transition-colors font-medium">
                  support@zippay.in
                </a>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">Help Center</p>
                <Link to="/faq" className="text-sm text-text-primary hover:text-primary-400 transition-colors font-medium">
                  Visit FAQ
                </Link>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-white/[0.08] text-text-secondary hover:text-white hover:border-white/[0.15] hover:bg-white/[0.04] transition-all mt-2"
              >
                Contact Support
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Zippay. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Zippay — Instant Digital Credit. Zero Hassle.
          </p>
        </div>
      </div>
    </footer>
  );
}
