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
    <footer className="relative pt-24 pb-12 overflow-hidden bg-white">
      {/* Premium Purple Tint Layers */}
      <div className="absolute inset-0 bg-primary-50/40 -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-200/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-24 right-0 w-80 h-80 bg-primary-400/10 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center shadow-xl shadow-primary-600/30 group-hover:scale-110 transition-all duration-500">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-primary-900">ZIP</span>
                <span className="text-primary-600">PAY</span>
              </span>
            </Link>
            <p className="text-text-secondary leading-relaxed font-medium text-lg">
              Empowering India's digital future with instant, reliable, and transparent credit solutions.
            </p>
            <div className="flex gap-4">
              {[Globe, Briefcase].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white border border-primary-100 flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-500 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-900 font-black text-xs uppercase tracking-[0.2em] mb-10">Platform</h4>
            <ul className="space-y-5">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Product", path: "/product" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "FAQs", path: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-primary-600 font-bold flex items-center gap-3 group transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-600 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-primary-900 font-black text-xs uppercase tracking-[0.2em] mb-10">Legal</h4>
            <ul className="space-y-5">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Grievance", path: "/grievance" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-primary-600 font-bold flex items-center gap-3 group transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-600 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — Professional Minimalist Card */}
          <div className="bg-white border border-primary-100 p-8 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col justify-center">
            <h4 className="text-primary-900 font-extrabold text-[11px] uppercase tracking-[0.2em] mb-10 text-center">Reach Out</h4>
            <div className="space-y-10">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/20 mb-1">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-sm font-bold text-primary-900">support@zippay.in</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-1">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Regulatory Status</p>
                  <p className="text-sm font-bold text-primary-900">RBI Regulated Entity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-primary-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold text-primary-900/40">
            Zippay is a product under <strong className="text-primary-900/60 font-black">Lendwise Advisory Private Limited.</strong>
          </p>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-900">RBI Regulated</span>
              <div className="w-1 h-1 rounded-full bg-primary-300" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-900">NPCI Registered</span>
            </div>
            <p className="text-xs font-black text-primary-900/40 uppercase tracking-widest">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
