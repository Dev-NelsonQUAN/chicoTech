"use client";

import {
  ArrowRight,
  MessageCircle,
  Mail,
  CheckCircle2,
  Cog,
} from "lucide-react";
import Image from "next/image";

export function Hero() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+2349022072067", "_blank");
  };

  const openEmail = () => {
    window.location.href = "mailto:info@chicotechnical.com";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8FAF] pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-10 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6 flex justify-center flex-col items-center lg:items-start">   
            <div className="inline-block">
              <span className="px-2 md:px-4 py-1 md:py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-[8px] md:text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
                ✨ Industrial Excellence
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 text-center lg:text-left">
              Steel Solutions for <br />
              <span className="text-red-600">Modern Industry.</span>
            </h1>
            <p className="text-xs md:text-lg text-slate-600 max-w-xl leading-relaxed flex flex-col items-center lg:items-start text-center lg:text-left">
              From fabrication to installation, we deliver world-class steel and
              industrial engineering services with precision and expertise.
              <span className="block mt-2 font-medium text-slate-400 text-sm italic">
                Fabrication • Erection • Conveyors • Elevators • Blow Lines
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl hover:bg-red-600 transition-all duration-300 font-bold flex items-center justify-center gap-2 group shadow-lg shadow-slate-200 cursor-pointer"
            >
              Start Your Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={openEmail}
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all duration-200 font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Mail size={20} />
              Email Us
            </button>
          </div>

          <div className="flex flex-wrap gap-10 pt-6 border-t border-slate-200/60 flex-col sm:flex-row justify-center lg:justify-start">
            <div>
              <div className="text-3xl font-black text-slate-900">500+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Projects Done
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">20+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Years Exp
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">99%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-390 lg:max-w-112.5 flex items-center justify-center rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] group overflow-hidden">
            <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/chicoHeroP2.webp"
                alt="CHICO Technical Works"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute inset-0 z-10 bg-linear-to-br from-white/20 to-transparent pointer-events-none"></div>
          </div>

          <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60"></div>

          <div className="absolute top-10 right-0 z-20 p-3 bg-white/80 backdrop-blur-md border border-white rounded-xl shadow-lg hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase text-slate-600 tracking-tighter">
              Certified Steel
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle size={28} />
      </button>
    </section>
  );
}