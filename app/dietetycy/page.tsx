import type { Metadata } from "next"
import Image from "next/image"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export const metadata: Metadata = {
  title: "Dietetyka kliniczna",
  alternates: { canonical: "/dietetycy" },
  description: "Indywidualny plan żywienia i analiza składu ciała w Lublinie.",
  openGraph: { images: [{ url: "/images/dietetyka-kliniczna.webp" }] },
}

export default function Page() {
  return (
    <SpecialtyPage
      content={{ pl: pl.pages.dietetics, en: en.pages.dietetics }}
      heroImage="/images/dietetyka-kliniczna.webp"
      heroExtra={
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Image src="/images/orly-medycyny.png" alt="Orły Medycyny" width={220} height={66} className="h-8 w-auto opacity-90 brightness-0 invert" />
          <Image src="/images/orly-laureat-2026.png" alt="2026 Laureat Konkursu Orły Medycyny" width={83} height={60} className="h-10 w-auto opacity-90 brightness-0 invert" />
        </div>
      }
      doctors={doctors.filter(d => d.group === "Dietetyka")}
    />
  )
}
