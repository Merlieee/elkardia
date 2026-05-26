import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Balneologia",
  alternates: { canonical: "/balneologia" },
  description: "Leczenie uzdrowiskowe i rehabilitacja kardiologiczna w Lublinie. Kwalifikacja do leczenia uzdrowiskowego.",
  openGraph: { images: [{ url: "/images/spec-2.webp" }] },
}

const conditions = [
  "Kwalifikacja do leczenia uzdrowiskowego",
  "Rehabilitacja kardiologiczna",
  "Bezdech senny",
  "Przewlekłe choroby układu sercowo-naczyniowego",
  "Medycyna fizykalna i balneologia",
  "Opieka po zawale i operacjach serca",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Balneologia"
      label="Specjalność"
      description="Leczenie uzdrowiskowe i rehabilitacja kardiologiczna — medycyna fizykalna i kwalifikacja do sanatorium."
      heroImage="/images/spec-2.webp"
      heroPosition="center_100%"
      conditions={conditions}
      doctors={doctors.filter(d => d.tags.some(t => t.toLowerCase().includes("balneolog")))}
    />
  )
}
