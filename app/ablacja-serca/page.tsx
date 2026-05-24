import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Phone, ArrowRight } from "lucide-react"

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
      <section className="relative overflow-hidden bg-foreground py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Tylko u nas w Lublinie</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Ablacja serca</h1>
              <p className="text-primary-foreground/75 text-lg leading-relaxed">
                Wykonujemy ablację RF oraz najnowocześniejszą ablację Volt PFA — nietermiczną metodę II generacji. Zabiegi prowadzą <strong className="text-white">dr hab. Maciej Wójcik</strong> i <strong className="text-white">dr Paweł Błaszkiewicz</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/rejestracja">
                  <Button variant="secondary" className="gap-2">Umów konsultację <ArrowRight className="h-4 w-4" /></Button>
                </Link>
                <a href="tel:+48815657075">
                  <Button variant="outline" className="gap-2 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                    <Phone className="h-4 w-4" /> (81) 565 70 75
                  </Button>
                </a>
              </div>
            </div>
            {/* stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "80–90%", l: "Skuteczność ablacji AF po 1 zabiegu" },
                { v: "95–98%", l: "Skuteczność ablacji trzepotania" },
                { v: "<0,5%", l: "Ryzyko poważnych powikłań" },
                { v: "10+", l: "Lat doświadczenia zespołu" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-white/10 p-5 text-center">
                  <div className="text-3xl font-bold text-primary">{s.v}</div>
                  <div className="mt-1 text-xs text-primary-foreground/60 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO METHOD CARDS with real diagrams ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Metody ablacji</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                img: "/images/ablacja-rf.png",
                title: "Ablacja RF",
                subtitle: "Radiofrekwencyjna",
                desc: "Punktowa ablacja prądem RF oparta na gęstej mapie elektroanatomicznej 3D. Energia cieplna precyzyjnie niszczy ognisko arytmii. Skuteczna dla wszystkich typów arytmii serca.",
                tag: "Wszystkie typy arytmii",
              },
              {
                img: "/images/ablacja-pfa.png",
                title: "Ablacja Volt PFA",
                subtitle: "Pulsed Field Ablation",
                desc: "Nietermiczna elektroporacja — system II generacji. Lepsza efektywność i bezpieczeństwo niż wcześniejsze systemy PFA. Wykonywana w znieczuleniu ogólnym. Najnowocześniejsza metoda leczenia migotania przedsionków.",
                tag: "Migotanie przedsionków",
              },
            ].map((m) => (
              <div key={m.title} className="overflow-hidden rounded-2xl border bg-card">
                <div className="relative h-60 bg-black">
                  <Image src={m.img} alt={m.title} fill className="object-contain p-6" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{m.tag}</Badge>
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">{m.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground border rounded-xl p-4 bg-muted/40">
            <strong>Uwaga:</strong> W centrum nie wykonuje się krioablacji — metoda porzucona ponad 10 lat temu ze względu na niższą precyzję.
          </p>
        </div>
      </section>

      {/* ── ARRHYTHMIA GALLERY ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-3">Leczone arytmie</h2>
          <p className="text-muted-foreground mb-8">Wizualizacje elektrofizjologiczne z rzeczywistych zabiegów wykonywanych w centrum</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {arrhythmias.map((a) => (
              <div key={a.short} className="group overflow-hidden rounded-xl bg-black">
                <div className="relative h-40">
                  <Image src={a.img} alt={a.label} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-xs font-bold text-primary">{a.short}</span>
                    <p className="text-xs text-white/80 leading-tight">{a.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDICATIONS / CONTRAINDICATIONS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Wskazania do ablacji</h2>
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
              <h2 className="text-2xl font-bold mb-6">Przeciwwskazania</h2>
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
                <h2 className="text-2xl font-bold mb-4">Lekarze prowadzący</h2>
                <div className="flex flex-col gap-3">
                  {["dr hab. Maciej Wójcik", "dr Paweł Błaszkiewicz"].map((d) => (
                    <div key={d} className="flex items-center gap-3 rounded-xl border bg-card p-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                        {d.split(" ").pop()?.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{d}</p>
                        <p className="text-xs text-muted-foreground">Kardiolog, elektrofizjolog</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t bg-muted/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Umów konsultację</h2>
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
