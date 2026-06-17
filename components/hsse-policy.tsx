'use client'

import Image from 'next/image'
import { ShieldCheck, CheckCircle2, HardHat, Leaf, AlertCircle } from 'lucide-react'

export function HSSE() {
  const policyPoints = [
    {
      title: "Highest Safety Standards",
      desc: "Upholding the highest standards of safety in all of our operations without compromise."
    },
    {
      title: "Employee & Environment Welfare",
      desc: "We ensure the total welfare of not only our employees but also the immediate environment."
    },
    {
      title: "Rigorous Protocols",
      desc: "Implemented safety protocols and procedures designed to mitigate risks and prevent accidents."
    },
    {
      title: "Risk Assessment & Training",
      desc: "Regular risk assessments and extensive training programs to identify and action potential hazards."
    },
    {
      title: "Environmentally Conscious",
      desc: "Deeply rooted sustainable practices, from waste reduction to energy conservation initiatives."
    }
  ]

  return (
    <section id="safety" className="py-24 bg-white px-8 lg:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Compliance</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
              HSSE <span className="text-red-600">Policy.</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
              Health, Safety, Security and Environment
            </p>
          </div>
          <div className="hidden lg:block p-4 bg-slate-50 rounded-2xl border border-slate-100">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1 text-right">Standard</p>
             <p className="text-xs font-bold text-slate-900">ISO 9001:2015 & OSHA Compliant</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            
            <div className="relative h-100 lg:h-150 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
              <Image 
                src="/chicoHeroP2.webp"
                alt="CHICO Technical Safety on Site"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-4xl border border-white shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 uppercase">Safe Work Site</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target: Zero Accidents</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
              "Our corporate culture is built on the foundation of safety. We prioritize sustainability while delivering top-notch technical services."
            </p>

            <div className="space-y-6">
              {policyPoints.map((point, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="shrink-0 w-6 h-6 bg-blue-800 rounded flex items-center justify-center text-white mt-1 shadow-lg shadow-blue-100 group-hover:bg-red-600 transition-colors">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-md font-black text-slate-900 uppercase tracking-tight mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-slate-900 text-white flex items-center gap-6 shadow-xl">
              <HardHat size={40} className="text-red-500 shrink-0" />
              <div>
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Environmental Impact</p>
                <p className="text-xs opacity-80 leading-relaxed font-medium">
                  From waste reduction initiatives to energy conservation, we are deeply committed to environmentally conscious engineering.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}