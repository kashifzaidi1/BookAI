"use client";

import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-[#1A1A1A] rounded-3xl p-12 lg:p-20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D7A4F]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2D7A4F]/5 rounded-full blur-2xl" />
            <div className="absolute top-10 left-10 text-white/5 text-[200px] font-extrabold leading-none select-none">B</div>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">
              <div className="text-center lg:text-left max-w-2xl">
                {/* Small logo */}
                <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-white/60 text-sm font-medium">BookAI</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                  Let&apos;s find that schedule you&apos;ve been dreaming about
                </h2>
                <p className="text-lg text-white/50 max-w-xl mb-0 lg:mb-0">
                  Join hundreds of businesses that never miss a booking. Setup takes 10 minutes.
                </p>
              </div>

              <a
                href="#"
                className="bg-[#2D7A4F] text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#236B42] transition-colors flex-shrink-0"
              >
                Get Started →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
