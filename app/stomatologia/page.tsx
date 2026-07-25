"use client"

import { Heart } from "lucide-react"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export default function Page() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const page = lang === "en" ? en.pages.dentistry : pl.pages.dentistry
  const usp = page.cardiacUsp
  const hours = page.hours

  const cardiacUspContent = (
    <div className="flex flex-col gap-4 rounded-xl bg-slate-50 p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EE3920]/8 text-[#EE3920]">
        <Heart className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-balance font-semibold text-slate-900 text-lg">{usp.heading}</h3>
        <p className="text-pretty mt-1 text-sm leading-relaxed text-slate-500">{usp.body}</p>
      </div>
    </div>
  )

  const hoursContent = (
    <div className="mt-10 lg:mt-auto lg:pt-10">
      <h2 className="text-balance mb-6 text-2xl font-bold text-slate-900">{hours.heading}</h2>
      <dl className="flex flex-col rounded-xl bg-slate-50 px-5 py-1">
        {hours.days.map((d) => (
          <div key={d.day} className="flex items-baseline justify-between gap-4 border-b border-slate-200 py-3 last:border-0">
            <dt className="text-sm text-slate-700">{d.day}</dt>
            <dd className="text-sm font-semibold tabular-nums text-slate-900">{d.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  )

  return (
    <SpecialtyPage
      content={{ pl: pl.pages.dentistry, en: en.pages.dentistry }}
      heroImage="/images/stomatologia-7.webp"
      heroPosition="center_100%"
      doctors={doctors.filter(d => d.group === "Stomatologia")}
      belowSpecialists={hoursContent}
      extraContent={cardiacUspContent}
    />
  )
}
