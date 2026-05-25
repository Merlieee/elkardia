import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Dietetyka kliniczna — Elkardia Lublin",
  description: "Dietetycy kliniczni w Elkardia Lublin — indywidualny plan żywienia, analiza składu ciała (SECA-285), dieta kardiologiczna. Konsultacje stacjonarne i online.",
  openGraph: {
    title: "Dietetycy kliniczni — Elkardia Lublin",
    description: "Indywidualny plan żywienia, analiza składu ciała, dieta przy chorobach serca i cukrzycy. Umów konsultację online 24h.",
    url: "https://elkardia.pl/dietetycy",
  },
}

const conditions = [
  "Nadwaga i otyłość",
  "Żywienie w chorobach sercowo-naczyniowych",
  "Dieta przy cukrzycy i insulinooporności",
  "Dieta przy nadciśnieniu (DASH)",
  "Żywienie przy chorobach nerek",
  "Dieta w chorobach zapalnych jelit",
  "Analiza składu ciała (waga SECA-285)",
  "Indywidualny plan żywienia",
  "Żywienie sportowe",
  "Zdrowe odchudzanie bez suplementów",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Dietetyka kliniczna"
      label="Specjalność"
      description="Indywidualny plan żywienia, analiza składu ciała i diety terapeutyczne — bez suplementów, bez leków."
      heroImage="/images/dietetyk.webp"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Dietetyka")}
    />
  )
}
