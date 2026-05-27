import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Phone, ArrowRight } from "lucide-react"
import { ArrhythmiaGallery } from "@/components/arrhythmia-gallery"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

export const metadata: Metadata = {
  title: "Ablacja serca — kwalifikacja i opieka",
  alternates: { canonical: "/ablacja-serca" },
  description: "Elektrofizjolodzy Elkardia diagnozują zaburzenia rytmu serca i kwalifikują pacjentów do ablacji RF i PFA. Badanie elektrofizjologiczne, Holter, rejestratory arytmii — Lublin.",
  openGraph: {
    title: "Ablacja serca — kwalifikacja i opieka | Elkardia Lublin",
    description: "Diagnoza zaburzeń rytmu serca, kwalifikacja do ablacji RF i PFA, opieka przed i po zabiegu. Elektrofizjolodzy w Lublinie.",
    url: "https://elkardia.pl/ablacja-serca",
    images: [{ url: "/images/hero-ablacja.webp" }],
  },
}

const arrhythmias = [
  { img: "/images/ablacja-AFL.webp", label: "Trzepotanie przedsionków", short: "AFL" },
  { img: "/images/ablacja-AT.webp", label: "Częstoskurcz przedsionkowy", short: "AT" },
  { img: "/images/ablacja-nQRST.webp", label: "Arytmia komorowa", short: "PVC/VT" },
  { img: "/images/ablacja-VT.webp", label: "Częstoskurcz komorowy", short: "VT" },
  { img: "/images/ablacja-burza.webp", label: "Burza elektryczna", short: "ES" },
  { img: "/images/ablacja-WPW.webp", label: "Zespół WPW", short: "WPW" },
  { img: "/images/ablacja-AVRT.webp", label: "Częstoskurcz AVRT", short: "AVRT" },
  { img: "/images/ablacja-AVNRT.webp", label: "Częstoskurcz AVNRT", short: "AVNRT" },
  { img: "/images/ablacja-AESV.webp", label: "Migotanie przedsionków", short: "AF" },
  { img: "/images/ablacja-PVC.webp", label: "Pobudzenia komorowe", short: "PVC" },
  { img: "/images/ablacja-EPS.webp", label: "Badanie elektrofizjologiczne", short: "EPS" },
]

