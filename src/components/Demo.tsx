"use client";

import FadeIn from "./FadeIn";

export default function Demo() {
  return (
    <section id="demo" className="py-20 lg:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#1A1A1A]">
              See BookAI handle a real appointment
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Watch how BookAI schedules a doctor&apos;s appointment in English and Spanish — seamlessly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden p-0 border-0 shadow-xl shadow-black/5">
              <video className="w-full aspect-video" controls preload="metadata">
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-[#ABABAB] text-sm mt-6 max-w-xl mx-auto">
              This demo shows a patient calling a clinic. BookAI answers,
              understands they prefer Spanish, checks availability, and books a
              slot — all without human intervention.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
