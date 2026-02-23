"use client";

import FadeIn from "./FadeIn";

const industries = [
  { title: "Healthcare", description: "Clinics, dentists, therapists, specialists. Reduce front-desk overload.", icon: "🏥" },
  { title: "Home Services", description: "Plumbers, electricians, HVAC, cleaners. Never miss a job while on-site.", icon: "🔧" },
  { title: "Beauty & Wellness", description: "Salons, spas, barbers. Let clients book anytime.", icon: "💈" },
  { title: "Professional Services", description: "Lawyers, accountants, consultants. Focus on clients, not calendars.", icon: "⚖️" },
  { title: "Auto Services", description: "Mechanics, detailers, dealerships. Keep bays full.", icon: "🚗" },
  { title: "Fitness", description: "Personal trainers, studios, gyms. Automate class and session bookings.", icon: "💪" },
];

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#1A1A1A]">
              Built for anyone who books appointments
            </h2>
            <p className="text-lg text-[#6B6B6B]">From healthcare to home services, BookAI adapts to your industry.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <FadeIn key={industry.title} delay={i * 0.08}>
              <div className="card p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#F0F0EC] flex items-center justify-center text-2xl mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold mb-1.5 text-[#1A1A1A]">{industry.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{industry.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
