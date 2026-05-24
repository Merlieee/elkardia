import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

const specialties = [
  { img: "/images/spec-1.jpg", name: "Kardiologia dorosłych", desc: "Zawał, choroba wieńcowa, wady serca, arytmie, miażdżyca, tętniak aorty, nadciśnienie." },
  { img: "/images/kardiologia-lublin.jpg", name: "Kardiologia dziecięca", desc: "Choroby serca dla dzieci i młodzieży. Nowoczesna aparatura, leczenie na miejscu." },
  { img: "/images/spec-2.jpg", name: "Zaburzenia rytmu serca", desc: "Elektrofizjologia, ablacja RF i PFA, stymulatory, kardiowertery, tilt-test." },
  { img: "/images/badania-9.jpg", name: "Hipertensjologia", desc: "Nadciśnienie pierwotne, wtórne i oporne. Pogłębiona diagnostyka i leczenie." },
  { img: "/images/spec-8.jpg", name: "Neurologia", desc: "Zasłabnięcia, udar, TIA, padaczka, migrena, zawroty głowy, zaburzenia snu." },
  { img: "/images/spec-4.jpg", name: "Diagnostyka laboratoryjna", desc: "Badania laboratoryjne z wynikami tego samego dnia." },
  { img: "/images/spec-7.jpg", name: "Radiologia / USG", desc: "USG, Doppler tętnic i żył, RTG, konsultacje radiologiczne." },
  { img: "/images/kardiologia-2.jpg", name: "Kardiochirurgia", desc: "Kwalifikacja do operacji, pomosty, tętniaki, zastawki. Opieka pooperacyjna." },
  { img: "/images/spec-9.jpg", name: "Chirurgia naczyniowa", desc: "Żylaki, zakrzepica, choroby tętnic i naczyń limfatycznych." },
  { img: "/images/kardiologia-3.jpg", name: "Pulmonologia", desc: "Choroby płuc, POChP, astma, spirometria, bezdech senny." },
  { img: "/images/dietetyk-2.jpg", name: "Dietetyka", desc: "Zdrowe odchudzanie bez suplementów, analiza składu ciała (SECA-285)." },
  { img: "/images/stomatologia-2.jpg", name: "Stomatologia", desc: "Kompleksowa stomatologia z obserwacją kardiologiczną gratis." },
]

export default function LekarzeePage() {
  return (
    <div>

      {/* ── HERO with photo ── */}
      <section className="relative h-72 overflow-hidden">
        <Image src="/images/hero-2.jpg" alt="Lekarze specjaliści" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="secondary" className="mb-3">Specjaliści</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Nasi lekarze</h1>
            <p className="mt-3 max-w-xl text-white/70">
              Lekarze wielu specjalności — nie tylko kardiolodzy. Kompleksowa opieka w jednym miejscu.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABLATION DOCTORS highlight ── */}
      <section className="border-b py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-5">Ablacja serca — lekarze prowadzący</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "dr hab. Maciej Wójcik", role: "Kardiolog, elektrofizjolog" },
              { name: "dr Paweł Błaszkiewicz", role: "Kardiolog, elektrofizjolog" },
            ].map((d) => (
              <div key={d.name} className="flex items-center gap-4 rounded-xl border bg-card px-5 py-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                  {d.name.split(" ").pop()?.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{d.name}</p>
                  <p className="text-sm text-muted-foreground">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTY PHOTO GRID ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Poradnie specjalistyczne</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <div key={s.name} className="group overflow-hidden rounded-2xl border bg-card">
                <div className="relative h-44 overflow-hidden">
                  <Image src={s.img} alt={s.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-base font-bold text-white">{s.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t bg-muted/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Umów wizytę</h2>
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
