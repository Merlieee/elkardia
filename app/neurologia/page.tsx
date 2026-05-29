import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Neurologia",
  alternates: { canonical: "/neurologia" },
  description: "Diagnostyka i leczenie chorób układu nerwowego w Lublinie.",
  openGraph: { images: [{ url: "/images/spec-8.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.neurology, en: en.pages.neurology }}
      heroImage="/images/spec-8.webp"
      
      doctors={doctors.filter(d => d.group === "Neurologia")}
    />
  )
}
