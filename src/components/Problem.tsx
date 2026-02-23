"use client";

import FadeIn from "./FadeIn";

const stats = [
  { value: "62%", label: "of calls to small businesses go unanswered", color: "bg-[#2D7A4F]" },
  { value: "$500+", label: "lost per missed appointment", color: "bg-[#E8A838]" },
  { value: "$35K", label: "average cost of a full-time receptionist", color: "bg-[#E85D5D]" },
  { value: "23%", label: "of patients prefer a non-English language", color: "bg-[#5D8DE8]" },
];

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-[#6B6B6B] leading-relaxed mb-10">
              I used to spend <span className="text-[#1A1A1A] font-semibold">2-3 hours per day</span> answering
              calls, checking calendars, and playing phone tag with customers.
              During busy seasons I started to lose appointments, referrals, and
              <span className="text-[#1A1A1A] font-semibold"> revenue I could never recover</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {stats.map((stat) => (
                <div key={stat.value} className={`${stat.color} text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-sm`}>
                  {stat.value}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-[#ABABAB]">
              <span>Calls go unanswered</span>
              <span>Revenue lost per no-show</span>
              <span>Receptionist salary</span>
              <span>Prefer non-English</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
