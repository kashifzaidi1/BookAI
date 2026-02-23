"use client";

import { motion } from "framer-motion";
import ChatMockup from "./ChatMockup";
import { LeafSVG, StarSVG, CursorSVG, PlusSVG } from "./Decorations";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-12 overflow-hidden section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered text */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="badge mx-auto mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Available in 50+ languages
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]"
          >
            One platform to <span className="text-[#2D7A4F] italic">seamlessly</span> book
            <br className="hidden sm:block" /> appointments for your business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            A multilingual AI receptionist that handles scheduling 24/7 — in any language, without missing a single call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <a href="#cta" className="btn-primary text-base px-8 py-3.5">
              Try BookAI →
            </a>
          </motion.div>
        </div>

        {/* Phone mockup centered with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mt-14 flex justify-center"
        >
          {/* Decorative floating elements */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-4 sm:left-[10%] top-12 z-10">
            <LeafSVG className="w-10 h-10 rotate-[-20deg]" />
          </motion.div>

          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 sm:right-[10%] top-8 z-10">
            <StarSVG className="w-8 h-8" />
          </motion.div>

          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[5%] sm:left-[18%] bottom-20 z-10">
            <CursorSVG className="w-7 h-7 rotate-12" />
          </motion.div>

          <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute right-[8%] sm:right-[18%] bottom-28 z-10">
            <PlusSVG className="w-5 h-5" />
          </motion.div>

          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[25%] top-0 z-10">
            <PlusSVG className="w-4 h-4 opacity-50" />
          </motion.div>

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[25%] top-4 z-10">
            <LeafSVG className="w-6 h-6 rotate-[30deg] opacity-60" />
          </motion.div>

          {/* Floating notification cards */}
          <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -left-2 sm:left-[5%] top-1/3 z-20 hidden sm:block">
            <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-[#E8E8E5] px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EEF9F0] flex items-center justify-center text-sm">✅</div>
              <div>
                <p className="text-xs font-semibold text-[#1A1A1A]">Appointment Confirmed</p>
                <p className="text-[10px] text-[#ABABAB]">Wed, Mar 5 at 2:30 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-2 sm:right-[5%] top-1/2 z-20 hidden sm:block">
            <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-[#E8E8E5] px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFF3E0] flex items-center justify-center text-sm">🌍</div>
              <div>
                <p className="text-xs font-semibold text-[#1A1A1A]">50+ Languages</p>
                <p className="text-[10px] text-[#ABABAB]">Speaks your customer&#39;s language</p>
              </div>
            </div>
          </motion.div>

          <ChatMockup />
        </motion.div>
      </div>
    </section>
  );
}
