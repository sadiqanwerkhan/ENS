import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1" />
    </div>
  )
}