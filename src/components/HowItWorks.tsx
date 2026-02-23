"use client";

import FadeIn from "./FadeIn";

const steps = [
  { number: "01", title: "Connect", description: "Link BookAI to your phone line, website, or messaging apps. Setup takes under 10 minutes.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
  { number: "02", title: "Converse", description: "BookAI talks to your customers naturally — in their language. It checks your real-time availability and books the appointment.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
  { number: "03", title: "Confirm", description: "Both you and your customer get instant confirmations. BookAI handles reminders and rescheduling too.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#1A1A1A]">
              3 steps. Zero missed appointments.
            </h2>
            <p className="text-lg text-[#6B6B6B]">Get up and running in minutes, not days.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#F0F0EC] flex items-center justify-center text-[#1A1A1A] mb-6">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-[#ABABAB] uppercase tracking-widest mb-2">Step {step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{step.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed text-sm">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
