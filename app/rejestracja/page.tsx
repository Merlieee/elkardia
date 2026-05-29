"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { BookingEmbed } from "@/components/booking-embed"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

export default function RejestracjaPage() {
  const { i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const r = lang === "en" ? en.rejestracja : pl.rejestracja

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[520px] overflow-hidden">
        <Image src="/images/rejestracja.webp" alt="Rejestracja" fill className="object-cover object-[50%_40%]" priority />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/85 to-transparent" />
        <div className="relative flex h-full items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">{r.hero.eyebrow}</p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{r.hero.title}</h1>
              <p className="text-pretty mt-4 text-base text-white/70 leading-relaxed">{r.hero.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONLINE BOOKING WIDGET ── */}
      <section id="rejestracja-online" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8">
          <div className="mb-5 text-center">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{r.online.eyebrow}</p>
            <h2 className="text-balance mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{r.online.heading}</h2>
            <p className="text-pretty mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
              {r.online.body}
            </p>
          </div>
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <BookingEmbed />
          </div>
          <p className="text-pretty mt-4 text-center text-sm text-slate-500">
            {r.online.problem}{" "}
            <a href="tel:+48815657075" className="font-medium text-[#EE3920] hover:underline">(81) 565 70 75</a>
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="border-t border-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="tel:+48815657075" className="group flex flex-col gap-4 rounded-2xl bg-slate-50 p-7 transition-colors hover:bg-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EE3920]/10 text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-pretty font-semibold text-slate-900">{r.phone.title}</p>
                <p className="text-pretty mt-1 text-sm text-slate-500">{r.phone.hours}</p>
              </div>
              <div className="mt-auto space-y-0.5">
                <p className="text-pretty text-sm font-semibold text-slate-900">+48 81 565 70 75</p>
                <p className="text-pretty text-sm text-slate-500">+48 536 102 112</p>
              </div>
            </a>

            <a href="mailto:rejestracja@elkardia.pl" className="group flex flex-col gap-4 rounded-2xl bg-slate-50 p-7 transition-colors hover:bg-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EE3920]/10 text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-pretty font-semibold text-slate-900">{r.email.title}</p>
                <p className="text-pretty mt-1 text-sm text-slate-500">{r.email.subtitle}</p>
              </div>
              <span className="mt-auto text-sm font-semibold text-slate-900">rejestracja@elkardia.pl</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ADDRESS + HOURS ── */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-balance text-2xl font-bold mb-6">{r.location.heading}</h2>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-pretty font-medium">{r.location.name}</p>
                  <p className="text-pretty text-sm text-muted-foreground">{r.location.address}</p>
                  <p className="text-pretty text-sm text-muted-foreground mt-1">{r.location.parking}</p>
                </div>
              </div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                <iframe src="https://maps.google.com/maps?cid=9985688829928667718&output=embed&z=17" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Lokalizacja" />
              </div>
            </div>
            <div>
              <h2 className="text-balance text-2xl font-bold mb-6">{r.hours.heading}</h2>
              <div className="rounded-xl border bg-card overflow-hidden mb-4">
                {r.hours.days.map((day, i) => (
                  <div key={day} className={`flex justify-between px-5 py-3.5 text-sm ${i < 6 ? "border-b" : ""}`}>
                    <span className="font-medium">{day}</span>
                    <span className={i < 5 ? "font-medium text-slate-900" : "text-[#EE3920]/60 font-medium"}>
                      {i < 5 ? r.hours.openHours : r.hours.closed}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                <Clock className="h-5 w-5 text-emerald-600 shrink-0" />
                <p className="text-pretty text-sm text-emerald-700">
                  {r.hours.online24h} <strong>{r.hours.online24hSuffix}</strong>{r.hours.online24hDays}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL ── */}
      <section className="py-10 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-balance text-base font-semibold mb-4">{r.legal.heading}</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground sm:grid-cols-4">
            <div><span className="font-medium text-foreground">{r.legal.company}:</span> Elkardia Sp. z o.o.</div>
            <div><span className="font-medium text-foreground">{r.legal.krs}:</span> 0000945384</div>
            <div><span className="font-medium text-foreground">{r.legal.nip}:</span> 7123429164</div>
            <div><span className="font-medium text-foreground">{r.legal.registry}:</span> 000000249308</div>
          </div>
        </div>
      </section>
    </div>
  )
}
