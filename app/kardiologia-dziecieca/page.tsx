import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Activity, ArrowRight, CheckCircle, Eye, ShieldCheck } from "lucide-react"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import { FaqAccordion } from "@/components/faq-accordion"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

export const metadata: Metadata = {
  title: "Kardiologia dziecięca",
  alternates: { canonical: "/kardiologia-dziecieca" },
  description: "Specjalistyczna opieka kardiologiczna dla dzieci i młodzieży w Lublinie. Echokardiografia dziecięca, Holter EKG, diagnostyka wad serca u dzieci.",
  openGraph: { images: [{ url: "/images/spec-4.webp" }] },
}

const conditions = [
  "Zaburzenia rytmu serca u dzieci i młodzieży",
  "Wrodzone wady serca",
  "Nadciśnienie tętnicze u dzieci",
  "Kardiomiopatia u dzieci",
  "Szmery sercowe u dzieci",
  "Echokardiografia (dzieci i noworodki)",
  "Opieka po leczeniu wrodzonych wad serca",
  "Diagnostyka kardiologiczna niemowląt",
]

const machineFeatures = [
  "bardzo dokładne obrazowanie struktur serca",
  "ocenę pracy zastawek",
  "analizę przepływów krwi metodą Doppler",
  "wykrywanie wad wrodzonych serca",
  "monitorowanie rozwoju układu krążenia",
  "szybką i precyzyjną diagnostykę u najmłodszych pacjentów",
]

const echoAssesses = [
  "wielkość i budowę serca",
  "przedsionki i komory",
  "przegrody serca",
  "zastawki",
  "duże naczynia krwionośne",
  "kurczliwość mięśnia sercowego",
  "przepływ krwi przez serce i naczynia",
]

const highQualityItems = [
  "wad wrodzonych serca",
  "ubytków w przegrodach serca",
  "zwężeń naczyń",
  "nieprawidłowości zastawek",
  "chorób mięśnia sercowego",
]

const dopplerItems = [
  "nieprawidłowe przepływy",
  "zwężenia naczyń",
  "niedomykalność zastawek",
  "przecieki między jamami serca",
  "zaburzenia hemodynamiczne",
]

const safetyItems = [
  "całkowicie bezbolesne",
  "nieinwazyjne",
  "bezpieczne dla dzieci w każdym wieku",
  "pozbawione promieniowania jonizującego",
  "możliwe do wielokrotnego powtarzania",
]

const whenSymptoms = [
  "szmerów serca",
  "kołatania serca",
  "omdleń",
  "duszności",
  "bólu w klatce piersiowej",
  "męczliwości podczas wysiłku",
  "sinienia skóry lub ust",
  "nieprawidłowego wyniku EKG",
]

const whenMonitoring = [
  "z rozpoznanymi wadami serca",
  "po zabiegach kardiochirurgicznych",
  "wymagających okresowych kontroli kardiologicznych",
  "z chorobami genetycznymi zwiększającymi ryzyko wad serca",
]

const diseases = [
  "wrodzone wady serca",
  "ubytki w przegrodzie międzyprzedsionkowej i międzykomorowej",
  "zwężenia i niedomykalności zastawek",
  "kardiomiopatie",
  "nadciśnienie płucne",
  "choroby osierdzia",
  "zaburzenia funkcji mięśnia sercowego",
  "nieprawidłowości dużych naczyń",
]

const faq = [
  { q: "Czy echo serca jest bezpieczne dla niemowląt?", a: "Tak. Badanie wykorzystuje fale ultradźwiękowe i nie emituje promieniowania rentgenowskiego." },
  { q: "Czy dziecko musi być na czczo?", a: "W większości przypadków nie ma takiej potrzeby." },
  { q: "Czy badanie boli?", a: "Nie. Echo serca jest całkowicie bezbolesne i nieinwazyjne." },
  { q: "Jak długo trwa badanie?", a: "Najczęściej od 15 do 30 minut." },
  { q: "Czy rodzic może być obecny podczas badania?", a: "Tak, obecność rodzica zwykle pomaga dziecku czuć się bezpiecznie i komfortowo." },
]


