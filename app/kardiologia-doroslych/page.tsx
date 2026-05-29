import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Kardiologia dorosłych",
  alternates: { canonical: "/kardiologia-doroslych" },
  description: "Konsultacje kardiologiczne dla dorosłych w Lublinie. Elektrofizjolodzy, echokardiografia, Holter EKG, próba wysiłkowa — ponad 15 kardiologów pod jednym dachem.",
  openGraph: { images: [{ url: "/images/kardiologia-lublin.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.adultCardiology, en: en.pages.adultCardiology }}
      heroImage="/images/kardiologia-lublin.webp"
      doctors={doctors.filter(d => d.group === "Kardiologia dorosłych")}
    />
  )
}