export default function AblacjaPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[520px] overflow-hidden">
        <Image src="/images/hero-ablacja.webp" alt="Ablacja serca — zabieg elektrofizjologiczny" fill className="object-cover object-[50%_20%]" priority />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-950/85 to-transparent" />
        <div className="relative flex h-full items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-pretty mb-2 text-sm font-semibold uppercase tracking-widest text-[#EE3920]">Zaburzenia rytmu serca</p>
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">Ablacje serca</h1>
              <p className="text-pretty mt-4 text-base text-white leading-relaxed">
                Nasi elektrofizjolodzy wykonują ablacje RF i PFA w warunkach szpitalnych — w Elkardia prowadzimy diagnostykę, kwalifikację oraz opiekę przed i po zabiegu. Zabiegi wykonują <strong>dr hab. Maciej Wójcik</strong> i <strong>dr Paweł Błaszkiewicz</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/rejestracja">
                  <Button className="group h-12 gap-2 bg-white px-7 text-base font-semibold text-slate-900 hover:bg-slate-100">
                    Umów konsultację <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </a>
                <a href="tel:+48815657075">
                  <Button variant="ghost" className="h-12 gap-2 border border-white/50 px-7 text-base text-white hover:bg-white/10 hover:text-white">
                    <Phone className="h-4 w-4" /> (81) 565 70 75
                  </Button>
                </a>
              </div>
            </div>
            {/* stat strip */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-8">
              {[
                { v: "80–90%", l: "Skuteczność ablacji AF" },
                { v: "95–98%", l: "Skuteczność ablacji trzepotania" },
                { v: "<0,5%", l: "Ryzyko powikłań" },
                { v: "10+", l: "Lat doświadczenia" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-lg font-bold text-white sm:text-2xl">{s.v}</div>
                  <div className="mt-0.5 text-xs text-white/80 sm:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-muted/30 pb-20 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Dlaczego warto nam zaufać</p>
          <h2 className="text-balance mt-3 text-3xl font-bold">Elektrofizjolodzy z najwyższymi kwalifikacjami w Polsce</h2>
          <p className="text-pretty mt-3 max-w-2xl text-muted-foreground leading-relaxed">
            Ablacja serca to zabieg wymagający wyjątkowej precyzji i doświadczenia. Nasi elektrofizjolodzy wykonują ablacje od ponad 10 lat — zarówno proste, jak i najbardziej złożone przypadki. W Elkardii zajmujemy się pełną diagnostyką i opieką wokół zabiegu.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ponad 1000 ablacji rocznie",
                desc: "Jeden z najwyższych wolumenów zabiegów elektrofizjologicznych w Polsce. Większa liczba zabiegów oznacza większe doświadczenie i lepsze wyniki.",
              },
              {
                title: "Najnowsza technologia PFA",
                desc: "Nasi elektrofizjolodzy wykonują ablację Volt PFA II generacji — bezpieczniejszą i skuteczniejszą niż starsze metody. Jedni z niewielu w regionie.",
              },
              {
                title: "Organizatorzy konferencji międzynarodowych",
                desc: "Nasi lekarze organizują warsztaty ablacyjne dla elektrofizjologów z całej Europy i USA — szkoląc innych specjalistów z własnych technik.",
              },
              {
                title: "Kompleksowa opieka",
                desc: "Zajmujemy się pacjentem od pierwszej konsultacji i kwalifikacji, aż po kontrole po ablacji. Zabieg wykonują ci sami lekarze — bez przekazywania do nieznanego ośrodka.",
              },
              {
                title: "Leczenie najtrudniejszych przypadków",
                desc: "Burza elektryczna, złożone arytmie komorowe, przypadki po nieudanych ablacjach w innych ośrodkach — to nasza specjalność.",
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

      {/* ── TWO METHOD CARDS with real diagrams ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold mb-8">Metody ablacji</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                img: "/images/ablacja-pfa.webp",
                title: "Ablacja Volt PFA",
                subtitle: "Pulsed Field Ablation",
                desc: "Nietermiczna elektroporacja — system II generacji. Lepsza efektywność i bezpieczeństwo niż wcześniejsze systemy PFA. Wykonywana w znieczuleniu ogólnym. Najnowocześniejsza metoda leczenia migotania przedsionków.",
                tag: "Migotanie przedsionków",
              },
              {
                img: "/images/ablacja-rf.webp",
                title: "Ablacja RF",
                subtitle: "Radiofrekwencyjna",
                desc: "Punktowa ablacja prądem RF oparta na gęstej mapie elektroanatomicznej 3D. Energia cieplna precyzyjnie niszczy ognisko arytmii. Skuteczna dla wszystkich typów arytmii serca.",
                tag: "Wszystkie typy arytmii",
              },
            ].map((m) => (
              <div key={m.title} className="overflow-hidden rounded-2xl border bg-card">
                <div className="relative h-60 bg-black">
                  <Image src={m.img} alt={m.title} fill className="object-contain p-6" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{m.tag}</Badge>
                  <h3 className="text-balance text-xl font-bold">{m.title}</h3>
                  <p className="text-pretty text-sm text-muted-foreground mt-1 mb-3">{m.subtitle}</p>
                  <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-pretty mt-6 text-sm text-muted-foreground border rounded-xl p-4 bg-muted/40">
            <strong>Uwaga:</strong> Nie wykonujemy krioablacji — metoda porzucona ponad 10 lat temu ze względu na niższą precyzję.
          </p>
        </div>
      </section>

      {/* ── ARRHYTHMIA GALLERY ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold mb-3">Leczone arytmie</h2>
          <p className="text-pretty text-muted-foreground mb-8">Wizualizacje elektrofizjologiczne z rzeczywistych zabiegów wykonywanych przez naszych elektrofizjologów</p>
          <ArrhythmiaGallery items={arrhythmias} />
        </div>
      </section>

      {/* ── INDICATIONS / CONTRAINDICATIONS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-balance text-2xl font-bold mb-6">Wskazania do ablacji</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Migotanie przedsionków", "Trzepotanie przedsionków",
                  "Częstoskurcz przedsionkowy", "Częstoskurcz węzłowy (AVNRT)",
                  "Częstoskurcz AVRT / Zespół WPW", "Pobudzenia i częstoskurcz komorowy",
                  "Burza elektryczna",
                ].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-sm">{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-balance text-2xl font-bold mb-6">Przeciwwskazania</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Skrzepliny w jamach serca",
                  "Ciężkie zaburzenia krzepnięcia",
                  "Czynne zakażenia",
                  "Trudności w dostępie naczyniowym",
                ].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0" />
                    <span className="text-sm">{i}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h2 className="text-balance text-2xl font-bold mb-4">Lekarze prowadzący</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { name: "dr hab. Maciej Wójcik", slug: "maciej-wojcik" },
                    { name: "dr Paweł Błaszkiewicz", slug: "pawel-blaszkiewicz" },
                  ].map((d) => (
                    <Link key={d.slug} href={`/lekarze/${d.slug}`} className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:bg-slate-50">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
                        {initials(d.name)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-pretty font-medium text-sm">{d.name}</p>
                        <p className="text-pretty text-xs text-muted-foreground">Kardiolog, elektrofizjolog</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C71C3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">Umów konsultację</h2>
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
