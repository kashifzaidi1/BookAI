"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { LeafSVG, PlusSVG } from "./Decorations";

const features = [
  { title: "Seamless Chat", description: "AI converses naturally with your customers — they won't know it's not human.", position: "left-top", icon: "💬" },
  { title: "Real-Time Booking", description: "Checks your live calendar and books slots instantly. No double-bookings.", position: "right-top", icon: "📅" },
  { title: "Automated Reminders", description: "Sends SMS and email reminders that reduce no-shows by 40%.", position: "left-bottom", icon: "🔔" },
  { title: "Secure & Scalable", description: "HIPAA-ready, encrypted, built to handle thousands of appointments daily.", position: "right-bottom", icon: "🔒" },
];

const positionClasses: Record<string, string> = {
  "left-top": "lg:absolute lg:left-0 lg:top-8 lg:w-[280px]",
  "right-top": "lg:absolute lg:right-0 lg:top-8 lg:w-[280px]",
  "left-bottom": "lg:absolute lg:left-0 lg:bottom-8 lg:w-[280px]",
  "right-bottom": "lg:absolute lg:right-0 lg:bottom-8 lg:w-[280px]",
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 section-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-30"><PlusSVG className="w-6 h-6" /></div>
      <div className="absolute bottom-20 right-14 opacity-30"><LeafSVG className="w-8 h-8 rotate-45" /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#1A1A1A]">
              A booking system for the<br />whole organization
            </h2>
            <p className="text-lg text-[#6B6B6B]">Everything a great receptionist does. Nothing they can&apos;t.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-10">
            <a href="#demo" className="badge px-5 py-2">
              Learn More →
            </a>
          </div>
        </FadeIn>

        {/* Central phone with orbiting feature cards */}
        <div className="relative lg:min-h-[600px]">
          {/* Phone in center */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 lg:bottom-0 lg:w-[320px]">
              <div className="relative">
                {/* Phone frame */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/10 border border-gray-200 p-3 w-[280px]">
                  <div className="bg-[#F8F7F4] rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-5 pt-3 pb-1">
                      <span className="text-[10px] font-semibold text-gray-800">9:41</span>
                      <div className="w-16 h-5 bg-black rounded-full" />
                      <div className="w-3 h-2 rounded-sm border border-gray-600" />
                    </div>

                    {/* Mini chat interface */}
                    <div className="px-3 py-3 space-y-2 min-h-[420px]">
                      <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                        <p className="text-[10px] text-gray-600 font-medium mb-1">BookAI Assistant</p>
                        <p className="text-[10px] text-gray-800">Hi! How can I help you today? 👋</p>
                      </div>
                      <div className="bg-[#1A1A1A] rounded-xl px-3 py-2 ml-8">
                        <p className="text-[10px] text-white">Book a dentist appointment</p>
                      </div>
                      <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                        <p className="text-[10px] text-gray-800">I see openings on Tuesday and Thursday. Which works better?</p>
                        <div className="flex gap-1 mt-1.5">
                          <div className="bg-[#EEF9F0] text-[#2D7A4F] rounded-lg px-2 py-1 text-[9px] font-medium">Tue 10am</div>
                          <div className="bg-[#EEF9F0] text-[#2D7A4F] rounded-lg px-2 py-1 text-[9px] font-medium">Thu 2pm</div>
                        </div>
                      </div>
                      <div className="bg-[#1A1A1A] rounded-xl px-3 py-2 ml-8">
                        <p className="text-[10px] text-white">Tuesday please!</p>
                      </div>
                      <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                        <p className="text-[10px] text-gray-800">✅ Booked! Tuesday at 10am with Dr. Lee. Reminder will be sent 24h before.</p>
                      </div>

                      {/* Incoming call overlay */}
                      <div className="bg-[#2D7A4F] rounded-xl px-3 py-2.5 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-[10px]">📞</span>
                        </div>
                        <div>
                          <p className="text-[9px] text-white/80">Incoming call from</p>
                          <p className="text-[10px] text-white font-semibold">+1 (555) 234-5678</p>
                        </div>
                      </div>

                      {/* Language selector */}
                      <div className="flex items-center gap-1 justify-center">
                        <span className="text-[9px] text-gray-400">Languages:</span>
                        <span className="text-[9px]">🇺🇸</span>
                        <span className="text-[9px]">🇪🇸</span>
                        <span className="text-[9px]">🇫🇷</span>
                        <span className="text-[9px]">🇨🇳</span>
                        <span className="text-[9px]">🇸🇦</span>
                        <span className="text-[9px] text-gray-400">+45</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements around phone */}
                <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-6">
                  <LeafSVG className="w-8 h-8 rotate-12" />
                </motion.div>
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-2 -left-4">
                  <PlusSVG className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Feature cards - grid on mobile, absolute on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 lg:grid-cols-none">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={0.3 + i * 0.1}>
                <div className={`${positionClasses[feature.position]}`}>
                  <div className="card p-5">
                    <div className="text-2xl mb-3">{feature.icon}</div>
                    <h3 className="text-base font-bold mb-1 text-[#1A1A1A]">{feature.title}</h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
