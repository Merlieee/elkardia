import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Diabetologia — Elkardia Lublin",
  description: "Leczenie cukrzycy i zaburzeń metabolicznych w Lublinie. Diabetologia dla dorosłych i dzieci.",
}

const conditions = [
  "Cukrzyca typu 1",
  "Cukrzyca typu 2",
  "Cukrzyca u dzieci i młodzieży",
  "Insulinooporność",
  "Otyłość i zaburzenia metaboliczne",
  "Powikłania cukrzycowe (nefropatia, retinopatia)",
  "Hypoglikemia",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Diabetologia"
      label="Specjalność"
      description="Leczenie cukrzycy i zaburzeń metabolicznych u dorosłych i dzieci."
      heroImage="/images/spec-8.webp"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Endokrynologia i diabetologia")}
    />
  )
}
