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
  const whatsappNumber = "2349022072067"

  const requestPortfolio = (projectTitle?: string) => {
    // This log helps you see if the function is even being called in the console
    console.log("Button Clicked for:", projectTitle || "General");

    let message = "Hi CHICO Technical! I'm interested in your engineering services. Could you please share your full project catalog or more photos of your previous work?"
    
    if (projectTitle) {
      message = `Hi CHICO Technical! I was looking at your website and I'm interested in seeing more details and technical specifications for the "${projectTitle}" project.`
    }

    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Attempting to open the link
    window.open(url, '_blank')
  }

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAFC] px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Proof of Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Engineering <br />
              <span className="text-red-600">Excellence.</span>
            </h2>
            <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
              From heavy-duty fabrication to complex mechanical installations, we deliver results that power industries.
            </p>
          </div>

          <button 
            onClick={() => requestPortfolio()}
            className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl shadow-slate-200/50 group cursor-pointer"
          >
            <FileText size={18} className="text-red-600 group-hover:text-white transition-colors" />
            Request Full Portfolio
            <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl shadow-slate-200/50"
            >
              {/* 1. Base Image */}
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
              />
              
              {/* 2. Static Label (Hidden on Hover) - Added z-0 so it stays behind the overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{project.category}</p>
                <p className="text-sm font-bold text-slate-900 truncate">{project.title}</p>
              </div>

              {/* 3. Milk Glass Overlay (Visible on Hover) - Added z-20 to be on top of everything */}
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
                    e.stopPropagation(); // Prevents the click from bubbling up
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

        {/* Technical breakdown bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-4xl bg-white border border-slate-100 shadow-sm ">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
              <FileText size={24} />
            </div>
            <div>
              <p className="font-bold text-slate-900">Need a technical breakdown?</p>
              <p className="text-xs text-slate-500 font-medium">Request our PDF catalog for full specifications.</p>
            </div>
          </div>
          <button 
            onClick={() => requestPortfolio()}
            className="text-red-600 font-bold text-sm hover:underline cursor-pointer"
          >
            Download Catalog (Request via WhatsApp)
          </button>
        </div>
      </div>
    </section>
  )
}

// 'use client'

// import Image from 'next/image'
// import { ArrowUpRight, FileText } from 'lucide-react'

// const projects = [
//   { 
//     title: "Industrial Steel Framework", 
//     category: "Fabrication", 
//     img: "/engineer1.avif" 
//   },
//   { 
//     title: "Automated Conveyor Line", 
//     category: "Conveyor Systems", 
//     img: "/conveyor2.jpg" 
//   },
//   { 
//     title: "Commercial Elevator Setup", 
//     category: "Elevator Systems", 
//     img: "/elevatorSetup.jpg" 
//   },
//   { 
//     title: "Pneumatic Blow Line System", 
//     category: "Pneumatics", 
//     img: "/engineer4.avif" 
//   },
// ]

// export function Portfolio() {
//   const whatsappNumber = "2349022072067"

//   const requestPortfolio = (projectTitle?: string) => {
//     let message = "Hi CHICO Technical! I'm interested in your engineering services. Could you please share your full project catalog or more photos of your previous work?"
    
//     if (projectTitle) {
//       message = `Hi CHICO Technical! I was looking at your website and I'm interested in seeing more details and technical specifications for the "${projectTitle}" project.`
//     }

//     const encodedMessage = encodeURIComponent(message)
//     window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
//   }

//   return (
//     <section id="portfolio" className="py-24 bg-[#F8FAFC] px-6">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//           <div className="space-y-4">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
//               <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Proof of Work</span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
//               Engineering <br />
//               <span className="text-red-600">Excellence.</span>
//             </h2>
//             <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
//               From heavy-duty fabrication to complex mechanical installations, we deliver results that power industries.
//             </p>
//           </div>

//           <button 
//             onClick={() => requestPortfolio()}
//             className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl shadow-slate-200/50 group cursor-pointer"
//           >
//             <FileText size={18} className="text-red-600 group-hover:text-white transition-colors" />
//             Request Full Portfolio
//             <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {projects.map((project, i) => (
//             <div 
//               key={i} 
//               className="group relative h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl shadow-slate-200/50"
//             >
//               <Image 
//                 src={project.img} 
//                 alt={project.title} 
//                 fill 
//                 className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
//               />
              
//               <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                 <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
//                   {project.category}
//                 </span>
//                 <h4 className="text-white font-bold text-xl leading-tight mb-4">
//                   {project.title}
//                 </h4>
                
//                 <button 
//                   onClick={() => requestPortfolio(project.title)}
//                   className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
//                 >
//                   See Details
//                 </button>
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 group-hover:opacity-0 transition-opacity duration-300">
//                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{project.category}</p>
//                 <p className="text-sm font-bold text-slate-900 truncate">{project.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-4xl bg-white border border-slate-100 shadow-sm ">
//           <div className="flex items-center gap-4 mb-4 md:mb-0">
//             <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
//               <FileText size={24} />
//             </div>
//             <div>
//               <p className="font-bold text-slate-900">Need a technical breakdown?</p>
//               <p className="text-xs text-slate-500 font-medium">Request our PDF catalog for full specifications.</p>
//             </div>
//           </div>
//           <button 
//             onClick={() => requestPortfolio()}
//             className="text-red-600 font-bold text-sm hover:underline cursor-pointer"
//           >
//             Download Catalog (Request via WhatsApp)
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }


// // 'use client'

// // import Image from 'next/image'
// // import { ArrowUpRight, FileText } from 'lucide-react'

// // const projects = [
// //   { 
// //     title: "Industrial Steel Framework", 
// //     category: "Fabrication", 
// //     img: "/engineer1.avif" 
// //   },
// //   { 
// //     title: "Automated Conveyor Line", 
// //     category: "Conveyor Systems", 
// //     img: "/conveyor2.jpg" 
// //   },
// //   { 
// //     title: "Commercial Elevator Setup", 
// //     category: "Elevator Systems", 
// //     img: "/elevatorSetup.jpg" 
// //   },
// //   { 
// //     title: "Pneumatic Blow Line System", 
// //     category: "Pneumatics", 
// //     img: "/engineer4.avif" 
// //   },
// // ]

// // export function Portfolio() {
// //   const whatsappNumber = "2349022072067"

// //   const requestPortfolio = () => {
// //     const message = encodeURIComponent(
// //       "Hi CHICO Technical! I'm interested in your engineering services. Could you please share your full project catalog or more photos of your previous work?"
// //     )
// //     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
// //   }

// //   return (
// //     <section id="portfolio" className="py-24 bg-[#F8FAFC] px-6">
// //       <div className="max-w-7xl mx-auto">
        
// //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
// //           <div className="space-y-4">
// //             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
// //               <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Proof of Work</span>
// //             </div>
// //             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
// //               Engineering <br />
// //               <span className="text-red-600">Excellence.</span>
// //             </h2>
// //             <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
// //               From heavy-duty fabrication to complex mechanical installations, we deliver results that power industries.
// //             </p>
// //           </div>

// //           <button 
// //             onClick={requestPortfolio}
// //             className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl shadow-slate-200/50 group cursor-pointer"
// //           >
// //             <FileText size={18} className="text-red-600 group-hover:text-white transition-colors" />
// //             Request Full Portfolio
// //             <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
// //           </button>
// //         </div>

// //         {/* Project Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {projects.map((project, i) => (
// //             <div 
// //               key={i} 
// //               className="group relative h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl shadow-slate-200/50"
// //             >
// //               <Image 
// //                 src={project.img} 
// //                 alt={project.title} 
// //                 fill 
// //                 className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
// //               />
              
// //               <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
// //                 <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
// //                   {project.category}
// //                 </span>
// //                 <h4 className="text-white font-bold text-xl leading-tight mb-4">
// //                   {project.title}
// //                 </h4>
// //                 <button 
// //                   onClick={requestPortfolio}
// //                   className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
// //                 >
// //                   See Details
// //                 </button>
// //               </div>

// //               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 group-hover:opacity-0 transition-opacity duration-300">
// //                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{project.category}</p>
// //                 <p className="text-sm font-bold text-slate-900 truncate">{project.title}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-4xl bg-white border border-slate-100 shadow-sm ">
// //           <div className="flex items-center gap-4 mb-4 md:mb-0">
// //             <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
// //               <FileText size={24} />
// //             </div>
// //             <div>
// //               <p className="font-bold text-slate-900">Need a technical breakdown?</p>
// //               <p className="text-xs text-slate-500 font-medium">Request our PDF catalog for full specifications.</p>
// //             </div>
// //           </div>
// //           <button 
// //             onClick={requestPortfolio}
// //             className="text-red-600 font-bold text-sm hover:underline cursor-pointer"
// //           >
// //             Download Catalog (Request via WhatsApp)
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // 'use client'

// // // import Image from 'next/image'
// // // import { ArrowUpRight, FileText } from 'lucide-react'

// // // const projects = [
// // //   { 
// // //     title: "Industrial Steel Framework", 
// // //     category: "Fabrication", 
// // //     // Image: Black welder/fabricator in a workshop
// // //     img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" 
// // //   },
// // //   { 
// // //     title: "Automated Conveyor Line", 
// // //     category: "Conveyor Systems", 
// // //     // Image: Black technician inspecting industrial machinery
// // //     img: "https://images.unsplash.com/photo-1621905252507-b35242f8969d?q=80&w=800&auto=format&fit=crop" 
// // //   },
// // //   { 
// // //     title: "Commercial Elevator Setup", 
// // //     category: "Elevator Systems", 
// // //     // Image: Black female engineer in a safety vest on a technical site
// // //     img: "https://images.unsplash.com/photo-1573164067507-406183a7b1ad?q=80&w=800&auto=format&fit=crop" 
// // //   },
// // //   { 
// // //     title: "Pneumatic Blow Line System", 
// // //     category: "Pneumatics", 
// // //     // Image: Black industrial professional working with blueprints/technical equipment
// // //     img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
// // //   },
// // // ]

// // // export function Portfolio() {
// // //   const whatsappNumber = "2349022072067"

// // //   const requestPortfolio = () => {
// // //     const message = encodeURIComponent(
// // //       "Hi CHICO Technical! I'm interested in your engineering services. Could you please share your full project catalog or more photos of your previous work?"
// // //     )
// // //     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
// // //   }

// // //   return (
// // //     <section id="portfolio" className="py-24 bg-[#F8FAFC] px-6">
// // //       <div className="max-w-7xl mx-auto">
        
// // //         {/* Header section remains with high-end SaaS styling */}
// // //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
// // //           <div className="space-y-4">
// // //             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
// // //               <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Proof of Work</span>
// // //             </div>
// // //             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
// // //               Engineering <br />
// // //               <span className="text-red-600">Excellence.</span>
// // //             </h2>
// // //             <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
// // //               From heavy-duty fabrication to complex mechanical installations, we deliver results that power industries.
// // //             </p>
// // //           </div>

