'use client'

import { CheckCircle2, MessageCircle, Mail, ArrowRight } from 'lucide-react'

const features = [
  'ISO Certified Quality Standards',
  'Advanced Manufacturing Equipment',
  'Expert Engineering Team',
  'On-Time Project Delivery',
  'Custom Solutions Design',
  'Comprehensive After-Sales Support',
  'Sustainable Practices',
  'International Safety Compliance',
]

export function Features() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/YOUR_NUMBER', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:info@chicotechnical.com'
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] overflow-hidden">
      {/* SaaS Background "Blobs" - Light Mode Edition */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-red-600"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Why Choose Chico
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Engineering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  Future of Steel.
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                With over 20 years of expertise, we don't just fabricate steel; we engineer solutions that power industries worldwide. Precision is our standard.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <CheckCircle2 className="text-red-600 group-hover:text-white transition-colors" size={14} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-red-600 transition-all shadow-lg shadow-slate-200"
              >
                <MessageCircle size={20} />
                Talk to an Expert
              </button>
              <button 
                onClick={handleEmail}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
              >
                <Mail size={20} />
                Send Email
              </button>
            </div>
          </div>

          {/* Right Side: The Glass Card Stack */}
          <div className="relative">
            {/* Decorative back element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-red-600/5 rounded-[2.5rem] -rotate-2"></div>
            
            {/* Main Glass Card */}
            <div className="relative p-10 rounded-[2.5rem] bg-white/60 border border-white/80 backdrop-blur-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)]">
              <div className="space-y-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                    <div className="text-5xl font-black text-slate-900">20+ <span className="text-red-600">Yrs</span></div>
                  </div>
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                    <ArrowRight size={32} className="-rotate-45" />
                  </div>
                </div>

                <div className="h-px bg-slate-100"></div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Projects</p>
                    <div className="text-3xl font-bold text-slate-900">500+</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Retention</p>
                    <div className="text-3xl font-bold text-slate-900">99%</div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl">
                  <p className="text-sm leading-relaxed opacity-90">
                    <span className="font-bold text-red-400">Compliance First:</span> Our facilities are fully equipped to handle ISO 9001 and OSHA-regulated industrial projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Floating "Toast" Card */}
            <div className="absolute -top-10 right-10 p-4 bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-xl hidden md:flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                <p className="text-xs font-bold text-slate-900">Safety Certified 2024</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}




// 'use client'

// import { CheckCircle2 } from 'lucide-react'

// const features = [
//   'ISO Certified Quality Standards',
//   'Advanced Manufacturing Equipment',
//   'Expert Engineering Team',
//   'On-Time Project Delivery',
//   'Custom Solutions Design',
//   'Comprehensive After-Sales Support',
//   'Sustainable Practices',
//   'International Safety Compliance',
// ]

// export function Features() {
//   return (
//     <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50">
//       {/* Glassmorphic background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-block">
//                 <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
//                   Why Choose Us
//                 </span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
//                 Industry-Leading Excellence
//               </h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 With over 20 years of experience, we've perfected the art of steel fabrication and industrial engineering. Our commitment to quality and innovation drives every project.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
//                   <span className="text-sm text-foreground font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Glassmorphic Card */}
//           <div className="space-y-6">
//             <div className="p-8 rounded-2xl glass-effect bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent border border-white/20 backdrop-blur-md">
//               <div className="space-y-6">
//                 <div>
//                   <div className="text-4xl font-bold text-accent mb-2">20+</div>
//                   <div className="text-muted-foreground">Years of Industry Experience</div>
//                 </div>
//                 <div className="h-px bg-border/50"></div>
//                 <div>
//                   <div className="text-4xl font-bold text-accent mb-2">500+</div>
//                   <div className="text-muted-foreground">Successful Projects Delivered</div>
//                 </div>
//                 <div className="h-px bg-border/50"></div>
//                 <div>
//                   <div className="text-4xl font-bold text-accent mb-2">99%</div>
//                   <div className="text-muted-foreground">Client Satisfaction Rate</div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
//               <p className="text-sm text-foreground">
//                 <span className="font-semibold text-accent">Certified & Compliant:</span> All our operations meet international safety and quality standards, including ISO 9001 and OSHA requirements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
