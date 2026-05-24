import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Dietetycy kliniczni",
  description: "Dietetycy kliniczni w Elkardia Lublin — indywidualny plan żywienia, analiza składu ciała (SECA-285), dieta kardiologiczna. Konsultacje stacjonarne i online.",
  openGraph: {
    title: "Dietetycy kliniczni — Elkardia Lublin",
    description: "Indywidualny plan żywienia, analiza składu ciała, dieta przy chorobach serca i cukrzycy. Umów konsultację online 24h.",
    url: "https://elkardia.pl/dietetycy",
  },
}

export default function DietycyPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-80 overflow-hidden">
        <Image src="/images/dietetyk.jpg" alt="Dietetyka" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="secondary" className="mb-3">Dietetyka</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Poradnia Żywieniowa</h1>
            <p className="mt-3 max-w-lg text-white/70">
              Zdrowe odchudzanie dla każdego! Bez suplementów, bez leków.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4">Indywidualne podejście</Badge>
              <h2 className="text-3xl font-bold mb-4">Plan żywienia dopasowany do Ciebie</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Skuteczne odchudzanie i zmiana nawyków żywieniowych oparte na rzetelnej diagnostyce składu ciała. Indywidualny plan żywienia bez sztucznych wspomagaczy. Diety kardioprotekcyjne, przy nadciśnieniu i cukrzycy.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Analiza składu ciała — waga SECA-285",
                  "Indywidualny plan żywienia",
                  "Bez suplementów i leków",
                  "Dieta kardioprotekcyjna",
                  "Dieta przy nadciśnieniu (DASH)",
                  "Dieta cukrzycowa i prediabetyczna",
                  "Edukacja żywieniowa",
                  "Kontrola efektów i korekta planu",
                ].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{i}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/rejestracja">
                  <Button className="gap-2">Umów wizytę <ArrowRight className="h-4 w-4" /></Button>
                </Link>
                <a href="tel:+48815657075">
                  <Button variant="outline" className="gap-2"><Phone className="h-4 w-4" /> (81) 565 70 75</Button>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <Image src="/images/dietetyk-2.jpg" alt="Analiza składu ciała" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-semibold text-white">Analiza składu ciała</p>
                  <p className="text-sm text-white/70">Waga medyczna SECA-285</p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
                <h3 className="font-bold text-lg mb-2">Waga SECA-285</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Profesjonalna waga medyczna mierzy masę ciała, procent tkanki tłuszczowej, masę mięśniową, nawodnienie organizmu i BMI — ta sama klasa sprzętu co w klinikach badań klinicznych.
                </p>
                <Badge className="mt-3">Certyfikowany sprzęt medyczny</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
