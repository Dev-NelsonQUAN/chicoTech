export function FAQ() {
  const faqs = [
    {
      q: "What makes Chico Technical Works a trusted choice?",
      a: "Our unwavering commitment to quality, innovation, and client satisfaction. Our highly skilled engineering team delivers solutions that meet the highest standards."
    },
    {
      q: "What areas of specialization do you offer?",
      a: "Structural design, construction management, and renovation services for diverse engineering needs."
    },
    {
      q: "Can you handle large-scale or complex projects?",
      a: "Absolutely! We have successfully executed projects of varying sizes across different industries with meticulous planning and attention to detail."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="w-20 md:w-48 h-20 md:h-48 bg-black flex items-center justify-center rounded-2xl  md:rounded-4xl mb-8 shadow-2xl">
            <h2 className="text-2xl md:text-5xl font-black text-white">FAQs</h2>
          </div>
          <div className="p-8 rounded-4xl bg-slate-50 border border-slate-100">
            <p className="font-bold text-slate-900 mb-2">Visit Our Registered Office:</p>
            <p className="text-red-600 font-black text-lg">39A, Emordi Street, Olodi - Apapa, Lagos State.</p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-2 md:space-y-4">
              <h4 className="text-[16px] md:text-xl lg:text-2xl font-black text-slate-900 flex gap-4">
                <span className="text-blue-600 underline decoration-4 decoration-blue-600/30">?</span>
                {faq.q}
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed pl-8 border-l-2 border-slate-100 max-sm:text-[14px]">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}