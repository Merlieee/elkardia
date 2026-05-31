"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { useState, useEffect } from "react"
import { KonsultacjaForm } from "@/components/konsultacja-form"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"
import type { AblacjaSubpageData } from "@/lib/ablacja-subpages"

export function AblacjaSubpage({ data }: { data: AblacjaSubpageData }) {
  const { i18n } = useTranslation()
  const t = i18n.language === "en" ? en.ablacja.konsultacja : pl.ablacja.konsultacja
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!zoomed) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomed(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [zoomed])

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[480px] overflow-hidden">
        <Image
          src="/images/23-kopia.webp"
          alt={data.title}
          fill
          className="object-cover object-[50%_30%]"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/90 to-transparent" />
        <div className="relative flex h-full flex-col justify-between py-8">
          {/* breadcrumb */}
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <Link
              href="/ablacja-serca"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Ablacja serca
            </Link>
          </div>
          {/* title block */}
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pb-8">
            <div className="max-w-xl">
              <div className="mb-3">
                <p className="inline-block rounded bg-[#EE3920]/20 px-2.5 py-1 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">
                  {data.short}
                </p>
              </div>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{data.title}</h1>
              <p className="text-pretty mt-4 text-base text-white/80 leading-relaxed max-w-lg">{data.heroBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920] mb-3">O metodzie</p>
              <h2 className="text-balance text-3xl font-bold mb-6">{data.what.heading}</h2>
              <p className="text-pretty text-muted-foreground leading-relaxed text-base">{data.what.body}</p>
            </div>
            <div
              className="relative h-56 cursor-zoom-in overflow-hidden rounded-2xl lg:h-72"
              onClick={() => setZoomed(true)}
            >
              <Image
                src={data.heroImage}
                alt={data.what.heading}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {zoomed && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                onClick={() => setZoomed(false)}
              >
                <button
                  className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  onClick={() => setZoomed(false)}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl">
                  <Image
                    src={data.heroImage}
                    alt={data.what.heading}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PROCEDURE ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border bg-background p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920] mb-5">Wskazania</p>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920] mb-3">Przebieg zabiegu</p>
              <h2 className="text-balance text-3xl font-bold mb-6">{data.procedure.heading}</h2>
              <p className="text-pretty text-muted-foreground leading-relaxed text-base">{data.procedure.body}</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── QUICK CONSULTATION FORM ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">
                {t.eyebrow}
              </p>
              <h2 className="text-balance mt-3 text-3xl font-bold leading-tight">
                {t.heading}
              </h2>
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
