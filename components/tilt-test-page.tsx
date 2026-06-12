"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowRight, CheckCircle, ChevronDown, Phone } from "lucide-react"
import { FaqAccordion } from "@/components/faq-accordion"
import { getDoctorBySlug } from "@/lib/doctors"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter((w) => !skip.test(w))
  return parts.slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join("")
}

export function TiltTestPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const page = lang === "en" ? en.tiltTestPage : pl.tiltTestPage
  const e = page.tilt
  const c = lang === "en" ? en.common : pl.common

  const [showAllDoctors, setShowAllDoctors] = useState(false)

  const doctors = page.doctors.slugs
    .map((slug) => getDoctorBySlug(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))

  const renderDoctor = (d: (typeof doctors)[number]) => (
    <Link key={d.slug} href={`/lekarze/${d.slug}`}
      className="group flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EE3920]/10 text-sm font-bold text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
        {initials(d.name)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-pretty font-semibold text-slate-900 text-sm leading-tight">{d.name}</p>
        <p className="text-pretty mt-0.5 text-xs text-slate-500">{d.tags.slice(0, 2).map(tag => t(`doctorTags.${tag}`, { defaultValue: tag })).join(" · ")}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
    </Link>
  )

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[520px] flex-col overflow-hidden">
        <Image src="/images/spec-1.webp" alt={page.hero.title} fill className="object-cover object-[50%_30%]" priority />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/85 to-transparent" />
        <div className="relative flex flex-1 items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">{page.hero.eyebrow}</p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{page.hero.title}</h1>
              <p className="text-pretty mt-4 text-base text-white/80 leading-relaxed">{page.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/rejestracja">
                  <Button className="group h-12 gap-2 bg-white px-7 text-base font-semibold text-slate-900 hover:bg-slate-100">
                    {page.hero.bookBtn} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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

      {/* ── CONTENT ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">

            {/* ── Intro ── */}
            <div>
              <p className="text-pretty mb-2 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{e.eyebrow}</p>
              <h2 className="text-balance mb-5 text-3xl font-bold text-slate-900">{e.heading}</h2>
              <p className="text-pretty mb-4 text-base leading-relaxed text-slate-600">{e.intro1}</p>
              <p className="text-pretty mb-4 text-base leading-relaxed text-slate-600">{e.intro2}</p>
              <p className="text-pretty text-base leading-relaxed text-slate-600">{e.intro3}</p>
            </div>

            {/* ── How it goes ── */}
            <div>
              <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.how}</h3>
              <div className="grid gap-4 lg:grid-cols-3">
                {([e.step1, e.step2, e.step3] as typeof e.step1[]).map((step) => (
                  <div key={step.num} className="rounded-xl bg-slate-50 p-6">
                    <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#EE3920]/10 text-xs font-bold text-[#EE3920]">{step.num}</div>
                    <h4 className="text-balance mb-3 font-semibold text-slate-900">{step.title}</h4>
                    <p className="text-pretty text-sm leading-relaxed text-slate-600">{step.body}</p>
                    {"items" in step && step.items && (
                      <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                        {(step.items as string[]).map((item: string) => (
                          <div key={item} className="flex gap-2"><span className="text-slate-400">–</span><span>{item}</span></div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Indications and preparation ── */}
            <div>
              <h3 className="text-balance mb-8 text-xl font-bold text-slate-900">{e.whenHeading}</h3>
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="border-l-2 border-[#EE3920] pl-5">
                  <h4 className="text-balance mb-2 font-semibold text-slate-900">{e.when1.title}</h4>
                  <p className="text-pretty mb-3 text-sm text-slate-500">{e.when1.intro}</p>
                  <div className="space-y-1.5">
                    {e.when1.items.map((item: string) => <p key={item} className="text-sm text-slate-600">— {item}</p>)}
                  </div>
                </div>
                <div className="border-l-2 border-[#EE3920] pl-5">
                  <h4 className="text-balance mb-2 font-semibold text-slate-900">{e.when2.title}</h4>
                  <p className="text-pretty mb-3 text-sm text-slate-500">{e.when2.intro}</p>
                  <div className="space-y-1.5">
                    {e.when2.items.map((item: string) => <p key={item} className="text-sm text-slate-600">— {item}</p>)}
                  </div>
                </div>
                <div className="border-l-2 border-[#EE3920] pl-5">
                  <h4 className="text-balance mb-2 font-semibold text-slate-900">{e.when3.title}</h4>
                  <p className="text-pretty text-sm leading-relaxed text-slate-600">{e.when3.body}</p>
                </div>
              </div>
            </div>

            {/* ── What it assesses ── */}
            <div>
              <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.diseases}</h3>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {e.diseasesList.map((item: string) => (
                  <div key={item} className="flex items-start gap-2.5 border-b border-slate-100 py-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Contraindications ── */}
            <div>
              <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.contra}</h3>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {e.contraList.map((item: string) => (
                  <div key={item} className="flex items-start gap-2.5 border-b border-slate-100 py-3">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Specialists ── */}
            <div>
              <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.specialists}</h3>
              <div className="flex flex-col gap-3">
                {doctors.slice(0, 4).map(renderDoctor)}
              </div>
              {doctors.length > 4 && (
                <>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${showAllDoctors ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-3 pt-3">
                        {doctors.slice(4).map(renderDoctor)}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAllDoctors((v) => !v)}
                    className="group mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#EE3920]/40 hover:text-[#EE3920]"
                  >
                    {showAllDoctors ? e.specialistsShowLess : e.specialistsShowMore}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showAllDoctors ? "rotate-180" : ""}`} />
                  </button>
                </>
              )}
            </div>

            {/* ── FAQ ── */}
            <div>
              <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.faqHeading}</h3>
              <FaqAccordion items={e.faq.map((f) => ({ q: f.q, a: f.a }))} />
              <p className="text-pretty mt-6 text-sm text-slate-500">
                {e.faqContact}{" "}
                <a href="/rejestracja" className="font-medium text-[#EE3920] hover:underline">{e.faqContactLink}</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{page.cta.heading}</h2>
          <p className="text-pretty mx-auto mt-4 max-w-md leading-relaxed text-white/70">{page.cta.body}</p>
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
