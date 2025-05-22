import type React from "react"
import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
