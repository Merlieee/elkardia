"use client"

import Link from "next/link"
import { Phone, ArrowLeft, ArrowRight, CheckCircle, Clock, CreditCard, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Doctor } from "@/lib/doctors"
import { useTranslation } from "react-i18next"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

export function DoctorPageContent({ doctor }: { doctor: Doctor }) {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === "en"
  const d = t

  const groupLabel = t(`doctorGroups.${doctor.group}`, { defaultValue: doctor.group })

  return (
    <div className="bg-white">

      {/* ── HEADER ── */}
      <section className="border-b border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/lekarze" className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t("doctor.back")}
          </Link>
          <div className="mt-6 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#EE3920]/10 text-2xl font-bold text-[#EE3920]">
              {initials(doctor.name)}
            </div>
            <div>
              <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{groupLabel}</p>
              <h1 className="text-balance mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">{doctor.name}</h1>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.tags.map(tag => (
                  <span key={tag} className="rounded-md bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
                    {t(`doctorTags.${tag}`, { defaultValue: tag })}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left: bio + conditions + services */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <h2 className="text-balance text-lg font-semibold text-slate-900 mb-3">{t("doctor.about")}</h2>
                <p className="text-pretty leading-relaxed text-slate-600">{doctor.bio}</p>
              </div>

              {doctor.conditions && doctor.conditions.length > 0 && (
                <div>
                  <h2 className="text-balance text-lg font-semibold text-slate-900 mb-4">{t("doctor.scope")}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.conditions.map(c => (
                      <div key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {doctor.services && doctor.services.length > 0 && (
                <div>
                  <h2 className="text-balance text-lg font-semibold text-slate-900 mb-4">{t("doctor.services")}</h2>
                  <div className="flex flex-col gap-2">
                    {doctor.services.map(s => (
                      <div key={s} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {doctor.patientInfo && (
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="h-4 w-4 text-[#EE3920]" />
                    <h2 className="text-balance text-sm font-semibold text-slate-900">{t("doctor.patientInfo")}</h2>
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-slate-700">
                    {doctor.patientInfo.minAge !== undefined && (
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">{t("doctor.minAge")}</span>
                        <span className="font-medium text-slate-900">{doctor.patientInfo.minAge} {t("doctor.years")}</span>
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-slate-500">{t("doctor.nfz")}</span>
                      <span className="font-medium text-slate-900">{doctor.patientInfo.nfz ? t("doctor.yes") : t("doctor.no")}</span>
                    </div>
                    {doctor.patientInfo.notes && doctor.patientInfo.notes.map(n => (
                      <p key={n} className="text-slate-600 border-t border-slate-200 pt-3 first:border-0 first:pt-0">{n}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: prices + hours + CTA */}
            <div className="flex flex-col gap-6">

              {doctor.hours && (
                <div className="rounded-xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-[#EE3920]" />
                    <h3 className="text-balance font-semibold text-slate-900 text-sm">{t("doctor.hours")}</h3>
                  </div>
                  <p className="text-pretty text-sm text-slate-600 leading-relaxed">{doctor.hours}</p>
                </div>
              )}

              {doctor.prices && doctor.prices.length > 0 && (
                <div className="rounded-xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="h-4 w-4 text-[#EE3920]" />
                    <h3 className="text-balance font-semibold text-slate-900 text-sm">{t("doctor.prices")}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {doctor.prices.map(p => (
                      <div key={p.label} className="flex items-start justify-between gap-3 text-sm">
                        <span className="text-slate-600">{p.label}</span>
                        <span className="shrink-0 font-semibold text-slate-900">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-xl bg-[#EE3920] p-5 text-white">
                <h3 className="text-balance font-semibold mb-1">{t("doctor.ctaTitle")}</h3>
                <p className="text-pretty text-sm text-white/70 mb-4">{t("doctor.ctaSubtitle")}</p>
                <a href="/rejestracja" className="block">
                  <Button className="w-full bg-white text-[#EE3920] hover:bg-slate-100 gap-1 font-semibold">
                    {t("doctor.register")} <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="tel:+48815657075" className="mt-2 flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5" /> (81) 565 70 75
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
