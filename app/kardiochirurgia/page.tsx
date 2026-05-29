import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Kardiochirurgia",
  alternates: { canonical: "/kardiochirurgia" },
  description: "Konsultacje kardiochirurgiczne i kompleksowa opieka pooperacyjna. Kardiochirurg w Lublinie.",
  openGraph: { images: [{ url: "/images/spec-1.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.cardiacSurgery, en: en.pages.cardiacSurgery }}
      heroImage="/images/spec-1.webp"
      doctors={doctors.filter(d => d.group === "Kardiochirurgia")}
    />
  )
}
