"use client"

import { useRef, useEffect, useId } from "react"

const reviews = [
  {
    name: "jql57",
    text: "Doskonałe i miejsce i usługa. Pięć gwiazdek to nawet mało — czyściutki, zadbany lokal; konkretna, miła obsługa w rejestracji; profesjonalna wizyta u Lekarza neurochirurga, której przebieg i rzeczowość może być wzorcem dla wielu innych. Lepiej wybrać nie mogłem.",
  },
  {
    name: "Ewa Sokołowska-Wójcik",
    text: "Moja trzyletnia córka jest pacjentką dr Połeckiej. Pani dr jest świetnym specjalistą, konkretnie i rzeczowo wyjaśnia wszystkie zagadnienia. Poświęca pacjentowi tyle czasu, ile wymaga sytuacja. Ma super podejście do dzieci i rodziców. Profesjonalny i miły personel przychodni. Szczerze polecam.",
  },
  {
    name: "Katarzyna Kur",
    text: "Z całego serca polecam Lubelskie Centrum Kardiologii. Pani Doktor Agata Rybak to bardzo kompetentna kobieta z odpowiednim podejściem do małych pacjentów. Panie w rejestracji to przemiłe kobiety służące uśmiechem i pomocą. Bardzo dziękujemy za wspaniałą wizytę i pomoc. ❤️",
  },
  {
    name: "Leah KB",
    text: "Kardiolog Dr Dominik Wyszyński — bardzo dobry lekarz i bardzo polecam. Przeznaczył prawie godzinę na przeprowadzenie dogłębnego wywiadu z pacjentem i wyjaśnieniu choroby i potencjalnych metod leczenia. Szczegółowo opisał działanie poszczególnych leków.",
  },
  {
    name: "alexpddm",
    text: "Towarzyszyłam mamie podczas wizyty w Elkardii. Ujęło mnie całościowe i profesjonalne podejście do pacjenta. Wizyta nie zakończyła się, dopóki doktor nie miał pewności czy ma już wystarczającą wiedzę o stanie zdrowia pacjentki. Polecam przychodnię.",
  },
  {
    name: "KATARZYNA FILIKS",
    text: "Do Pani dr Elżbiety Wójcik chodzę od wielu lat. To świetny specjalista i bardzo przyjemna osoba. Nigdy nie odmawia pomocy. Personel również bardzo przyjemny. Za każdym razem jak dzwonię czy zmieniam termin to czuję się odpowiednio zaopiekowana. Serdecznie polecam.",
  },
  {
    name: "Marcin Augustyniak",
    text: "Polecam z całego serca. Każdy kto tam pracuje jest mega miły i przy tym profesjonalny. Dr Maciej Wójcik i dr Błaszkiewicz to doktorzy z prawdziwego zdarzenia, których polecę każdemu z czystym sumieniem.",
  },
  {
    name: "Rafał Chabros",
    text: "Profesjonalna firma. Szybki kontakt i krótkie terminy wizyt, miła Pani w rejestracji służy pomocą. Nowoczesny sprzęt i dużo miejsc parkingowych. Placówka jest nastawiona na rozwój oraz nieustanne podnoszenie jakości świadczonych usług.",
  },
  {
    name: "Joanna Mirowska-Wieczorek",
    text: "Pan Doktor Dubejko jest nie tylko wspaniałym lekarzem, ale także wspaniałym, ciepłym Człowiekiem. Pomocny i kompetentny. Dziękuję Panie Doktorze za Pana serce dla serca. Wdzięczna Joanna",
  },
  {
    name: "Agnieszka",
    text: "Dr B.Połecka — bardzo sympatyczna Pani doktor. Lekarz z powołaniem. Wszystko dokładnie tłumaczy, ma czas dla pacjenta. Pełen profesjonalizm. Szczerze polecam!",
  },
  {
    name: "Andrzej Sujka",
    text: "Fachowa, rzetelna, trafiona diagnoza na pierwszej z wizyt. Fachowcy w swoim zawodzie, oddani pacjentowi. W szczególności na uznanie zasługuje dr Wójcik. Diagnostyka na najwyższym poziomie niespotykana w województwie lubelskim. POLECAM",
  },
  {
    name: "Katarzyna Poliszuk",
    text: "Serdecznie polecam. Bardzo miła i kompetentna obsługa w przychodni. Lekarze profesjonalnie podchodzą do pacjenta. Dodatkowy plus — można wykonać badania diagnostyczne. Polecam!!",
  },
  {
    name: "Edit",
    text: "Bardzo miłe Panie w rejestracji, kardiolog u którego się leczę bardzo rzeczowy i wnikliwy, wizyta zawsze z konkretnym wywiadem, dzięki czemu leki dobrane tak jak trzeba. Polecam serdecznie i dziękuję.",
  },
  {
    name: "Agata Ewa",
    text: "Lekarze tłumaczą wszystko co robią podczas badań i starają się żeby pacjent czuł się komfortowo. Badania wykonywane są dokładnie, powoli, poświęcają dużo uwagi.",
  },
  {
    name: "Marzena Jędrzejewska",
    text: "Absolutny top, jeśli chodzi o jakość usług kardiologicznych w Lublinie. Profesjonalizm, empatyczne podejście do pacjenta, kultura — na najwyższym poziomie.",
  },
  {
    name: "Marcelina Pietrzak",
    text: "Bardzo polecam gabinety. Byliśmy z dzieckiem na kontroli u dr Połeckiej. Szczegółowe badania + echo + EKG. Oprócz tego obsługiwała nas bardzo miła Pani na recepcji.",
  },
  {
    name: "Paweł Jurkowski",
    text: "Profesjonalny zespół i podejście do pacjenta. Czułem się zaopiekowany i wysłuchany. Polecam.",
  },
  {
    name: "Anna Tajl",
    text: "Ocena pozytywna. Opis EKG dokładny. Lekarz dr Błaszkiewicz konkretny, nakierowany na empatię do pacjenta. Polecam.",
  },
  {
    name: "Iwona Miszczak",
    text: "Wspaniała doktor Renata Jawniak, szkoda, że leczy tylko dzieci. Dziękuję za wieloletnią opiekę nad córką.",
  },
  {
    name: "Anna M.",
    text: "Profesjonalne podejście do pacjenta, wielu specjalistów, miła i rzeczowa obsługa. Polecam.",
  },
  {
    name: "jacek gapinski",
    stars: 3,
    text: "Sprawna obsługa, rzeczowe wyjaśnienie. Polecam.",
  },
]

