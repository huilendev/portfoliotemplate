"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Work } from "@/components/work"
import { Services } from "@/components/services"

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Work />
      <Services />
    </main>
  )
}
