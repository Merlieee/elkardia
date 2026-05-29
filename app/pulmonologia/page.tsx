import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Pulmonologia",
  alternates: { canonical: "/pulmonologia" },
  description: "Diagnostyka i leczenie chorób płuc i układu oddechowego w Lublinie.",
  openGraph: { images: [{ url: "/images/spec-9.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.pulmonology, en: en.pages.pulmonology }}
      heroImage="/images/spec-9.webp"
      
      doctors={doctors.filter(d => d.group === "Pulmonologia")}
    />
  )
}
