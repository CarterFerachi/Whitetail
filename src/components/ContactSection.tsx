"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    acreage: "",
    message: "",
    urgent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s Get Your{" "}
            <span className="gradient-text">Project Started</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours with a
            free project consultation and estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567", sub: "Mon–Sat 7am–6pm" },
              { icon: Mail, label: "Email", value: "info@whitetailmgmt.com", href: "mailto:info@whitetailmgmt.com", sub: "We respond within 24 hours" },
              { icon: MapPin, label: "Location", value: "Regional Service Area", href: "#service-area", sub: "Up to 150-mile radius" },
              { icon: Clock, label: "Hours", value: "Mon–Sat: 7am–6pm", href: null, sub: "Emergency services available" },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-5 bg-[#111] border border-gray-800 rounded-xl hover:border-yellow-700/40 transition-colors group">
                  <div className="w-10 h-10 bg-yellow-600/10 border border-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600/20 transition-colors">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                    <div className="text-white font-semibold">{item.value}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>{content}</a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="p-5 bg-red-950/30 border border-red-900/40 rounded-xl flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-red-400 font-bold text-sm mb-1">Emergency Services</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Storm damage, downed trees, or urgent site situations? Call us 24/7 for emergency land services.
                </p>
                <a href="tel:+15551234567" className="text-red-400 text-xs font-bold mt-2 block hover:text-red-300">
                  Emergency Line: (555) 123-4567
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111] border border-yellow-700/40 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-2">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-black stroke-2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white">Request Received!</h3>
                <p className="text-gray-400 max-w-sm">
                  Thank you for reaching out. A Whitetail team member will contact you within 24 hours to discuss your project.
                </p>
                <p className="text-yellow-600 font-semibold text-sm">For immediate assistance, call (555) 123-4567</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#111] border border-gray-800 rounded-2xl p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-yellow-600 text-white px-4 py-3 rounded-lg outline-none transition-colors text-sm" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Phone Number *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-yellow-600 text-white px-4 py-3 rounded-lg outline-none transition-colors text-sm" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-yellow-600 text-white px-4 py-3 rounded-lg outline-none transition-colors text-sm" placeholder="john@email.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Service Needed</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-yellow-600 text-white px-4 py-3 rounded-lg outline-none transition-colors text-sm">
                      <option value="">Select a service</option>
                      <option>Land Clearing</option>
                      <option>Forestry Mulching</option>
                      <option>Grading</option>
                      <option>Site Preparation</option>
                      <option>Demolition</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Property Acreage</label>
                    <select value={formData.acreage} onChange={(e) => setFormData({ ...formData, acreage: e.target.value })} className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-yellow-600 text-white px-4 py-3 rounded-lg outline-none transition-colors text-sm">
                      <option value="">Select acreage</option>
                      <option>Less than 1 acre</option>
                      <option>1–5 acres</option>
                      <option>5–20 acres</option>
                      <option>20–100 acres</option>
                      <option>100+ acres</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Project Description</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-yellow-600 text-white px-4 py-3 rounded-lg outline-none transition-colors text-sm resize-none" placeholder="Tell us about your project, location, timeline, and any specific requirements..." />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="urgent" checked={formData.urgent} onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })} className="w-4 h-4 accent-yellow-600" />
                  <label htmlFor="urgent" className="text-gray-400 text-sm">This is an urgent or time-sensitive project</label>
                </div>
                <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black text-base py-4 rounded-lg transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-3 shadow-xl shadow-yellow-600/20">
                  <Send className="w-5 h-5" />
                  Send My Free Estimate Request
                </button>
                <p className="text-gray-600 text-xs text-center">By submitting, you agree to be contacted about your project. No spam — ever.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
