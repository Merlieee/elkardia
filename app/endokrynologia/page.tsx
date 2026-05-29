import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Endokrynologia",
  alternates: { canonical: "/endokrynologia" },
  description: "Diagnostyka i leczenie zaburzeń hormonalnych w Lublinie.",
  openGraph: { images: [{ url: "/images/endokrynologia.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.endocrinology, en: en.pages.endocrinology }}
      heroImage="/images/endokrynologia.webp"
      
      doctors={doctors.filter(d => d.group === "Endokrynologia i diabetologia")}
    />
  )
}
