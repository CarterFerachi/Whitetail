"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thibodaux",
    title: "Real Estate Developer",
    company: "Thibodaux Properties LLC",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    rating: 5,
    text: "Whitetail Management cleared 85 acres for our latest subdivision in record time. Their crew was professional from day one — on-site when they said they'd be, communicated every step, and the finished site was exactly what we needed to break ground immediately. I won't use anyone else.",
  },
  {
    name: "Sarah Kleinsmith",
    title: "Property Owner",
    company: "Residential Client",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    rating: 5,
    text: "We had 12 acres of overgrown brush and old growth that needed clearing before we could start our home build. Whitetail came out, gave us a fair quote, and completed the job ahead of schedule. The forestry mulching option saved us thousands compared to traditional clearing.",
  },
  {
    name: "Derek Fontenot",
    title: "General Contractor",
    company: "Fontenot Construction",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "I've worked with Whitetail on six commercial projects now. Their precision grading work speaks for itself — we've had zero drainage issues on any build where they did the site prep. Reliable, safe, and priced fairly. They're on speed dial.",
  },
  {
    name: "Jim Arceneaux",
    title: "Ranch Owner",
    company: "Arceneaux Cattle Ranch",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    text: "Had Whitetail clear pasture and do pond work on our 300-acre ranch. The crew respected the land, minimized environmental impact, and left the place looking better than we expected. When you need real heavy equipment work done right, these are your guys.",
  },
  {
    name: "Angela Broussard",
    title: "Commercial Developer",
    company: "Broussard Development Group",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&q=80",
    rating: 5,
    text: "The demolition and site prep on our strip center project was handled flawlessly. Tight timeline, adjacent structures to protect, and utilities to navigate. Whitetail did it all with zero incidents and we stayed on schedule for our tenant move-in.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="text-[30vw] font-black text-white leading-none select-none">&ldquo;</div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Trusted By Property Owners{" "}
            <span className="gradient-text">& Professionals</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-yellow-600/40"
                  style={{ backgroundImage: `url('${testimonials[current].image}')` }}
                />
                <div className="text-left">
                  <div className="text-white font-bold">{testimonials[current].name}</div>
                  <div className="text-yellow-600 text-sm">{testimonials[current].title}</div>
                  <div className="text-gray-500 text-xs">{testimonials[current].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 rounded-full bg-[#111] border border-gray-700 hover:border-yellow-600 text-white flex items-center justify-center transition-all hover:bg-yellow-600/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 rounded-full bg-[#111] border border-gray-700 hover:border-yellow-600 text-white flex items-center justify-center transition-all hover:bg-yellow-600/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-yellow-600" : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-xl p-3 text-center transition-all ${
                i === current
                  ? "bg-yellow-900/30 border border-yellow-700/50"
                  : "bg-[#111] border border-gray-800 hover:border-gray-600"
              }`}
            >
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center mx-auto mb-2"
                style={{ backgroundImage: `url('${t.image}')` }}
              />
              <div className="text-white text-[10px] font-semibold truncate">{t.name.split(" ")[0]}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
