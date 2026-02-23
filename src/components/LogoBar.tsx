"use client";

import FadeIn from "./FadeIn";

export default function LogoBar() {
  return (
    <section className="py-12 border-t border-b border-[#E8E8E5] section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm text-[#ABABAB] mb-6">Trusted by forward-thinking businesses</p>
          <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap opacity-40">
            {["HealthFirst", "RiveraPLMB", "ZenSpa", "AutoCare", "FitLife", "LegalEdge"].map((name) => (
              <span key={name} className="text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-tight">{name}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
