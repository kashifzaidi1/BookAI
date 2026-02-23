"use client";

import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote: "BookAI paid for itself in the first week. We recovered 12 appointments we would have missed.",
    name: "Dr. Sarah Chen",
    role: "Family Practice",
    gradient: "from-rose-300 to-orange-200",
    initials: "SC",
  },
  {
    quote: "My customers love that they can book in Spanish at midnight. Game changer for our business.",
    name: "Carlos Rivera",
    role: "Rivera Plumbing",
    gradient: "from-blue-300 to-cyan-200",
    initials: "CR",
  },
  {
    quote: "We replaced our answering service and saved $2,000/month. The AI sounds natural and professional.",
    name: "Priya Patel",
    role: "Wellness Studio",
    gradient: "from-emerald-300 to-teal-200",
    initials: "PP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: heading */}
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#1A1A1A] leading-tight">
                Loved by 500+<br />businesses, backed<br />by real results
              </h2>
              <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-md">
                From solo practitioners to multi-location chains, businesses trust BookAI to handle their scheduling.
              </p>
            </div>
          </FadeIn>

          {/* Right: photo-style testimonial cards */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {/* Large photo card */}
              <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[0].gradient}`} />
                <div className="relative p-5 flex flex-col justify-end min-h-[300px]">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-lg font-bold text-white mb-3">
                    {testimonials[0].initials}
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-xs text-[#1A1A1A] leading-relaxed mb-2">&ldquo;{testimonials[0].quote}&rdquo;</p>
                    <p className="text-[10px] font-semibold text-[#1A1A1A]">{testimonials[0].name}</p>
                    <p className="text-[10px] text-[#6B6B6B]">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>

              {/* Smaller cards */}
              {testimonials.slice(1).map((t) => (
                <div key={t.name} className="relative rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient}`} />
                  <div className="relative p-4 flex flex-col justify-end min-h-[145px]">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                      <p className="text-[10px] text-[#1A1A1A] leading-relaxed mb-1.5">&ldquo;{t.quote}&rdquo;</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/50 flex items-center justify-center text-[8px] font-bold text-[#1A1A1A]">
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-[9px] font-semibold text-[#1A1A1A]">{t.name}</p>
                          <p className="text-[8px] text-[#6B6B6B]">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
