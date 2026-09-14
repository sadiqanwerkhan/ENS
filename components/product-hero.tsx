import Image from 'next/image'

const stats = [
  { value: '40h', label: 'Battery life' },
  { value: '−42dB', label: 'Noise reduction' },
  { value: '260g', label: 'Featherweight' },
]

export function ProductHero() {
  return (
    <section
      id="overview"
      aria-labelledby="product-title"
      className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            New · Gen 3
          </span>

          <h1
            id="product-title"
            className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            ENS Pulse
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Studio-grade wireless headphones tuned for the way you actually
            listen. Adaptive noise cancellation, all-day comfort, and a sound
            stage that disappears into the music.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#features"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-100"
            >
              Explore features
            </a>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$329</span> · Free
              2-day shipping
            </span>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl bg-card ring-1 ring-border">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-accent/50 to-transparent"
              aria-hidden="true"
            />
            <Image
              src="/images/sonder-pulse.png"
              alt="ENS Pulse over-ear headphones in matte graphite with an amber accent ring, shown at a three-quarter angle"
              width={1024}
              height={1024}
              priority
              className="relative h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}