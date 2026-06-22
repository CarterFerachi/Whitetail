"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Work", href: "#gallery" },
  { label: "Equipment", href: "#equipment" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-yellow-900/30 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L8 7H4l2 5-4 5h5l3 5 3-5h5l-4-5 2-5h-4L12 2z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight tracking-wide">WHITETAIL</div>
              <div className="text-yellow-600 text-[10px] tracking-[0.2em] uppercase font-medium">Management LLC</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-500 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15551234567"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              (555) 123-4567
            </a>
            <a
              href="#contact"
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-sm px-5 py-2.5 rounded transition-all duration-200 flex items-center gap-2"
            >
              Free Estimate <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors border-b border-gray-800 pb-4"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-lg px-6 py-4 rounded text-center transition-all"
              >
                Get Your Free Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
