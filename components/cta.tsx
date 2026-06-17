"use client";

import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

export function CTA() {
  const whatsappNumber = "+234 706 500 1134";
  const emailAddress = "chicotechnicalworks@yahoo.com";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber.replace("+", "")}`, "_blank");
  };

  const openEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-125 h-125 bg-red-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -left-24 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="relative p-6 md:p-16 rounded-[2.5rem] bg-white/40 border border-white backdrop-blur-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-red-500/20 to-transparent"></div>

          <div className="space-y-10 text-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
                  Get Started
                </span>
              </div>

              <h2 className="text-2xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Ready to Transform Your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-400">
                  Industrial Projects?
                </span>
              </h2>

              <p className="text-[12px] md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Partner with CHICO Technical Works for world-class engineering,
                precision fabrication, and seamless installation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openWhatsApp}
                className="w-full sm:w-auto md:px-10 py-4 bg-slate-900 text-white rounded-2xl hover:bg-red-600 transition-all duration-300 font-bold flex items-center justify-center gap-2 group shadow-xl shadow-slate-200 cursor-pointer hover:scale-105 hover:ease-in-out max-sm:text-[12px]"
              >
                Contact via WhatsApp
                <MessageCircle className="group-hover:scale-110 transition-transform w-4 md:w-8 h-4 md:h-8" />
              </button>

              <button
                onClick={openEmail}
                className="w-full sm:w-auto md:px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all duration-200 font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:scale-105 hover:ease-in-out max-sm:text-[12px]"
              >
                Get a Quote
                <Mail
                 className="group-hover:scale-110 transition-transform w-4 md:w-8 h-4 md:h-8" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8 justify-center items-center md:pt-10 border-t border-slate-200/60">
              <div
                onClick={openEmail}
                className="flex items-center md:gap-3 text-slate-500 hover:text-red-600 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <Mail className="group-hover:scale-110 transition-transform w-4 md:w-8 h-4 md:h-8" />
                </div>
                <span className="text-[12px] md:text-sm font-bold">{emailAddress}</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-slate-200"></div>

              <div
                onClick={openWhatsApp}
                className="flex items-center md:gap-3 text-slate-500 hover:text-green-600 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                  <Phone className="group-hover:scale-110 transition-transform w-4 md:w-8 h-4 md:h-8" />
                </div>
                <span className="text-[12px] md:text-sm font-bold">{whatsappNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
