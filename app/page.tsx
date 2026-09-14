import { SiteHeader } from '@/components/site-header'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ProductHero />
        <ProductFeatures />
      </main>
      <SiteFooter />
    </div>
  )
}