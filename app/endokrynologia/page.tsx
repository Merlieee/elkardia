import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Endokrynologia — Elkardia Lublin",
  description: "Diagnostyka i leczenie chorób gruczołów wydzielania wewnętrznego w Lublinie. Tarczyca, nadnercza, przysadka, osteoporoza.",
  openGraph: { images: [{ url: "/images/endokrynologia.webp" }] },
}

const conditions = [
  "Choroby tarczycy (niedoczynność, nadczynność, wole)",
  "Zaburzenia przysadki mózgowej",
  "Choroby nadnerczy",
  "Zaburzenia przytarczyc",
  "Osteoporoza",
  "Zaburzenia hormonalne ogólne",
  "Endokrynologia dziecięca",
  "Zaburzenia wzrostu i dojrzewania",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Endokrynologia"
      label="Specjalność"
      description="Diagnostyka i leczenie zaburzeń hormonalnych i chorób gruczołów wydzielania wewnętrznego."
      heroImage="/images/endokrynologia.webp"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Endokrynologia i diabetologia")}
    />
  )
}
