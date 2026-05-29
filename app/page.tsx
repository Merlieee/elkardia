"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { SpecialtiesGrid } from "@/components/specialties-grid"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { Button } from "@/components/ui/button"
import { DoktorEkgLogo } from "@/components/logos"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export default function HomePage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const h = lang === "en" ? en.home : pl.home

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[760px] overflow-hidden">
        <Image src="/images/hero-1.webp" alt="Elkardia – Lubelskie Centrum Kardiologii" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-950/70 to-transparent" />

        <div className="relative flex h-full flex-col justify-end pb-28">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="text-pretty mb-4 text-sm font-medium uppercase tracking-widest text-white">{h.hero.eyebrow}</p>
            <h1 className="text-balance max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {h.hero.title.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className="text-pretty mt-6 max-w-xl text-lg leading-relaxed text-white/80">{h.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/rejestracja">
                <Button size="lg" className="group inline-flex h-12 items-center justify-center gap-1 bg-[#EE3920] px-6 text-base font-semibold text-white shadow-none hover:bg-[#d4321c]">
                  {h.hero.bookBtn}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="tel:+48815657075">
                <Button size="lg" variant="ghost" className="h-12 gap-2 border border-white/20 px-6 text-base text-white hover:bg-white/10 hover:text-white">
                  <Phone className="h-4 w-4" />
                  {h.hero.phoneBtn}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 md:mx-0 md:grid-cols-4">
            {([
              { value: h.stats.sinceValue, label: h.stats.since },
              { value: "20+", label: h.stats.specialties },
              { value: "24h", label: h.stats.onlineReg },
              { value: "80–90%", label: h.stats.ablationSuccess },
            ] as const).map((s, i) => (
              <div key={s.label}
                className={`flex flex-col items-center border-slate-200 px-2 py-8 text-center md:py-10 ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i > 0 ? "md:border-l" : ""}`}>
                <span className="text-2xl font-bold text-slate-900 sm:text-4xl">{s.value}</span>
                <span className="mt-2 text-xs leading-tight text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="border-t border-slate-200 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{h.services.eyebrow}</p>
            <h2 className="text-balance mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{h.services.heading}</h2>
          </div>
          <SpecialtiesGrid />
        </div>
      </section>

      {/* ── ABLACJA ───────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-pretty text-sm font-semibold uppercase tracking-widest text-[#EE3920]">{h.ablacja.eyebrow}</p>
              <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{h.ablacja.heading}</h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">{h.ablacja.body}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {([
                  { v: h.ablacja.stat1v, l: h.ablacja.stat1l },
                  { v: h.ablacja.stat2v, l: h.ablacja.stat2l },
                  { v: h.ablacja.stat3v, l: h.ablacja.stat3l },
                  { v: h.ablacja.stat4v, l: h.ablacja.stat4l },
                ] as const).map((s) => (
                  <div key={s.l} className="rounded-xl border bg-card p-4">
                    <div className="text-[1.7rem] font-bold text-slate-900">{s.v}</div>
                    <div className="mt-1 text-sm text-slate-500">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/ablacja-serca" className="mt-8 inline-flex">
                <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                  {h.ablacja.moreBtn}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {([
                { img: "/images/ablacja-AFL.webp", label: h.ablacjaImages.afl },
                { img: "/images/ablacja-AVNRT.webp", label: h.ablacjaImages.avnrt },
                { img: "/images/ablacja-VT.webp", label: h.ablacjaImages.vt },
                { img: "/images/ablacja-WPW.webp", label: h.ablacjaImages.wpw },
              ] as const).map((item) => (
                <div key={item.label} className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                  <Image src={item.img} alt={item.label} fill className="object-cover opacity-80" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="rounded-md bg-black/70 px-2 py-0.5 text-xs text-slate-300">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KARDIOLOGIA DZIECIĘCA ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image src="/images/spec-4.webp" alt={h.pediatric.eyebrow} fill className="object-cover object-[68%]" />
            </div>
            <div>
              <p className="text-pretty text-sm font-semibold uppercase tracking-widest text-[#EE3920]">{h.pediatric.eyebrow}</p>
              <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{h.pediatric.heading}</h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">{h.pediatric.body}</p>
              <div className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4">
                {h.pediatric.conditions.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/kardiologia-dziecieca" className="mt-8 inline-flex">
                <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                  {h.pediatric.moreBtn}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTICS ───────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-pretty text-sm font-semibold uppercase tracking-widest text-[#EE3920]">{h.diagnostics.eyebrow}</p>
              <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{h.diagnostics.heading}</h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">{h.diagnostics.body}</p>
              <div className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4">
                {h.diagnostics.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/badania" className="mt-8 inline-flex">
                <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                  {h.diagnostics.moreBtn}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image src="/images/kardiologia-3.webp" alt={h.diagnostics.eyebrow} fill className="object-cover object-[68%_65%]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PORADNIE ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{h.clinics.eyebrow}</p>
            <h2 className="text-balance mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{h.clinics.heading}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {h.clinics.items.map((p) => (
              <Link key={p.label} href={p.href} className="group flex items-center justify-between rounded-xl bg-white p-4 text-sm text-slate-700 transition-colors hover:bg-[#EE3920] hover:text-white">
                {p.label}
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── drEKG ─────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <DoktorEkgLogo className="h-12 w-auto" />
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{h.drekgSection.heading}</h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">{h.drekgSection.body}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {h.drekgSection.features.map((feat) => (
                <span key={feat} className="text-sm text-slate-500">{feat}</span>
              ))}
            </div>
            <a href="https://doktorekg.pl">
              <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                {h.drekgSection.visitBtn}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <div className="mt-4 w-full max-w-2xl rounded-2xl bg-slate-50 p-8 text-left">
              <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{h.drekgSection.clinicsLabel}</p>
              <h3 className="text-balance mt-2 text-xl font-bold text-slate-900">{h.drekgSection.clinicsHeading}</h3>
              <p className="text-pretty mt-3 leading-relaxed text-slate-600 text-sm">{h.drekgSection.clinicsBody}</p>
              <a href="mailto:rejestracja@elkardia.pl" className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#EE3920] hover:underline">
                {h.drekgSection.contactLink} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ────────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{h.map.eyebrow}</p>
            <h2 className="text-balance mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{h.map.heading}</h2>
            <p className="text-pretty mt-2 text-sm text-slate-500">{h.map.address}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe src="https://maps.google.com/maps?cid=9985688829928667718&output=embed&z=17" width="100%" height="460" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <ReviewsCarousel />

      {/* ── DISCOUNT CARDS ───────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{h.discounts.eyebrow}</p>
            <h2 className="text-balance mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{h.discounts.heading}</h2>
            <p className="text-pretty mx-auto mt-3 max-w-xl leading-relaxed text-slate-600">{h.discounts.body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <div className="h-28 overflow-hidden rounded-xl sm:h-32">
                <Image src="/images/karta-duzej-rodziny 1.png" alt="Tu honorujemy Kartę Dużej Rodziny" width={394} height={368} className="h-full w-auto scale-[1.06]" />
              </div>
              <Image src="/images/karta-seniora 1.png" alt="Tu honorujemy Kartę Seniora" width={2482} height={1750} className="h-28 w-auto rounded-xl sm:h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSURANCE PARTNERS ───────────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{h.insurance.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{h.insurance.heading}</h2>
              <p className="mt-3 max-w-md leading-relaxed text-slate-600">{h.insurance.body}</p>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:flex-1">
              {[
                { src: "/images/tuzdrowie-logo.svg",  alt: "TuZdrowie",     width: 160, height: 48 },
                { src: "/images/swiatzdrowia.svg",     alt: "Świat Zdrowia", width: 160, height: 48 },
                { src: "/images/saneo-logo2.png",      alt: "Saneo",         width: 140, height: 48 },
                { src: "/images/polmed-logo.webp",     alt: "Polmed",        width: 140, height: 48 },
              ].map((logo) => (
                <div key={logo.alt} className="flex items-center justify-center rounded-xl bg-white p-6">
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0C71C3] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <Image src="/images/orly-medycyny.png" alt="Orły Medycyny" width={220} height={66} className="h-10 w-auto opacity-90 brightness-0 invert" />
            {[2022, 2023, 2024].flatMap((year) => [
              <Image key={`laureat-${year}`} src={`/images/orly-laureat-${year}.png`} alt={`${year} Laureat Konkursu Orły Medycyny`} width={83} height={60} className="h-12 w-auto opacity-90 brightness-0 invert" />,
              <Image key={`gold-${year}`} src={`/images/orly-gold-${year}.png`} alt={`${year} Gold Orły Medycyny`} width={83} height={60} className="h-12 w-auto opacity-90 brightness-0 invert" />,
            ])}
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{h.cta.heading}</h2>
          <p className="text-pretty mx-auto mt-6 max-w-md text-white/70 leading-relaxed">{h.cta.body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a href="/rejestracja">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#0C71C3] hover:bg-slate-50">
                {t("common.onlineReg24h")} <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </a>
            <a href="tel:+48815657075">
              <Button size="lg" variant="ghost" className="h-12 gap-2 border border-white/30 px-6 text-base text-white hover:bg-white/10 hover:text-white">
                <Phone className="h-4 w-4" />
                (81) 565 70 75
              </Button>
            </a>
          </div>
          <p className="text-pretty mt-6 text-sm text-white/50">{h.cta.address}</p>
        </div>
      </section>

    </div>
  )
}
