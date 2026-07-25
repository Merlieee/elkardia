"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, ClipboardList } from "lucide-react"
import { KonsultacjaForm } from "@/components/konsultacja-form"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"
import { catHeroImage, type BadanieSubpageData } from "@/lib/badania-subpages"

export function BadanieSubpage({ data }: { data: BadanieSubpageData }) {
  const { i18n } = useTranslation()
  const t = i18n.language === "en" ? en.ablacja.konsultacja : pl.ablacja.konsultacja
  const heroImage = catHeroImage[data.cat]

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative flex min-h-[440px] flex-col overflow-hidden">
        <Image src={heroImage} alt={data.title} fill className="object-cover object-[50%_40%]" priority />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/90 to-transparent" />
        <div className="relative flex flex-1 flex-col justify-between py-8">
          {/* breadcrumb */}
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <Link
              href="/badania"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Badania
            </Link>
          </div>
          {/* title block */}
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pb-8">
            <div className="max-w-xl">
              <div className="mb-3">
                <p className="inline-block rounded bg-[#EE3920]/20 px-2.5 py-1 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">
                  {data.cat}
                </p>
              </div>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{data.title}</h1>
              <p className="text-pretty mt-4 max-w-lg text-base leading-relaxed text-white/80">{data.heroBody}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4" />
                Czas trwania: {data.duration}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">O badaniu</p>
              <h2 className="text-balance mb-6 text-3xl font-bold">{data.what.heading}</h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">{data.what.body}</p>
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl lg:h-72">
              <Image src={heroImage} alt={data.what.heading} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS + INDICATIONS ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border bg-background p-6">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Wskazania</p>
                <ul className="space-y-3">
                  {data.indications.map((ind) => (
                    <li key={ind} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EE3920]" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Przebieg badania</p>
              <h2 className="text-balance mb-6 text-3xl font-bold">{data.how.heading}</h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">{data.how.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREPARATION ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ClipboardList className="h-5 w-5 text-[#EE3920]" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Przygotowanie</p>
          </div>
          <h2 className="text-balance mt-3 text-3xl font-bold">Jak przygotować się do badania?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {data.prep.map((item, i) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border bg-card p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EE3920]/10 text-sm font-bold text-[#EE3920]">
                  {i + 1}
                </span>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK CONSULTATION FORM ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{t.eyebrow}</p>
              <h2 className="text-balance mt-3 text-3xl font-bold leading-tight">{t.heading}</h2>
            </div>
            <div>
              <KonsultacjaForm t={t} />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
