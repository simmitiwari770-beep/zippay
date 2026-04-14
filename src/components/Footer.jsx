import { Link } from "react-router-dom";
import {
  Zap,
  Mail,
  ChevronRight,
  ShieldCheck,
  Globe,
  Briefcase
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-all duration-500">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary-900">ZIP</span>
                <span className="text-primary-600">PAY</span>
              </span>
            </Link>
            <p className="text-text-secondary leading-relaxed font-medium">
              Zippay is a digital lending platform offering fast, simple, and transparent credit solutions for modern users.
            </p>
            <div className="flex gap-4">
              {[Globe, Briefcase].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-300 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-900 font-bold text-xs uppercase tracking-widest mb-8">Platform</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Product", path: "/product" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "FAQs", path: "/faq" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-primary-600 font-semibold flex items-center gap-2 group transition-all"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-primary-900 font-bold text-xs uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Grievance Redressal", path: "/grievance" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-primary-600 font-semibold flex items-center gap-2 group transition-all"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <h4 className="text-primary-900 font-bold text-xs uppercase tracking-widest mb-6">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary-900 uppercase mb-1">Email Support</p>
                  <p className="text-sm font-semibold text-text-secondary">support@zippay.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary-900 uppercase mb-1">Regulated By</p>
                  <p className="text-sm font-semibold text-text-secondary">RBI Registration #12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-semibold text-slate-400">
            Zippay is a product under <strong>Lendwise Advisory Private Limited.</strong>
          </p>
          <p className="text-sm font-semibold text-slate-400 mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center gap-8 grayscale opacity-40">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">RBI Regulated</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">NPCI Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
