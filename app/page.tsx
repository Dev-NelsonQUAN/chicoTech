import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Features } from '@/components/features'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { Portfolio } from '@/components/portfolio'
import { Client } from '@/components/clients'
import { MissionVision } from '@/components/mission-vision'
import { FAQ } from '@/components/faq'
import { HSSE } from '@/components/hsse-policy'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Client />
      <MissionVision />
      <Services />
      <HSSE />
      <Portfolio />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
