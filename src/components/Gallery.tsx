"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    category: "Land Clearing",
    before: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    after: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    title: "40-Acre Residential Development",
    description: "Cleared 40 acres of dense hardwood forest for a new housing subdivision.",
  },
  {
    category: "Forestry Mulching",
    before: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Commercial Lot Mulching",
    description: "Converted overgrown commercial lot into a clean, mulched surface in 2 days.",
  },
  {
    category: "Grading",
    before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    after: "https://images.unsplash.com/photo-1590072024406-e6c1c2c68f44?w=800&q=80",
    title: "Site Grade for New Build",
    description: "Precision grading for a 5,000 sq ft residential foundation.",
  },
  {
    category: "Demolition",
    before: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&q=80",
    after: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
    title: "Old Barn & Outbuilding Demo",
    description: "Complete demolition and removal of dilapidated structures and concrete.",
  },
  {
    category: "Site Prep",
    before: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=800&q=80",
    after: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Commercial Pad Preparation",
    description: "Full site prep for a 20,000 sq ft commercial building pad.",
  },
  {
    category: "Land Clearing",
    before: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    after: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    title: "Ranch Access Road",
    description: "Cleared and established a 1.2-mile access road through wooded property.",
  },
];

const categories = ["All", "Land Clearing", "Forestry Mulching", "Grading", "Demolition", "Site Prep"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sliderValues, setSliderValues] = useState<Record<number, number>>({});

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
  const getSlider = (i: number) => sliderValues[i] ?? 50;

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-yellow-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Results That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Drag the slider to reveal the transformation. Every project is a testament to our
            quality and commitment.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-yellow-600 text-black"
                  : "border border-gray-700 text-gray-400 hover:border-yellow-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden bg-[#111] border border-gray-800"
              >
                <div className="relative h-56 overflow-hidden cursor-col-resize">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.after}')` }}
                  />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${project.before}')`,
                      clipPath: `inset(0 ${100 - getSlider(i)}% 0 0)`,
                    }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg"
                    style={{ left: `${getSlider(i)}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <svg viewBox="0 0 16 16" className="w-4 h-4">
                        <path d="M5 8l-3 3V5l3 3zm6 0l3 3V5l-3 3z" fill="#333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider">
                    BEFORE
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-600 text-black text-[10px] font-bold px-2 py-1 rounded tracking-wider">
                    AFTER
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={getSlider(i)}
                    onChange={(e) =>
                      setSliderValues((prev) => ({ ...prev, [i]: Number(e.target.value) }))
                    }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
                    style={{ zIndex: 10 }}
                  />
                </div>
                <div className="p-5">
                  <span className="text-yellow-600 text-xs font-semibold tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold mt-1 mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
