"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F8F7F4]/90 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#1A1A1A] flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-[#1A1A1A]">BookAI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Demo", "Pricing", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200">{item}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors px-4 py-2">Log In</a>
            <a href="#cta" className="btn-primary text-sm px-5 py-2.5">Start Free Trial →</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#6B6B6B]" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E8E8E5] px-4 py-4 space-y-1"
          >
            {["Features", "Demo", "Pricing", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-sm text-[#6B6B6B] hover:text-[#1A1A1A] py-3 px-2">{item}</a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="block btn-primary text-sm px-5 py-2.5 text-center mt-3">Start Free Trial →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
