export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            ENS
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Pulse
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <a
            href="#overview"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Overview
          </a>
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        <a
          href="#overview"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-100"
        >
          Buy now
        </a>
      </div>
    </header>
  )
}