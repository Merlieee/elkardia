import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { doctors, groups } from "@/lib/doctors"

export const metadata: Metadata = {
  title: "Lekarze specjaliści",
  description: "Ponad 30 lekarzy specjalistów w Elkardia Lublin — kardiolodzy dorosłych i dziecięcy, elektrofizjolodzy, neurolog, pulmonolog, chirurg naczyniowy, endokrynolodzy, dietetycy i stomatolog.",
  openGraph: {
    title: "Lekarze specjaliści — Elkardia Lublin",
    description: "Ponad 30 lekarzy specjalistów skupionych wokół kardiologii. Umów wizytę online 24h.",
    url: "https://elkardia.pl/lekarze",
  },
}

function toId(group: string) {
  return group.toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź/g, "z").replace(/ż/g, "z")
    .replace(/\s+/g, "-")
}

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

export default function LekarzeePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/images/hero-2.webp" alt="Lekarze specjaliści" fill className="object-cover object-[50%_30%]" />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-950/70 to-transparent" />
        <div className="relative flex h-full items-end pb-12">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Nasz zespół</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Lekarze specjaliści</h1>
            <p className="mt-3 max-w-xl text-white/70">
              Ponad 30 specjalistów różnych dziedzin — skupionych wokół kardiologii.
            </p>
          </div>
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {groups.map((group) => {
              const groupDoctors = doctors.filter(d => d.group === group)
              return (
                <div key={group} id={toId(group)} className="scroll-mt-24">
                  <div className="mb-6 flex items-center gap-4">
                    <h2 className="text-xl font-bold text-slate-900">{group}</h2>
                    <div className="h-px flex-1 bg-slate-100" />
                    <span className="text-xs text-slate-400">
                      {groupDoctors.length} {groupDoctors.length === 1 ? "lekarz" : "lekarzy"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {groupDoctors.map((d) => (
                      <div key={d.slug} className="h-24">
                        <Link
                          href={`/lekarze/${d.slug}`}
                          className="group flex h-full items-start gap-4 overflow-hidden rounded-xl bg-slate-50 p-5 transition-colors hover:bg-slate-100"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EE3920]/10 text-sm font-bold text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
                            {initials(d.name)}
                          </div>
                          <div className="min-w-0 flex-1 overflow-hidden">
                            <div className="flex items-start justify-between gap-2">
                              <p className="line-clamp-1 font-semibold text-slate-900 leading-tight">{d.name}</p>
                              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {d.tags.slice(0, 2).map((t) => (
                                <span key={t} className="rounded-md bg-white px-2 py-0.5 text-xs text-slate-500 ring-1 ring-slate-200">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Umów wizytę</h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/70">
            Rejestracja online 24h lub telefonicznie pon–pt 8:00–20:00.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="https://elkardia.pl/rejestracja-online-24h/">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#0C71C3] hover:bg-slate-100">
                Rejestracja online 24h <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
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
