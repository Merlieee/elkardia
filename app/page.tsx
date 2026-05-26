import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { SpecialtiesGrid } from "@/components/specialties-grid"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { Button } from "@/components/ui/button"
import { DoktorEkgLogo } from "@/components/logos"

export const metadata: Metadata = {
  title: { absolute: "Elkardia — Lubelskie Centrum Kardiologii w Lublinie" },
  alternates: { canonical: "/" },
  description: "Centrum kardiologii dorosłych i dziecięcej w Lublinie. Ablacja serca, diagnostyka EKG i Holter, stomatologia z obserwacją kardiologiczną — ponad 30 specjalistów pod jednym dachem.",
  openGraph: {
    images: [{ url: "/images/og-default-logo.png", width: 1200, height: 630, alt: "Elkardia — Lubelskie Centrum Kardiologii" }],
    title: "Elkardia — Lubelskie Centrum Kardiologii",
    description: "Centrum kardiologii dorosłych i dziecięcej w Lublinie. Ablacja serca, diagnostyka, stomatologia — od 2014 roku.",
    url: "https://elkardia.pl",
  },
}

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
  "Próba wysiłkowa z saturacją",
  "Rejestratory arytmii (wielomiesięczne)",
  "Kontrola stymulatora i kardiowertera",
]

