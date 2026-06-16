import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Features } from '@/components/features'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { Portfolio } from '@/components/portfolio'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