const echoContent = (
  <div className="space-y-16">

    {/* ── Intro ── */}
    <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
      <div className="max-w-2xl">
        <p className="text-pretty mb-2 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Badanie echokardiograficzne</p>
        <h2 className="text-balance mb-5 text-3xl font-bold text-slate-900">
          Echo serca dziecka – na czym polega badanie?
        </h2>
        <p className="text-pretty mb-4 text-base leading-relaxed text-slate-600">
          Echokardiografia (USG serca) to podstawowe badanie diagnostyczne w kardiologii dziecięcej. Przy użyciu fal ultradźwiękowych lekarz ocenia w czasie rzeczywistym budowę i funkcję serca — u dzieci w każdym wieku, od noworodków po nastolatków. W Elkardii diagnostykę wykonujemy najnowszym aparatem <strong className="text-slate-800">Philips Affiniti 50</strong> — jednym z najdokładniejszych systemów echokardiograficznych dostępnych na rynku, który zapewnia szczegółowe obrazowanie nawet u najmłodszych pacjentów. Wynik omawia się bezpośrednio po badaniu, bez konieczności oczekiwania.
        </p>
        <p className="text-pretty mb-4 text-base leading-relaxed text-slate-600">
          Dysponujemy pełnym zestawem głowic echokardiograficznych — dwiema dedykowanymi głowicami pediatrycznymi oraz głowicą dla starszych i większych dzieci. Dzięki temu jesteśmy w stanie precyzyjnie zbadać każde dziecko: od noworodka i wcześniaka po osiemnastolatka.
        </p>
        <p className="text-pretty text-base leading-relaxed text-slate-600">
          Badanie pozwala wykrywać wrodzone i nabyte choroby serca, monitorować rozwój układu krążenia oraz kontrolować efekty leczenia. Jest całkowicie bezpieczne, bezbolesne i nie wymaga promieniowania rentgenowskiego.
        </p>
      </div>
      <div className="relative self-stretch min-h-[280px]">
        <Image
          src="/images/philips-affiniti-50.webp"
          alt="Aparat echokardiograficzny Philips Affiniti 50"
          fill
          className="object-contain object-top"
          style={{ right: "2rem" }}
        />
      </div>
    </div>

    {/* ── 3 feature cards ── */}
    <div>
      <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">Co oceniamy podczas badania echokardiograficznego?</h3>
      <div className="grid gap-4 sm:grid-cols-3">

        <div className="rounded-xl bg-slate-50 p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EE3920]/10">
            <Eye className="h-5 w-5 text-[#EE3920]" />
          </div>
          <h4 className="text-balance mb-2 font-semibold text-slate-900">Ocena struktury serca</h4>
          <p className="text-pretty mb-4 text-sm leading-relaxed text-slate-500">Badanie pozwala na szczegółową analizę budowy serca, nawet u noworodków i niemowląt. Ma kluczowe znaczenie w diagnostyce:</p>
          <div className="space-y-1.5">
            {highQualityItems.map(item => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#EE3920]" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EE3920]/10">
            <Activity className="h-5 w-5 text-[#EE3920]" />
          </div>
          <h4 className="text-balance mb-2 font-semibold text-slate-900">Zaawansowane badania Doppler</h4>
          <p className="text-pretty mb-4 text-sm leading-relaxed text-slate-500">Ocena przepływu krwi przez serce i naczynia pozwala lekarzowi wykryć:</p>
          <div className="space-y-1.5">
            {dopplerItems.map(item => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#EE3920]" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EE3920]/10">
            <ShieldCheck className="h-5 w-5 text-[#EE3920]" />
          </div>
          <h4 className="text-balance mb-2 font-semibold text-slate-900">Komfort i bezpieczeństwo</h4>
          <p className="text-pretty mb-4 text-sm leading-relaxed text-slate-500">Echokardiografia jest metodą całkowicie bezpieczną dla dziecka — badanie jest:</p>
          <div className="space-y-1.5">
            {safetyItems.map(item => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#EE3920]" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* ── When to do echo ── */}
    <div>
      <h3 className="text-balance mb-8 text-xl font-bold text-slate-900">Kiedy warto wykonać echo serca dziecka?</h3>
      <div className="grid gap-8 lg:grid-cols-3">

        <div className="border-l-2 border-[#EE3920] pl-5">
          <h4 className="text-balance mb-2 font-semibold text-slate-900">Niepokojące objawy</h4>
          <p className="text-pretty mb-3 text-sm text-slate-500">Lekarz może zalecić badanie w przypadku:</p>
          <div className="space-y-1.5">
            {whenSymptoms.map(item => (
              <p key={item} className="text-sm text-slate-600">— {item}</p>
            ))}
          </div>
        </div>

        <div className="border-l-2 border-[#EE3920] pl-5">
          <h4 className="text-balance mb-2 font-semibold text-slate-900">Kontrola wad serca</h4>
          <p className="text-pretty mb-3 text-sm text-slate-500">Badanie wykonywane u dzieci:</p>
          <div className="space-y-1.5">
            {whenMonitoring.map(item => (
              <p key={item} className="text-sm text-slate-600">— {item}</p>
            ))}
          </div>
        </div>

        <div className="border-l-2 border-[#EE3920] pl-5">
          <h4 className="text-balance mb-2 font-semibold text-slate-900">Profilaktyka i sport</h4>
          <p className="text-pretty text-sm leading-relaxed text-slate-600">
            Echo serca może być elementem diagnostyki dzieci i młodzieży aktywnie uprawiających sport oraz kwalifikowanych do treningów wyczynowych.
          </p>
        </div>

      </div>
    </div>

    {/* ── How it goes ── */}
    <div>
      <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">Jak przebiega badanie?</h3>
      <div className="grid gap-4 lg:grid-cols-3">

        <div className="rounded-xl bg-slate-50 p-6">
          <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#EE3920]/10 text-xs font-bold text-[#EE3920]">1</div>
          <h4 className="text-balance mb-3 font-semibold text-slate-900">Przed badaniem</h4>
          <p className="text-pretty mb-3 text-sm text-slate-600">W większości przypadków echo serca nie wymaga specjalnego przygotowania. Warto zabrać:</p>
          <div className="space-y-1.5 text-sm text-slate-600">
            <div className="flex gap-2"><span className="text-slate-400">–</span><span>wcześniejsze wyniki badań</span></div>
            <div className="flex gap-2"><span className="text-slate-400">–</span><span>dokumentację medyczną</span></div>
            <div className="flex gap-2"><span className="text-slate-400">–</span><span>wyniki EKG lub poprzednich badań kardiologicznych</span></div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-6">
          <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#EE3920]/10 text-xs font-bold text-[#EE3920]">2</div>
          <h4 className="text-balance mb-3 font-semibold text-slate-900">W trakcie badania</h4>
          <p className="text-pretty text-sm leading-relaxed text-slate-600">
            Dziecko leży na leżance, a lekarz przykłada do klatki piersiowej specjalną głowicę ultrasonograficzną pokrytą żelem. Stosujemy <strong className="text-slate-700">podgrzewacz żelu</strong> — żel ma temperaturę zbliżoną do ciała, dzięki czemu dziecko nie odczuwa zimna na początku badania. Na monitorze widoczny jest obraz serca w czasie rzeczywistym. Badanie trwa zazwyczaj od 15 do 30 minut.
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-6">
          <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#EE3920]/10 text-xs font-bold text-[#EE3920]">3</div>
          <h4 className="text-balance mb-3 font-semibold text-slate-900">Po badaniu</h4>
          <p className="text-pretty text-sm leading-relaxed text-slate-600">
            Rodzice otrzymują opis oraz omówienie wyniku przez lekarza. Dziecko może natychmiast wrócić do codziennych aktywności.
          </p>
        </div>

      </div>
    </div>

    {/* ── Diseases ── */}
    <div className="rounded-2xl bg-slate-50 p-8">
      <h3 className="text-balance mb-5 text-xl font-bold text-slate-900">Jakie choroby można wykryć?</h3>
      <div className="space-y-2">
        {diseases.map(item => (
          <div key={item} className="flex items-start gap-2.5">
            <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#EE3920]" />
            <span className="text-sm text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* ── Specialists ── */}
    <div>
      <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">Specjaliści</h3>
      <div className="flex flex-col gap-3">
        {doctors.filter(d => d.group === "Kardiologia dziecięca").map((d) => (
          <Link key={d.slug} href={`/lekarze/${d.slug}`}
            className="group flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EE3920]/10 text-sm font-bold text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
              {initials(d.name)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-pretty font-semibold text-slate-900 text-sm leading-tight">{d.name}</p>
              <p className="text-pretty mt-0.5 text-xs text-slate-500">{d.tags.slice(0, 2).join(" · ")}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
          </Link>
        ))}
      </div>
    </div>

    {/* ── FAQ ── */}
    <div>
      <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">Najczęściej zadawane pytania</h3>
      <FaqAccordion items={faq} />
      <p className="text-pretty mt-6 text-sm text-slate-500">
        Nie odpowiedzieliśmy na Twoje pytanie?{" "}
        <a href="https://elkardia.pl/rejestracja-online-24h/" className="font-medium text-[#EE3920] hover:underline">
          Skontaktuj się z nami.
        </a>
      </p>
    </div>

  </div>
)

export default function Page() {
  return (
    <SpecialtyPage
      title="Kardiologia dziecięca"
      label="Specjalność"
      description="Specjalistyczna opieka kardiologiczna dla dzieci i młodzieży — od noworodków po 18. rok życia. Każdą wizytę traktujemy indywidualnie, dbając o komfort i bezpieczeństwo małego pacjenta."
      heroImage="/images/spec-4.webp"
      doctors={doctors.filter(d => d.group === "Kardiologia dziecięca")}
      extraContent={echoContent}
    />
  )
}
