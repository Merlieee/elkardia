import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, ArrowRight, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Rejestracja — umów wizytę online 24h",
  description: "Zarejestruj się do lekarza specjalisty w Elkardia Lublin — online 24h lub telefonicznie pon–pt 8:00–20:00. Tel. (81) 565 70 75, ul. Pileckiego 23/20.",
  openGraph: {
    title: "Rejestracja — Elkardia Lublin",
    description: "Rejestracja online 24h lub telefonicznie pon–pt 8:00–20:00. Szybki dostęp do kardiologów i specjalistów.",
    url: "https://elkardia.pl/rejestracja",
  },
}

export default function RejestracjaPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-64 overflow-hidden">
        <Image src="/images/rejestracja.webp" alt="Rejestracja" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="secondary" className="mb-3">Kontakt</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Rejestracja i kontakt</h1>
            <p className="mt-2 text-white/70">Online 24h/dobę · Telefon pon–pt 8:00–20:00</p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Telefon</h3>
              <div className="space-y-2 mb-5">
                <a href="tel:+48815657075" className="block text-sm font-medium hover:text-primary transition-colors">+48 81 565 70 75</a>
                <a href="tel:+48536102112" className="block text-sm font-medium hover:text-primary transition-colors">+48 536 102 112</a>
                <p className="text-xs text-muted-foreground">Pon–Pt: 8:00–20:00</p>
              </div>
              <a href="tel:+48815657075">
                <Button className="w-full gap-2"><Phone className="h-4 w-4" /> Zadzwoń teraz</Button>
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">E-mail</h3>
              <a href="mailto:rejestracja@elkardia.pl" className="block text-sm font-medium hover:text-primary transition-colors mb-5">
                rejestracja@elkardia.pl
              </a>
              <a href="mailto:rejestracja@elkardia.pl">
                <Button variant="outline" className="w-full gap-2"><Mail className="h-4 w-4" /> Napisz do nas</Button>
              </a>
            </div>

            {/* Online */}
            <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Rejestracja online</h3>
              <p className="text-sm text-muted-foreground mb-5">
                System online dostępny <strong>24 godziny</strong> na dobę, 7 dni w tygodniu.
              </p>
              <Button className="w-full gap-2">
                Zarejestruj się online <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDRESS + HOURS ── */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Lokalizacja</h2>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Elkardia Sp. z o.o.</p>
                  <p className="text-sm text-muted-foreground">ul. R. W. Pileckiego 23/20, 20-091 Lublin</p>
                  <p className="text-sm text-muted-foreground mt-1">Prywatny parking dla pacjentów</p>
                </div>
              </div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.3!2d22.5!3d51.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE1JzAwLjAiTiAyMsKwMzAnMDAuMCJF!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Lokalizacja"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Godziny przyjęć</h2>
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
                  <div key={r.day} className={`flex justify-between px-5 py-3.5 text-sm ${i < 6 ? "border-b" : ""} ${!r.open ? "text-muted-foreground" : ""}`}>
                    <span className="font-medium">{r.day}</span>
                    <span className={r.open ? "text-primary font-medium" : ""}>{r.hours}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-4">
                <Clock className="h-5 w-5 text-emerald-600 shrink-0" />
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
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
          <h3 className="text-base font-semibold mb-4">Dane rejestrowe</h3>
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
