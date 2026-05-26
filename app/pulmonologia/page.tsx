import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Pulmonologia",
  alternates: { canonical: "/pulmonologia" },
  description: "Diagnostyka i leczenie chorób płuc i układu oddechowego w Lublinie. Spirometria, diagnostyka POChP, astmy i bezdechu sennego.",
  openGraph: { images: [{ url: "/images/spec-2.webp" }] },
}

const conditions = [
  "Przewlekła obturacyjna choroba płuc (POChP)",
  "Astma oskrzelowa",
  "Zwłóknienie płuc",
  "Rozstrzenie oskrzeli",
  "Mukowiscydoza",
  "Rak płuca",
  "Sarkoidoza",
  "Bezdech senny",
  "Duszność i kaszel przewlekły",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Pulmonologia"
      label="Specjalność"
      description="Profilaktyka, diagnostyka i leczenie chorób układu oddechowego."
      heroImage="/images/spec-2.webp"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Pulmonologia")}
    />
  )
}