const COLORS = [
  "bg-[#EE3920]/10 text-[#EE3920]",
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-amber-100 text-amber-700",
  "bg-teal-100 text-teal-700",
]

function initials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]?.toUpperCase() ?? "").join("")
}

function StarFull() {
  return (
    <svg className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarPartial({ pct }: { pct: number }) {
  const uid = useId()
  const id = `partial-${Math.round(pct * 100)}-${uid}`
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20">
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset={`${pct * 100}%`} stopColor="#FBBF24" />
          <stop offset={`${pct * 100}%`} stopColor="#E2E8F0" />
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i))
        if (fill >= 1) return <StarFull key={i} />
        if (fill > 0) return <StarPartial key={i} pct={fill} />
        return (
          <svg key={i} className="h-4 w-4 fill-slate-200" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      })}
    </div>
  )
}

function CardStars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i))
        if (fill >= 1) return <StarFull key={i} />
        if (fill > 0) return <StarPartial key={i} pct={fill} />
        return (
          <svg key={i} className="h-4 w-4 fill-slate-200" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      })}
    </div>
  )
}

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number>(0)
  const drag = useRef({ active: false, startX: 0, startOffset: 0 })

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const SPEED = 0.55

    function tick() {
      if (!drag.current.active && el) {
        offsetRef.current += SPEED
        const half = el.scrollWidth / 2
        if (offsetRef.current >= half) offsetRef.current -= half
        el.style.transform = `translateX(${-offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    drag.current = { active: true, startX: e.clientX, startOffset: offsetRef.current }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current.active || !trackRef.current) return
    const half = trackRef.current.scrollWidth / 2
    let next = drag.current.startOffset + (drag.current.startX - e.clientX)
    next = ((next % half) + half) % half
    offsetRef.current = next
    trackRef.current.style.transform = `translateX(${-next}px)`
  }

  function onPointerUp() {
    drag.current.active = false
  }

  const doubled = [...reviews, ...reviews]

  return (
    <section className="overflow-hidden py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 flex items-end justify-between">
        <div>
          <p className="text-pretty text-xs font-semibold uppercase tracking-widest text-[#EE3920]">Opinie pacjentów</p>
          <h2 className="text-balance mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Co mówią o nas pacjenci</h2>
          <div className="mt-3 flex items-center gap-2">
            <RatingStars rating={4.8} />
            <span className="text-sm font-semibold text-slate-900">4,8</span>
            <span className="text-sm text-slate-500">· 83 opinie · Google</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="cursor-grab active:cursor-grabbing select-none pl-6 lg:pl-8"
      >
        <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
          {doubled.map((r, i) => (
            <div
              key={i}
              className="flex w-72 shrink-0 flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${COLORS[i % COLORS.length]}`}>
                  {initials(r.name)}
                </div>
                <div className="min-w-0">
                  <p className="text-pretty truncate text-sm font-semibold text-slate-900">{r.name}</p>
                  <CardStars rating={r.stars} />
                </div>
              </div>
              <p className="text-pretty text-sm leading-relaxed text-slate-600 line-clamp-5">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
