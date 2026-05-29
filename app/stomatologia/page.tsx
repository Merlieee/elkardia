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
  const usp = lang === "en" ? en.pages.dentistry.cardiacUsp : pl.pages.dentistry.cardiacUsp

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

  return (
    <SpecialtyPage
      content={{ pl: pl.pages.dentistry, en: en.pages.dentistry }}
      heroImage="/images/stomatologia-7.webp"
      heroPosition="center_100%"
      doctors={doctors.filter(d => d.group === "Stomatologia")}
      extraContent={cardiacUspContent}
    />
  )
}
