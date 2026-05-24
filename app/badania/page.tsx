import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Phone, Home } from "lucide-react"

const cardiac = [
  "EKG spoczynkowe", "EKG wysiłkowe", "Próba wysiłkowa z saturacją",
  "Echo serca", "Tilt-test (test pochyleniowy)", "Holter EKG 24h standard",
  "Holter EKG 12-kanałowy", "Holter EKG 1–8 dniowy",
  "Rejestratory arytmii (monitoring wielomiesięczny)", "Holter ciśnieniowy RR 24h",
  "Symultaniczny pomiar RR", "Kontrola stymulatora serca",
  "Kontrola kardiowertera (ICD)", "Badanie elektrofizjologiczne", "Ablacja serca (RF, PFA)",
]
const pediatric = [
  "EKG dzieci", "Echo serca dzieci", "Holter EKG dzieci 24h",
  "Holter ciśnieniowy RR dzieci", "Monitorowanie saturacji 24h",
]
const usg = [
  "USG tarczycy", "USG piersi", "USG jamy brzusznej", "USG ślinianek",
  "USG układu moczowego", "USG prostaty", "USG jąder",
  "USG węzłów chłonnych", "USG opłucnej",
  "USG Doppler tętnic szyjnych", "USG Doppler tętnic mózgowych",
  "USG Doppler tętnic kończyn", "USG Doppler żył kończyn",
]
const sleep = [
  "Holter RR bezdech senny", "Pełne badanie snu w sypialni pacjenta", "Spirometria",
]
const risk = [
  "Wskaźnik ABI (niedokrwienie kończyn)", "Analiza składu ciała (SECA-285)",
  "Profesjonalny pomiar BMI", "Ocena ryzyka udaru mózgowego",
  "Ocena ryzyka krwawienia", "Ocena EuroSCORE (operacja serca)",
  "Ocena ryzyka zabiegowego", "Ocena ryzyka ciąży",
]

export default function BadaniaPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-72 overflow-hidden">
        <Image src="/images/kardiologia-2.jpg" alt="Diagnostyka" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="secondary" className="mb-3">Diagnostyka</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Badania diagnostyczne</h1>
            <p className="mt-3 max-w-xl text-white/70">
              Tylko certyfikowany, najnowszy sprzęt. Wyniki tego samego dnia.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES strip ── */}
      <section className="border-b bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {["Badania na miejscu", "Wyniki tego samego dnia", "Certyfikowany sprzęt", "Badania w domu pacjenta"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle className="h-4 w-4 text-primary" />{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUAL split ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center mb-16">
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <Image src="/images/spec-7.jpg" alt="USG Doppler" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-bold text-white">USG i Doppler</p>
                <p className="text-sm text-white/70">Naczynia, narządy, tarczyca, piersi</p>
              </div>
            </div>
            <div>
              <Badge className="mb-4">USG i obrazowanie</Badge>
              <h2 className="text-2xl font-bold mb-4">Pełna diagnostyka USG na miejscu</h2>
              <p className="text-muted-foreground leading-relaxed">
                Badania USG i Doppler wszystkich narządów i naczyń — tarczyca, piersi, jama brzuszna, układ moczowy, prostata, jądra, węzły chłonne, tętnice i żyły kończyn, tętnice szyjne i mózgowe.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-4">Kardiologia interwencyjna</Badge>
              <h2 className="text-2xl font-bold mb-4">Ablacja i elektrofizjologia</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pełne badanie elektrofizjologiczne i ablacja serca — RF i PFA. Kontrola stymulatorów i kardiowerterów. Tilt-test (test pochyleniowy) — jedyny w Lublinie.
              </p>
              <Link href="/ablacja-serca" className="mt-6 inline-block">
                <Button variant="outline" className="gap-2">Więcej o ablacji <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-80 overflow-hidden rounded-2xl bg-black">
              <Image src="/images/ablacja-rf.png" alt="Ablacja RF" fill className="object-contain p-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Pełna lista badań</h2>
          <Tabs defaultValue="cardiac">
            <TabsList className="mb-8 h-auto flex-wrap gap-1">
              <TabsTrigger value="cardiac">Kardiologiczne</TabsTrigger>
              <TabsTrigger value="pediatric">Pediatryczne</TabsTrigger>
              <TabsTrigger value="usg">USG / Doppler</TabsTrigger>
              <TabsTrigger value="sleep">Sen i oddech</TabsTrigger>
              <TabsTrigger value="risk">Ocena ryzyka</TabsTrigger>
            </TabsList>
            {[
              { value: "cardiac", items: cardiac },
              { value: "pediatric", items: pediatric },
              { value: "usg", items: usg },
              { value: "sleep", items: sleep },
              { value: "risk", items: risk },
            ].map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {tab.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ── HOME TESTING ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                <Home className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Badania w domu pacjenta</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nie możesz dojechać? Holter EKG, holter ciśnieniowy i badanie bezdechu sennego dostarczamy kuriersko na terenie całej Polski. Leczymy chrapanie i bezdech w Twojej sypialni!
              </p>
              <a href="https://doktorekg.pl" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  Telemedycyna drEKG <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image src="/images/rejestracja.jpg" alt="Telemedycyna" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-bold text-white">Dostawa kurierska</p>
                <p className="text-sm text-white/70">Cała Polska</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t bg-muted/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Umów badanie</h2>
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
