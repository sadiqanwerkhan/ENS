import Image from 'next/image'

const features = [
  {
    title: 'Adaptive noise cancellation',
    description:
      'Four beam-forming microphones read the room 200 times a second and cancel up to 42 dB of ambient noise — from jet engines to office chatter.',
  },
  {
    title: '40-hour battery life',
    description:
      'A full day of listening on a 10-minute charge, and forty hours on a single charge. USB-C fast charging keeps you moving.',
  },
  {
    title: 'Signature 40mm drivers',
    description:
      'Hand-tuned dynamic drivers deliver a wide, natural sound stage with deep, controlled bass and crystal-clear highs.',
  },
  {
    title: 'All-day comfort',
    description:
      'Memory-foam cushions and a 260g aluminium frame distribute weight evenly, so long sessions never feel heavy.',
  },
]

export function ProductFeatures() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="border-t border-border bg-card/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Key features
          </p>
          <h2
            id="features-title"
            className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Engineered around one thing: the listening.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-border">
            <Image
              src="/images/sonder-pulse-detail.png"
              alt="Close-up of the ENS Pulse ear cup showing the brushed aluminium dial and glowing amber accent ring"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}