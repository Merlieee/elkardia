"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { BadaniaSearch } from "@/components/badania-search"
import { DoktorEkgLogo } from "@/components/logos"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export default function BadaniaPage() {
  const { i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const b = lang === "en" ? en.badaniaPage : pl.badaniaPage
  const c = lang === "en" ? en.common : pl.common

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[520px] overflow-hidden">
        <Image src="/images/kardiologia-3.webp" alt={b.hero.title} fill className="object-cover object-[50%_100%]" priority />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/85 to-transparent" />
        <div className="relative flex h-full items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">{b.hero.eyebrow}</p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{b.hero.title}</h1>
              <p className="text-pretty mt-4 text-base text-white leading-relaxed">{b.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/rejestracja">
                  <Button className="group h-12 gap-2 bg-white px-7 text-base font-semibold text-slate-900 hover:bg-slate-100">
                    {b.hero.bookBtn} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </a>
                <a href="tel:+48815657075">
                  <Button variant="ghost" className="h-12 gap-2 border border-white/50 px-7 text-base text-white hover:bg-white/10 hover:text-white">
                    <Phone className="h-4 w-4" /> (81) 565 70 75
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL LIST ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold mb-3">{b.fullList.heading}</h2>
          <p className="text-pretty text-muted-foreground mb-8">{b.fullList.body}</p>
          <BadaniaSearch />
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-muted/30 pb-20 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{b.whyUs.eyebrow}</p>
          <h2 className="text-balance mt-3 text-3xl font-bold">{b.whyUs.heading}</h2>
          <p className="text-pretty mt-3 max-w-2xl text-muted-foreground leading-relaxed">{b.whyUs.body}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {b.whyUs.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border bg-card p-6">
                <h3 className="text-balance font-bold text-base mb-2">{card.title}</h3>
                <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME TESTING ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <DoktorEkgLogo className="h-12 w-auto" />
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{b.homeTesting.heading}</h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">{b.homeTesting.body}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {b.homeTesting.features.map((feat) => (
                <span key={feat} className="text-sm text-slate-500">{feat}</span>
              ))}
            </div>
            <a href="https://doktorekg.pl" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                {b.homeTesting.visitBtn} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{b.cta.heading}</h2>
          <p className="text-pretty mx-auto mt-4 max-w-md leading-relaxed text-white/70">{b.cta.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/rejestracja">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#0C71C3] hover:bg-slate-100">
                {c.onlineReg24h} <ArrowRight className="h-4 w-4" />
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
