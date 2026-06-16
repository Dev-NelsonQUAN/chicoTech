'use client'

import Image from 'next/image'
import { ArrowUpRight, FileText } from 'lucide-react'

const projects = [
  { 
    title: "Industrial Steel Framework", 
    category: "Fabrication", 
    img: "/engineer1.avif" 
  },
  { 
    title: "Automated Conveyor Line", 
    category: "Conveyor Systems", 
    img: "/conveyor2.jpg" 
  },
  { 
    title: "Commercial Elevator Setup", 
    category: "Elevator Systems", 
    img: "/elevatorSetup.jpg" 
  },
  { 
    title: "Pneumatic Blow Line System", 
    category: "Pneumatics", 
    img: "/engineer4.avif" 
  },
]

export function Portfolio() {
  const whatsappNumber = "2347065001134"

  const requestPortfolio = (projectTitle?: string) => {
    console.log("Button Clicked for:", projectTitle || "General");

    let message = "Hi CHICO Technical! I'm interested in your engineering services. Could you please share your full project catalog or more photos of your previous work?"
    
    if (projectTitle) {
      message = `Hi CHICO Technical! I was looking at your website and I'm interested in seeing more details and technical specifications for the "${projectTitle}" project.`
    }

    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(url, '_blank')
  }

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAFC] px-8 lg:px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Proof of Work</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Engineering <br />
              <span className="text-red-600">Excellence.</span>
            </h2>
            <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
              From heavy-duty fabrication to complex mechanical installations, we deliver results that power industries.
            </p>
          </div>

          <button 
            onClick={() => requestPortfolio()}
            className="flex items-center gap-1 lg:gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-[10px] lg:text-sm uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl shadow-slate-200/50 group cursor-pointer"
          >
            <FileText size={18} className="text-red-600 group-hover:text-white transition-colors" />
            Request Full Portfolio
            <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative h-60 md:h-90 lg:h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl shadow-slate-200/50"
            >
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
              />
              
              <div className="absolute bottom-6 left-6 right-6 p-1.5 md:p-4 bg-white/90 backdrop-blur-md rounded-[12px] md:rounded-2xl border border-white/50 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest md:mb-1">{project.category}</p>
                <p className="text-[10px] md:text-sm font-bold text-slate-900 truncate">{project.title}</p>
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                  {project.category}
                </span>
                <h4 className="text-white font-bold text-xl leading-tight mb-4">
                  {project.title}
                </h4>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    requestPortfolio(project.title);
                  }}
                  className="w-full py-3 bg-white text-slate-900 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all cursor-pointer shadow-lg relative"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-4 lg:p-8 rounded-2xl lg:rounded-4xl bg-white border border-slate-100 shadow-sm ">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-4 md:w-8 lg:w-12 h-4 md:h-8 lg:h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
              <FileText className='w-4 md:w-7 lg:w-12 h-4 md:h-7 lg:h-12' />
            </div>
            <div>
              <p className="font-bold text-slate-900 max-sm:text-[12px]">Need a technical breakdown?</p>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium">Request our PDF catalog for full specifications.</p>
            </div>
          </div>
          <button 
            onClick={() => requestPortfolio()}
            className="text-red-600 font-bold text-[9px] md:text-[12px] lg:text-sm hover:underline cursor-pointer"
          >
            Download Catalog (Request via WhatsApp)
          </button>
        </div>
      </div>
    </section>
  )
}
 