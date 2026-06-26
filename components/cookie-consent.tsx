'use client'

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('chico-cookie-consent')
    if (!consent) setIsVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('chico-cookie-consent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:w-96 z-200 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="p-6 bg-white/80 backdrop-blur-2xl border border-white rounded-4xl shadow-2xl flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
              <Cookie size={20} />
            </div>
            <p className="font-bold text-slate-900">Cookie Policy</p>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-slate-900"><X size={18} /></button>
        </div>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          We use cookies to improve your experience and analyze our traffic. By clicking "Accept", you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button onClick={acceptCookies} className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-all">Accept All</button>
          <button onClick={() => setIsVisible(false)} className="flex-1 py-3 bg-slate-100 text-slate-500 rounded-xl text-xs font-bold uppercase tracking-widest">Decline</button>
        </div>
      </div>
    </div>
  )
}