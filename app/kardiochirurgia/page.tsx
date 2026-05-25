import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Kardiochirurgia — Elkardia Lublin",
  description: "Konsultacje kardiochirurgiczne i opieka pooperacyjna w Lublinie. Kwalifikacja do operacji serca, bypassów, zastawek i tętniaków aorty.",
}

const conditions = [
  "Kwalifikacja do pomostowania aortalno-wieńcowego (CABG)",
  "Kwalifikacja do operacji zastawek serca",
  "Leczenie tętniaka aorty",
  "Wrodzone wady serca (kwalifikacja)",
  "Opieka pooperacyjna po operacjach serca",
  "Konsultacje przed planowanymi zabiegami",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Kardiochirurgia"
      label="Specjalność"
      description="Konsultacje kardiochirurgiczne i kompleksowa opieka pooperacyjna pod kierunkiem profesora."
      heroImage="/images/spec-1.webp"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Kardiochirurgia")}
    />
  )
}