// ─── page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[760px] overflow-hidden">
        <Image
          src="/images/hero-1.webp"
          alt="Elkardia – Lubelskie Centrum Kardiologii"
          fill priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-950/70 to-transparent" />

        <div className="relative flex h-full flex-col justify-end pb-28">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="text-pretty mb-4 text-sm font-medium uppercase tracking-widest text-white">
              Lubelskie Centrum Kardiologii
            </p>
            <h1 className="text-balance max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Lekarze specjaliści,<br />
              <span className="text-white">nie tylko kardiolodzy</span>
            </h1>
            <p className="text-pretty mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Centrum kardiologii dorosłych i dzieci — z dostępem do neurologa, stomatologa, dietetyka i wielu innych specjalistów pod jednym dachem. W Lublinie, od 2014 roku.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://elkardia.pl/rejestracja-online-24h/">
                <Button size="lg" className="group inline-flex h-12 items-center justify-center gap-1 bg-[#EE3920] px-6 text-base font-semibold text-white shadow-none hover:bg-[#d4321c]">
                  Zarejestruj się online<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
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
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 md:mx-0 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center border-slate-200 px-2 py-8 text-center md:py-10 ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i > 0 ? "md:border-l" : ""}`}
              >
                <span className="text-2xl font-bold text-slate-900 sm:text-4xl">{s.value}</span>
                <span className="mt-2 text-xs leading-tight text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="border-t border-slate-200 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Specjalności</p>
            <h2 className="text-balance mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kompleksowa opieka w jednym miejscu
            </h2>
          </div>

          <SpecialtiesGrid />
        </div>
      </section>

      {/* ── ABLACJA ───────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-pretty text-sm font-semibold uppercase tracking-widest text-[#EE3920]">
                Zaburzenia rytmu serca
              </p>
              <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Kwalifikacja i opieka przed i po ablacji
              </h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">
                Nasi elektrofizjolodzy diagnozują zaburzenia rytmu serca, kwalifikują pacjentów do ablacji i sprawują opiekę po zabiegu. Badanie elektrofizjologiczne, Holter, rejestratory arytmii — kompleksowa diagnostyka na miejscu.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "10+", l: "Lat doświadczenia w elektrofizjologii" },
                  { v: "24h", l: "Holter EKG z wynikiem tego samego dnia" },
                  { v: "EPS", l: "Badanie elektrofizjologiczne na miejscu" },
                  { v: "RF / PFA", l: "Kwalifikacja do ablacji obu metod" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border bg-card p-4">
                    <div className="text-[1.7rem] font-bold text-slate-900">{s.v}</div>
                    <div className="mt-1 text-sm text-slate-500">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/ablacja-serca" className="mt-8 inline-flex">
                <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                  Więcej o ablacjach serca<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { img: "/images/ablacja-AFL.webp", label: "Trzepotanie przedsionków (AFL)" },
                { img: "/images/ablacja-AVNRT.webp", label: "Częstoskurcz węzłowy (AVNRT)" },
                { img: "/images/ablacja-VT.webp", label: "Częstoskurcz komorowy (VT)" },
                { img: "/images/ablacja-WPW.webp", label: "Zespół WPW" },
              ].map((item) => (
                <div key={item.label} className="group relative aspect-square overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={item.img} alt={item.label} fill
                    className="object-cover opacity-80 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-100"
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

      {/* ── KARDIOLOGIA DZIECIĘCA ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image src="/images/spec-4.webp" alt="Kardiologia dziecięca" fill className="object-cover object-[68%]" />
            </div>

            <div>
              <p className="text-pretty text-sm font-semibold uppercase tracking-widest text-[#EE3920]">
                Kardiologia dziecięca
              </p>
              <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Opieka kardiologiczna dla dzieci — od noworodków po 18. rok życia
              </h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">
                Diagnozujemy i leczymy choroby serca u dzieci w każdym wieku. Echo serca wykonujemy aparatem <strong className="text-slate-800">Philips Affiniti 50</strong> z dedykowanymi głowicami pediatrycznymi — zapewniając precyzyjne obrazowanie nawet u najmłodszych pacjentów. Rodzic może towarzyszyć dziecku podczas każdego badania.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4">
                {[
                  "Wrodzone wady serca",
                  "Zaburzenia rytmu serca",
                  "Nadciśnienie tętnicze u dzieci",
                  "Szmery sercowe u dzieci",
                  "Kardiomiopatia u dzieci",
                  "Opieka po leczeniu wad serca",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/kardiologia-dziecieca" className="mt-8 inline-flex">
                <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                  Więcej o kardiologii dziecięcej<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTICS ───────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-pretty text-sm font-semibold uppercase tracking-widest text-[#EE3920]">Diagnostyka</p>
              <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Pełna diagnostyka w kilka godzin
              </h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">
                Wszystkie badania na miejscu, tylko certyfikowanym sprzętem. Wyniki omawiamy tego samego dnia — bez zbędnego czekania i dodatkowych wizyt.
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

            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image src="/images/kardiologia-3.webp" alt="Diagnostyka" fill className="object-cover object-[68%_65%]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PORADNIE ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Poradnie specjalistyczne</p>
            <h2 className="text-balance mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pełen profil poradni dla naszych pacjentów
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { label: "Poradnia Kardiologiczna ogólna",    href: "/kardiologia-doroslych" },
              { label: "Poradnia Kardiologii Dziecięcej",   href: "/kardiologia-dziecieca" },
              { label: "Poradnia Zaburzeń Rytmu Serca",     href: "/ablacja-serca" },
              { label: "Poradnia Hemodynamiczna",           href: "/kardiologia-doroslych" },
              { label: "Poradnia Nadciśnienia Tętniczego",  href: "/hipertensjologia" },
              { label: "Poradnia Wad Serca",                href: "/kardiologia-doroslych" },
              { label: "Poradnia Kontroli Stymulatorów",    href: "/kardiologia-doroslych" },
              { label: "Poradnia Kontroli Kardiowerterów",  href: "/kardiologia-doroslych" },
              { label: "Poradnia Neurologiczna",            href: "/neurologia" },
              { label: "Poradnia Neurochirurgiczna",        href: "/neurochirurgia" },
              { label: "Poradnia Chirurgii Naczyniowej",    href: "/chirurgia-naczyniowa" },
              { label: "Poradnia Kardiochirurgiczna",       href: "/kardiochirurgia" },
              { label: "Poradnia Pulmonologiczna",          href: "/pulmonologia" },
              { label: "Poradnia Diabetologiczna",          href: "/diabetologia" },
              { label: "Poradnia Endokrynologiczna",        href: "/endokrynologia" },
              { label: "Poradnia Nefrologiczna",            href: "/nefrologia" },
              { label: "Poradnia Balneologiczna",           href: "/balneologia" },
              { label: "Poradnia Żywieniowa (Dietetyczna)", href: "/dietetycy" },
              { label: "Poradnia Stomatologiczna",          href: "/stomatologia" },
            ].map((p) => (
              <Link key={p.label} href={p.href} className="group flex items-center justify-between rounded-xl bg-white p-4 text-sm text-slate-700 transition-colors hover:bg-[#EE3920] hover:text-white">
                {p.label}
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── drEKG ─────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <DoktorEkgLogo className="h-12 w-auto" />
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Kardiologia online w całej Polsce
              </h2>
              <p className="text-pretty mt-4 leading-relaxed text-slate-600">
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
            <a href="https://doktorekg.pl">
              <Button variant="outline" className="group gap-1 border-slate-300 bg-transparent text-slate-900 hover:border-[#EE3920] hover:bg-transparent hover:text-[#EE3920]">
                Odwiedź doktorekg.pl<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>

            <div className="mt-4 w-full max-w-2xl rounded-2xl bg-slate-50 p-8 text-left">
              <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Dla klinik i lekarzy</p>
              <h3 className="text-balance mt-2 text-xl font-bold text-slate-900">
                Wynajmij Holter dla swojej placówki
              </h3>
              <p className="text-pretty mt-3 leading-relaxed text-slate-600 text-sm">
                Prowadzisz poradnię lub gabinet i chcesz oferować pacjentom badania Holter EKG lub ciśnieniowe? Współpracujemy z klinikami i lekarzami indywidualnymi — oferujemy wynajem sprzętu, odczyt wyników przez kardiologa i wsparcie techniczne.
              </p>
              <a href="mailto:rejestracja@elkardia.pl" className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#EE3920] hover:underline">
                Napisz do nas <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ────────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Lokalizacja</p>
            <h2 className="text-balance mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Znajdź nas w Lublinie
            </h2>
            <p className="text-pretty mt-2 text-sm text-slate-500">ul. Rotmistrza Witolda Pileckiego 23/20, 20-091 Lublin</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              src="https://maps.google.com/maps?cid=9985688829928667718&output=embed&z=17"
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

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <ReviewsCarousel />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0C71C3] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Image src="/images/award.webp" alt="Orły Medycyny" width={220} height={66} className="mx-auto mb-10 h-[4.5rem] w-auto opacity-90 brightness-0 invert" />
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Jesteś w dobrych rękach
          </h2>
          <p className="text-pretty mx-auto mt-6 max-w-md text-white/70 leading-relaxed">
            Laureat Orłów Medycyny. Rejestracja telefoniczna pon–pt 8:00–20:00, online 24h/dobę — 7 dni w tygodniu.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a href="https://elkardia.pl/rejestracja-online-24h/">
              <Button size="lg" className="h-12 gap-2 bg-white px-6 text-base font-semibold text-[#0C71C3] hover:bg-slate-50">
                Rejestracja online 24h <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </a>
            <a href="tel:+48815657075">
              <Button size="lg" variant="ghost"
                className="h-12 gap-2 border border-white/30 px-6 text-base text-white hover:bg-white/10 hover:text-white">
                <Phone className="h-4 w-4" />
                (81) 565 70 75
              </Button>
            </a>
          </div>
          <p className="text-pretty mt-6 text-sm text-white/50">
            ul. R. W. Pileckiego 23/20, 20-091 Lublin · rejestracja@elkardia.pl
          </p>
        </div>
      </section>

    </div>
  )
}
