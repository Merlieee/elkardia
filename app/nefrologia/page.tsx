import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Nefrologia — Elkardia Lublin",
  description: "Diagnostyka i leczenie chorób nerek i układu moczowego w Lublinie. Nefrologia dziecięca i dorosłych.",
  openGraph: { images: [{ url: "/images/nefrologia.webp" }] },
}

const conditions = [
  "Przewlekła choroba nerek",
  "Ostre uszkodzenie nerek",
  "Choroby układu moczowego u dzieci",
  "Nadciśnienie nerkowe",
  "Białkomocz i krwiomocz",
  "Diagnostyka nefrourologiczna",
  "Kamica nerkowa",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Nefrologia"
      label="Specjalność"
      description="Diagnostyka i leczenie chorób nerek i układu moczowego u dzieci i dorosłych."
      heroImage="/images/nefrologia.webp"
      conditions={conditions}
      doctors={doctors.filter(d =>
        d.tags.some(t => t.toLowerCase().includes("nefrol")) ||
        d.group === "Kardiologia dziecięca" && d.tags.some(t => t.toLowerCase().includes("nefrol"))
      )}
    />
  )
}
