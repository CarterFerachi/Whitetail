"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Award, Zap, DollarSign, AlertTriangle } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Experienced Operators",
    description:
      "Our team brings decades of hands-on experience operating heavy equipment across residential, commercial, and large-scale land projects.",
  },
  {
    icon: Cpu,
    title: "Modern Equipment Fleet",
    description:
      "We operate a fully-maintained fleet of modern excavators, forestry mulchers, bulldozers, and grading equipment — the right tool for every job.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured for your peace of mind. We carry comprehensive liability coverage on every project we touch.",
  },
  {
    icon: Zap,
    title: "Fast Project Completion",
    description:
      "Time is money in land development. Our efficient crews and powerful equipment help you hit milestones faster than the competition.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Premium service doesn't have to mean premium prices. We provide detailed, transparent quotes with no hidden fees or surprises.",
  },
  {
    icon: AlertTriangle,
    title: "Safety-First Approach",
    description:
      "Every project begins with a safety assessment. We follow strict protocols to protect our crews, your property, and neighboring sites.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#111] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-yellow-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
              Why Whitetail
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              The Standard Others{" "}
              <span className="gradient-text">Measure Against</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              When you hire Whitetail Management, you&apos;re not just hiring equipment operators —
              you&apos;re partnering with a professional land services company that treats every project
              like their own property.
            </p>

            <div className="space-y-4">
              {[
                "Free on-site estimates and project consultations",
                "GPS-guided precision grading technology",
                "Same-week project start availability",
                "Before & after documentation for every project",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 12 12" className="w-3 h-3 fill-black">
                      <path d="M10 3L5 8.5 2 5.5" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-7 py-3.5 rounded transition-all duration-200 hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="tel:+15551234567"
                className="border border-gray-700 hover:border-yellow-700 text-white font-semibold px-7 py-3.5 rounded transition-all duration-200"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 hover:border-yellow-800/50 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-yellow-600/10 border border-yellow-600/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-yellow-600/20 transition-colors">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
