"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { formatPrice, labSections, labTestCount, priceListUpdated } from "@/lib/badania-lab"

export function BadaniaLabPage() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === "en"
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  const updated = isEn
    ? priceListUpdated
    : priceListUpdated.split("-").reverse().join(".")

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative flex min-h-[440px] flex-col overflow-hidden">
        <Image src="/images/badania-9.webp" alt={isEn ? "Laboratory tests" : "Badania laboratoryjne"} fill className="object-cover object-[50%_40%]" priority />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/90 to-transparent" />
        <div className="relative flex flex-1 flex-col justify-between py-8">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <Link
              href="/badania"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {isEn ? "Tests" : "Badania"}
            </Link>
          </div>
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pb-8">
            <div className="max-w-xl">
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">
                {isEn ? "Laboratory" : "Laboratoryjne"}
              </p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">
                {isEn ? "Laboratory tests" : "Badania laboratoryjne"}
              </h1>
              <p className="text-pretty mt-4 max-w-lg text-base leading-relaxed text-white/80">
                {isEn
                  ? `${labTestCount} laboratory tests with prices — from basic blood counts to hormones, tumour markers and infection serology. Registration by telephone.`
                  : `${labTestCount} badań laboratoryjnych wraz z cenami — od podstawowej morfologii po hormony, markery nowotworowe i serodiagnostykę infekcji. Rejestracja telefoniczna.`}
              </p>
              <div className="mt-8">
                <a href="tel:+48815657075">
                  <Button className="group h-12 gap-2 bg-white px-7 text-base font-semibold text-slate-900 hover:bg-slate-100">
                    <Phone className="h-4 w-4" /> (81) 565 70 75
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH + SECTIONS ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">

            <div>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={t("badania.search")}
                  className="w-full rounded-xl border bg-white py-3 pl-10 pr-10 text-sm outline-none ring-0 transition focus:border-[#EE3920] focus:ring-1 focus:ring-[#EE3920]"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="mt-3 text-xs text-slate-400">
                {isEn ? `Prices in PLN. Updated ${updated}.` : `Ceny w złotych. Aktualne na ${updated}.`}
              </p>
            </div>

            {(() => {
              const visible = labSections
                .map(section => ({
                  section,
                  tests: q
                    ? section.tests.filter(test => (isEn ? test.en : test.pl).toLowerCase().includes(q))
                    : section.tests,
                }))
                .filter(s => s.tests.length > 0)

              if (visible.length === 0) {
                return <p className="text-pretty text-sm text-slate-500">{t("badania.noResults", { query })}</p>
              }

              return visible.map(({ section, tests }) => (
                <div key={section.id} id={section.id} className="scroll-mt-8">
                  <div className="mb-4 flex items-center gap-4">
                    <h2 className="text-balance text-xl font-bold text-slate-900">
                      {isEn ? section.headingEn : section.headingPl}
                    </h2>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <p className="text-pretty mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {isEn ? section.descEn : section.descPl}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {tests.map(test => (
                      <div
                        key={test.pl}
                        className="flex items-center justify-between gap-4 rounded-lg border bg-card px-4 py-3 text-sm"
                      >
                        <span className="min-w-0">{isEn ? test.en : test.pl}</span>
                        <span className="shrink-0 font-semibold tabular-nums text-slate-900">
                          {formatPrice(test.price, isEn)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            })()}

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {isEn ? "Book a laboratory test" : "Umów badanie laboratoryjne"}
          </h2>
          <p className="text-pretty mx-auto mt-4 max-w-md leading-relaxed text-white/70">
            {isEn
              ? "Laboratory tests are booked by telephone. Call us and we will advise on preparation."
              : "Badania laboratoryjne umawiamy telefonicznie. Zadzwoń — doradzimy w kwestii przygotowania."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+48815657075">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#0C71C3] hover:bg-slate-100">
                <Phone className="h-4 w-4" /> (81) 565 70 75
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
