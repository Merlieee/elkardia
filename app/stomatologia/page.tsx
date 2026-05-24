import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Heart } from "lucide-react"

const gallery = [
  { img: "/images/stomatologia-2.jpg", label: "Gabinet stomatologiczny" },
  { img: "/images/stomatologia-4.jpg", label: "Protetyka i korony" },
  { img: "/images/stomatologia-7.jpg", label: "Stomatologia estetyczna" },
  { img: "/images/spec-5.jpg", label: "Stomatologia zachowawcza" },
  { img: "/images/spec-6.jpg", label: "Ortodoncja i protetyka" },
  { img: "/images/spec-9.jpg", label: "Stomatologia dziecięca" },
]

export default function StomatologiaPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-80 overflow-hidden">
        <Image src="/images/stomatologia-7.jpg" alt="Stomatologia" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="secondary" className="mb-3">Stomatologia</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Kompleksowa Stomatologia<br />i Protetyka</h1>
            <p className="mt-3 max-w-lg text-white/70">
              Pełny profil świadczeń stomatologicznych z obserwacją kardiologiczną gratis.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARDIAC USP ── */}
      <section className="border-b py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">Obserwacja kardiologiczna — gratis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jedyne takie miejsce w Lublinie. Każdy zabieg stomatologiczny odbywa się pod pełnym monitorowaniem kardiologicznym bez dodatkowych kosztów — idealne dla pacjentów z chorobami serca, po zawale, ze stymulatorem lub kardiowerterem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Galeria</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.label} className="group relative h-52 overflow-hidden rounded-xl">
                <Image src={g.img} alt={g.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium text-white">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES + CARDIAC PATIENTS ── */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Zakres usług</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Stomatologia dziecięca", "Stomatologia młodzieżowa", "Stomatologia dorosłych",
                  "Protetyka elastyczna", "Korony i mosty protetyczne",
                  "Stomatologia zachowawcza i endodoncja",
                  "Chirurgia stomatologiczna", "RTG stomatologiczne na miejscu",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Dla trudnych pacjentów kardiologicznych</h2>
              <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                <Image src="/images/stomatologia-4.jpg" alt="Stomatologia dla kardiologów" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Pełne monitorowanie EKG podczas zabiegu",
                  "Doświadczenie z pacjentami na antykoagulacji",
                  "Bezpieczne procedury po zawale i operacjach serca",
                  "Obsługa pacjentów ze stymulatorami i ICD",
                ].map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Umów wizytę stomatologiczną</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Rejestracja online 24h lub telefonicznie pon–pt 8:00–20:00.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rejestracja"><Button size="lg" className="gap-2">Rejestracja online <ArrowRight className="h-4 w-4" /></Button></Link>
            <a href="tel:+48815657075"><Button size="lg" variant="outline" className="gap-2"><Phone className="h-4 w-4" /> (81) 565 70 75</Button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
