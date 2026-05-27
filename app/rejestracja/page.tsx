import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Rejestracja — umów wizytę online 24h",
  alternates: { canonical: "/rejestracja" },
  description: "Zarejestruj się do lekarza specjalisty w Elkardia Lublin — online 24h lub telefonicznie pon–pt 8:00–20:00. Tel. (81) 565 70 75, ul. Pileckiego 23/20.",
  openGraph: {
    images: [{ url: "/images/og-default-logo.png", width: 1200, height: 630, alt: "Elkardia — Lubelskie Centrum Kardiologii" }],
    title: "Rejestracja — Elkardia Lublin",
    description: "Rejestracja online 24h lub telefonicznie pon–pt 8:00–20:00. Szybki dostęp do kardiologów i specjalistów.",
    url: "https://elkardia.pl/rejestracja",
  },
}

export default function RejestracjaPage() {
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
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">Kontakt</p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">Rejestracja i kontakt</h1>
              <p className="text-pretty mt-4 text-base text-white/70 leading-relaxed">Zarejestruj się online przez całą dobę lub zadzwoń do nas w godzinach przyjęć. Nasz zespół chętnie pomoże dobrać odpowiedniego specjalistę.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONLINE BOOKING WIDGET ── */}
      <section id="rejestracja-online" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 text-center">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Rejestracja online</p>
            <h2 className="text-balance mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Umów wizytę online — 24h/dobę</h2>
            <p className="text-pretty mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
              Wybierz specjalizację, lekarza oraz dogodny termin. Rejestracja czynna przez całą dobę, 7 dni w tygodniu.
            </p>
          </div>
          <iframe
            src="https://www.infotel-software.eu/newgrafikonlinev4/index.php/GoController/GetMessage?Serial=4391e423-8704-40db-b3f4-4dd8223e1635"
            title="Rejestracja online — Grafik Online"
            className="h-[860px] w-full rounded-xl sm:h-[740px]"
            sandbox="allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin"
            loading="lazy"
          />
          <p className="text-pretty mt-4 text-center text-sm text-slate-500">
            Problem z rejestracją online? Zadzwoń:{" "}
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
                <p className="text-pretty font-semibold text-slate-900">Telefon</p>
                <p className="text-pretty mt-1 text-sm text-slate-500">Pon–Pt: 8:00–20:00</p>
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
                <p className="text-pretty font-semibold text-slate-900">E-mail</p>
                <p className="text-pretty mt-1 text-sm text-slate-500">Skontaktuj się z nami mailowo</p>
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
              <h2 className="text-balance text-2xl font-bold mb-6">Lokalizacja</h2>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-pretty font-medium">Elkardia Sp. z o.o.</p>
                  <p className="text-pretty text-sm text-muted-foreground">ul. R. W. Pileckiego 23/20, 20-091 Lublin</p>
                  <p className="text-pretty text-sm text-muted-foreground mt-1">Prywatny parking dla pacjentów</p>
                </div>
              </div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                <iframe
                  src="https://maps.google.com/maps?cid=9985688829928667718&output=embed&z=17"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Lokalizacja"
                />
              </div>
            </div>
            <div>
              <h2 className="text-balance text-2xl font-bold mb-6">Godziny przyjęć</h2>
              <div className="rounded-xl border bg-card overflow-hidden mb-4">
                {[
                  { day: "Poniedziałek", hours: "8:00 – 20:00", open: true },
                  { day: "Wtorek", hours: "8:00 – 20:00", open: true },
                  { day: "Środa", hours: "8:00 – 20:00", open: true },
                  { day: "Czwartek", hours: "8:00 – 20:00", open: true },
                  { day: "Piątek", hours: "8:00 – 20:00", open: true },
                  { day: "Sobota", hours: "Nieczynne", open: false },
                  { day: "Niedziela", hours: "Nieczynne", open: false },
                ].map((r, i) => (
                  <div key={r.day} className={`flex justify-between px-5 py-3.5 text-sm ${i < 6 ? "border-b" : ""}`}>
                    <span className="font-medium">{r.day}</span>
                    <span className={r.open ? "font-medium text-slate-900" : "text-[#EE3920]/60 font-medium"}>{r.hours}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-4">
                <Clock className="h-5 w-5 text-emerald-600 shrink-0" />
                <p className="text-pretty text-sm text-emerald-700 dark:text-emerald-400">
                  Rejestracja online <strong>24h/dobę</strong>, 7 dni w tygodniu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL ── */}
      <section className="py-10 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-balance text-base font-semibold mb-4">Dane rejestrowe</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground sm:grid-cols-4">
            <div><span className="font-medium text-foreground">Firma:</span> Elkardia Sp. z o.o.</div>
            <div><span className="font-medium text-foreground">KRS:</span> 0000945384</div>
            <div><span className="font-medium text-foreground">NIP:</span> 7123429164</div>
            <div><span className="font-medium text-foreground">Rej. podmiotów:</span> 000000249308</div>
          </div>
        </div>
      </section>
    </div>
  )
}
