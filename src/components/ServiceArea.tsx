"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const serviceTypes = [
  "Residential Properties",
  "Commercial Developments",
  "Agricultural Land",
  "Government & Municipal",
  "Industrial Sites",
  "Ranch & Farm Properties",
];

const regions = [
  { name: "Central Region", cities: ["Main City", "Riverside", "Oak Grove", "Westfield", "Lakeview"] },
  { name: "North Region", cities: ["Northgate", "Highland Park", "Summit", "Cedar Falls", "Maplewood"] },
  { name: "South Region", cities: ["Southport", "Gulf Coast", "Pinewood", "Delta", "Bayou Vista"] },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-24 bg-[#111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-yellow-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
              Where We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Serving Residential &{" "}
              <span className="gradient-text">Commercial Clients</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Whitetail Management operates across the region, bringing professional land
              services to property owners, developers, and contractors within our service
              territory. Not sure if we cover your area? Give us a call.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {serviceTypes.map((type) => (
                <div key={type} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  {type}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-7 py-3.5 rounded transition-all duration-200 hover:scale-105"
              >
                Check Your Area
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 border border-gray-700 hover:border-yellow-700 text-white font-semibold px-7 py-3.5 rounded transition-all"
              >
                <MapPin className="w-4 h-4 text-yellow-500" />
                (555) 123-4567
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden h-64">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 30% 40%, #C4962A33 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, #C4962A22 0%, transparent 40%),
                    repeating-linear-gradient(0deg, transparent, transparent 40px, #ffffff08 40px, #ffffff08 41px),
                    repeating-linear-gradient(90deg, transparent, transparent 40px, #ffffff08 40px, #ffffff08 41px)
                  `,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <p className="text-gray-300 font-semibold text-lg">Regional Coverage</p>
                  <p className="text-gray-500 text-sm">Up to 150-mile service radius</p>
                </div>
              </div>
              {[
                { top: "30%", left: "40%" },
                { top: "50%", left: "65%" },
                { top: "70%", left: "35%" },
              ].map((pos, i) => (
                <div key={i} className="absolute" style={{ top: pos.top, left: pos.left }}>
                  <div className="relative w-4 h-4">
                    <div
                      className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-40"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                    <div className="absolute inset-1 bg-yellow-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <h3 className="text-white font-bold">{region.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <span key={city} className="bg-gray-800 text-gray-400 text-xs px-2.5 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
