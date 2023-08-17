// Components
import EarlyAccess from '@/components/EarlyAccess'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Productive from '@/components/Productive'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
    </main>
  )
}
