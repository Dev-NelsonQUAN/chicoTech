'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    // { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-4' : 'py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between p-2 px-6 rounded-2xl border transition-all duration-300 ${
          scrolled 
          ? 'bg-white/80 border-slate-200 shadow-xl backdrop-blur-xl' 
          : 'bg-white/40 border-white/20 backdrop-blur-md shadow-lg shadow-black/5'
        }`}>
          
          <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Chico Tech Logo" 
          className='h-7 md:h-15 w-7 md:w-15'/>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-xs font-bold text-black hover:text-red-600 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </Link>
            ))}
            
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-white text-slate-900 border border-slate-200 text-xs font-black rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm uppercase tracking-tight"
            >
              Contact Us
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-24 left-4 right-4 p-8 rounded-4xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-2xl md:hidden flex flex-col gap-6 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className="text-sm font-black text-slate-900 uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="tel:++234 706 500 1134" 
              className="w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs"
            >
              Call Us Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}