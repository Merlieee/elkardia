import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Diabetologia",
  alternates: { canonical: "/diabetologia" },
  description: "Leczenie cukrzycy i zaburzeń metabolicznych u dorosłych i dzieci.",
  openGraph: { images: [{ url: "/images/spec-7.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.diabetology, en: en.pages.diabetology }}
      heroImage="/images/spec-7.webp"
      heroPosition="center_45%"
      doctors={doctors.filter(d => d.group === "Endokrynologia i diabetologia")}
    />
  )
}
