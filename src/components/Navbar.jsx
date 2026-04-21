import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Responsible Lending", path: "/responsible-lending" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-primary-100 shadow-sm py-4"
            : "bg-transparent py-8"
          }`}
      >
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-all duration-500">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary-900">ZIP</span>
                <span className="text-primary-600">PAY</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[14px] font-semibold transition-all duration-300 ${location.pathname === link.path
                      ? "text-primary-600"
                      : "text-text-secondary hover:text-primary-600"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/product"
                className="px-4 py-2 text-[14px] font-semibold text-text-secondary hover:text-primary-600 transition-all duration-300"
              >
                Eligibility
              </Link>
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-6 py-2.5 rounded-xl text-[14px] font-bold hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <Zap className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-primary-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 text-primary-600"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-primary-900/10 backdrop-blur-md transition-opacity duration-700 lg:hidden ${isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[60] w-[320px] bg-white/95 backdrop-blur-3xl border-l border-primary-100/50 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close */}
          <div className="flex justify-between items-center mb-12">
            <span className="text-sm font-black text-primary-900 uppercase tracking-widest">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 rounded-2xl flex items-center justify-center border border-primary-100 bg-primary-50 hover:bg-primary-100 transition-all"
            >
              <X className="w-5 h-5 text-primary-600" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-6 py-4 rounded-2xl text-[15px] font-bold transition-all ${location.pathname === link.path
                    ? "bg-primary-600 text-white shadow-xl shadow-primary-500/30 -translate-x-2"
                    : "text-text-secondary hover:text-primary-600 hover:bg-primary-50 hover:translate-x-2"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="pt-8 border-t border-primary-100 space-y-4">
            <Link
              to="/product"
              className="block w-full text-center px-6 py-4 text-[15px] font-bold text-text-secondary border border-primary-100 rounded-2xl hover:bg-primary-50 transition-all"
            >
              Check Eligibility
            </Link>
            <Link
              to="/contact"
              className="btn-primary w-full justify-center !text-[15px] !rounded-2xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );


}
