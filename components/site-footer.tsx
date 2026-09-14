export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-background"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                ENS
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                Pulse
              </span>
            </div>
            <p id="footer-title" className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sound designed to disappear, so the music is all that&apos;s left.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@ensaudio.com"
                  className="transition-colors hover:text-foreground"
                >
                  hello@ensaudio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005550142"
                  className="transition-colors hover:text-foreground"
                >
                  +1 (800) 555-0142
                </a>
              </li>
              <li>Mon–Fri · 9am–6pm PT</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Visit
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
              <p>412 Harbor Lane, Suite 8</p>
              <p>San Francisco, CA 94107</p>
              <p>United States</p>
            </address>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Support
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>2-year warranty</li>
              <li>30-day returns</li>
              <li>
                <a
                  href="mailto:support@ensaudio.com"
                  className="transition-colors hover:text-foreground"
                >
                  support@ensaudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ENS Audio, Inc. All rights reserved.</p>
          <p>Designed in California. A fictional product.</p>
        </div>
      </div>
    </footer>
  )
}