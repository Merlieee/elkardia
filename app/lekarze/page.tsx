"use client"

import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LekarzeSearch } from "@/components/lekarze-search"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export default function LekarzeePage() {
  const { i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const p = lang === "en" ? en.lekarzeePage : pl.lekarzeePage
  const c = lang === "en" ? en.common : pl.common

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[520px] overflow-hidden">
        <Image src="/images/kardiologia-lublin.webp" alt={p.hero.title} fill className="object-cover object-[50%_10%]" />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-950/70 to-transparent" />
        <div className="relative flex h-full items-end pb-12">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="text-pretty mb-2 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{p.hero.eyebrow}</p>
            <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{p.hero.title}</h1>
            <p className="text-pretty mt-3 max-w-xl text-white/70">{p.hero.body}</p>
          </div>
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LekarzeSearch />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{p.cta.heading}</h2>
          <p className="text-pretty mx-auto mt-4 max-w-md leading-relaxed text-white/70">{p.cta.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/rejestracja">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#0C71C3] hover:bg-slate-100">
                {c.onlineReg24h} <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </a>
            <a href="tel:+48815657075">
              <Button size="lg" variant="ghost" className="h-12 gap-2 border border-white/30 px-6 text-base text-white hover:bg-white/10 hover:text-white">
                <Phone className="h-4 w-4" /> (81) 565 70 75
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
