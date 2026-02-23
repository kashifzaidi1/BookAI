"use client";

import FadeIn from "./FadeIn";

const metrics = [
  { value: "384%", label: "Growth in booked appointments. BookAI turns missed calls into scheduled visits.", highlight: true },
  { value: "$3.9K", label: "Saved monthly vs. hiring a receptionist. BookAI costs a fraction with 24/7 coverage." },
  { value: "92,400", label: "Total appointments booked by BookAI customers across all industries last year." },
  { value: "<2 mo.", label: "Average time to see full ROI. Most businesses break even in just weeks." },
];

export default function ROI() {
  return (
    <section className="py-20 lg:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-sm text-[#ABABAB] mb-2">It&apos;s like adding 15 full-time employees</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
                The math is simple
              </h2>
            </div>
            <a href="#cta" className="btn-primary text-sm px-6 py-3 flex-shrink-0">
              Get Started →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#6B6B6B] max-w-2xl mb-10 leading-relaxed">
            BookAI pays for itself from day one. Here are the numbers our customers see after switching from manual scheduling and answering services.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.value} delay={0.15 + i * 0.08}>
              <div className="card p-6 h-full">
                <div className={`text-3xl lg:text-4xl font-extrabold mb-3 ${metric.highlight ? "text-[#2D7A4F]" : "text-[#1A1A1A]"}`}>
                  {metric.value}
                </div>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
