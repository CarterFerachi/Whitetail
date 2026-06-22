"use client";

import { motion } from "framer-motion";
import { Axe, Leaf, Layers, HardHat, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Axe,
    title: "Land Clearing",
    tagline: "Clearing the path to development",
    description:
      "Complete removal of trees, brush, vegetation, stumps, and obstacles to prepare your property for development. We handle projects of any scale — from residential lots to hundreds of acres.",
    benefits: ["Tree & stump removal", "Brush & debris clearing", "Vegetation management", "Site access creation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    color: "from-yellow-700/20 to-transparent",
  },
  {
    icon: Leaf,
    title: "Forestry Mulching",
    tagline: "Efficient & environmentally responsible",
    description:
      "Environmentally friendly vegetation management using high-powered mulchers that grind trees and brush into natural ground cover. Faster, cleaner, and better for the soil than traditional clearing.",
    benefits: ["No burn piles or debris hauling", "Natural erosion control", "Improves soil health", "Faster project completion"],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    color: "from-green-900/20 to-transparent",
  },
  {
    icon: Layers,
    title: "Grading",
    tagline: "Precision ground contouring",
    description:
      "Expert grading for proper drainage, foundation preparation, road construction, and development projects. Our GPS-guided equipment ensures precision to within fractions of an inch.",
    benefits: ["Foundation grading", "Drainage solutions", "Road bed preparation", "Slope & contour work"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    color: "from-orange-900/20 to-transparent",
  },
  {
    icon: HardHat,
    title: "Site Preparation",
    tagline: "Complete build-ready solutions",
    description:
      "Full-service site readiness for residential and commercial construction. From raw land to a prepared pad, we coordinate clearing, grading, drainage, and utility prep.",
    benefits: ["Residential & commercial", "Utility coordination", "Drainage installation", "Pad preparation"],
    image: "https://images.unsplash.com/photo-1590072024406-e6c1c2c68f44?w=600&q=80",
    color: "from-blue-900/20 to-transparent",
  },
  {
    icon: Wrench,
    title: "Demolition",
    tagline: "Safe, efficient structure removal",
    description:
      "Safe and efficient removal of structures, concrete slabs, foundations, outbuildings, debris, and unwanted improvements. Full debris removal and site cleanup included.",
    benefits: ["Residential & commercial demo", "Concrete removal", "Foundation demolition", "Complete debris cleanup"],
    image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=600&q=80",
    color: "from-red-900/20 to-transparent",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Full-Spectrum{" "}
            <span className="gradient-text">Land Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From raw acreage to build-ready sites — we handle every phase of land preparation
            with professional-grade equipment and experienced operators.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-700/50 transition-all duration-500 hover:-translate-y-1 ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/30 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                  <div className="absolute top-4 left-4 bg-yellow-600 rounded-lg p-2.5">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-yellow-600/70 text-xs font-semibold tracking-widest uppercase mb-1">
                    {service.tagline}
                  </p>
                  <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

                  <ul className="grid grid-cols-2 gap-1.5 mb-5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span className="w-1 h-1 bg-yellow-600 rounded-full flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-yellow-500 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
