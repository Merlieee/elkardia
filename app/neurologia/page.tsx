import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Neurologia — Elkardia Lublin",
  description: "Diagnostyka i leczenie chorób układu nerwowego w Lublinie. Konsultacje neurologiczne, diagnostyka omdleń, udaru, padaczki i migreny.",
  openGraph: { images: [{ url: "/images/spec-8.webp" }] },
}

const conditions = [
  "Omdlenia i zasłabnięcia",
  "Udar mózgu i TIA",
  "Padaczka",
  "Migrena i bóle głowy",
  "Zawroty głowy",
  "Zaburzenia snu",
  "Neuropatia obwodowa",
  "Krwawienie śródczaszkowe",
  "Zaburzenia pamięci i koncentracji",
]

export default function Page() {
  return (
    <SpecialtyPage
      heroImage="/images/spec-8.webp"
      title="Neurologia"
      label="Specjalność"
      description="Diagnostyka i leczenie chorób centralnego i obwodowego układu nerwowego."
conditions={conditions}
      doctors={doctors.filter(d => d.group === "Neurologia")}
    />
  )
}
