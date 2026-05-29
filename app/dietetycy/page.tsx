import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Dietetyka kliniczna",
  alternates: { canonical: "/dietetycy" },
  description: "Indywidualny plan żywienia i analiza składu ciała w Lublinie.",
  openGraph: { images: [{ url: "/images/dietetyka-kliniczna.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.dietetics, en: en.pages.dietetics }}
      heroImage="/images/dietetyka-kliniczna.webp"
      doctors={doctors.filter(d => d.group === "Dietetyka")}
    />
  )
}
