import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Doctor } from "@/lib/doctors"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

type Props = {
  title: string
  label: string
  description: string
  heroImage?: string
  heroPosition?: string
  conditions?: string[]
  doctors: Doctor[]
  extraContent?: React.ReactNode
  heroExtra?: React.ReactNode
}

export function SpecialtyPage({ title, label, description, heroImage, heroPosition = "center_30%", conditions, doctors, extraContent, heroExtra }: Props) {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[520px] overflow-hidden">
        {heroImage && <Image src={heroImage} alt={title} fill className="object-cover" style={{ objectPosition: heroPosition.replace(/_/g, " ") }} priority />}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
        <div className="relative flex h-full items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="text-pretty mb-2 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{label}</p>
            <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">{title}</h1>
            <p className="text-pretty mt-3 max-w-lg text-white/70">{description}</p>
            {heroExtra}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://elkardia.pl/rejestracja-online-24h/">
                <Button className="group h-12 gap-2 bg-white px-7 text-base font-semibold text-slate-900 hover:bg-slate-100">
                  Umów wizytę <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
      </section>

      {/* ── CONTENT ── */}
      {conditions && conditions.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2">

              <div>
                <h2 className="text-balance mb-6 text-2xl font-bold text-slate-900">Leczone schorzenia</h2>
                <div className="flex flex-col gap-3">
                  {conditions.map((c) => (
                    <div key={c} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                      <span className="text-sm text-slate-700">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-balance mb-6 text-2xl font-bold text-slate-900">Specjaliści</h2>
                <div className="flex flex-col gap-3">
                  {doctors.map((d) => (
                    <Link key={d.slug} href={`/lekarze/${d.slug}`}
                      className="group flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EE3920]/10 text-sm font-bold text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
                        {initials(d.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-pretty font-semibold text-slate-900 text-sm leading-tight">{d.name}</p>
                        <p className="text-pretty mt-0.5 text-xs text-slate-500">{d.tags.slice(0, 2).join(" · ")}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {extraContent && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {extraContent}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold text-white">Umów wizytę</h2>
          <p className="text-pretty mx-auto mt-4 max-w-md text-white/70">Rejestracja online 24h lub telefonicznie pon–pt 8:00–20:00.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="https://elkardia.pl/rejestracja-online-24h/">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#0C71C3] hover:bg-slate-100">
                Rejestracja online 24h <ArrowRight className="h-4 w-4" />
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
