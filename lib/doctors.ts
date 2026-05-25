export type Doctor = {
  slug: string
  name: string
  group: string
  tags: string[]
  bio: string
  conditions?: string[]
  services?: string[]
  prices?: { label: string; price: string }[]
  hours?: string
  patientInfo?: { minAge?: number; nfz: boolean; notes?: string[] }
}

// ─── shared ──────────────────────────────────────────────────────────────────

const STANDARD_CARDIO_CONDITIONS = [
  "Zaburzenia rytmu serca i przewodzenia",
  "Kołatanie serca",
  "Kardiologia ogólna",
  "Wady serca",
  "Nadciśnienie tętnicze",
  "Choroba wieńcowa",
  "Zaburzenia lipidowe",
  "Kardiomiopatia",
  "Omdlenia i zasłabnięcia",
  "Szmery sercowe",
  "Stan po zawale serca",
]

const STANDARD_CARDIO_PRICES = [
  { label: "Konsultacja kardiologiczna + EKG spoczynkowe", price: "250 zł" },
  { label: "Telekonsultacja", price: "170 zł" },
  { label: "Opis EKG spoczynkowego", price: "80 zł" },
]

const STANDARD_PATIENT_INFO = {
  minAge: 16,
  nfz: false,
  notes: [
    "Przy każdej wizycie wykonywany jest pomiar ciśnienia tętniczego i EKG spoczynkowe.",
    "Pacjenci poniżej 18 roku życia tylko w obecności rodzica lub opiekuna prawnego.",
  ],
}

const PEDIATRIC_PRICES = [
  { label: "Konsultacja + echo serca + EKG", price: "550 zł" },
  { label: "Konsultacja + EKG", price: "400 zł" },
  { label: "Echokardiografia", price: "350 zł" },
  { label: "Opis EKG", price: "100 zł" },
]

// ─── doctors ─────────────────────────────────────────────────────────────────

