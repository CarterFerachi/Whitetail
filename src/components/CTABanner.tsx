"use client";

import { motion } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Ready to Transform{" "}
            <span className="gradient-text">Your Property?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a homeowner, developer, or contractor — get a free on-site
            estimate and let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-black text-lg px-10 py-4 rounded transition-all duration-200 hover:scale-105 flex items-center gap-3 shadow-2xl shadow-yellow-600/30"
            >
              Request Free Estimate <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg px-10 py-4 rounded transition-all duration-200 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
