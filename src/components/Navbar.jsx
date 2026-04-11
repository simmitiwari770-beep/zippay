import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "How It Works", path: "/how-it-works" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        {/* Blur background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-bg/70 backdrop-blur-xl border-b border-white/[0.04]"
              : "bg-transparent"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="flex items-center justify-center gap-10 lg:gap-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:shadow-primary-500/30 transition-all duration-300">
                <Zap className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">ZIP</span>
                <span className="text-primary-400">PAY</span>
              </span>
            </Link>

            {/* Desktop Menu — pill style */}
            <div className="hidden lg:flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-white/[0.08] text-white"
                      : "text-text-secondary hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/product"
                className="px-4 py-2 text-[13px] font-medium text-text-secondary hover:text-white transition-colors"
              >
                Check Eligibility
              </Link>
              <Link
                to="/contact"
                className="btn-primary !px-5 !py-2.5 !text-[13px] !rounded-xl"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[60] w-[300px] bg-bg-raised/95 backdrop-blur-2xl border-l border-white/[0.06] transition-transform duration-500 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.06] hover:bg-white/[0.04]"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3.5 rounded-2xl text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-primary-600/15 text-primary-400"
                    : "text-text-secondary hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="pt-6 border-t border-white/[0.06] space-y-3">
            <Link
              to="/product"
              className="block w-full text-center px-4 py-3 text-sm font-medium text-text-secondary border border-white/[0.08] rounded-2xl hover:bg-white/[0.04] transition-all"
            >
              Check Eligibility
            </Link>
            <Link
              to="/contact"
              className="btn-primary w-full justify-center !text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
