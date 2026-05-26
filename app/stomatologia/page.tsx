import type { Metadata } from "next"
import { Heart } from "lucide-react"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Stomatologia z obserwacją kardiologiczną",
  alternates: { canonical: "/stomatologia" },
  description: "Jedyne miejsce w Lublinie, gdzie stomatologia odbywa się pod opieką kardiologa. Leczenie zachowawcze, protetyka, ekstrakcje — bezpieczne dla pacjentów z chorobami serca.",
  openGraph: {
    title: "Stomatologia z obserwacją kardiologiczną — Elkardia Lublin",
    description: "Kompleksowa stomatologia dla dorosłych i dzieci z obserwacją kardiologiczną — jedyne takie miejsce w Lublinie.",
    url: "https://elkardia.pl/stomatologia",
    images: [{ url: "/images/stomatologia-7.webp" }],
  },
}

const conditions = [
  "Stomatologia dziecięca",
  "Stomatologia młodzieżowa",
  "Stomatologia dorosłych",
  "Protetyka elastyczna",
  "Korony i mosty protetyczne",
  "Stomatologia zachowawcza i endodoncja",
  "Chirurgia stomatologiczna",
  "RTG stomatologiczne na miejscu",
  "Pełne monitorowanie EKG podczas zabiegu",
  "Obsługa pacjentów ze stymulatorami i ICD",
]

const cardiacUsp = (
  <div className="flex flex-col gap-4 rounded-xl bg-slate-50 p-8">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EE3920]/8 text-[#EE3920]">
      <Heart className="h-5 w-5" />
    </div>
    <div>
      <h3 className="text-balance font-semibold text-slate-900 text-lg">Obserwacja kardiologiczna gratis</h3>
      <p className="text-pretty mt-1 text-sm leading-relaxed text-slate-500">
        Jedyne takie miejsce w Lublinie. Każdy zabieg stomatologiczny odbywa się pod pełnym monitorowaniem kardiologicznym bez dodatkowych kosztów — idealne dla pacjentów z chorobami serca, po zawale, ze stymulatorem lub kardiowerterem.
      </p>
    </div>
  </div>
)

export default function Page() {
  return (
    <SpecialtyPage
      title="Stomatologia"
      label="Specjalność"
      description="Kompleksowa stomatologia dla dorosłych i dzieci z obserwacją kardiologiczną — jedyne takie miejsce w Lublinie."
      heroImage="/images/stomatologia-7.webp"
      heroPosition="center_100%"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Stomatologia")}
      extraContent={cardiacUsp}
    />
  )
}
