import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"

export const metadata: Metadata = {
  title: "Kardiologia dziecięca — Elkardia Lublin",
  description: "Specjalistyczna opieka kardiologiczna dla dzieci i młodzieży w Lublinie. Echokardiografia dziecięca, Holter EKG, diagnostyka wad serca u dzieci.",
}

const conditions = [
  "Zaburzenia rytmu serca u dzieci i młodzieży",
  "Wrodzone wady serca",
  "Nadciśnienie tętnicze u dzieci",
  "Kardiomiopatia u dzieci",
  "Szmery sercowe u dzieci",
  "Echokardiografia (dzieci i noworodki)",
  "Opieka po leczeniu wrodzonych wad serca",
  "Diagnostyka kardiologiczna niemowląt",
]

const echoItems = [
  "budowę jam serca",
  "zastawki serca",
  "przegrody międzyprzedsionkowe i międzykomorowe",
  "duże naczynia krwionośne",
  "przepływy krwi w sercu i naczyniach",
  "funkcję skurczową i rozkurczową mięśnia sercowego",
]

const echoContent = (
  <div className="grid gap-8 lg:grid-cols-[3fr_1fr] lg:items-stretch">

    {/* Content */}
    <div className="flex flex-col justify-center">
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Philips Affiniti 50</p>
      </div>
      <h2 className="mb-5 text-3xl font-bold leading-snug text-slate-900">
        Nowoczesna diagnostyka serca dzieci
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">
        W poradni kardiologii dziecięcej Elkardia badania echokardiograficzne wykonujemy przy użyciu nowoczesnego
        aparatu ultrasonograficznego <strong className="text-slate-800">Philips Affiniti 50</strong>, zakupionego w 2025 roku. System ten należy
        do zaawansowanych urządzeń diagnostycznych stosowanych w kardiologii dziecięcej i umożliwia bardzo dokładną
        ocenę budowy oraz funkcji serca u noworodków, niemowląt, dzieci i młodzieży.
      </p>
      <p className="mb-6 text-sm leading-relaxed text-slate-600">
        Dysponujemy <strong className="text-slate-800">pełnym zestawem głowic</strong> ultrasonograficznych,
        co pozwala na precyzyjne badanie pacjentów w każdym wieku – od wcześniaków po nastolatków.
      </p>
      <div className="border-t border-slate-200 pt-5">
        <p className="mb-4 text-sm text-slate-500">Dzięki wysokiej jakości obrazowania lekarz może szczegółowo ocenić:</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {echoItems.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EE3920]" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Photo */}
    <div className="relative self-stretch">
      <Image
        src="/images/philips-affiniti-50.webp"
        alt="Aparat echokardiograficzny Philips Affiniti 50"
        fill
        className="object-contain object-top"
      />
    </div>

  </div>
)

export default function Page() {
  return (
    <SpecialtyPage
      title="Kardiologia dziecięca"
      label="Specjalność"
      description="Kompleksowa opieka kardiologiczna dla dzieci od urodzenia do 18. roku życia."
      heroImage="/images/kardiologia-2.jpg"
      conditions={conditions}
      doctors={doctors.filter(d => d.group === "Kardiologia dziecięca")}
      extraContent={echoContent}
    />
  )
}