// // //           <button 
// // //             onClick={requestPortfolio}
// // //             className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl shadow-slate-200/50 group cursor-pointer"
// // //           >
// // //             <FileText size={18} className="text-red-600 group-hover:text-white transition-colors" />
// // //             Request Full Portfolio
// // //             <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
// // //           </button>
// // //         </div>

// // //         {/* Project Grid with updated images */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {projects.map((project, i) => (
// // //             <div 
// // //               key={i} 
// // //               className="group relative h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl shadow-slate-200/50"
// // //             >
// // //               {/* Grayscale to Color Effect - Showcases the technical skill */}
// // //               <Image 
// // //                 src={project.img} 
// // //                 alt={project.title} 
// // //                 fill 
// // //                 className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
// // //               />
              
// // //               {/* Milk Glass Overlay on Hover */}
// // //               <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
// // //                 <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
// // //                   {project.category}
// // //                 </span>
// // //                 <h4 className="text-white font-bold text-xl leading-tight mb-4">
// // //                   {project.title}
// // //                 </h4>
// // //                 <button 
// // //                   onClick={requestPortfolio}
// // //                   className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
// // //                 >
// // //                   See Details
// // //                 </button>
// // //               </div>

// // //               {/* Glassmorphic Static Label */}
// // //               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 group-hover:opacity-0 transition-opacity duration-300">
// // //                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{project.category}</p>
// // //                 <p className="text-sm font-bold text-slate-900 truncate">{project.title}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Technical Breakdown Section */}
// // //         <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-4xl bg-white border border-slate-100 shadow-sm ">
// // //           <div className="flex items-center gap-4 mb-4 md:mb-0">
// // //             <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
// // //               <FileText size={24} />
// // //             </div>
// // //             <div>
// // //               <p className="font-bold text-slate-900">Need a technical breakdown?</p>
// // //               <p className="text-xs text-slate-500 font-medium">Request our PDF catalog for full specifications.</p>
// // //             </div>
// // //           </div>
// // //           <button 
// // //             onClick={requestPortfolio}
// // //             className="text-red-600 font-bold text-sm hover:underline cursor-pointer"
// // //           >
// // //             Download Catalog (Request via WhatsApp)
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // 'use client'

