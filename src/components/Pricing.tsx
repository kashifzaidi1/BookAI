"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free Forever",
    price: "FREE",
    period: "",
    description: "Perfect for trying out BookAI.",
    features: ["50 appointments/month", "1 calendar integration", "3 languages", "Web chat only", "Email support"],
    popular: false,
    rotation: "-3deg",
  },
  {
    name: "Unlimited",
    price: "$99",
    period: "/mo",
    description: "For growing businesses that need more.",
    features: ["Unlimited appointments", "5 calendar integrations", "All 50+ languages", "All channels (phone, WhatsApp, SMS)", "Priority support", "Custom workflows", "Analytics dashboard"],
    popular: true,
    rotation: "0deg",
  },
  {
    name: "Business",
    price: "$249",
    period: "/mo",
    description: "For organizations with advanced needs.",
    features: ["Everything in Unlimited", "Unlimited calendars", "API access", "Dedicated account manager", "HIPAA compliance", "SLA guarantee"],
    popular: false,
    rotation: "3deg",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#1A1A1A]">
              The best work solution,<br />for the best price.
            </h2>
            <p className="text-lg text-[#6B6B6B]">No hidden fees. No long-term contracts. Cancel anytime.</p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-[-8px]">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, rotate: "0deg" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ rotate: plan.rotation }}
                className={`card p-8 w-full lg:w-[320px] relative ${
                  plan.popular
                    ? "border-[#1A1A1A] border-2 shadow-xl z-10 lg:scale-105"
                    : "z-0"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2D7A4F] text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#6B6B6B] mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#1A1A1A]">{plan.price}</span>
                    <span className="text-[#ABABAB] text-sm">{plan.period}</span>
                  </div>
                  <p className="text-[#6B6B6B] text-sm mt-2">{plan.description}</p>
                </div>

                <div className="mb-6 h-px bg-[#E8E8E5]" />

                <p className="text-xs font-semibold text-[#ABABAB] uppercase tracking-wider mb-3">Key Features</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 text-[#2D7A4F] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#6B6B6B]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`block w-full text-center py-3 rounded-full text-sm font-semibold transition-all ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.price === "FREE" ? "Get Started" : "Start Free Trial"}
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
