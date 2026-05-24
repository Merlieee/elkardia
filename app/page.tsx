import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { SpecialtiesGrid } from "@/components/specialties-grid"
import { Button } from "@/components/ui/button"

// ─── data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "od 2014", label: "Nieprzerwanie pomagamy pacjentom" },
  { value: "20+", label: "Specjalności medycznych" },
  { value: "24h", label: "Rejestracja online" },
  { value: "80–90%", label: "Skuteczność ablacji AF" },
]


const diagnostics = [
  "EKG spoczynkowe i wysiłkowe",
  "Echo serca (dorosłych i dzieci)",
  "Holter EKG 24h / 12-kanałowy",
  "Holter RR ciśnieniowy 24h",
  "Tilt-test — jedyny w Lublinie",
  "Badanie elektrofizjologiczne",
  "USG Doppler naczyń",
  "Rejestratory arytmii (wielomiesięczne)",
  "Badania w domu pacjenta",
  "Wyniki laboratoryjne tego samego dnia",
]

// ─── page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[760px] overflow-hidden">
        <Image
          src="/images/hero-1.jpg"
          alt="Elkardia – Lubelskie Centrum Kardiologii"
          fill priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-950/70 to-transparent" />

        <div className="relative flex h-full flex-col justify-end pb-28">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white">
              Lubelskie Centrum Kardiologii
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Lekarze specjaliści,<br />
              <span className="text-white">nie tylko kardiolodzy</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Centrum kardiologii dorosłych i dziecięcej — z dostępem do neurologa, stomatologa, dietetyka i wielu innych specjalistów pod jednym dachem. W Lublinie, od 2014 roku.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/rejestracja">
                <Button size="lg" className="group inline-flex h-12 items-center justify-center gap-1 bg-[#EE3920] px-6 text-base font-semibold text-white shadow-none hover:bg-[#d4321c]">
                  Zarejestruj się online<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <a href="tel:+48815657075">
                <Button size="lg" variant="ghost"
                  className="h-12 gap-2 border border-white/20 px-6 text-base text-white hover:bg-white/10 hover:text-white">
                  <Phone className="h-4 w-4" />
                  (81) 565 70 75
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-10 text-center">
                <span className="text-3xl font-bold text-slate-900 sm:text-4xl">{s.value}</span>
                <span className="mt-2 text-xs text-slate-500 whitespace-nowrap leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Specjalności</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kompleksowa opieka w jednym miejscu
            </h2>
          </div>

          <SpecialtiesGrid />
        </div>
      </section>

      {/* ── ABLACJA ───────────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#EE3920]">
                Zaburzenia rytmu serca
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Kwalifikacja i opieka przed i po ablacji
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                Nasz elektrofizjolog diagnozuje zaburzenia rytmu serca, kwalifikuje pacjentów do ablacji i sprawuje opiekę po zabiegu. Badanie elektrofizjologiczne, Holter, rejestratory arytmii — kompleksowa diagnostyka na miejscu.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "10+", l: "Lat doświadczenia w elektrofizjologii" },
                  { v: "24h", l: "Holter EKG z wynikiem tego samego dnia" },
                  { v: "EPS", l: "Badanie elektrofizjologiczne na miejscu" },
                  { v: "RF / PFA", l: "Kwalifikacja do ablacji obu metod" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-white/10 p-4">
                    <div className="text-2xl font-bold text-[#EE3920]">{s.v}</div>
                    <div className="mt-1 text-xs text-slate-500">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Link href="/ablacja-serca">
                  <Button className="group mx-auto flex h-10 items-center justify-center gap-1 bg-[#EE3920] px-5 text-sm font-semibold text-white hover:bg-[#d4321c]">
                    Więcej o zaburzeniach rytmu<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { img: "/images/ablacja-AFL.webp", label: "Trzepotanie przedsionków (AFL)" },
                { img: "/images/ablacja-AVNRT.webp", label: "Częstoskurcz węzłowy (AVNRT)" },
                { img: "/images/ablacja-VT.webp", label: "Częstoskurcz komorowy (VT)" },
                { img: "/images/ablacja-WPW.webp", label: "Zespół WPW" },
              ].map((item) => (
                <div key={item.label} className="group relative aspect-square overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src={item.img} alt={item.label} fill
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="rounded-md bg-black/70 px-2 py-0.5 text-xs text-slate-300">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTICS ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image src="/images/kardiologia-3.jpg" alt="Diagnostyka" fill className="object-cover" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#EE3920]">Diagnostyka</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Pełna diagnostyka w kilka godzin
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Wszystkie badania na miejscu, tylko certyfikowanym sprzętem. Nie możesz dojechać? Wysyłamy Holter EKG i ciśnieniowy kurierem — wykonujesz badanie w domu, wyniki analizuje kardiolog.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4">
                {diagnostics.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/badania" className="mt-8 inline-flex">
                <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                  Wszystkie badania<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORADNIE ──────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Poradnie specjalistyczne</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pełen profil poradni dla naszych pacjentów
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Poradnia Kardiologiczna ogólna",
              "Poradnia Kardiologii Dziecięcej",
              "Poradnia Zaburzeń Rytmu Serca",
              "Poradnia Hemodynamiczna",
              "Poradnia Nadciśnienia Tętniczego",
              "Poradnia Wad Serca",
              "Poradnia Kontroli Stymulatorów",
              "Poradnia Kontroli Kardiowerterów",
              "Poradnia Neurologiczna",
              "Poradnia Neurochirurgiczna",
              "Poradnia Chirurgii Naczyniowej",
              "Poradnia Kardiochirurgiczna",
              "Poradnia Pulmonologiczna",
              "Poradnia Diabetologiczna",
              "Poradnia Endokrynologiczna",
              "Poradnia Nefrologiczna",
              "Poradnia Balneologiczna",
              "Poradnia Radiologiczna",
              "Poradnia Żywieniowa (Dietetyczna)",
              "Poradnia Stomatologiczna",
            ].map((p) => (
              <div key={p} className="group flex items-center justify-between rounded-xl bg-white p-4 text-sm text-slate-700 transition-colors hover:bg-[#EE3920] hover:text-white">
                {p}
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── drEKG ─────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <Image src="/images/doktorekg-logo.png" alt="doktorEKG" width={220} height={60} className="h-12 w-auto" />
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Kardiologia online w całej Polsce
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Zamów Holter EKG kurierem, wykonaj badanie w domu i uzyskaj analizę od kardiologa online. Rejestratory arytmii, diagnostyka bezdechu sennego — bez wychodzenia z domu.
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
                <span key={t} className="text-sm text-slate-500">
                  {t}
                </span>
              ))}
            </div>
            <a href="https://doktorekg.pl" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                Odwiedź doktorekg.pl<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>

            <div className="mt-4 w-full max-w-2xl rounded-2xl bg-slate-50 p-8 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Dla klinik i lekarzy</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Wynajmij Holter dla swojej placówki
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600 text-sm">
                Prowadzisz poradnię lub gabinet i chcesz oferować pacjentom badania Holter EKG lub ciśnieniowe? Współpracujemy z klinikami i lekarzami indywidualnymi — oferujemy wynajem sprzętu, odczyt wyników przez kardiologa i wsparcie techniczne.
              </p>
              <a href="mailto:rejestracja@elkardia.pl" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#EE3920] hover:underline">
                Napisz do nas <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ────────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Lokalizacja</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Znajdź nas w Lublinie
            </h2>
            <p className="mt-2 text-sm text-slate-500">ul. Rotmistrza Witolda Pileckiego 23/20, 20-091 Lublin</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              src="https://maps.google.com/maps?q=ul.+Rotmistrza+Witolda+Pileckiego+23%2F20+Lublin&output=embed&z=16"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#EE3920] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Image src="/images/award.png" alt="Orły Medycyny" width={180} height={54} className="mx-auto mb-8 h-14 w-auto opacity-90 brightness-0 invert" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Jesteś w dobrych rękach
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70 leading-relaxed">
            Laureat Orłów Medycyny. Rejestracja telefoniczna pon–pt 8:00–20:00, online 24h/dobę — 7 dni w tygodniu.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/rejestracja">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#EE3920] hover:bg-slate-100">
                Rejestracja online 24h <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+48815657075">
              <Button size="lg" variant="ghost"
                className="h-12 gap-2 border border-white/30 px-6 text-base text-white hover:bg-white/10 hover:text-white">
                <Phone className="h-4 w-4" />
                (81) 565 70 75
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            ul. R. W. Pileckiego 23/20, 20-091 Lublin · rejestracja@elkardia.pl
          </p>
        </div>
      </section>

    </div>
  )
}
