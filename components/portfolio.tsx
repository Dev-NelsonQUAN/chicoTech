"use client";

import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";

const projects = [
  {
    title: "Industrial Steel Framework",
    category: "Fabrication",
    img: "/engineer1.avif",
  },
  {
    title: "Automated Conveyor Line",
    category: "Conveyor Systems",
    img: "/conveyor2.jpg",
  },
  {
    title: "Commercial Elevator Setup",
    category: "Elevator Systems",
    img: "/elevatorSetup.jpg",
  },
  {
    title: "Pneumatic Blow Line System",
    category: "Pneumatics",
    img: "/engineer4.avif",
  },
];

export function Portfolio() {
  const whatsappNumber = "2347065001134";

  const requestPortfolio = (projectTitle?: string) => {
    let message =
      "Hi CHICO Technical! I'm interested in your engineering services. Could you please share your full project catalog?";
    if (projectTitle)
      message = `Hi CHICO Technical! I'm interested in the "${projectTitle}" project specifications.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAFC] px-8 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
                Proof of Work
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Engineering <br />{" "}
              <span className="text-red-600">Excellence.</span>
            </h2>

            <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
              From heavy-duty fabrication to complex mechanical installations,
              we deliver results that power industries.{" "}
            </p>
          </div>
          <button
            onClick={() => requestPortfolio()}
            className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-xs lg:text-sm uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all shadow-xl cursor-pointer"
          >
            <FileText size={18} className="text-red-600" /> Request Full
            Portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative h-80 lg:h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 z-10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {project.category}
                </p>
                <p className="text-sm font-bold text-slate-900 truncate">
                  {project.title}
                </p>
                <button
                  onClick={() => requestPortfolio(project.title)}
                  className="mt-2 text-[10px] font-bold text-red-600 flex items-center gap-1 lg:hidden"
                >
                  View Details <ArrowUpRight size={12} />
                </button>
              </div>

              <div className="absolute inset-0 bg-slate-900/60 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 z-20">
                <h4 className="text-white font-bold text-xl mb-4">
                  {project.title}
                </h4>
                <button
                  onClick={() => requestPortfolio(project.title)}
                  className="w-full py-3 bg-white text-slate-900 rounded-xl text-xs font-black uppercase hover:bg-red-600 hover:text-white transition-all cursor-pointer"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
