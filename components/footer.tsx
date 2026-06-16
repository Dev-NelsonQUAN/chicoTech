"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open("https://wa.me/234706500113", "_blank");
  };

  return (
    <footer className="relative bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Chico Tech Logo"
                className="h-13 md:h-20 w-12 md:w-20"
              />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Providing high-precision steel fabrication and industrial
              engineering solutions across Africa and beyond since 2015.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-600 transition-all shadow-sm group"
                >
                  <Icon
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400 mb-8">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li>
                <Link
                  href="#services"
                  className="hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  Fabrication & Design{" "}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-red-600 transition-colors"
                >
                  Conveyor Systems
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-red-600 transition-colors"
                >
                  Elevator Installation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-red-600 transition-colors"
                >
                  Blow Lines & Pneumatics
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-red-600 transition-colors"
                >
                  Import & Export Logistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400 mb-8">
              Connect
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-red-600 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900 mb-1">
                    Regional Office
                  </p>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    39A, Emordi Street, Olodi-Apapa,
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-red-600 shrink-0">
                  <Globe size={18} />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900 mb-1">
                    Direct Contact
                  </p>
                  <button
                    onClick={openWhatsApp}
                    className="text-slate-500 font-medium hover:text-red-600 transition-colors"
                  >
                    +234 706 500 1134
                  </button>
                  <p className="text-slate-400 font-medium mt-1">
                    chicotechnicalworks@yahoo.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            &copy; {currentYear} CHICO TECHNICAL WORKS LIMITED. ENGINEERED FOR
            PRECISION.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
