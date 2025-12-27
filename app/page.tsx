import { TracingBeam } from '@/components/ui/tracing-beam'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Navigation />
      <TracingBeam>
        <Hero />
        {/* More sections will go here */}
      </TracingBeam>
    </>
  )
}