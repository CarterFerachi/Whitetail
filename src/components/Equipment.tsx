"use client";

import { motion } from "framer-motion";

const equipment = [
  {
    name: "Excavators",
    specs: ["Cat 336 & Cat 320", "Up to 80,000 lbs", "GPS-guided grading", "Hydraulic thumb attachments"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    description: "Heavy-duty excavators for land clearing, demolition, and precision grading work.",
  },
  {
    name: "Forestry Mulchers",
    specs: ["Fecon FTX148 Track Mulcher", "300+ HP powerhead", "Handles 20\" diameter trees", "GPS-guided clearing"],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&q=80",
    description: "Industry-leading mulching equipment for fast, clean vegetation management.",
  },
  {
    name: "Bulldozers",
    specs: ["Cat D6 & D8 Series", "6-way blade control", "ROPS certified cabs", "GPS machine control"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    description: "Powerful dozers for mass grading, site pushing, and heavy debris clearing.",
  },
  {
    name: "Skid Steers",
    specs: ["Multiple attachments", "Forestry cutter heads", "Grapple buckets", "Tight-access capable"],
    image: "https://images.unsplash.com/photo-1590072024406-e6c1c2c68f44?w=700&q=80",
    description: "Versatile compact equipment for precision work in tight or sensitive areas.",
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-[#111] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #C4962A 0, #C4962A 1px, transparent 0, transparent 50%)",
          backgroundSize: "80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            Our Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The Right Equipment{" "}
            <span className="gradient-text">For Every Job</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We invest in the latest, best-maintained equipment so your project runs efficiently
            from day one to completion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-gray-800 hover:border-yellow-700/40 transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {item.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 bg-yellow-500 rounded-full flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-b-[64px] border-l-transparent border-b-yellow-600/20" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-yellow-900/20 via-yellow-800/10 to-yellow-900/20 border border-yellow-800/30 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "20+", label: "Pieces of Equipment" },
            { value: "2024", label: "Newest Fleet Addition" },
            { value: "100%", label: "Preventive Maintenance" },
            { value: "GPS", label: "Precision Technology" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-500 text-xs tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