// // // // import Image from 'next/image'
// // // // import { ArrowUpRight, FileText } from 'lucide-react'

// // // // const projects = [
// // // //   { 
// // // //     title: "Industrial Steel Framework", 
// // // //     category: "Fabrication", 
// // // //     img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80" 
// // // //   },
// // // //   { 
// // // //     title: "Automated Conveyor Line", 
// // // //     category: "Conveyor Systems", 
// // // //     img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
// // // //   },
// // // //   { 
// // // //     title: "Commercial Elevator Setup", 
// // // //     category: "Elevator Systems", 
// // // //     img: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80" 
// // // //   },
// // // //   { 
// // // //     title: "Pneumatic Blow Line System", 
// // // //     category: "Pneumatics", 
// // // //     img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80" 
// // // //   },
// // // // ]

// // // // export function Portfolio() {
// // // //   const whatsappNumber = "2349022072067"

// // // //   const requestPortfolio = () => {
// // // //     const message = encodeURIComponent(
// // // //       "Hi CHICO Technical! I'm interested in your engineering services. Could you please share your full project catalog or more photos of your previous work?"
// // // //     )
// // // //     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
// // // //   }

// // // //   return (
// // // //     <section id="portfolio" className="py-24 bg-[#F8FAFC] px-6">
// // // //       <div className="max-w-7xl mx-auto">
        
