import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"
import { BadaniaSearch } from "@/components/badania-search"
import { DoktorEkgLogo } from "@/components/logos"

export const metadata: Metadata = {
  title: "Badania diagnostyczne",
  alternates: { canonical: "/badania" },
  description: "Pełna diagnostyka kardiologiczna w Elkardia Lublin — EKG, echo serca, Holter EKG i RR, tilt-test, USG Doppler, badanie elektrofizjologiczne. Holter wysyłany kurierem do domu.",
  openGraph: {
    title: "Badania diagnostyczne — Elkardia Lublin",
    description: "EKG, echo serca, Holter EKG i ciśnieniowy, tilt-test, USG Doppler. Wyniki tego samego dnia. Holter dostępny kurierem.",
    url: "https://elkardia.pl/badania",
    images: [{ url: "/images/kardiologia-2.webp" }],
  },
}


export default function BadaniaPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[520px] overflow-hidden">
        <Image src="/images/kardiologia-3.webp" alt="Badania diagnostyczne" fill className="object-cover object-[50%_100%]" priority />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/85 to-transparent" />
        <div className="relative flex h-full items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">Diagnostyka</p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">Badania diagnostyczne</h1>
              <p className="text-pretty mt-4 text-base text-white leading-relaxed">
                Pełen profil badań kardiologicznych, USG i Dopplera pod jednym dachem. Tylko certyfikowany, najnowszy sprzęt — wyniki tego samego dnia.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/rejestracja">
                  <Button className="group h-12 gap-2 bg-white px-7 text-base font-semibold text-slate-900 hover:bg-slate-100">
                    Umów badanie <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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

      {/* ── FULL LIST ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold mb-3">Pełna lista badań</h2>
          <p className="text-pretty text-muted-foreground mb-8">Wszystkie badania dostępne w Elkardii.</p>
          <BadaniaSearch />
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-muted/30 pb-20 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Dlaczego warto nam zaufać</p>
          <h2 className="text-balance mt-3 text-3xl font-bold">Najnowszy sprzęt, wyniki tego samego dnia</h2>
          <p className="text-pretty mt-3 max-w-2xl text-muted-foreground leading-relaxed">
            Dokładna diagnoza zaczyna się od dobrego sprzętu i doświadczonego zespołu. W Elkardii badania wykonujemy aparatem Philips Affiniti 50 do echo i USG, 12-kanałowymi Holterami oraz rejestratorami wielomiesięcznymi — a wyniki omawia lekarz jeszcze tego samego dnia.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wyniki tego samego dnia",
                desc: "Echo, EKG czy Holter — opis lekarza otrzymujesz w dniu badania, bez tygodni oczekiwania.",
              },
              {
                title: "Tilt-test — jedyny w Lublinie",
                desc: "Jako jedyni w Lublinie wykonujemy test pochyleniowy, kluczowy w diagnostyce omdleń i zasłabnięć.",
              },
              {
                title: "Holter z dostawą do domu",
                desc: "Holter EKG, ciśnieniowy i badanie bezdechu sennego wysyłamy kurierem w całej Polsce.",
              },
              {
                title: "Echo na aparacie Philips Affiniti 50",
                desc: "Echokardiografia najnowszej generacji — precyzyjne obrazowanie u dorosłych, dzieci i noworodków.",
              },
              {
                title: "Pełen zakres USG i Doppler",
                desc: "Od tarczycy i jamy brzusznej po tętnice szyjne i żyły kończyn — diagnostyka wszystkich narządów i naczyń.",
              },
              {
                title: "Przyjazna diagnostyka dziecięca",
                desc: "EKG, echo, Holter i monitoring saturacji dla najmłodszych — w spokojnej atmosferze dostosowanej do dziecka.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border bg-card p-6">
                <h3 className="text-balance font-bold text-base mb-2">{c.title}</h3>
                <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME TESTING ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <DoktorEkgLogo className="h-12 w-auto" />
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Badania w domu pacjenta
              </h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">
                Nie możesz dojechać? Holter EKG, holter ciśnieniowy i badanie bezdechu sennego dostarczamy kuriersko na terenie całej Polski. Leczymy chrapanie i bezdech w Twojej sypialni.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Holter EKG z dostawą",
                "Holter ciśnieniowy RR",
                "Rejestratory arytmii",
                "Diagnostyka bezdechu",
                "Telekonsultacja",
              ].map((t) => (
                <span key={t} className="text-sm text-slate-500">{t}</span>
              ))}
            </div>
            <a href="https://doktorekg.pl" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                Odwiedź doktorekg.pl <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">Umów badanie</h2>
          <p className="text-pretty mx-auto mt-4 max-w-md leading-relaxed text-white/70">
            Rejestracja online 24h lub telefonicznie pon–pt 8:00–20:00.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/rejestracja">
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
