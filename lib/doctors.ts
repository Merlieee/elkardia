export type Doctor = {
  slug: string
  name: string
  group: string
  tags: string[]
  bio: string
  services?: string[]
  prices?: { label: string; price: string }[]
  hours?: string
}

export const doctors: Doctor[] = [
  // ─── Kardiologia dorosłych ───────────────────────────────────────────────
  {
    slug: "maciej-wojcik",
    name: "dr hab. n. med. Maciej Wójcik",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Elektrofizjolog", "Ablacje", "Echo serca"],
    bio: "Doktor habilitowany nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Elektrofizjolog z wieloletnim doświadczeniem — diagnozuje i leczy zaburzenia rytmu serca oraz przewodzenia, kwalifikuje pacjentów do ablacji RF i PFA, którą wykonuje w Szpitalu Specjalistycznym w Białej Podlaskiej. W Elkardia prowadzi konsultacje kardiologiczne i elektrofizjologiczne.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Ablacja RF / PFA (kwalifikacja)", "Holter EKG", "Holter RR"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "380 zł (pierwsza wizyta) / 300 zł (kontrolna)" },
    ],
    hours: "Poniedziałki i piątki, 10:00–14:30",
  },
  {
    slug: "pawel-blaszkiewicz",
    name: "dr n. med. Paweł Błaszkiewicz",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Elektrofizjolog", "Ablacje", "Próba wysiłkowa"],
    bio: "Specjalista kardiolog i elektrofizjolog. Diagnozuje i leczy zaburzenia rytmu serca, kwalifikuje pacjentów do ablacji — zabieg wykonuje w Szpitalu Specjalistycznym w Białej Podlaskiej. W Elkardia prowadzi konsultacje kardiologiczne i elektrofizjologiczne, wykonuje próbę wysiłkową.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Próba wysiłkowa", "Ablacja (kwalifikacja)", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Próba wysiłkowa", price: "220 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Interpretacja EKG", price: "80 zł" },
    ],
    hours: "Poniedziałki i piątki, 13:30–19:30",
  },
  {
    slug: "janusz-dubejko",
    name: "dr n. med. Janusz Dubejko",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi kompleksowe konsultacje kardiologiczne, diagnostykę chorób serca, nadciśnienia tętniczego, choroby wieńcowej i zaburzeń lipidowych. Wykonuje badanie echokardiograficzne i interpretację EKG.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Holter EKG", "Holter RR"],
  },
  {
    slug: "dariusz-dunia",
    name: "dr Dariusz Dunia",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca"],
    bio: "Specjalista kardiolog z doświadczeniem w diagnostyce echokardiograficznej. Prowadzi konsultacje kardiologiczne, wykonuje badanie echokardiograficzne serca oraz interpretację EKG. Zajmuje się diagnostyką wad serca, niewydolności serca i choroby wieńcowej.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia"],
  },
  {
    slug: "marcin-janowski",
    name: "dr n. med. Marcin Janowski",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog zajmujący się m.in. kontrolą wszczepialnych kardiowerterów-defibrylatorów (ICD) i urządzeń resynchronizujących (CRT-D). Prowadzi konsultacje kardiologiczne dla pacjentów z wszczepionym urządzeniem elektrycznym serca.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Kontrola ICD / CRT-D"],
  },
  {
    slug: "rafal-lenard",
    name: "dr n. med. Rafał Lenard",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Próba wysiłkowa", "TILT TEST"],
    bio: "Specjalista chorób wewnętrznych, kardiolog i specjalista rehabilitacji kardiologicznej. Wykonuje próbę wysiłkową i tilt-test — jeden z niewielu lekarzy wykonujących to badanie w Lublinie. Prowadzi konsultacje kardiologiczne, diagnostykę omdleń, arytmii i rehabilitację po zawale.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Próba wysiłkowa", "TILT TEST", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "270 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Próba wysiłkowa", price: "220 zł" },
      { label: "TILT TEST", price: "650 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Interpretacja EKG", price: "80 zł" },
    ],
    hours: "Wtorki 16:00–18:30, środy 8:00–10:00 (TILT TEST)",
  },
  {
    slug: "andrzej-madejczyk",
    name: "dr n. med. Andrzej Madejczyk",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi konsultacje kardiologiczne, diagnostykę i leczenie chorób serca, nadciśnienia tętniczego, choroby wieńcowej oraz zaburzeń lipidowych.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia"],
  },
  {
    slug: "beata-majewska",
    name: "dr Beata Majewska",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii. Prowadzi konsultacje kardiologiczne i wykonuje badanie echokardiograficzne serca. Zajmuje się diagnostyką wad serca, kardiomiopatii i chorób mięśnia sercowego.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia"],
  },
  {
    slug: "elzbieta-mazur-stazka",
    name: "dr n. med. Elżbieta Mazur-Stążka",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi konsultacje kardiologiczne, diagnostykę i leczenie nadciśnienia, choroby wieńcowej oraz zaburzeń metabolicznych współistniejących z chorobami układu sercowo-naczyniowego.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia"],
  },
  {
    slug: "marek-modrzewski",
    name: "dr n. med. Marek Modrzewski",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii i opiece nad pacjentami z wszczepionymi urządzeniami elektrycznymi serca (ICD, CRT-D). Prowadzi konsultacje kardiologiczne, wykonuje echo serca i kontrole urządzeń.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola ICD / CRT-D"],
  },
  {
    slug: "andrzej-rubaj",
    name: "dr hab. n. med. Andrzej Rubaj",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Doktor habilitowany nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Zajmuje się diagnostyką i leczeniem zaburzeń rytmu serca, niewydolności serca oraz opieką nad pacjentami ze stymulatorem, ICD lub CRT-D. Wykonuje echokardiografię i kontrole urządzeń elektrycznych serca.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola stymulatora / ICD / CRT-D", "Telekonsultacja"],
    prices: [
      { label: "Konsultacja kardiologiczna + EKG", price: "250 zł" },
      { label: "Echokardiografia", price: "250 zł" },
      { label: "Kontrola stymulatora / defibrylatora", price: "250 zł" },
      { label: "Telekonsultacja", price: "170 zł" },
      { label: "Interpretacja EKG", price: "80 zł" },
    ],
  },
  {
    slug: "marcin-skorski",
    name: "dr n. med. Marcin Skórski",
    group: "Kardiologia dorosłych",
    tags: ["Choroby wewnętrzne", "Kardiolog"],
    bio: "Specjalista chorób wewnętrznych i kardiologii. Prowadzi konsultacje kardiologiczne, diagnostykę i leczenie chorób serca, nadciśnienia oraz chorób współistniejących układu sercowo-naczyniowego.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia"],
  },
  {
    slug: "izabela-sokoluk",
    name: "dr n. med. Izabela Sokoluk",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Balneologia"],
    bio: "Specjalista kardiolog i specjalista balneologii oraz medycyny fizykalnej. Prowadzi konsultacje kardiologiczne oraz konsultacje dotyczące leczenia uzdrowiskowego i rehabilitacji kardiologicznej — łącząc opiekę kardiologiczną z doświadczeniem w medycynie fizykalnej.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Konsultacja balneologiczna", "Kwalifikacja do leczenia uzdrowiskowego"],
  },
  {
    slug: "magdalena-stadnik",
    name: "dr n. med. Magdalena Stadnik",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii i opiece nad pacjentami z urządzeniami elektrycznymi serca. Prowadzi konsultacje kardiologiczne, wykonuje echo serca i kontrole ICD oraz CRT-D.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola ICD / CRT-D"],
  },
  {
    slug: "andrzej-wilkolaski",
    name: "dr n. med. Andrzej Wilkołaski",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog zajmujący się diagnostyką i leczeniem chorób serca oraz opieką nad pacjentami z wszczepionymi kardiowerterami-defibrylatorami (ICD) i urządzeniami resynchronizującymi (CRT-D).",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Kontrola ICD / CRT-D"],
  },
  {
    slug: "dominik-wyszynski",
    name: "dr n. med. Dominik Wyszyński",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Próba wysiłkowa", "ICD/CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii, próbie wysiłkowej i kontroli urządzeń elektrycznych serca (ICD, CRT-D). Prowadzi kompleksowe konsultacje kardiologiczne i diagnostykę chorób serca.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Próba wysiłkowa", "Kontrola ICD / CRT-D"],
  },
  {
    slug: "radoslaw-zarczuk",
    name: "dr n. med. Radosław Zarczuk",
    group: "Kardiologia dorosłych",
    tags: ["Kardiolog", "Echo serca", "Kontrola ICD i CRT-D"],
    bio: "Specjalista kardiolog z doświadczeniem w echokardiografii i opiece nad pacjentami z urządzeniami elektrycznymi serca. Prowadzi konsultacje kardiologiczne, wykonuje echo serca i kontrole wszczepialnych urządzeń.",
    services: ["Konsultacja kardiologiczna + EKG spoczynkowe", "Echokardiografia", "Kontrola ICD / CRT-D"],
  },

  // ─── Kardiologia dziecięca ───────────────────────────────────────────────
  {
    slug: "barbara-polecka",
    name: "dr n. med. Barbara Połecka",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Kardiolog dziecięcy"],
    bio: "Specjalista pediatrii i kardiologii dziecięcej. Prowadzi konsultacje noworodkowe w szpitalach w Lublinie. Diagnozuje i leczy wady serca, arytmie, nadciśnienie i kardiomiopatie u dzieci i młodzieży. Wykonuje echokardiografię aparatem Philips Affiniti 50.",
    services: ["Konsultacja kardiologiczna dziecięca + echo serca + EKG", "Konsultacja kardiologiczna dziecięca + EKG", "Echokardiografia", "Interpretacja EKG"],
    prices: [
      { label: "Konsultacja + echo serca + EKG", price: "550 zł" },
      { label: "Konsultacja + EKG", price: "400 zł" },
      { label: "Echokardiografia", price: "350 zł" },
      { label: "Interpretacja EKG", price: "100 zł" },
    ],
    hours: "Środy, 9:00–12:00",
  },
  {
    slug: "ewa-stazka-gregosiewicz",
    name: "dr n. med. Ewa Stążka-Gregosiewicz",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Kardiolog dziecięcy"],
    bio: "Specjalista pediatrii i kardiologii dziecięcej. Prowadzi diagnostykę i leczenie arytmii, wad serca, nadciśnienia oraz innych chorób układu krążenia u dzieci i młodzieży. Wykonuje echokardiografię aparatem Philips Affiniti 50.",
    services: ["Konsultacja kardiologiczna dziecięca + echo serca + EKG", "Konsultacja kardiologiczna dziecięca + EKG", "Echokardiografia", "Interpretacja EKG"],
    prices: [
      { label: "Konsultacja + echo serca + EKG", price: "550 zł" },
      { label: "Konsultacja + EKG", price: "400 zł" },
      { label: "Echokardiografia", price: "350 zł" },
      { label: "Interpretacja EKG", price: "100 zł" },
    ],
    hours: "Środy, 14:00–16:00",
  },
  {
    slug: "agata-rybak",
    name: "dr Agata Rybak",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Kardiolog dziecięcy"],
    bio: "Specjalista pediatrii i kardiologii dziecięcej. Szkoliła się w prestiżowym Instytucie Pomnik - Centrum Zdrowia Dziecka w Warszawie, gdzie pracuje w Klinice Kardiologii. Członkini Polskiego Towarzystwa Kardiologicznego, Polskiego Towarzystwa Pediatrycznego i American Society of Echocardiography.",
    services: ["Konsultacja kardiologiczna dziecięca + echo serca + EKG", "Konsultacja kardiologiczna dziecięca + EKG", "Echokardiografia", "Interpretacja EKG"],
    prices: [
      { label: "Konsultacja + echo serca + EKG", price: "550 zł" },
      { label: "Konsultacja + EKG", price: "400 zł" },
      { label: "Echokardiografia", price: "350 zł" },
      { label: "Interpretacja EKG", price: "100 zł" },
    ],
  },
  {
    slug: "ewelina-ksiazek",
    name: "dr Ewelina Książek",
    group: "Kardiologia dziecięca",
    tags: ["Pediatra", "Hipertensjolog", "Nefrolog dziecięcy"],
    bio: "Specjalista pediatrii, hipertensjologii i nefrologii dziecięcej z ponad 25-letnim doświadczeniem klinicznym. Ukończyła studia medyczne na Akademii Medycznej w Lublinie (1996), od 1997 roku pracuje w Klinice Nefrologii Dziecięcej. Diagnozuje i leczy nadciśnienie pierwotne, wtórne i oporne oraz choroby nerek i układu moczowego u dzieci.",
    services: ["Konsultacja hipertensjologiczna dla dzieci", "Konsultacja nefrologiczna dla dzieci", "Konsultacja nefrologiczna + USG układu moczowego"],
    prices: [
      { label: "Konsultacja hipertensjologiczna dla dzieci", price: "250 zł" },
      { label: "Konsultacja nefrologiczna dla dzieci", price: "250 zł" },
      { label: "Konsultacja nefrologiczna + USG", price: "330 zł" },
    ],
    hours: "Środy, 15:00–18:00",
  },

  // ─── Kardiochirurgia ─────────────────────────────────────────────────────
  {
    slug: "janusz-stazka",
    name: "prof. dr hab. n. med. Janusz Stążka",
    group: "Kardiochirurgia",
    tags: ["Kardiochirurg"],
    bio: "Profesor nauk medycznych, pracownik Katedry i Kliniki Kardiochirurgii Uniwersytetu Medycznego w Lublinie. Prowadzi konsultacje kardiochirurgiczne, kwalifikuje pacjentów do operacji pomostowania aortalno-wieńcowego, operacji zastawek serca oraz leczenia tętniaków aorty. Sprawuje opiekę pooperacyjną.",
    services: ["Konsultacja kardiochirurgiczna", "Kwalifikacja do operacji serca", "Opieka pooperacyjna — pomosty, zastawki, tętniak aorty"],
  },

  // ─── Neurologia ─────────────────────────────────────────────────────────
  {
    slug: "jacek-jaworski",
    name: "dr n. med. Jacek Jaworski",
    group: "Neurologia",
    tags: ["Neurolog"],
    bio: "Specjalista neurolog zajmujący się diagnostyką i leczeniem chorób centralnego i obwodowego układu nerwowego. Prowadzi konsultacje w zakresie omdleń, udarów mózgu, TIA, padaczki, migreny, zawrotów głowy, zaburzeń snu oraz neuropatii obwodowych.",
    services: ["Konsultacja neurologiczna", "Diagnostyka omdleń i zasłabnięć", "Diagnostyka udaru i TIA", "Diagnostyka padaczki i migreny"],
  },

  // ─── Neurochirurgia ──────────────────────────────────────────────────────
  {
    slug: "bartlomiej-tyzo",
    name: "dr Bartłomiej Tyzo",
    group: "Neurochirurgia",
    tags: ["Neurochirurg"],
    bio: "Neurochirurg zajmujący się diagnostyką i leczeniem chorób centralnego i obwodowego układu nerwowego. Prowadzi konsultacje neurochirurgiczne w zakresie guzów mózgu i rdzenia kręgowego, guzów nerwów obwodowych oraz schorzeń podstawy czaszki.",
    services: ["Konsultacja neurochirurgiczna", "Kwalifikacja do operacji neurochirurgicznych", "Opieka pooperacyjna"],
  },

  // ─── Chirurgia naczyniowa ────────────────────────────────────────────────
  {
    slug: "janusz-rybak",
    name: "dr n. med. Janusz Rybak",
    group: "Chirurgia naczyniowa",
    tags: ["Chirurg naczyniowy"],
    bio: "Specjalista chirurgii naczyniowej. Zajmuje się nieinwazyjną diagnostyką i leczeniem chorób żył, tętnic i naczyń limfatycznych. Wykonuje badanie duplex Doppler naczyń, ABI oraz nieinwazyjne zamykanie malformacji naczyniowych.",
    services: ["Konsultacja chirurgii naczyniowej", "USG Doppler tętnic i żył", "Badanie ABI", "Diagnostyka żylaków i zakrzepicy"],
  },

  // ─── Pulmonologia ────────────────────────────────────────────────────────
  {
    slug: "marek-michnar",
    name: "dr n. med. Marek Michnar",
    group: "Pulmonologia",
    tags: ["Pulmonolog"],
    bio: "Specjalista pulmonolog. Prowadzi profilaktykę, diagnostykę i leczenie chorób układu oddechowego — POChP, astmy, zwłóknienia płuc, rozstrzeni oskrzeli, mukowiscydozy, raka płuca i sarkoidozy. Wykonuje spirometrię i inne badania czynnościowe układu oddechowego.",
    services: ["Konsultacja pulmonologiczna", "Spirometria", "Diagnostyka POChP i astmy", "Diagnostyka bezdechu sennego"],
  },

  // ─── Endokrynologia i diabetologia ──────────────────────────────────────
  {
    slug: "paulina-gryn",
    name: "lek. Paulina Gryń",
    group: "Endokrynologia i diabetologia",
    tags: ["Endokrynolog dorosłych"],
    bio: "Endokrynolog dla dorosłych specjalizujący się w profilaktyce, diagnostyce i leczeniu schorzeń związanych z nieprawidłową pracą gruczołów wydzielania wewnętrznego. Specjalizuje się w endokrynologii w Szpitalu SPSK4 w Lublinie.",
    services: ["Konsultacja endokrynologiczna", "Diagnostyka chorób tarczycy", "Diagnostyka zaburzeń hormonalnych", "Leczenie nadczynności i niedoczynności tarczycy"],
  },
  {
    slug: "joanna-mroczek",
    name: "lek. Joanna Mroczek",
    group: "Endokrynologia i diabetologia",
    tags: ["Endokrynolog dziecięcy", "Diabetolog"],
    bio: "Endokrynolog i diabetolog dla dzieci i młodzieży. Pracuje w Klinice Endokrynologii i Diabetologii Dziecięcej Uniwersyteckiego Szpitala Dziecięcego w Lublinie od 2014 roku. Diagnozuje i leczy schorzenia endokrynologiczne oraz cukrzycę u pacjentów do 18. roku życia.",
    services: ["Konsultacja endokrynologiczna dla dzieci", "Konsultacja diabetologiczna dla dzieci", "Diagnostyka zaburzeń hormonalnych u dzieci"],
  },

  // ─── Dietetyka ──────────────────────────────────────────────────────────
  {
    slug: "dorota-sawczuk",
    name: "mgr Dorota Sawczuk",
    group: "Dietetyka",
    tags: ["Dietetyk"],
    bio: "Dietetyk z doświadczeniem w układaniu indywidualnych planów żywienia. Skupia się na trwałej zmianie nawyków żywieniowych i zdrowemu odchudzaniu bez suplementów. Prowadzi konsultacje stacjonarnie i online, wykonuje analizę składu ciała.",
    services: ["Konsultacja dietetyczna", "Analiza składu ciała (SECA-285)", "Indywidualny plan żywienia", "Konsultacja online"],
  },
  {
    slug: "ewa-brodacz",
    name: "mgr Ewa Brodacz",
    group: "Dietetyka",
    tags: ["Dietetyk kliniczny"],
    bio: "Dietetyk kliniczny z doświadczeniem w żywieniu terapeutycznym. Specjalizuje się w dietoterapii chorób przewlekłych, w tym schorzeń układu sercowo-naczyniowego, cukrzycy i chorób nerek. Prowadzi konsultacje i układa indywidualne plany żywieniowe.",
    services: ["Konsultacja dietetyczna kliniczna", "Analiza składu ciała", "Dieta przy chorobach serca", "Dieta przy cukrzycy i chorobach nerek"],
  },

  // ─── Stomatologia ───────────────────────────────────────────────────────
  {
    slug: "elzbieta-wojcik",
    name: "lek. stom. Elżbieta Wójcik",
    group: "Stomatologia",
    tags: ["Stomatolog", "Protetyk"],
    bio: "Lekarz stomatolog prowadzący kompleksową stomatologię dla dzieci i dorosłych z obserwacją kardiologiczną — jedyne takie miejsce w Lublinie. Dzięki obecności kardiologa na miejscu zabiegi stomatologiczne są bezpieczne również dla pacjentów z chorobami serca.",
    services: ["Stomatologia zachowawcza", "Protetyka", "Stomatologia dziecięca", "Leczenie kanałowe", "Ekstrakcje zębów"],
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