// // // //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
// // // //           <div className="space-y-4">
// // // //             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
// // // //               <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Proof of Work</span>
// // // //             </div>
// // // //             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
// // // //               Engineering <br />
// // // //               <span className="text-red-600">Excellence.</span>
// // // //             </h2>
// // // //             <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
// // // //               From heavy-duty fabrication to complex mechanical installations, we deliver results that power industries.
// // // //             </p>
// // // //           </div>

// // // //           <button 
// // // //             onClick={requestPortfolio}
// // // //             className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl shadow-slate-200/50 group cursor-pointer"
// // // //           >
// // // //             <FileText size={18} className="text-red-600 group-hover:text-white transition-colors" />
// // // //             Request Full Portfolio
// // // //             <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
// // // //           </button>
// // // //         </div>

// // // //         {/* Project Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //           {projects.map((project, i) => (
// // // //             <div 
// // // //               key={i} 
// // // //               className="group relative h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl shadow-slate-200/50"
// // // //             >
// // // //               {/* Image with Grayscale to Color Effect */}
// // // //               <Image 
// // // //                 src={project.img} 
// // // //                 alt={project.title} 
// // // //                 fill 
// // // //                 className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
// // // //               />
              
// // // //               {/* Milk Glass Overlay on Hover */}
// // // //               <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
// // // //                 <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
// // // //                   {project.category}
// // // //                 </span>
// // // //                 <h4 className="text-white font-bold text-xl leading-tight mb-4">
// // // //                   {project.title}
// // // //                 </h4>
// // // //                 <button 
// // // //                   onClick={requestPortfolio}
// // // //                   className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
// // // //                 >
// // // //                   See Details
// // // //                 </button>
// // // //               </div>

// // // //               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 group-hover:opacity-0 transition-opacity duration-300">
// // // //                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{project.category}</p>
// // // //                 <p className="text-sm font-bold text-slate-900 truncate">{project.title}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-4xl bg-white border border-slate-100 shadow-sm ">
// // // //           <div className="flex items-center gap-4 mb-4 md:mb-0">
// // // //             <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
// // // //               <FileText size={24} />
// // // //             </div>
// // // //             <div>
// // // //               <p className="font-bold text-slate-900">Need a technical breakdown?</p>
// // // //               <p className="text-xs text-slate-500 font-medium">Request our PDF catalog for full specifications.</p>
// // // //             </div>
// // // //           </div>
// // // //           <button 
// // // //             onClick={requestPortfolio}
// // // //             className="text-red-600 font-bold text-sm hover:underline cursor-pointer"
// // // //           >
// // // //             Download Catalog (Request via WhatsApp)
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }