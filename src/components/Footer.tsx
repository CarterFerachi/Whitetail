"use client";

import { Phone, Mail, MapPin, Share2, Camera, Video } from "lucide-react";

const services = ["Land Clearing", "Forestry Mulching", "Grading", "Site Preparation", "Demolition"];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M12 2L8 7H4l2 5-4 5h5l3 5 3-5h5l-4-5 2-5h-4L12 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">WHITETAIL</div>
                <div className="text-yellow-600 text-[10px] tracking-[0.2em] uppercase">Management LLC</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
              Professional land clearing, forestry mulching, grading, site preparation, and demolition services. Transforming raw land into opportunity since 2009.
            </p>
            <div className="flex gap-3">
              {[Share2, Camera, Video].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-500 hover:text-yellow-500 hover:border-yellow-700 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-yellow-600 rounded-full" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-2.5 text-gray-500 hover:text-yellow-500 text-sm transition-colors">
                  <Phone className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@whitetailmgmt.com" className="flex items-center gap-2.5 text-gray-500 hover:text-yellow-500 text-sm transition-colors">
                  <Mail className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  info@whitetailmgmt.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                  Regional Service Area<br />Up to 150-mile radius
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-800/30 rounded-xl">
              <div className="text-yellow-500 text-xs font-bold mb-1">Free Estimates</div>
              <p className="text-gray-500 text-xs">On-site project consultations at no charge.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">© {new Date().getFullYear()} Whitetail Management LLC. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <a key={link} href="#" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-gray-700 text-xs">Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  );
}
