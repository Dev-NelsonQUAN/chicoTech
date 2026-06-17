export function MissionVision() {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] px-6 md:px-12 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="p-6 md:p-10 rounded-2xl md:rounded-4xl bg-white text-black shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-3 md:mb-6 opacity-60">01. Our Vision</h3>
          <p className="text-[12px] md:text-xl font-bold leading-relaxed">To be the foremost provider of innovative and sustainable steel engineering solutions across the continent.</p>
        </div>

        <div className="p-6 md:p-10 rounded-2xl md:rounded-4xl bg-blue-700 border border-slate-100 shadow-xl">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-3 md:mb-6 text-white">02. Our Mission</h3>
          <p className="text-[12px] md:text-xl  font-bold text-white leading-relaxed">Delivering exceptional value through precision engineering, meticulous planning, and unwavering commitment to client satisfaction.</p>
        </div>

        <div className="p-6 md:p-10 rounded-2xl md:rounded-4xl bg-white border border-slate-100 shadow-xl">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-3 md:mb-6 text-slate-400">03. Core Values</h3>
          <div className="flex flex-wrap gap-3">
            {['Integrity', 'Quality', 'Innovation', 'Safety', 'Satisfaction'].map(v => (
              <span key={v} className="px-4 py-2 bg-slate-50 text-slate-900 rounded-full font-bold text-[10px] md:text-sm border border-slate-100">{v}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}