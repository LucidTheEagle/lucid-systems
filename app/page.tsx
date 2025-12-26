import { TracingBeam } from '@/components/ui/tracing-beam'

export default function Home() {
  return (
    <TracingBeam>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl text-ancient uppercase tracking-wider">
          LUCID SYSTEMS
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-modern text-granite text-xl">
          The Plumb Line runs through everything.
        </p>
      </div>
    </TracingBeam>
  )
}