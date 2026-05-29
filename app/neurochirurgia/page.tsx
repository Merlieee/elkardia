import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Neurochirurgia",
  alternates: { canonical: "/neurochirurgia" },
  description: "Konsultacje neurochirurgiczne i kwalifikacja do leczenia operacyjnego.",
  openGraph: { images: [{ url: "/images/neurochirurgia.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.neurosurgery, en: en.pages.neurosurgery }}
      heroImage="/images/neurochirurgia.webp"
      
      doctors={doctors.filter(d => d.group === "Neurochirurgia")}
    />
  )
}
