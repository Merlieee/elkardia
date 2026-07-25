import type { Metadata } from "next"
import { BadaniaLabPage } from "@/components/badania-lab-page"
import { labTestCount } from "@/lib/badania-lab"

export const metadata: Metadata = {
  title: "Badania laboratoryjne Lublin — pełna lista | Elkardia",
  description: `${labTestCount} badań laboratoryjnych w Elkardii w Lublinie — analityka ogólna, biochemia, hematologia, hormony, markery nowotworowe i serodiagnostyka infekcji.`,
  alternates: { canonical: "/badania/badania-laboratoryjne/" },
  openGraph: { images: [{ url: "/images/badania-9.webp" }] },
}

export default function Page() {
  return <BadaniaLabPage />
}
