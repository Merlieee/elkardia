import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Hipertensjologia — Elkardia Lublin",
  description: "Diagnostyka i leczenie nadciśnienia tętniczego pierwotnego, wtórnego i opornego. Hipertensjolodzy w Lublinie.",
}

const conditions = [
  "Nadciśnienie tętnicze pierwotne",
  "Nadciśnienie wtórne (nerkowe, hormonalne)",
  "Nadciśnienie oporne na leczenie",
  "Nadciśnienie u dzieci i młodzieży",
  "Powikłania narządowe nadciśnienia",
  "Holter ciśnieniowy 24h (ABPM)",
  "Ocena ryzyka sercowo-naczyniowego",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Hipertensjologia"
      label="Specjalność"
      description="Diagnostyka i leczenie nadciśnienia tętniczego — w tym opornego i wtórnego."
      heroImage="/images/kardiologia-3.webp"
      conditions={conditions}
      doctors={doctors.filter(d =>
        d.tags.some(t => t.toLowerCase().includes("hipertensjolog")) ||
        d.group === "Kardiologia dorosłych"
      ).slice(0, 4)}
    />
  )
}