export const doctors: Doctor[] = [

  // ── Kardiologia dorosłych ─────────────────────────────────────────────────

  {
    slug: "maciej-wojcik",
    name: "dr hab. n. med. Maciej Wójcik",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Elektrofizjolog", "Ablacje", "Echo serca"],
    bio: "Doktor habilitowany nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Elektrofizjolog z wieloletnim doświadczeniem — diagnozuje i leczy zaburzenia rytmu serca oraz przewodzenia, kwalifikuje pacjentów do ablacji RF i PFA, którą wykonuje w Szpitalu Specjalistycznym w Białej Podlaskiej.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Kwalifikacja do ablacji serca (RF / PFA)",
      "Opieka przed i po ablacji",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Ablacja RF / PFA (kwalifikacja)", "Holter EKG", "Holter RR"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG (pierwsza wizyta)", price: "380 zł" },
      { label: "Konsultacja kardiologiczna + EKG (kontrolna)", price: "300 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Poniedziałki i piątki, 10:00–14:30",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "pawel-blaszkiewicz",
    name: "dr n. med. Paweł Błaszkiewicz",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Elektrofizjolog", "Ablacje", "Próba wysiłkowa"],
    bio: "Specjalista kardiolog i elektrofizjolog. Diagnozuje i leczy zaburzenia rytmu serca, kwalifikuje pacjentów do ablacji — zabieg wykonuje w Szpitalu Specjalistycznym w Białej Podlaskiej. Wykonuje próbę wysiłkową.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Wrodzone wady serca",
      "Kwalifikacja do ablacji serca",
      "Opieka kardiochirurgiczna (kwalifikacja)",
      "Opieka po angioplastyce",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Próba wysiłkowa", "Ablacja (kwalifikacja)", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Próba wysiłkowa", price: "220 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Poniedziałki i piątki, 13:30–19:30",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "janusz-dubejko",
    name: "dr n. med. Janusz Dubejko",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi kompleksowe konsultacje kardiologiczne, diagnostykę i leczenie chorób serca, nadciśnienia, choroby wieńcowej oraz zaburzeń lipidowych.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Stan po angioplastyce wieńcowej",
      "Stan po operacji pomostowania (CABG)",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Telekonsultacja", "Opis EKG spoczynkowego"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Poniedziałki 12:00–17:00, czwartki 13:00–17:00, piątki 12:00–17:00",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "dariusz-dunia",
    name: "dr Dariusz Dunia",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca"],
    bio: "Specjalista kardiolog z doświadczeniem w diagnostyce echokardiograficznej. Prowadzi konsultacje kardiologiczne, diagnostykę wad serca, niewydolności serca i choroby wieńcowej.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Kwalifikacja do operacji serca",
      "Rehabilitacja kardiologiczna (kwalifikacja)",
      "Stan po angioplastyce",
      "Stan po operacji pomostowania (CABG)",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Środy, 11:00–14:00",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "marcin-janowski",
    name: "dr n. med. Marcin Janowski",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog zajmujący się diagnostyką i leczeniem chorób serca oraz opieką nad pacjentami z wszczepionymi urządzeniami elektrycznymi serca (stymulatory, ICD, CRT-D). Pracuje w Szpitalu Klinicznym Nr 4 w Lublinie.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Kontrola i kwalifikacja do stymulatora, ICD, CRT-D",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Kontrola ICD / CRT-D", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Kontrola stymulatora / ICD", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Terminy ustalane indywidualnie — zadzwoń do rejestracji",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "rafal-lenard",
    name: "dr n. med. Rafał Lenard",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Próba wysiłkowa", "TILT TEST"],
    bio: "Specjalista chorób wewnętrznych, kardiolog i specjalista rehabilitacji kardiologicznej. Wykonuje próbę wysiłkową i tilt-test — jeden z nielicznych lekarzy wykonujących to badanie w Lublinie. Prowadzi diagnostykę omdleń i arytmii.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Rehabilitacja kardiologiczna",
      "Kwalifikacja do operacji serca",
      "Wady zastawkowe serca",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Próba wysiłkowa", "TILT TEST", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "270 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Próba wysiłkowa", price: "220 zł" },
      { label: "TILT TEST", price: "650 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Wtorki 16:00–18:30, środy 8:00–10:00 (TILT TEST)",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "andrzej-madejczyk",
    name: "dr n. med. Andrzej Madejczyk",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi konsultacje kardiologiczne, diagnostykę i leczenie nadciśnienia, choroby wieńcowej oraz zaburzeń metabolicznych. Pracuje w Szpitalu Klinicznym Nr 4 w Lublinie.",
    conditions: STANDARD_CARDIO_CONDITIONS,
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Terminy ustalane indywidualnie — zadzwoń do rejestracji",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "beata-majewska",
    name: "dr Beata Majewska",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii. Prowadzi konsultacje kardiologiczne i wykonuje badanie echokardiograficzne. Zajmuje się diagnostyką wad serca, kardiomiopatii i chorób mięśnia sercowego.",
    conditions: STANDARD_CARDIO_CONDITIONS,
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Czwartki, 15:20–19:00",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "elzbieta-mazur-stazka",
    name: "dr n. med. Elżbieta Mazur-Stążka",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi kompleksowe konsultacje kardiologiczne, diagnostykę i leczenie nadciśnienia, choroby wieńcowej oraz zaburzeń metabolicznych.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Kwalifikacja do operacji serca",
      "Rehabilitacja kardiologiczna (kwalifikacja)",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG (pierwsza wizyta)", price: "280 zł" },
      { label: "Konsultacja kardiologiczna + EKG (kontrolna)", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Czwartki, 9:00–12:00",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "marek-modrzewski",
    name: "dr n. med. Marek Modrzewski",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii i opiece nad pacjentami z wszczepionymi urządzeniami elektrycznymi serca (ICD, CRT-D).",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Wady zastawkowe serca",
      "Kontrola stymulatora i ICD / CRT-D",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola stymulatora / ICD / CRT-D", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Kontrola stymulatora / ICD", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Środy, 16:20–18:00",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "andrzej-rubaj",
    name: "dr hab. n. med. Andrzej Rubaj",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Doktor habilitowany nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Zajmuje się diagnostyką i leczeniem zaburzeń rytmu serca, niewydolności serca oraz opieką nad pacjentami z wszczepionymi urządzeniami elektrycznymi.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Niewydolność serca",
      "Kontrola stymulatora i ICD / CRT-D",
      "Kwalifikacja do operacji serca",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola stymulatora / ICD / CRT-D", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Kontrola stymulatora / defibrylatora", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Terminy ustalane indywidualnie — zadzwoń do rejestracji",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "marcin-skorski",
    name: "dr n. med. Marcin Skórski",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi konsultacje kardiologiczne, diagnostykę i leczenie chorób serca, nadciśnienia oraz chorób współistniejących układu sercowo-naczyniowego.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Wady zastawkowe serca",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG (pierwsza wizyta)", price: "380 zł" },
      { label: "Konsultacja kardiologiczna + EKG (kontrolna)", price: "280 zł" },
      { label: "Echokardiografia", price: "300 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Terminy ustalane indywidualnie — zadzwoń do rejestracji",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "izabela-sokoluk",
    name: "dr n. med. Izabela Sokoluk",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Balneologia"],
    bio: "Specjalista kardiolog i specjalista balneologii oraz medycyny fizykalnej. Łączy opiekę kardiologiczną z doświadczeniem w medycynie uzdrowiskowej i rehabilitacji kardiologicznej.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Bezdech senny",
      "Kwalifikacja do leczenia uzdrowiskowego",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Konsultacja balneologiczna", "Kwalifikacja do leczenia uzdrowiskowego", "Telekonsultacja"],
    prices: STANDARD_CARDIO_PRICES,
    hours: "Terminy ustalane indywidualnie — zadzwoń do rejestracji",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "magdalena-stadnik",
    name: "dr n. med. Magdalena Stadnik",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii i opiece nad pacjentami z urządzeniami elektrycznymi serca. Starszy asystent w Klinice Kardiologii Szpitala Specjalistycznego im. Stefana Kardynała Wyszyńskiego w Lublinie.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Kontrola stymulatora i ICD / CRT-D",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola stymulatora / ICD / CRT-D", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Kontrola stymulatora / defibrylatora", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Terminy ustalane indywidualnie — zadzwoń do rejestracji",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "andrzej-wilkolaski",
    name: "dr n. med. Andrzej Wilkołaski",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w opiece nad pacjentami z wszczepionymi kardiowerterami-defibrylatorami (ICD) i urządzeniami resynchronizującymi (CRT-D). Pracuje w Szpitalu Klinicznym Nr 4 w Lublinie.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Kontrola i kwalifikacja do stymulatora, ICD, CRT-D",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Kontrola ICD / CRT-D", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Kontrola stymulatora / ICD", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Czwartki, 13:45–15:00",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "dominik-wyszynski",
    name: "dr n. med. Dominik Wyszyński",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Próba wysiłkowa", "ICD/CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii, próbie wysiłkowej i kontroli urządzeń elektrycznych serca.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Kontrola stymulatora i ICD / CRT-D",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Próba wysiłkowa", "Kontrola ICD / CRT-D", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Próba wysiłkowa", price: "220 zł" },
      { label: "Kontrola stymulatora / ICD", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Poniedziałki 14:00–16:00, piątki 9:00–13:00",
    patientInfo: STANDARD_PATIENT_INFO,
  },
  {
    slug: "radoslaw-zarczuk",
    name: "dr n. med. Radosław Zarczuk",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii i opiece nad pacjentami z wszczepionymi urządzeniami elektrycznymi serca. Pracuje w Szpitalu Klinicznym Nr 4 w Lublinie.",
    conditions: [
      ...STANDARD_CARDIO_CONDITIONS,
      "Wady zastawkowe serca",
      "Kontrola stymulatora i kardiowertera-defibrylatora",
    ],
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola stymulatora / ICD / CRT-D", "Holter EKG i RR", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Kontrola stymulatora / defibrylatora", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Opis EKG spoczynkowego", price: "80 zł" },
    ],
    hours: "Piątki, 13:20–14:20",
    patientInfo: STANDARD_PATIENT_INFO,
  },

  // ── Kardiologia dziecięca ─────────────────────────────────────────────────

  {
    slug: "barbara-polecka",
    name: "dr n. med. Barbara Połecka",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Kardiolog dziecięcy"],
    bio: "Specjalista pediatrii i kardiologii dziecięcej. Prowadzi konsultacje noworodkowe w szpitalach w Lublinie. Wykonuje echokardiografię aparatem Philips Affiniti 50.",
    conditions: [
      "Zaburzenia rytmu serca i przewodzenia u dzieci",
      "Wrodzone wady serca",
      "Nadciśnienie tętnicze u dzieci",
      "Kardiomiopatia u dzieci",
      "Szmery sercowe u dzieci",
      "Echokardiografia (dzieci i noworodki)",
    ],
    services: ["Konsultacja kardiologiczna dziecięca + echo serca + EKG", "Konsultacja kardiologiczna dziecięca + EKG", "Echokardiografia", "Opis EKG"],
    prices: PEDIATRIC_PRICES,
    hours: "Środy, 9:00–12:00",
    patientInfo: { minAge: 0, nfz: false, notes: ["Rejestracja na dany miesiąc otwierana pierwszego dnia roboczego miesiąca poprzedniego."] },
  },
  {
    slug: "ewa-stazka-gregosiewicz",
    name: "dr n. med. Ewa Stążka-Gregosiewicz",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Kardiolog dziecięcy"],
    bio: "Specjalista pediatrii i kardiologii dziecięcej. Diagnozuje i leczy arytmie, wady serca, nadciśnienie i inne choroby układu krążenia u dzieci i młodzieży. Wykonuje echokardiografię aparatem Philips Affiniti 50.",
    conditions: [
      "Zaburzenia rytmu serca u dzieci",
      "Wrodzone wady serca",
      "Nadciśnienie tętnicze u dzieci",
      "Kardiomiopatia u dzieci",
      "Echokardiografia (dzieci i noworodki)",
    ],
    services: ["Konsultacja kardiologiczna dziecięca + echo serca + EKG", "Konsultacja kardiologiczna dziecięca + EKG", "Echokardiografia", "Opis EKG"],
    prices: PEDIATRIC_PRICES,
    hours: "Środy, 14:00–16:00",
    patientInfo: { minAge: 0, nfz: false, notes: ["Rejestracja na dany miesiąc otwierana pierwszego dnia roboczego miesiąca poprzedniego."] },
  },
  {
    slug: "agata-rybak",
    name: "dr Agata Rybak",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Kardiolog dziecięcy"],
    bio: "Specjalista pediatrii i kardiologii dziecięcej. Szkoliła się w Instytucie Pomnik — Centrum Zdrowia Dziecka w Warszawie, gdzie pracuje w Klinice Kardiologii. Członkini PTK, PTP i American Society of Echocardiography.",
    conditions: [
      "Zaburzenia rytmu serca u dzieci",
      "Wrodzone wady serca",
      "Opieka po leczeniu wrodzonych wad serca",
      "Diagnostyka kardiologiczna dzieci i młodzieży",
    ],
    services: ["Konsultacja kardiologiczna dziecięca + echo serca + EKG", "Konsultacja kardiologiczna dziecięca + EKG", "Echokardiografia", "Opis EKG"],
    prices: PEDIATRIC_PRICES,
    patientInfo: { minAge: 0, nfz: false, notes: ["Rejestracja na dany miesiąc otwierana pierwszego dnia roboczego miesiąca poprzedniego."] },
  },
  {
    slug: "ewelina-ksiazek",
    name: "dr Ewelina Książek",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Hipertensjolog", "Nefrolog dziecięcy"],
    bio: "Specjalista pediatrii, hipertensjologii i nefrologii dziecięcej z ponad 25-letnim doświadczeniem. Ukończyła studia medyczne na Akademii Medycznej w Lublinie (1996). Od 1997 roku pracuje w Klinice Nefrologii Dziecięcej Szpitala Dziecięcego.",
    conditions: [
      "Nadciśnienie pierwotne, wtórne i oporne u dzieci",
      "Choroby nerek u dzieci",
      "Choroby układu moczowego u dzieci",
      "Diagnostyka nefrourologiczna",
    ],
    services: ["Konsultacja hipertensjologiczna dla dzieci", "Konsultacja nefrologiczna dla dzieci", "Konsultacja nefrologiczna + USG układu moczowego"],
    prices: [
      { label: "Konsultacja hipertensjologiczna dla dzieci", price: "250 zł" },
      { label: "Konsultacja nefrologiczna dla dzieci", price: "250 zł" },
      { label: "Konsultacja nefrologiczna + USG", price: "330 zł" },
    ],
    hours: "Środy, 15:00–18:00",
    patientInfo: { minAge: 0, nfz: false },
  },

  // ── Kardiochirurgia ───────────────────────────────────────────────────────

  {
    slug: "janusz-stazka",
    name: "prof. dr hab. n. med. Janusz Stążka",
    group: "Kardiochirurgia",
    tags: ["Kardiochirurg"],
    bio: "Profesor nauk medycznych, pracownik Katedry i Kliniki Kardiochirurgii Uniwersytetu Medycznego w Lublinie. Prowadzi konsultacje kardiochirurgiczne i sprawuje opiekę pooperacyjną.",
    conditions: [
      "Kwalifikacja do operacji pomostowania aortalno-wieńcowego (CABG)",
      "Kwalifikacja do operacji zastawek serca",
      "Leczenie tętniaka aorty",
      "Wrodzone wady serca (kwalifikacja)",
      "Opieka pooperacyjna po operacjach serca",
    ],
    services: ["Konsultacja kardiochirurgiczna", "Kwalifikacja do operacji serca", "Opieka pooperacyjna"],
    patientInfo: { nfz: false },
  },

  // ── Neurologia ────────────────────────────────────────────────────────────

  {
    slug: "jacek-jaworski",
    name: "dr n. med. Jacek Jaworski",
    group: "Neurologia",
    tags: ["Neurolog"],
    bio: "Specjalista neurolog zajmujący się diagnostyką i leczeniem chorób centralnego i obwodowego układu nerwowego.",
    conditions: [
      "Omdlenia i zasłabnięcia",
      "Udar mózgu i TIA",
      "Padaczka",
      "Migrena",
      "Zawroty głowy",
      "Zaburzenia snu",
      "Neuropatia obwodowa",
      "Krwawienie śródczaszkowe",
    ],
    services: ["Konsultacja neurologiczna", "Diagnostyka omdleń", "Diagnostyka udaru i TIA", "Diagnostyka padaczki i migreny"],
    patientInfo: { nfz: false },
  },

  // ── Neurochirurgia ────────────────────────────────────────────────────────

  {
    slug: "bartlomiej-tyzo",
    name: "dr Bartłomiej Tyzo",
    group: "Neurochirurgia",
    tags: ["Neurochirurg"],
    bio: "Neurochirurg zajmujący się diagnostyką i leczeniem chorób centralnego i obwodowego układu nerwowego oraz kwalifikacją do leczenia operacyjnego.",
    conditions: [
      "Guzy mózgu",
      "Guzy rdzenia kręgowego",
      "Guzy nerwów obwodowych",
      "Guzy oczodołu",
      "Guzy podstawy czaszki",
    ],
    services: ["Konsultacja neurochirurgiczna", "Kwalifikacja do operacji neurochirurgicznych", "Opieka pooperacyjna"],
    patientInfo: { nfz: false },
  },

  // ── Chirurgia naczyniowa ──────────────────────────────────────────────────

  {
    slug: "janusz-rybak",
    name: "dr n. med. Janusz Rybak",
    group: "Chirurgia naczyniowa",
    tags: ["Chirurg naczyniowy"],
    bio: "Specjalista chirurgii naczyniowej. Zajmuje się nieinwazyjną diagnostyką i leczeniem chorób żył, tętnic i naczyń limfatycznych.",
    conditions: [
      "Żylaki kończyn dolnych",
      "Zakrzepica żył głębokich",
      "Choroby tętnic obwodowych",
      "Choroby naczyń limfatycznych",
      "Malformacje naczyniowe",
    ],
    services: ["Konsultacja chirurgii naczyniowej", "USG Doppler tętnic i żył", "Badanie ABI", "Nieinwazyjne zamykanie malformacji naczyniowych"],
    patientInfo: { nfz: false },
  },

  // ── Pulmonologia ──────────────────────────────────────────────────────────

  {
    slug: "marek-michnar",
    name: "dr n. med. Marek Michnar",
    group: "Pulmonologia",
    tags: ["Pulmonolog"],
    bio: "Specjalista pulmonolog. Prowadzi profilaktykę, diagnostykę i leczenie chorób układu oddechowego.",
    conditions: [
      "POChP",
      "Astma oskrzelowa",
      "Zwłóknienie płuc",
      "Rozstrzenie oskrzeli",
      "Mukowiscydoza",
      "Rak płuca",
      "Sarkoidoza",
      "Bezdech senny",
    ],
    services: ["Konsultacja pulmonologiczna", "Spirometria", "Diagnostyka POChP i astmy", "Diagnostyka bezdechu sennego"],
    patientInfo: { nfz: false },
  },

  // ── Endokrynologia i diabetologia ─────────────────────────────────────────

  {
    slug: "paulina-gryn",
    name: "lek. Paulina Gryń",
    group: "Endokrynologia i diabetologia",
    tags: ["Endokrynolog dorosłych"],
    bio: "Endokrynolog dla dorosłych specjalizujący się w diagnostyce i leczeniu schorzeń gruczołów wydzielania wewnętrznego. Specjalizuje się w endokrynologii w SPSK4 w Lublinie.",
    conditions: [
      "Choroby tarczycy (niedoczynność, nadczynność, wole)",
      "Cukrzyca",
      "Zaburzenia przysadki mózgowej",
      "Choroby nadnerczy",
      "Zaburzenia przytarczyc",
      "Osteoporoza",
    ],
    services: ["Konsultacja endokrynologiczna", "Diagnostyka chorób tarczycy", "Diagnostyka zaburzeń hormonalnych"],
    patientInfo: { nfz: false },
  },
  {
    slug: "joanna-mroczek",
    name: "lek. Joanna Mroczek",
    group: "Endokrynologia i diabetologia",
    tags: ["Endokrynolog dziecięcy", "Diabetolog"],
    bio: "Endokrynolog i diabetolog dla dzieci i młodzieży. Pracuje w Klinice Endokrynologii i Diabetologii Dziecięcej Szpitala Dziecięcego w Lublinie od 2014 roku.",
    conditions: [
      "Cukrzyca u dzieci i młodzieży",
      "Choroby tarczycy u dzieci",
      "Zaburzenia wzrostu i dojrzewania",
      "Otyłość u dzieci",
      "Choroby nadnerczy u dzieci",
    ],
    services: ["Konsultacja endokrynologiczna dla dzieci", "Konsultacja diabetologiczna dla dzieci", "Diagnostyka zaburzeń hormonalnych u dzieci"],
    patientInfo: { minAge: 0, nfz: false },
  },

  // ── Dietetyka ─────────────────────────────────────────────────────────────

  {
    slug: "dorota-sawczuk",
    name: "mgr Dorota Sawczuk",
    group: "Dietetyka",
    tags: ["Dietetyk"],
    bio: "Dietetyk z doświadczeniem w układaniu indywidualnych planów żywienia. Skupia się na trwałej zmianie nawyków żywieniowych i zdrowym odchudzaniu bez suplementów.",
    conditions: [
      "Nadwaga i otyłość",
      "Żywienie w chorobach sercowo-naczyniowych",
      "Dieta przy cukrzycy i insulinooporności",
      "Żywienie sportowe",
      "Zdrowe odchudzanie",
    ],
    services: ["Konsultacja dietetyczna", "Analiza składu ciała (SECA-285)", "Indywidualny plan żywienia", "Konsultacja online"],
    patientInfo: { nfz: false },
  },
  {
    slug: "ewa-brodacz",
    name: "mgr Ewa Brodacz",
    group: "Dietetyka",
    tags: ["Dietetyk kliniczny"],
    bio: "Dietetyk kliniczny z doświadczeniem w żywieniu terapeutycznym przy chorobach przewlekłych, w tym schorzeniach układu sercowo-naczyniowego, cukrzycy i chorobach nerek.",
    conditions: [
      "Dieta kardiologiczna",
      "Dieta przy cukrzycy i insulinooporności",
      "Żywienie przy chorobach nerek",
      "Dieta w chorobach zapalnych jelit",
      "Żywienie kliniczne i dojelitowe",
    ],
    services: ["Konsultacja dietetyczna kliniczna", "Analiza składu ciała", "Dieta przy chorobach serca", "Dieta przy cukrzycy i chorobach nerek"],
    patientInfo: { nfz: false },
  },

  // ── Stomatologia ──────────────────────────────────────────────────────────

  {
    slug: "elzbieta-wojcik",
    name: "lek. stom. Elżbieta Wójcik",
    group: "Stomatologia",
    tags: ["Stomatolog", "Protetyk"],
    bio: "Lekarz stomatolog prowadzący kompleksową stomatologię dla dzieci i dorosłych z obserwacją kardiologiczną — jedyne takie miejsce w Lublinie. Bezpieczna dla pacjentów z chorobami serca.",
    conditions: [
      "Stomatologia zachowawcza",
      "Protetyka (korony, mosty, protezy)",
      "Stomatologia dziecięca",
      "Leczenie kanałowe",
      "Ekstrakcje zębów",
      "Stomatologia dla pacjentów kardiologicznych",
    ],
    services: ["Stomatologia zachowawcza", "Protetyka", "Stomatologia dziecięca", "Leczenie kanałowe", "Ekstrakcje"],
    patientInfo: { nfz: false },
  },
]

export const groups = [
  "Kardiologia dorosłych",
  "Kardiologia dziecięca",
  "Kardiochirurgia",
  "Neurologia",
  "Neurochirurgia",
  "Chirurgia naczyniowa",
  "Pulmonologia",
  "Endokrynologia i diabetologia",
  "Dietetyka",
  "Stomatologia",
] as const

export function getDoctorBySlug(slug: string) {
  return doctors.find(d => d.slug === slug)
}
