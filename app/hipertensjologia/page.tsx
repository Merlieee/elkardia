import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Hipertensjologia",
  alternates: { canonical: "/hipertensjologia" },
  description: "Diagnostyka i leczenie nadciśnienia tętniczego pierwotnego, wtórnego i opornego. Hipertensjolodzy w Lublinie.",
  openGraph: { images: [{ url: "/images/kardiologia-3.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.hypertensiology, en: en.pages.hypertensiology }}
      heroImage="/images/kardiologia-3.webp"
      doctors={doctors.filter(d =>
        d.tags.some(t => t.toLowerCase().includes("hipertensjolog")) ||
        d.group === "Kardiologia dorosłych"
      ).slice(0, 4)}
    />
  )
}
