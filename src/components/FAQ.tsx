"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const faqs = [
  { q: "Is BookAI actually AI or does it route to a call center?", a: "100% AI. BookAI uses advanced language models to have natural conversations. No humans in the loop unless you want them." },
  { q: "What languages does it support?", a: "50+ languages including English, Spanish, French, Mandarin, Arabic, Hindi, Portuguese, Korean, and many more." },
  { q: "Can it integrate with my existing calendar?", a: "Yes. Google Calendar, Outlook, Calendly, and custom systems via API." },
  { q: "Is it HIPAA compliant?", a: "BookAI is built with healthcare privacy standards in mind. We offer HIPAA-ready configurations for medical practices." },
  { q: "What if the AI can't handle a request?", a: "BookAI gracefully escalates to a human when needed — via call transfer, SMS, or email notification to your team." },
  { q: "How long does setup take?", a: "Most businesses are live within 10 minutes. Complex integrations may take a few hours with our support team." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8E8E5] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-base font-semibold pr-4 text-[#1A1A1A] group-hover:text-[#2D7A4F] transition-colors">{q}</span>
        <motion.svg animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="w-5 h-5 flex-shrink-0 text-[#ABABAB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 text-[#6B6B6B] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 section-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
              Frequently asked questions
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="card p-8">
            {faqs.map((faq) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} />))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
