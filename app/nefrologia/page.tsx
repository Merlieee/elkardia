import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Nefrologia",
  alternates: { canonical: "/nefrologia" },
  description: "Diagnostyka i leczenie chorób nerek i układu moczowego.",
  openGraph: { images: [{ url: "/images/nefrologia.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.nephrology, en: en.pages.nephrology }}
      heroImage="/images/nefrologia.webp"
      
      doctors={doctors.filter(d => d.tags.some(t => t.toLowerCase().includes("nefrol")))}
    />
  )
}
