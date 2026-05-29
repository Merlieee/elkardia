import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Chirurgia naczyniowa",
  alternates: { canonical: "/chirurgia-naczyniowa" },
  description: "Nieinwazyjna diagnostyka i leczenie chorób żył, tętnic i naczyń limfatycznych.",
  openGraph: { images: [{ url: "/images/chirurgia-naczyniowa.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.vascularSurgery, en: en.pages.vascularSurgery }}
      heroImage="/images/chirurgia-naczyniowa.webp"
      heroPosition="center_60%"
      doctors={doctors.filter(d => d.group === "Chirurgia naczyniowa")}
    />
  )
}
