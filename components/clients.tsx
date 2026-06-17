'use client';

import React from 'react';
import Image from 'next/image';

const CLIENTS = [
  { name: 'Crown Flour Mills', location: 'Apapa, Lagos', logo: '/crownFlourMill.png' },
//   { name: 'BUA Flour Mills', location: 'Apapa, Lagos', logo: '/logos/bua.png' },
  { name: 'Olam Agri BDG', location: 'Ogun, Nigeria', logo: '/olamNG.png' },
  { name: 'Bajaj Steel', location: 'Ghana', logo: '/bajajSteel.png' },
//   { name: 'AFP Feed Plant', location: 'Ilorin, Kwara', logo: '/logos/afp.png' },
  { name: 'BUA Flour Mills', location: 'Apapa, Lagos', logo: '/buaFoods.png' },
  { name: 'Olam Agri', location: 'Ghana', logo: '/olam-agri.png' },
];

export function Client() {
  return (
    <section className="py-15 md:py-24 bg-white border-b border-slate-100 overflow-hidden relative">
      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marqueeScroll 50s linear infinite;
        }
        @media (hover: hover) {
          .marquee-inner:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 lg:px-6 mb-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Industry Partnerships</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Market Leaders.
          </h2>
          <p className="text-sm text-slate-500 max-w-lg font-medium">
            We provide specialized technical services for the most demanding industrial environments in West Africa.
          </p>
        </div>
      </div>

      <div className="relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:bg-linear-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:bg-linear-to-l from-white via-white/80 to-transparent z-10" />

        <div className="marquee-inner">
          <div className="flex items-center gap-6 lg:gap-8 px-4">
            {CLIENTS.map((client, index) => (
              <ClientCard key={`set1-${index}`} client={client} />
            ))}
          </div>

          <div className="flex items-center gap-6 lg:gap-8 px-4">
            {CLIENTS.map((client, index) => (
              <ClientCard key={`set2-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: any }) {
  return (
    <div className="flex flex-col items-center justify-between p-4 md:p-8 rounded-2xl md:rounded-4xl bg-white border border-slate-200 shadow-sm min-w-40 md:min-w-65 lg:min-w-75 md:h-55 transition-all duration-500 hover:border-red-500/30 hover:shadow-xl hover:-translate-y-1 group cursor-pointer">
      
      <div className="relative w-full h-10 md:h-20 flex items-center justify-center">
        <Image 
          src={client.logo} 
          alt={client.name} 
        //   width={140}
        //   height={60}
        fill
          className="object-contain transition-transform duration-500 group-hover:scale-105" 
        //   style={{ maxWidth: '100%', height: 'auto' }}
          priority
        />
      </div>

      <div className="w-12 md:h-px bg-slate-100 group-hover:w-full group-hover:bg-red-100 transition-all duration-700" />

      <div className="text-center space-y-1.5">
        <p className="text-[10px] md:text-[15px] font-black text-slate-900 tracking-wider uppercase group-hover:text-red-600 transition-colors">
          {client.name}
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-1 h-1 bg-red-600 rounded-full opacity-40" />
          <p className="text-[9px] md:text-[12px] font-bold text-slate-400 uppercase tracking-widest leading-none">
            {client.location}
          </p>
        </div>
      </div>
    </div>
  );
}


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const CLIENTS = [
//   { name: 'Crown Flour Mills', location: 'Apapa, Lagos', logo: '/logos/crown.png' },
//   { name: 'BUA Flour Mills', location: 'Apapa, Lagos', logo: '/logos/bua.png' },
//   { name: 'Olam Agri BDG', location: 'Shagamu, Ogun', logo: '/olamNG.png' },
//   { name: 'Bajaj Steel', location: 'Ghana Territory', logo: '/bajajSteel.png' },
//   { name: 'AFP Feed Plant', location: 'Ilorin, Kwara', logo: '/logos/afp.png' },
//   { name: 'BUA Pasta Mills', location: 'Apapa, Lagos', logo: '/logos/bua.png' },
//   { name: 'Olam Agri', location: 'Ghana Territory', logo: '/olam-agri.png' },
// ];

// export function Client() {
//   return (
//     <section className="py-16 bg-white border-b border-slate-100 overflow-hidden relative">
//       <style jsx>{`
//         @keyframes marqueeScroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .marquee-inner {
//           display: flex;
//           width: max-content;
//           animation: marqueeScroll 40s linear infinite;
//         }
//         /* Keep pause on hover for desktop users who want to read specific details */
//         @media (hover: hover) {
//           .marquee-inner:hover {
//             animation-play-state: paused;
//           }
//         }
//       `}</style>

//       {/* Header Info */}
//       <div className="max-w-7xl mx-auto px-8 lg:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
//         <div className="space-y-2">
//           <div className="flex items-center gap-2">
//             <span className="w-8 h-1 bg-red-600 rounded-full" />
//             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
//               Trusted Partners
//             </h3>
//           </div>
//           <h2 className="text-3xl font-black text-slate-900 tracking-tight">
//             The Industry Leaders We Serve.
//           </h2>
//         </div>
//         <p className="text-xs font-bold text-slate-400 max-w-xs uppercase tracking-widest leading-relaxed">
//           Delivering precision engineering for Africa&apos;s biggest industrial giants.
//         </p>
//       </div>

//       {/* Marquee Wrapper */}
//       <div className="relative flex items-center">
//         {/* Gradient Blurs for the edges - crucial for the "SaaS" look */}
//         <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

//         <div className="marquee-inner">
//           {/* Set 1 */}
//           <div className="flex items-center gap-6 lg:gap-12 px-6 lg:px-12">
//             {CLIENTS.map((client, index) => (
//               <ClientCard key={`set1-${index}`} client={client} />
//             ))}
//           </div>

//           {/* Set 2 (Duplicate for seamless loop) */}
//           <div className="flex items-center gap-6 lg:gap-12 px-6 lg:px-12">
//             {CLIENTS.map((client, index) => (
//               <ClientCard key={`set2-${index}`} client={client} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ClientCard({ client }: { client: any }) {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 lg:p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-slate-100 min-w-[200px] md:min-w-[240px] lg:min-w-[280px] hover:border-red-200 hover:shadow-xl transition-all duration-500 group">
      
//       {/* Logo Area - Grayscale REMOVED for mobile visibility */}
//       <div className="relative w-24 h-12 mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
//         <Image 
//           src={client.logo} 
//           alt={client.name} 
//           fill 
//           className="object-contain" 
//           sizes="120px"
//         />
        
//         {/* Fallback text improved visibility */}
//         <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-slate-900/10 tracking-tighter uppercase pointer-events-none">
//           {client.name.split(' ')[0]} 
//         </span>
//       </div>

//       {/* Info Area */}
//       <div className="text-center space-y-1">
//         <p className="text-[11px] lg:text-xs font-black text-slate-900 tracking-tight uppercase group-hover:text-red-600 transition-colors">
//           {client.name}
//         </p>
//         <div className="flex items-center justify-center gap-1.5 opacity-80">
//           <div className="w-1 h-1 bg-red-600 rounded-full" />
//           <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
//             {client.location}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// // 'use client';

// // import React from 'react';
// // import Image from 'next/image';

// // const CLIENTS = [
// //   { name: 'Crown Flour Mills', location: 'Apapa, Lagos', logo: '/logos/crown.png' },
// //   { name: 'BUA Flour Mills', location: 'Apapa, Lagos', logo: '/logos/bua.png' },
// //   { name: 'Olam Agri BDG', location: 'Shagamu, Ogun', logo: '/olamNG.png' },
// //   { name: 'Bajaj Steel', location: 'Ghana Territory', logo: '/bajajSteel.png' },
// //   { name: 'AFP Feed Plant', location: 'Ilorin, Kwara', logo: '/logos/afp.png' },
// //   { name: 'BUA Pasta Mills', location: 'Apapa, Lagos', logo: '/logos/bua.png' },
// //   { name: 'Olam Agri', location: 'Ghana Territory', logo: '/olam-agri.png' },
// // ];

// // export function Client() {
// //   return (
// //     <section className="py-16 bg-white border-b border-slate-100 overflow-hidden relative">
// //       <style jsx>{`
// //         @keyframes marqueeScroll {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }
// //         .marquee-inner {
// //           display: flex;
// //           width: max-content;
// //           animation: marqueeScroll 40s linear infinite;
// //         }
// //         .marquee-inner:hover {
// //           animation-play-state: paused;
// //         }
// //       `}</style>

// //       {/* Header Info */}
// //       <div className="max-w-7xl mx-auto px-8 lg:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
// //         <div className="space-y-2">
// //           <div className="flex items-center gap-2">
// //             <span className="w-8 h-1 bg-red-600 rounded-full" />
// //             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
// //               Trusted Partners
// //             </h3>
// //           </div>
// //           <h2 className="text-3xl font-black text-slate-900 tracking-tight">
// //             The Industry Leaders We Serve.
// //           </h2>
// //         </div>
// //         <p className="text-xs font-bold text-slate-400 max-w-xs uppercase tracking-widest leading-relaxed">
// //           Delivering precision engineering for Africa&apos;s biggest industrial giants.
// //         </p>
// //       </div>

// //       {/* Marquee Wrapper */}
// //       <div className="relative flex items-center">
// //         {/* Gradient Blurs for the edges */}
// //         <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
// //         <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10" />

// //         <div className="marquee-inner">
// //           <div className="flex items-center gap-8 lg:gap-12 px-6 lg:px-12">
// //             {CLIENTS.map((client, index) => (
// //               <ClientCard key={`set1-${index}`} client={client} />
// //             ))}
// //           </div>

// //           {/* Set 2 (Duplicate for seamlessness) */}
// //           <div className="flex items-center gap-8 lg:gap-12 px-6 lg:px-12">
// //             {CLIENTS.map((client, index) => (
// //               <ClientCard key={`set2-${index}`} client={client} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ClientCard({ client }: { client: any }) {
// //   return (
// //     <div className="flex flex-col items-center justify-center p-6 lg:p-8 rounded-[2rem] bg-[#F8FAFC] border border-slate-100 min-w-[220px] lg:min-w-[280px] hover:border-red-200 hover:shadow-xl transition-all duration-500 group">
// //       <div className="relative w-24 h-12 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
// //         <Image src={client.logo} alt={client.name} fill className="object-contain" />
        
// //         <span className="text-lg font-black text-slate-300 group-hover:text-slate-900 transition-colors tracking-tighter uppercase">
// //           {client.name.split(' ')[0]} 
// //         </span>
// //       </div>

// //       {/* Info Area */}
// //       <div className="text-center space-y-1">
// //         <p className="text-xs font-black text-slate-900 tracking-tight uppercase group-hover:text-red-600 transition-colors">
// //           {client.name}
// //         </p>
// //         <div className="flex items-center justify-center gap-1.5 opacity-60">
// //           <div className="w-1 h-1 bg-slate-400 rounded-full" />
// //           <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
// //             {client.location}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // 'use client'

// // import Image from 'next/image'

// // const logos = [
// //   { name: "BUA", src: "/logos/bua.png" },
// //   { name: "Olam", src: "/logos/olam.png" },
// //   { name: "Crown Flour", src: "/logos/crown.png" },
// //   { name: "Bajaj", src: "/logos/bajaj.png" },
// //   // Add more as needed
// // ]

// // export function Client() {
// //   return (
// //     <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
// //         <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Trusted by Industry Leaders</p>
// //       </div>
      
// //       {/* Infinite Scroll Container */}
// //       <div className="flex overflow-hidden group">
// //         <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
// //           {[...logos, ...logos].map((logo, i) => (
// //             <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
// //               {/* Replace with real images once you have them. Currently using placeholders */}
// //               <div className="h-12 flex items-center gap-3">
// //                  <div className="w-8 h-8 bg-slate-200 rounded-md" />
// //                  <span className="text-xl font-black text-slate-400 tracking-tighter">{logo.name}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// // export function Clients() {
// //   const clients = [
// //     "Crown Flour Mills", "AFP (Animal Feed Plant)", "Olam Agri BDG", 
// //     "Olam Agri Ghana", "BUA Flour Mills", "Bajaj Steel Industries", "BUA Pasta Mills"
// //   ]

// //   return (
// //     <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-6">
// //         <div className="flex flex-col md:flex-row items-center gap-12">
// //           <div className="bg-red-600 text-white p-8 rounded-tr-[3rem] rounded-bl-[3rem] min-w-[240px] text-center shadow-xl">
// //             <h3 className="text-2xl font-black leading-tight uppercase">Meet Our <br/> Clients</h3>
// //           </div>
// //           <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
// //              {clients.map(client => (
// //                <span key={client} className="text-lg lg:text-xl font-black text-slate-400 tracking-tighter hover:text-slate-900 transition-colors whitespace-nowrap">
// //                  {client.toUpperCase()}
// //                </span>
// //              ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }