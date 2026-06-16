'use client'

import { 
  Wrench, 
  Package, 
  HardHat, 
  Zap, 
  Cog, 
  Network, 
  Wind, 
  FileText,
  ArrowUpRight,
  MessageCircle,
  Mail
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Steel Fabrication',
    description: 'Precision metalworking and custom structural fabrication for heavy-duty industrial applications.',
    icon: Wrench,
    color: 'bg-red-500'
  },
  {
    id: 2,
    title: 'General Installation',
    description: 'Turnkey deployment of industrial machinery and systems with zero-fault tolerance.',
    icon: HardHat,
    color: 'bg-blue-500'
  },
  {
    id: 3,
    title: 'Import & Export',
    description: 'Strategic global procurement and logistics for premium steel and industrial components.',
    icon: Package,
    color: 'bg-orange-500'
  },
  {
    id: 4,
    title: 'Erection Services',
    description: 'Complex structural assembly and high-altitude steel erection using advanced engineering.',
    icon: Cog,
    color: 'bg-zinc-500'
  },
  {
    id: 5,
    title: 'Conveyor Systems',
    description: 'Automated material handling solutions designed for maximum throughput and efficiency.',
    icon: Network,
    color: 'bg-emerald-500'
  },
  {
    id: 6,
    title: 'Elevator Systems',
    description: 'Vertical transport solutions including fabrication, specialized installation, and maintenance.',
    icon: Zap,
    color: 'bg-yellow-500'
  },
  {
    id: 7,
    title: 'Blow Lines',
    description: 'Pneumatic transport and air-driven industrial lines for high-speed material movement.',
    icon: Wind,
    color: 'bg-sky-500'
  },
  {
    id: 8,
    title: 'General Contract',
    description: 'End-to-end project management and execution of large-scale industrial infrastructure.',
    icon: FileText,
    color: 'bg-purple-500'
  },
]

export function Services() {
  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Hi CHICO Technical! I'm interested in your ${service} services.`)
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, '_blank')
  }

  return (
    <section id="services" className="relative py-24 px-6 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-red-500">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Industrial <span className="text-gray-500">Capabilities.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            We deliver the engineering backbone for modern infrastructure. 
            From raw steel to automated systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                onClick={() => handleWhatsApp(service.title)}
                className="group relative cursor-pointer p-8 rounded-4xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-white/20 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between min-h-80"
              >
                <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6">
                  <div className={`w-12 h-12 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={24} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-500 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                    Enquire Now <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 p-8 rounded-[2.5rem] bg-linear-to-r from-white/3 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
            <p className="text-gray-400">Consult with our engineers today for a custom quote.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button 
               onClick={() => handleWhatsApp('General Consultation')}
               className="flex-1 md:flex-none px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
            <button 
               onClick={() => window.location.href = 'mailto:info@chicotechnicals.com'}
               className="flex-1 md:flex-none px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}




// 'use client'

// import { Wrench, Package, HardHat, Zap, Cog, Network } from 'lucide-react'

// const services = [
//   {
//     id: 1,
//     title: 'Steel Fabrication',
//     description: 'Precision steel fabrication and metalworking services for industrial and structural applications.',
//     icon: Wrench,
//   },
//   {
//     id: 2,
//     title: 'General Installation',
//     description: 'Professional installation services ensuring safe and efficient deployment of industrial systems.',
//     icon: HardHat,
//   },
//   {
//     id: 3,
//     title: 'Import & Export',
//     description: 'International steel trading and logistics solutions with reliable delivery worldwide.',
//     icon: Package,
//   },
//   {
//     id: 4,
//     title: 'Erection Services',
//     description: 'Expert structural erection and assembly of complex industrial frameworks and infrastructure.',
//     icon: Cog,
//   },
//   {
//     id: 5,
//     title: 'Conveyor Systems',
//     description: 'Design and installation of advanced conveyor solutions for seamless material handling.',
//     icon: Network,
//   },
//   {
//     id: 6,
//     title: 'Elevator Systems',
//     description: 'Complete elevator fabrication, installation, and maintenance for all building types.',
//     icon: Zap,
//   },
// ]

// export function Services() {
//   return (
//     <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-4">
//           <div className="inline-block">
//             <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
//               Our Services
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
//             Comprehensive Industrial Solutions
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             We provide end-to-end solutions across all aspects of steel and industrial engineering.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service) => {
//             const Icon = service.icon
//             return (
//               <div
//                 key={service.id}
//                 className="group relative p-6 rounded-xl glass-card bg-card/50 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//               >
//                 {/* Glassmorphism background */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 <div className="relative z-10 space-y-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
//                     <Icon className="text-white" size={24} />
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
//                     <p className="text-muted-foreground leading-relaxed">{service.description}</p>
//                   </div>

//                   <div className="flex items-center text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
//                     Learn More →
//                   </div>
//                 </div>

//                 {/* Hover effect background */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
