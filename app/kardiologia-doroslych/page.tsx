import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Kardiologia dorosłych — Elkardia Lublin",
  description: "Konsultacje kardiologiczne dla dorosłych w Lublinie. Elektrofizjolodzy, echokardiografia, Holter EKG, próba wysiłkowa — ponad 15 kardiologów pod jednym dachem.",
}

const conditions = [
  "Zaburzenia rytmu serca i przewodzenia",
  "Kołatanie serca",
  "Kardiologia ogólna",
  "Wady serca i zastawkowe",
  "Nadciśnienie tętnicze",
  "Choroba wieńcowa",
  "Zaburzenia lipidowe",
  "Kardiomiopatia",
  "Omdlenia i zasłabnięcia",
  "Szmery sercowe",
  "Stan po zawale serca",
  "Kwalifikacja do operacji serca",
  "Opieka przed i po ablacji",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Kardiologia dorosłych"
      label="Specjalność"
      description="Ponad 15 kardiologów i elektrofizjologów — diagnostyka i leczenie chorób serca dla dorosłych."
      heroImage="/images/kardiologia-lublin.webp"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Kardiologia dorosłych")}
    />
  )
}
