import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Balneologia",
  alternates: { canonical: "/balneologia" },
  description: "Leczenie uzdrowiskowe i rehabilitacja kardiologiczna.",
  openGraph: { images: [{ url: "/images/spec-2.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.balneology, en: en.pages.balneology }}
      heroImage="/images/spec-2.webp"
      heroPosition="center_100%"
      doctors={doctors.filter(d => d.tags.some(t => t.toLowerCase().includes("balneolog")))}
    />
  )
}
