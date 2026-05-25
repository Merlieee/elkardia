import type { Metadata } from "next"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Chirurgia naczyniowa — Elkardia Lublin",
  description: "Diagnostyka i leczenie chorób naczyń krwionośnych w Lublinie. USG Doppler, żylaki, zakrzepica, choroby tętnic obwodowych.",
  openGraph: { images: [{ url: "/images/chirurgia-naczyniowa.webp" }] },
}

const conditions = [
  "Żylaki kończyn dolnych",
  "Zakrzepica żył głębokich",
  "Choroby tętnic obwodowych",
  "Choroby naczyń limfatycznych",
  "Malformacje naczyniowe",
  "Chromanie przestankowe",
  "Ocena przepływu naczyniowego (USG Doppler)",
]

export default function Page() {
  return (
    <SpecialtyPage
      title="Chirurgia naczyniowa"
      label="Specjalność"
      description="Nieinwazyjna diagnostyka i leczenie chorób żył, tętnic i naczyń limfatycznych."
      heroImage="/images/chirurgia-naczyniowa.webp"
      heroPosition="center_60%"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Chirurgia naczyniowa")}
    />
  )
}
