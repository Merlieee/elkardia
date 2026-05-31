"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Phone, ArrowRight } from "lucide-react"
import { ArrhythmiaList } from "@/components/arrhythmia-list"
import { FaqAccordion } from "@/components/faq-accordion"
import { KonsultacjaForm } from "@/components/konsultacja-form"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

export default function AblacjaPage() {
  const { i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const a = lang === "en" ? en.ablacja : pl.ablacja

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[520px] overflow-hidden">
        <Image src="/images/hero-ablacja.webp" alt="Ablacja serca — zabieg elektrofizjologiczny" fill className="object-cover object-[50%_20%]" priority />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/85 to-transparent" />
        <div className="relative flex h-full items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">{a.hero.eyebrow}</p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{a.hero.title}</h1>
              <p className="text-pretty mt-4 text-base text-white leading-relaxed">{a.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/rejestracja">
                  <Button className="group h-12 gap-2 bg-white px-7 text-base font-semibold text-slate-900 hover:bg-slate-100">
                    {a.hero.bookBtn} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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

      {/* ── WHY US ── */}
      <section className="bg-muted/30 pb-20 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{a.whyUs.eyebrow}</p>
          <h2 className="text-balance mt-3 text-3xl font-bold">{a.whyUs.heading}</h2>
          <p className="text-pretty mt-3 max-w-2xl text-muted-foreground leading-relaxed">{a.whyUs.body}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {a.whyUs.cards.map((c) => (
              <div key={c.title} className="rounded-2xl border bg-card p-6">
                <h3 className="text-balance font-bold text-base mb-2">{c.title}</h3>
                <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold mb-8">{a.methods.heading}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {a.methods.cards.map((m) => (
              <div key={m.title} className="overflow-hidden rounded-2xl border bg-card">
                <div className="relative h-60 bg-black">
                  <Image src={m.img} alt={m.title} fill className="object-contain p-6" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{m.tag}</Badge>
                  <h3 className="text-balance text-xl font-bold">{m.title}</h3>
                  <p className="text-pretty text-sm text-muted-foreground mt-1 mb-3">{m.subtitle}</p>
                  <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-pretty mt-6 text-sm text-muted-foreground border rounded-xl p-4 bg-muted/40">
            <strong>{lang === "en" ? "Note:" : "Uwaga:"}</strong> {a.methods.disclaimer}
          </p>
        </div>
      </section>

      {/* ── ARRHYTHMIA GALLERY ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold mb-3">{a.gallery.heading}</h2>
          <p className="text-pretty text-muted-foreground mb-8">{a.gallery.body}</p>
          <ArrhythmiaList items={a.gallery.items} />
        </div>
      </section>

      {/* ── INDICATIONS / CONTRAINDICATIONS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-balance text-2xl font-bold mb-6">{a.indications.heading}</h2>
              <div className="flex flex-col gap-3">
                {a.indications.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-balance text-2xl font-bold mb-6">{a.contraindications.heading}</h2>
              <div className="flex flex-col gap-3">
                {a.contraindications.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h2 className="text-balance text-2xl font-bold mb-4">{a.leadDoctors.heading}</h2>
                <div className="flex flex-col gap-3">
                  {a.leadDoctors.items.map((d) => (
                    <Link key={d.slug} href={`/lekarze/${d.slug}`} className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:bg-slate-50">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
                        {initials(d.name)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-pretty font-medium text-sm">{d.name}</p>
                        <p className="text-pretty text-xs text-muted-foreground">{a.leadDoctors.subtitle}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold mb-8">{a.faqHeading}</h2>
          <FaqAccordion items={a.faq} />
          <p className="text-pretty mt-6 text-sm text-slate-500">
            {a.faqContact}{" "}
            <a href="/rejestracja" className="font-medium text-[#EE3920] hover:underline">{a.faqContactLink}</a>
          </p>
        </div>
      </section>

      {/* ── QUICK CONSULTATION FORM ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: info */}
            <div>
              <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">
                {a.konsultacja.eyebrow}
              </p>
              <h2 className="text-balance mt-3 text-3xl font-bold leading-tight">
                {a.konsultacja.heading}
              </h2>
            </div>
            {/* Right: form */}
            <div>
              <KonsultacjaForm t={a.konsultacja} />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
