import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Neurochirurgia — Elkardia Lublin",
  description: "Konsultacje neurochirurgiczne i kwalifikacja do leczenia operacyjnego chorób mózgu, rdzenia kręgowego i nerwów obwodowych.",
}

const conditions = [
  "Guzy mózgu",
  "Guzy rdzenia kręgowego",
  "Guzy nerwów obwodowych",
  "Guzy oczodołu",
  "Guzy podstawy czaszki",
  "Kwalifikacja do operacji neurochirurgicznych",
  "Opieka pooperacyjna",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Neurochirurgia"
      label="Specjalność"
      description="Konsultacje neurochirurgiczne i kwalifikacja do leczenia operacyjnego chorób układu nerwowego."
      heroImage="/images/spec-5.webp"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Neurochirurgia")}
    />
  )
}
