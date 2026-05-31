export type AblacjaSubpageData = {
  slug: string
  title: string
  eyebrow: string
  short: string
  heroImage: string
  heroBody: string
  metaTitle: string
  metaDescription: string
  what: { heading: string; body: string }
  procedure: { heading: string; body: string }
  stats: { value: string; label: string }[]
  indications: string[]
  faq: { q: string; a: string }[]
}

export const ablacjaSubpages: AblacjaSubpageData[] = [
  {
    slug: "ablacja-rf",
    title: "Ablacja RF — radiofrekwencyjna",
    eyebrow: "Metoda ablacji",
    short: "RF",
    heroImage: "/images/ablacja-rf.webp",
    heroBody: "Ablacja radiofrekwencyjna (RF) to złoty standard leczenia arytmii serca — precyzyjna metoda z ponad 30-letnią tradycją, wykonywana w oparciu o mapowanie elektroanatomiczne 3D.",
    metaTitle: "Ablacja RF (radiofrekwencyjna) Lublin — Elkardia",
    metaDescription: "Ablacja serca metodą RF — przezskórna procedura eliminująca ognisko arytmii prądem o wysokiej częstotliwości. Zabiegi oparte na mapowaniu elektroanatomicznym 3D w Lublinie.",
    what: {
      heading: "Czym jest ablacja RF?",
      body: "Ablacja radiofrekwencyjna (RF) to małoinwazyjna procedura, w której specjalny cewnik ablacyjny prowadzony przez naczynia żylne dostarcza energię cieplną do ogniska lub szlaku arytmii w sercu. Prąd o częstotliwości ok. 500 kHz podgrzewa tkankę do temperatury 60–70°C, powodując jej trwałe, miejscowe zniszczenie. Zabieg wykonywany jest wyłącznie w oparciu o gęstą mapę elektroanatomiczną 3D (system CARTO lub EnSite), co pozwala na precyzyjną nawigację cewnika z minimalną ekspozycją na promieniowanie RTG.",
    },
    procedure: {
      heading: "Jak przebiega zabieg ablacji RF?",
      body: "Anestezjolog podaje sedację lub znieczulenie ogólne. Elektrofizjolog nakłuwa żyły udowe i wprowadza cewniki diagnostyczne oraz cewnik ablacyjny. Na podstawie gęstej mapy 3D lokalizuje precyzyjnie ognisko lub szlak arytmii — bez zgadywania, wyłącznie na podstawie danych elektrycznych. Następnie przykłada energię RF punkt po punkcie, tworząc trwałe linie lub ogniskowe zmiany ablacyjne. Na zakończenie wykonuje stymulację programowaną, aby potwierdzić eliminację arytmii. Całość trwa zazwyczaj 2–4 godziny, a pacjent pozostaje na obserwacji przez 1–2 dni.",
    },
    stats: [
      { value: "80–98%", label: "Skuteczność (zależy od typu arytmii)" },
      { value: "<0,5%", label: "Ryzyko poważnych powikłań" },
      { value: "10+", label: "Lat doświadczenia w centrum" },
    ],
    indications: [
      "Migotanie i trzepotanie przedsionków",
      "Częstoskurcze nadkomorowe (AVNRT, AVRT, AT)",
      "Częstoskurcze komorowe idiopatyczne i strukturalne",
      "Dodatkowe pobudzenia komorowe i nadkomorowe",
      "Zespół WPW i drogi dodatkowe",
      "Oporność na leczenie farmakologiczne",
      "Reablacje po nieskutecznych zabiegach w innych ośrodkach",
    ],
    faq: [
      { q: "Czy ablacja RF boli?", a: "Zabieg wykonywany jest w sedacji lub znieczuleniu ogólnym — pacjent śpi przez cały czas trwania procedury. Po wybudzeniu możliwe jest niewielkie uczucie ucisku w klatce piersiowej, które mija w ciągu 24–48 godzin." },
      { q: "Jak długa jest rekonwalescencja po ablacji RF?", a: "Przez pierwsze 48 godziny zalecamy ograniczenie aktywności fizycznej. Do pracy umysłowej można wrócić po 2–3 dniach, do aktywności fizycznej — po 2–4 tygodniach, zależnie od rodzaju arytmii i złożoności zabiegu." },
      { q: "Czy ablacja RF jest leczeniem trwałym?", a: "W większości przypadków tak. Dla arytmii prostych (AVNRT, WPW, trzepotanie przedsionków) skuteczność sięga 95–98% i ma charakter trwały. W migotaniu przedsionków nawroty wymagają u ok. 10–20% pacjentów ponownego zabiegu w ciągu pierwszych 12 miesięcy." },
      { q: "Czy wykonujecie reablacje po nieskutecznych zabiegach w innych ośrodkach?", a: "Tak — specjalizujemy się w reablacjach i złożonych przypadkach po nieudanych zabiegach. Dysponujemy mapowaniem 3D i doświadczeniem w arytmiach trudnych. Każdy przypadek oceniamy indywidualnie na konsultacji." },
    ],
  },
  {
    slug: "ablacja-migotania-przedsionkow",
    title: "Ablacja migotania przedsionków",
    eyebrow: "Migotanie przedsionków (AF)",
    short: "AF",
    heroImage: "/images/ablacja-AESV.webp",
    heroBody: "Migotanie przedsionków to najczęstsza utrwalona arytmia serca. Ablacja — izolacja żył płucnych metodą RF lub PFA — jest skuteczną metodą jej leczenia, pozwalającą przywrócić prawidłowy rytm.",
    metaTitle: "Ablacja migotania przedsionków Lublin — Elkardia",
    metaDescription: "Ablacja migotania przedsionków (AF) w Lublinie. Izolacja żył płucnych metodą RF i PFA (Volt). Skuteczność 80–90%. Mapowanie elektroanatomiczne 3D, zabiegi w znieczuleniu ogólnym.",
    what: {
      heading: "Czym jest migotanie przedsionków?",
      body: "Migotanie przedsionków (AF, ang. atrial fibrillation) to najczęstsza utrwalona arytmia serca, dotykająca ok. 2–4% populacji po 65. roku życia. Polega na chaotycznej, szybkiej aktywności elektrycznej przedsionków z częstością 350–600 impulsów na minutę. Zamiast regularnych skurczów, przedsionki drżą — komory reagują nieregularnie, często zbyt szybko. Objawami są kołatanie serca, duszność, zmęczenie i ograniczona tolerancja wysiłku. AF zwiększa ryzyko udaru mózgu nawet 5-krotnie.",
    },
    procedure: {
      heading: "Jak przebiega ablacja migotania przedsionków?",
      body: "Standardem jest izolacja żył płucnych (PVI, Pulmonary Vein Isolation) — wykonywana u nas metodą RF lub PFA (Pulsed Field Ablation, cewnik Volt). Zabieg polega na odizolowaniu czterech żył płucnych od lewego przedsionka za pomocą ciągłej linii ablacyjnej, blokując impulsy odpowiedzialne za inicjowanie AF. W złożonych przypadkach AF przetrwałego uzupełniamy o dodatkowe linie (dach lewego przedsionka, linię mitralną) lub ablację ognisk spoza żył płucnych. Zabiegi wykonujemy w znieczuleniu ogólnym, z monitoringiem anestezjologicznym.",
    },
    stats: [
      { value: "80–90%", label: "Skuteczność w AF napadowym" },
      { value: "70–80%", label: "Skuteczność w AF przetrwałym" },
      { value: "2–4 h", label: "Czas zabiegu" },
    ],
    indications: [
      "AF napadowe lub przetrwałe z objawami",
      "Oporność lub nietolerancja leków antyarytmicznych",
      "Wysokie ryzyko powikłań AF (udar, tachykardiomiopatia)",
      "Pacjenci aktywni fizycznie z ograniczoną tolerancją wysiłku",
      "AF przed planowaną cardioversją (celem utrzymania rytmu)",
      "Preferencja pacjenta: leczenie inwazyjne zamiast leków",
    ],
    faq: [
      { q: "Czym różni się ablacja PFA od RF w migotaniu przedsionków?", a: "Obie metody izolują żyły płucne, ale różnią się mechanizmem działania. Ablacja RF działa przez przegrzanie tkanki, PFA — przez elektroporację (impulsy elektryczne niszczące błony komórkowe). Ablacja PFA jest szybsza, wysoce selektywna dla tkanki mięśnia sercowego i wykonywana wyłącznie w znieczuleniu ogólnym." },
      { q: "Czy po ablacji AF mogę odstawić leki na krzepliwość?", a: "Leki antykoagulacyjne (acenokumarol, NOAC) kontynuujemy przez minimum 3 miesiące po ablacji — a u pacjentów z wysokim ryzykiem udaru (CHA₂DS₂-VASc ≥2) często bezterminowo, niezależnie od skuteczności zabiegu. Decyzję podejmuje lekarz prowadzący." },
      { q: "Co się dzieje, jeśli AF wróci po ablacji?", a: "Nawrót arytmii w pierwszych 3 miesiącach (tzw. blanking period) nie przesądza o nieskuteczności zabiegu. Jeśli AF utrzymuje się po tym czasie, oceniamy możliwość i zasadność reablacji — u wielu pacjentów drugi zabieg daje trwały efekt." },
      { q: "Jak długo jestem w szpitalu po ablacji AF?", a: "Zazwyczaj 1–2 dni. W dniu zabiegu obserwujemy pacjenta co najmniej do wieczora, następnego dnia wykonujemy kontrolne EKG i echo serca przed wypisem." },
    ],
  },
  {
    slug: "ablacja-trzepotania-przedsionkow",
    title: "Ablacja trzepotania przedsionków",
    eyebrow: "Trzepotanie przedsionków (AFL)",
    short: "AFL",
    heroImage: "/images/ablacja-AFL.webp",
    heroBody: "Ablacja trzepotania przedsionków to jedna z najskuteczniejszych i najszybszych procedur ablacyjnych — przerywamy pętlę arytmii pojedynczą linią ablacyjną z ponad 95-procentową skutecznością.",
    metaTitle: "Ablacja trzepotania przedsionków Lublin — Elkardia",
    metaDescription: "Ablacja trzepotania przedsionków (AFL) w Lublinie. Skuteczność 95–98%. Ablacja cieśni trójdzielno-żylnej (CTI) w oparciu o mapowanie 3D. Krótka hospitalizacja.",
    what: {
      heading: "Czym jest trzepotanie przedsionków?",
      body: "Trzepotanie przedsionków (AFL, ang. atrial flutter) to regularna, szybka arytmia nadkomorowa, w której impuls elektryczny krąży w zamkniętej pętli (reentry) po ścianie prawego lub lewego przedsionka. Typowe trzepotanie prawoprzedsionkowe przebiega z częstością 250–350/min i tworzy pętlę przez cieśń między zastawką trójdzielną a ujściem żyły głównej dolnej. Pacjenci odczuwają kołatanie serca, duszność i ograniczoną tolerancję wysiłku. AFL często współistnieje z migotaniem przedsionków.",
    },
    procedure: {
      heading: "Jak przebiega ablacja trzepotania?",
      body: "Ablacja typowego AFL polega na wytworzeniu linii ablacyjnej w cieśni trójdzielno-żylnej (CTI), przerywającej pętlę krążącego impulsu. Elektrofizjolog buduje mapę aktywacyjną prawego przedsionka w systemie 3D, precyzyjnie wyznaczając linię CTI. Następnie przykłada energię RF punkt po punkcie wzdłuż cieśni do uzyskania bloku przewodzenia. Zabieg trwa 60–90 minut, odbywa się w sedacji i należy do najskuteczniejszych procedur ablacyjnych. U pacjentów z atypowym trzepotaniem (lewe lub bliznowate) procedura jest bardziej złożona i wymaga zaawansowanego mapowania.",
    },
    stats: [
      { value: "95–98%", label: "Skuteczność (typowe AFL)" },
      { value: "60–90 min", label: "Czas zabiegu" },
      { value: "<0,5%", label: "Ryzyko poważnych powikłań" },
    ],
    indications: [
      "Typowe trzepotanie prawoprzedsionkowe z objawami",
      "Trzepotanie atypowe (lewe lub bliznowate) — zaawansowane mapowanie",
      "AFL towarzyszące migotaniu przedsionków",
      "Nawracające trzepotanie po cardioversji",
      "AFL z szybką akcją komór i nietolerancją hemodynamiczną",
    ],
    faq: [
      { q: "Czy ablacja trzepotania jest bezpieczna?", a: "Tak — ablacja CTI jest jedną z najbezpieczniejszych procedur ablacyjnych. Ryzyko poważnych powikłań wynosi poniżej 0,5%. Najczęstsze powikłanie — krwiak w miejscu nakłucia żylnego — jest łagodne i przemija samoistnie." },
      { q: "Czy trzepotanie przedsionków i migotanie to to samo?", a: "Nie. Trzepotanie jest regularne i tworzy jedną, dobrze zdefiniowaną pętlę — stąd wyższy procent trwałych wyleczeń ablacją niż w przypadku migotania, które jest chaotyczne i wieloogniskowe. U części pacjentów oba rodzaje arytmii współistnieją." },
      { q: "Czy po ablacji AFL wraca do pracy szybko?", a: "Przy pracy siedzącej zazwyczaj po 2–3 dniach. Cięższą pracę fizyczną i intensywny sport odkładamy na 2 tygodnie od zabiegu." },
      { q: "Czy po ablacji AFL nadal potrzebuję leków na serce?", a: "Leki antykoagulacyjne kontynuuje się zgodnie z zaleceniami (zależy od ryzyka udaru). Leki antyarytmiczne można często odstawić po udokumentowaniu skuteczności zabiegu, ale decyzję podejmuje lekarz." },
    ],
  },
  {
    slug: "ablacja-czestoskurczu-przedsionkowego",
    title: "Ablacja częstoskurczu przedsionkowego",
    eyebrow: "Częstoskurcz przedsionkowy (AT)",
    short: "AT",
    heroImage: "/images/ablacja-AT.webp",
    heroBody: "Częstoskurcz przedsionkowy wywodzi się z ogniska lub pętli w ścianie przedsionka. Mapowanie aktywacyjne 3D pozwala precyzyjnie go zlokalizować i wyeliminować ablacją RF.",
    metaTitle: "Ablacja częstoskurczu przedsionkowego Lublin — Elkardia",
    metaDescription: "Ablacja częstoskurczu przedsionkowego (AT) w Lublinie. Mapowanie aktywacyjne 3D, ablacja RF ogniska lub pętli arytmii. Skuteczność 85–90%. Zabiegi AT pooperacyjnego.",
    what: {
      heading: "Czym jest częstoskurcz przedsionkowy?",
      body: "Częstoskurcz przedsionkowy (AT, ang. atrial tachycardia) to arytmia nadkomorowa wywodząca się z ogniska ektopicznego lub pętli reentry zlokalizowanej w ścianie przedsionka, poza węzłem zatokowym i węzłem AV. Częstotliwość akcji serca wynosi 150–250/min i jest regularna. AT może mieć charakter napadowy (krótkie epizody) lub utrwalony (przebiegający tygodniami). Przy długotrwałym AT może rozwinąć się tachykardiomiopatia — dysfunkcja lewej komory odwracalna po ablacji.",
    },
    procedure: {
      heading: "Jak przebiega ablacja AT?",
      body: "Elektrofizjolog buduje szczegółową mapę aktywacyjną przedsionków w systemie 3D, szukając punktu najwcześniejszej aktywacji — miejsca, z którego arytmia się inicjuje. Po jego lokalizacji przykłada energię RF, niszcząc ognisko lub przerwając pętlę. W przypadku AT w bliznach pooperacyjnych (np. po korekcji wad serca) procedura jest bardziej złożona i wymaga rozległego mapowania substratowego całego przedsionka. Zabieg trwa 2–3 godziny, często z jednoczesnym badaniem elektrofizjologicznym.",
    },
    stats: [
      { value: "85–90%", label: "Skuteczność ogniskowych AT" },
      { value: "2–3 h", label: "Czas zabiegu" },
      { value: "Odwracalna", label: "Tachykardiomiopatia z AT po ablacji" },
    ],
    indications: [
      "Napadowy lub utrwalony AT z objawami",
      "AT oporny na leki antyarytmiczne",
      "Tachykardiomiopatia wywołana przez AT",
      "AT pooperacyjny (po korekcjach wad serca, operacjach labiryntu)",
      "Wieloogniskowy AT",
    ],
    faq: [
      { q: "Czym różni się AT od migotania przedsionków?", a: "AT jest regularny i wywodzi się z jednego (lub kilku) dobrze zdefiniowanych ognisk lub pętli — stąd jest mniej złożony i łatwiejszy do ablacji niż migotanie, które jest chaotyczne i wieloogniskowe. Skuteczność ablacji AT jest porównywalna z AVNRT." },
      { q: "Czy AT może wywołać stałe uszkodzenie serca?", a: "Przy długotrwałym, utrwalonym AT może rozwinąć się tachykardiomiopatia — osłabienie funkcji lewej komory. Jest ona jednak w pełni odwracalna po skutecznej ablacji i normalizacji rytmu serca." },
      { q: "Czy AT może wrócić po ablacji?", a: "Nawrót może dotyczyć innego ogniska, szczególnie u pacjentów z AT wieloogniskowym. Przy ogniskowych AT izolowanych skuteczność ablacji wynosi 85–90% w obserwacji długoterminowej." },
    ],
  },
  {
    slug: "ablacja-czestoskurczu-nadkomorowego",
    title: "Ablacja częstoskurczu nadkomorowego",
    eyebrow: "Częstoskurcz nadkomorowy (SVT)",
    short: "SVT",
    heroImage: "/images/ablacja-nQRST.webp",
    heroBody: "SVT to napadowa arytmia z uczuciem gwałtownego kołatania serca, zawrotów i duszności. Ablacja RF leczy ją trwale u ponad 90% pacjentów — bez konieczności stałego przyjmowania leków.",
    metaTitle: "Ablacja częstoskurczu nadkomorowego (SVT) Lublin — Elkardia",
    metaDescription: "Ablacja częstoskurczu nadkomorowego (SVT) w Lublinie. Skuteczność powyżej 90%. Ablacja AVNRT, AVRT, AT i innych typów SVT w oparciu o mapowanie 3D.",
    what: {
      heading: "Czym jest częstoskurcz nadkomorowy?",
      body: "Częstoskurcz nadkomorowy (SVT, ang. supraventricular tachycardia) to ogólna nazwa dla grupy arytmii, których mechanizm elektryczny zlokalizowany jest powyżej pęczka Hisa. Epizody SVT pojawiają się nagle — z częstością 150–250/min, regularnym rytmem — i ustępują równie nagle. Pacjenci odczuwają gwałtowne kołatanie serca, duszność, zawroty głowy, a niekiedy omdlenia. Najczęstsze typy to AVNRT (ok. 60% SVT), AVRT (ok. 30%) i AT (ok. 10%).",
    },
    procedure: {
      heading: "Jak przebiega ablacja SVT?",
      body: "Leczenie ablacyjne jest dobierane do konkretnego mechanizmu. Elektrofizjolog wykonuje badanie elektrofizjologiczne (EPS), indukuje arytmię i precyzyjnie określa jej typ. W AVNRT modyfikuje drogę wolną węzła AV (ablacja tylno-przegrodowa), w AVRT i WPW niszczy drogę dodatkową, w AT lokalizuje i ablacyjnie usuwa ognisko. Procedura trwa 1–2 godziny, zazwyczaj w sedacji, i jest jedną z najbezpieczniejszych w elektrofizjologii.",
    },
    stats: [
      { value: "90–97%", label: "Skuteczność (zależy od mechanizmu)" },
      { value: "1–2 h", label: "Czas zabiegu" },
      { value: "1 dzień", label: "Typowa długość hospitalizacji" },
    ],
    indications: [
      "Napadowy SVT z objawami (kołatanie, zawroty, presyncope)",
      "Brak skuteczności lub nietolerancja leków antyarytmicznych",
      "Planowanie ciąży (eliminacja konieczności leków)",
      "SVT z towarzyszącą drogą dodatkową (ryzyko SCD)",
      "Preferencja trwałego wyleczenia bez stałej farmakoterapii",
    ],
    faq: [
      { q: "Czy SVT zagraża życiu?", a: "Większość typów SVT nie zagraża życiu bezpośrednio, ale może powodować omdlenia i znacznie obniżać jakość życia. Wyjątek stanowi AVRT z szybko przewodzącą drogą dodatkową w WPW — tu ablacja jest priorytetem niezależnie od nasilenia objawów." },
      { q: "Jak odróżnić SVT od migotania przedsionków?", a: "SVT jest zazwyczaj regularny — pacjent czuje bardzo szybkie, miarowe kołatanie. Migotanie przedsionków daje nieregularne bicie serca. Ostateczne rozróżnienie wymaga EKG podczas arytmii i oceny elektrofizjologicznej." },
      { q: "Czy ablacja SVT jest leczeniem jednokrotnym?", a: "W większości przypadków tak — skuteczność w AVNRT i AVRT wynosi powyżej 95% i ma charakter trwały. Nawroty po ablacji są rzadkie i wymagają oceny możliwości reablacji." },
    ],
  },
  {
    slug: "ablacja-czestoskurczu-komorowego",
    title: "Ablacja częstoskurczu komorowego",
    eyebrow: "Częstoskurcz komorowy (VT)",
    short: "VT",
    heroImage: "/images/ablacja-VT.webp",
    heroBody: "Ablacja komorowa to zaawansowana procedura dla pacjentów z nawracającymi epizodami VT, wielokrotnymi interwencjami ICD lub VT idiopatycznym. Wykonujemy zabiegi w oparciu o kompleksowe mapowanie substratu 3D.",
    metaTitle: "Ablacja częstoskurczu komorowego (VT) Lublin — Elkardia",
    metaDescription: "Ablacja częstoskurczu komorowego (VT) w Lublinie. Mapowanie substratowe i aktywacyjne 3D, ablacja VT idiopatycznego i strukturalnego. Zabiegi w znieczuleniu ogólnym.",
    what: {
      heading: "Czym jest częstoskurcz komorowy?",
      body: "Częstoskurcz komorowy (VT, ang. ventricular tachycardia) to groźna arytmia wywodząca się z komór serca, o częstości 100–250/min. Może być utrwalony (trwa >30 sekund lub wymaga przerwania cardioversją/defibrylacją) lub nieutrwalony. VT strukturalny najczęściej wiąże się z blizną pozawałową lub kardiomiopatią. VT idiopatyczny (bez uchwytnej przyczyny sercowej) pochodzi zazwyczaj z drogi wypływu prawej lub lewej komory i ma łagodniejszy przebieg.",
    },
    procedure: {
      heading: "Jak przebiega ablacja VT?",
      body: "W VT strukturalnym stosujemy mapowanie substratowe — elektrofizjolog buduje szczegółową mapę blizn i obszarów granicznych w rytmie zatokowym, identyfikując kanały arytmogenne odpowiedzialne za krążenie impulsu. Ablacja obejmuje te kanały. W VT idiopatycznym możliwa jest klasyczna ablacja aktywacyjna — lokalizacja najwcześniejszego pobudzenia komorowego i jego punktowa ablacja. Większość złożonych zabiegów VT komorowego wykonujemy w znieczuleniu ogólnym, z monitoringiem hemodynamicznym.",
    },
    stats: [
      { value: "70–80%", label: "Skuteczność w VT strukturalnym" },
      { value: "85–90%", label: "Skuteczność w VT idiopatycznym" },
      { value: "3–5 h", label: "Czas złożonego zabiegu" },
    ],
    indications: [
      "VT utrwalony po zawale mięśnia sercowego lub w kardiomiopatii",
      "Wielokrotne wyładowania ICD z powodu VT",
      "Idiopatyczny VT z drogi wypływu prawej lub lewej komory",
      "VT pęczkowy (fascicular VT)",
      "Jako element leczenia burzy elektrycznej",
      "Brak tolerancji lub skuteczności amiodaronu",
    ],
    faq: [
      { q: "Czy ablacja VT jest bezpieczna u pacjentów po zawale?", a: "Tak — jest wykonywana w wyspecjalizowanych ośrodkach z dostępem do monitorowania hemodynamicznego i znieczulenia ogólnego. Ryzyko powikłań jest wyższe niż w ablacjach nadkomorowych, ale korzyść — eliminacja bolesnych defibrylacji ICD — jest dla pacjentów bardzo istotna." },
      { q: "Czy ablacja VT eliminuje potrzebę posiadania defibrylatora (ICD)?", a: "Zazwyczaj nie — ICD pozostaje jako zabezpieczenie życia. Ablacja VT redukuje częstość interwencji urządzenia i poprawia jakość życia, ale nie zastępuje ICD u pacjentów z wysokim ryzykiem nagłej śmierci sercowej." },
      { q: "Czy VT idiopatyczny można trwale wyleczyć ablacją?", a: "Tak — VT idiopatyczny z drogi wypływu prawej komory (RVOT) jest bardzo dobrym wskazaniem do ablacji. Skuteczność sięga 85–90%, a nawroty są rzadkie. To leczenie przyczynowe, eliminujące potrzebę leków." },
    ],
  },
  {
    slug: "ablacja-burzy-elektrycznej",
    title: "Ablacja burzy elektrycznej",
    eyebrow: "Burza elektryczna (Electrical Storm)",
    short: "ES",
    heroImage: "/images/ablacja-burza.webp",
    heroBody: "Burza elektryczna to stan zagrożenia życia — trzy lub więcej epizodów częstoskurczu komorowego lub migotania komór w ciągu 24 godzin. Ablacja jest często jedyną skuteczną metodą jej opanowania.",
    metaTitle: "Ablacja burzy elektrycznej — Elkardia Lublin",
    metaDescription: "Ablacja burzy elektrycznej (VT storm) w Lublinie. Procedura ratunkowa przy nawracających VT/VF i wielokrotnych wyładowaniach ICD. Zabiegi w znieczuleniu ogólnym.",
    what: {
      heading: "Czym jest burza elektryczna?",
      body: "Burza elektryczna (ES, ang. electrical storm) to stan zagrożenia życia definiowany jako co najmniej 3 epizody utrwalonego częstoskurczu komorowego (VT) lub migotania komór (VF) w ciągu 24 godzin, wymagające interwencji elektrycznej (cardioversja, defibrylacja ICD lub reanimacja). U pacjentów z wszczepionym kardiowerterem-defibrylatorem (ICD) objawia się licznymi, bolesnymi wyładowaniami urządzenia. Wiąże się z wysoką śmiertelnością krótkoterminową i wymaga pilnego leczenia.",
    },
    procedure: {
      heading: "Jak przebiega ablacja burzy elektrycznej?",
      body: "Ablacja ES wykonywana jest w trybie pilnym lub półpilnym, u pacjentów wymagających intensywnego nadzoru hemodynamicznego. Procedura odbywa się w znieczuleniu ogólnym. Elektrofizjolog wykonuje mapowanie substratowe jam komory, identyfikując blizny arytmogenne i kanały odpowiedzialne za inicjowanie kolejnych epizodów VT. Ablacja kanałów krytycznych przerywa pętlę arytmii i stabilizuje rytm. W wyjątkowo ciężkich przypadkach możliwe jest zastosowanie mechanicznego wspomagania krążenia (IABP, Impella) podczas zabiegu.",
    },
    stats: [
      { value: "60–80%", label: "Przerwanie burzy elektrycznej po ablacji" },
      { value: "Pilny tryb", label: "Procedura u niestabilnych pacjentów" },
      { value: "OAiIT", label: "Wymagane zaplecze intensywnej terapii" },
    ],
    indications: [
      "Nawracające VT/VF (≥3 epizody/24h) mimo farmakoterapii",
      "Wielokrotne wyładowania ICD oporne na amiodaron i.v.",
      "Hemodynamicznie niestabilny VT wymagający cardioversji",
      "VT storm w kardiomiopatii lub po zawale mięśnia sercowego",
      "Jako ostateczna opcja po wyczerpaniu farmakoterapii i sedacji",
    ],
    faq: [
      { q: "Czy ablacja burzy elektrycznej ratuje życie?", a: "W wielu przypadkach jest jedyną opcją terapeutyczną, gdy farmakoterapia (amiodaron, lidokaina, beta-blokery i.v.) zawodzi. U ok. 60–80% pacjentów ablacja przerywa burzę i stabilizuje stan chorego, umożliwiając optymalizację dalszego leczenia." },
      { q: "Gdzie jest wykonywana ablacja burzy elektrycznej?", a: "Wyłącznie w ośrodkach o najwyższym stopniu referencyjności, z dostępem do znieczulenia ogólnego, ciągłego monitoringu hemodynamicznego i wspomagania krążenia. Elkardia realizuje te zabiegi we współpracy z klinikami o zapleczu OAiIT." },
      { q: "Co oznacza 'storm elektryczny' dla pacjenta z ICD?", a: "Pacjent z ICD odczuwa liczne, często bolesne wyładowania urządzenia w krótkim czasie. To traumatyczne przeżycie — dlatego leczenie burzy elektrycznej obejmuje nie tylko stabilizację rytmu, ale też wsparcie psychologiczne i optymalizację programowania ICD." },
    ],
  },
  {
    slug: "ablacja-wpw",
    title: "Ablacja WPW (Wolff-Parkinson-White)",
    eyebrow: "Zespół WPW",
    short: "WPW",
    heroImage: "/images/ablacja-WPW.webp",
    heroBody: "Zespół WPW to wrodzona anomalia układu przewodzącego serca. Ablacja drogi dodatkowej leczy go w ponad 95% przypadków trwale — eliminując ryzyko niebezpiecznych arytmii i konieczność przyjmowania leków.",
    metaTitle: "Ablacja WPW (Wolff-Parkinson-White) Lublin — Elkardia",
    metaDescription: "Ablacja zespołu WPW w Lublinie. Skuteczność 95–98%. Ablacja RF drogi dodatkowej, mapowanie 3D, ocena ryzyka SCD u sportowców. Trwałe wyleczenie.",
    what: {
      heading: "Czym jest zespół WPW?",
      body: "Zespół Wolffa-Parkinsona-White'a (WPW) to wrodzona anomalia polegająca na obecności dodatkowej drogi przewodzenia elektrycznego (pęczka Kenta), łączącej przedsionki z komorami z pominięciem węzła przedsionkowo-komorowego. Droga ta umożliwia szybkie, dwukierunkowe przewodzenie impulsów i może powodować napadowy częstoskurcz AVRT. W rzadkich przypadkach — gdy droga dodatkowa przewodzi bardzo szybko — AF w WPW może zdegenerować do migotania komór i stanowić zagrożenie życia. W EKG WPW objawia się krótkim PQ i falą delta.",
    },
    procedure: {
      heading: "Jak przebiega ablacja WPW?",
      body: "Ablacja polega na precyzyjnej lokalizacji drogi dodatkowej za pomocą mapy aktywacyjnej 3D i jej zniszczeniu energią RF. Elektrofizjolog prowadzi cewnik wzdłuż pierścienia zastawki mitralnej lub trójdzielnej, szukając miejsca najwcześniejszej aktywacji komory (w rytmie zatokowym) lub przedsionka (w tachykardii). Po znalezieniu drogi przykłada energię RF — zwykle po kilku sekundach widać ustąpienie fali delta i normalizację PQ. Zabieg trwa 1–2 godziny. Na zakończenie przeprowadzamy badanie elektrofizjologiczne potwierdzające eliminację drogi.",
    },
    stats: [
      { value: "95–98%", label: "Skuteczność pierwotna" },
      { value: "1–2 h", label: "Czas zabiegu" },
      { value: "Trwałe", label: "Wyleczenie w większości przypadków" },
    ],
    indications: [
      "WPW z objawami (napadowe kołatanie, zawroty, omdlenia)",
      "WPW z udokumentowanym szybkim przewodzeniem drogi dodatkowej",
      "WPW bezobjawowy u sportowców wyczynowych (ocena ryzyka)",
      "WPW u kierowców zawodowych i pilotów (wymogi orzecznicze)",
      "Planowanie ciąży u kobiet z WPW",
      "Preferencja trwałego wyleczenia bez leków",
    ],
    faq: [
      { q: "Czy WPW zagraża życiu?", a: "U większości pacjentów ryzyko jest niskie, ale obecność szybko przewodzącej drogi dodatkowej może — rzadko — prowadzić do migotania komór podczas AF. Dlatego u sportowców, kierowców zawodowych i osób z udokumentowanym szybkim przewodzeniem drogi zalecamy ablację niezależnie od objawów." },
      { q: "Czy po ablacji WPW można wrócić do sportu wyczynowego?", a: "Tak — po potwierdzeniu skuteczności zabiegu badaniem elektrofizjologicznym (brak drogi dodatkowej) pacjenci wracają do sportu wyczynowego bez ograniczeń. To jeden z najczęstszych powodów, dla których sportowcy decydują się na ablację." },
      { q: "Czy WPW można wyleczyć bez ablacji?", a: "Leki antyarytmiczne mogą kontrolować objawy, ale nie eliminują drogi dodatkowej. Ablacja jest jedyną metodą przyczynowego leczenia WPW — dlatego jest preferowana, szczególnie u młodych i aktywnych pacjentów." },
    ],
  },
  {
    slug: "ablacja-avrt",
    title: "Ablacja AVRT",
    eyebrow: "Częstoskurcz AVRT",
    short: "AVRT",
    heroImage: "/images/ablacja-AVRT.webp",
    heroBody: "AVRT to napadowa arytmia angażująca dodatkową drogę przewodzenia między przedsionkiem a komorą. Ablacja RF drogi dodatkowej eliminuje arytmię trwale u ponad 92% pacjentów.",
    metaTitle: "Ablacja AVRT Lublin — Elkardia",
    metaDescription: "Ablacja częstoskurczu AVRT w Lublinie. Ablacja drogi dodatkowej, skuteczność 92–97%. Mapowanie 3D, trwałe wyleczenie. Ściśle związany z WPW.",
    what: {
      heading: "Czym jest częstoskurcz AVRT?",
      body: "Atrioventricular reentrant tachycardia (AVRT) to napadowy częstoskurcz nadkomorowy, w którym impuls krąży w pętli angażującej węzeł przedsionkowo-komorowy i dodatkową drogę przewodzenia (drogę Kenta). AVRT jest ściśle związany z zespołem WPW — droga dodatkowa może przewodzić ortodromowo (do komór przez węzeł AV, z powrotem przez drogę dodatkową — klasyczne AVRT) lub antydromowo. Częstość tachykardii wynosi 150–220/min, epizody pojawiają się nagle i nagle się kończą.",
    },
    procedure: {
      heading: "Jak przebiega ablacja AVRT?",
      body: "Ablacja AVRT jest identyczna jak ablacja WPW — cel to zlokalizowanie i zniszczenie drogi dodatkowej. Elektrofizjolog identyfikuje drogę na podstawie mapy aktywacyjnej w trakcie tachykardii (AVRT) lub w rytmie zatokowym (przy fali delta). Po znalezieniu punktu najwcześniejszej aktywacji komorowej lub przedsionkowej przykłada energię RF. Ablacja zajmuje 1–2 godziny. Badanie elektrofizjologiczne na zakończenie potwierdza brak drogi dodatkowej i brak inducybilności AVRT.",
    },
    stats: [
      { value: "92–97%", label: "Skuteczność pierwotna" },
      { value: "1–2 h", label: "Czas zabiegu" },
      { value: "3–5%", label: "Nawrotowość (wymaga reablacji)" },
    ],
    indications: [
      "Napadowe AVRT z objawami (kołatanie, zawroty, omdlenia)",
      "AVRT z szybko przewodzącą drogą dodatkową",
      "Brak skuteczności leków blokujących AV",
      "Planowanie ciąży (wyeliminowanie konieczności leków)",
      "Preferencja trwałego wyleczenia",
    ],
    faq: [
      { q: "Czym różni się AVRT od AVNRT?", a: "W AVRT pętla angażuje drogę dodatkową (pęczek Kenta) zlokalizowaną poza węzłem AV. W AVNRT pętla krąży wewnątrz lub przy węźle AV (droga wolna i szybka). Obie są SVT i dają podobne objawy, ale wymagają różnych celów ablacji." },
      { q: "Czy AVRT może wrócić po ablacji?", a: "Nawrót po ablacji drogi dodatkowej dotyczy ok. 3–5% pacjentów i wynika z niepełnej ablacji lub odnowienia się przewodzenia. Reablacja w takich przypadkach jest skuteczna." },
      { q: "Czy muszę przyjmować leki po ablacji AVRT?", a: "Po skutecznej ablacji drogi dodatkowej leki antyarytmiczne można zazwyczaj odstawić. Decyzja podejmowana jest po potwierdzeniu skuteczności zabiegu w badaniu elektrofizjologicznym." },
    ],
  },
  {
    slug: "ablacja-avnrt",
    title: "Ablacja AVNRT",
    eyebrow: "Częstoskurcz AVNRT",
    short: "AVNRT",
    heroImage: "/images/ablacja-AVNRT.webp",
    heroBody: "AVNRT to najczęstszy typ napadowego częstoskurczu nadkomorowego. Ablacja drogi wolnej węzła AV eliminuje arytmię u ponad 97% pacjentów — trwale i bezpiecznie.",
    metaTitle: "Ablacja AVNRT Lublin — Elkardia",
    metaDescription: "Ablacja AVNRT (częstoskurczu węzłowego) w Lublinie. Skuteczność 97–99%, czas zabiegu ok. 1 godziny, krótka hospitalizacja. Najczęstsza SVT — trwałe wyleczenie.",
    what: {
      heading: "Czym jest częstoskurcz AVNRT?",
      body: "Atrioventricular nodal reentrant tachycardia (AVNRT) to najczęstszy typ napadowego częstoskurczu nadkomorowego — odpowiada za ok. 60% wszystkich SVT. Pętla arytmii krąży wewnątrz lub w bezpośrednim sąsiedztwie węzła AV, angażując dwie funkcjonalnie odrębne drogi: wolną (o długim czasie przewodzenia) i szybką (o krótkim). Epizody są nagłe — z częstością 150–220/min, regularnym rytmem i uczuciem silnego kołatania. Często pacjenci opisują równoczesne bicie w gardle. Arytmia jest nieprzyjemna, ale rzadko bezpośrednio groźna.",
    },
    procedure: {
      heading: "Jak przebiega ablacja AVNRT?",
      body: "Ablacja polega na selektywnej modyfikacji drogi wolnej węzła AV — punktowej ablacji RF w obszarze tylno-przegrodowym prawego przedsionka, blisko węzła AV, ale z dala od drogi szybkiej. Dzięki temu pętla AVNRT zostaje przerwana przy zachowaniu prawidłowego przewodzenia AV. Elektrofizjolog monitoruje czas PR i sygnały wewnątrzsercowe podczas ablacji, by uniknąć bloku AV. Zabieg trwa ok. 60 minut i jest jednym z najkrótszych i najskuteczniejszych w elektrofizjologii.",
    },
    stats: [
      { value: "97–99%", label: "Skuteczność pierwotna" },
      { value: "~60 min", label: "Czas zabiegu" },
      { value: "<0,3%", label: "Ryzyko bloku AV wymagającego stymulatora" },
    ],
    indications: [
      "Napadowy SVT o typie AVNRT z objawami",
      "Nawracające epizody kołatania z nagłym początkiem i końcem",
      "Brak skuteczności lub nietolerancja beta-blokerów i werapamilu",
      "Planowanie ciąży (wyeliminowanie konieczności leków)",
      "Preferencja trwałego wyleczenia bez przewlekłej farmakoterapii",
    ],
    faq: [
      { q: "Czy ablacja AVNRT jest bezpieczna?", a: "Tak — jest jedną z najbezpieczniejszych i najskuteczniejszych procedur ablacyjnych. Ryzyko najpoważniejszego powikłania — bloku AV wymagającego wszczepienia stymulatora — wynosi poniżej 0,3% w doświadczonym centrum." },
      { q: "Jak długo trwa hospitalizacja?", a: "Zazwyczaj 1 dzień — pacjent może wrócić do domu następnego dnia rano po niepowikłanym zabiegu, po kontrolnym EKG." },
      { q: "Czy AVNRT zagraża życiu?", a: "Zazwyczaj nie — jest arytmią bardzo nieprzyjemną, ale rzadko niebezpieczną. Wyjątkiem są pacjenci, u których epizody wywołują omdlenia lub są bardzo długotrwałe, prowadząc do niestabilności hemodynamicznej." },
      { q: "Czy po ablacji AVNRT muszę stosować leki?", a: "Po skutecznej ablacji odstawienie leków antyarytmicznych jest zazwyczaj możliwe od razu lub po krótkim okresie obserwacji. Decyzję podejmuje lekarz prowadzący." },
    ],
  },
  {
    slug: "ablacja-dodatkowych-pobudzen-nadkomorowych",
    title: "Ablacja dodatkowych pobudzeń nadkomorowych",
    eyebrow: "Dodatkowe pobudzenia nadkomorowe (SVEB)",
    short: "SVEB",
    heroImage: "/images/ablacja-pfa.webp",
    heroBody: "Dodatkowe pobudzenia nadkomorowe to częste \"przeskoki\" serca. Przy wysokim obciążeniu lub gdy wyzwalają migotanie przedsionków — ablacja RF ogniska ektopicznego przynosi trwałą ulgę.",
    metaTitle: "Ablacja dodatkowych pobudzeń nadkomorowych Lublin — Elkardia",
    metaDescription: "Ablacja dodatkowych pobudzeń nadkomorowych (SVEB) w Lublinie. Ablacja ognisk z żył płucnych, żyły głównej górnej i innych lokalizacji. Skuteczność 80–90%.",
    what: {
      heading: "Czym są dodatkowe pobudzenia nadkomorowe?",
      body: "Dodatkowe pobudzenia nadkomorowe (SVEB, ang. supraventricular ectopic beats) to przedwczesne uderzenia serca wywodzące się z ognisk ektopicznych w przedsionkach lub okolicy węzła AV. Pacjenci odczuwają je jako \"przeskoki\", \"zanikanie bicia serca\", \"silne uderzenie\" lub chwilowy \"zastój\" w piersi. Izolowane SVEB są powszechne i u większości osób zupełnie łagodne. Ablację rozważamy, gdy są bardzo liczne (>15–20% dobowych uderzeń), silnie objawowe lub wyzwalają migotanie przedsionków.",
    },
    procedure: {
      heading: "Jak przebiega ablacja SVEB?",
      body: "Ablacja polega na mapowaniu aktywacyjnym 3D w poszukiwaniu ogniska najwcześniejszej aktywacji przedsionkowej — miejsca, z którego pochodzi pobudzenie ektopiczne. Najczęstsze lokalizacje to ujścia żył płucnych (często ablacja nakłada się na PVI wykonywaną w AF), żyła główna górna, grzebień graniczny lub uszko lewego przedsionka. Po lokalizacji elektrofizjolog przykłada punktową ablację RF. Skuteczność zależy od stabilności morfologii SVEB podczas zabiegu i dostępności ogniska.",
    },
    stats: [
      { value: "80–90%", label: "Skuteczność (zależy od lokalizacji)" },
      { value: "Rzadkie", label: "Nawroty przy ogniskach z dala od żył płucnych" },
      { value: "Poprawa", label: "Redukcja wyzwalania AF u większości pacjentów" },
    ],
    indications: [
      "Wysoki wskaźnik SVEB (>15–20% dobowych uderzeń) z silnymi objawami",
      "SVEB wyzwalający epizody AF lub SVT",
      "Tachykardiomiopatia wywołana przez SVEB",
      "Nietolerancja lub brak skuteczności beta-blokerów",
      "Preferencja leczenia niemedycznego",
    ],
    faq: [
      { q: "Czy każde dodatkowe pobudzenie nadkomorowe wymaga ablacji?", a: "Nie — większość SVEB jest całkowicie łagodna i nie wymaga leczenia. Ablacja jest wskazana przy bardzo wysokim obciążeniu z objawami, gdy SVEB wyzwala migotanie przedsionków lub gdy prowadzi do tachykardiomiopatii." },
      { q: "Gdzie najczęściej zlokalizowane są ogniska SVEB?", a: "Najczęściej w ujściach żył płucnych — stąd ablacja SVEB często nakłada się na izolację żył płucnych wykonywaną w leczeniu AF. Inne lokalizacje to żyła główna górna, grzebień graniczny i uszko lewego przedsionka." },
      { q: "Czy ablacja SVEB jest skomplikowanym zabiegiem?", a: "Przy stabilnej morfologii SVEB i typowej lokalizacji (żyły płucne) jest to procedura stosunkowo prosta. Ogniska w trudniejszych lokalizacjach wymagają zaawansowanego mapowania i większego doświadczenia." },
    ],
  },
  {
    slug: "ablacja-dodatkowych-pobudzen-komorowych",
    title: "Ablacja dodatkowych pobudzeń komorowych",
    eyebrow: "Dodatkowe pobudzenia komorowe (PVC)",
    short: "PVC",
    heroImage: "/images/ablacja-PVC.webp",
    heroBody: "Dodatkowe pobudzenia komorowe przy wysokim obciążeniu mogą osłabiać mięsień sercowy. Ablacja RF ogniska ektopicznego eliminuje PVC i pozwala odwrócić wywołaną przez nie tachykardiomiopatię.",
    metaTitle: "Ablacja dodatkowych pobudzeń komorowych (PVC) Lublin — Elkardia",
    metaDescription: "Ablacja dodatkowych pobudzeń komorowych (PVC/VEB) w Lublinie. Mapowanie aktywacyjne 3D, ablacja RVOT, LVOT, płatka aortalnego. Skuteczność 80–90%. Odwrócenie tachykardiomiopatii.",
    what: {
      heading: "Czym są dodatkowe pobudzenia komorowe?",
      body: "Dodatkowe pobudzenia komorowe (PVC, ang. premature ventricular contractions) to przedwczesne skurcze serca wywodzące się z ognisk ektopycznych w komorach, poza normalnym układem bodźcotwórczo-przewodzącym. W 24-h Holterze stwierdza się je u ok. 40–75% dorosłych. Przy niskim obciążeniu są zazwyczaj łagodne. Gdy przekraczają 10–15% dobowej liczby uderzeń lub wynoszą ponad 10 000 pobudzeń/dobę — mogą prowadzić do tachykardiomiopatii, czyli odwracalnego osłabienia funkcji lewej komory.",
    },
    procedure: {
      heading: "Jak przebiega ablacja PVC?",
      body: "Ablacja polega na mapowaniu aktywacyjnym 3D z poszukiwaniem punktu najwcześniejszej aktywacji komorowej — miejsca, z którego PVC się inicjuje. Najczęstsze lokalizacje to drogi wypływu prawej (RVOT) lub lewej komory (LVOT), płatki aortalne, struktury pęczkowe i blizny pozawałowe. Po lokalizacji elektrofizjolog przykłada energię RF. Kluczowe jest, aby PVC były liczne i stabilne morfologicznie podczas zabiegu — umożliwia to precyzyjne mapowanie. Zabieg trwa 1,5–3 godziny.",
    },
    stats: [
      { value: "80–90%", label: "Skuteczność w PVC z RVOT/LVOT" },
      { value: ">70%", label: "Skuteczność w trudniejszych lokalizacjach" },
      { value: "Odwracalna", label: "Tachykardiomiopatia po skutecznej ablacji" },
    ],
    indications: [
      "PVC >10 000/dobę lub >15% obciążenie z objawami",
      "Tachykardiomiopatia wywołana przez PVC (obniżona EF)",
      "Silne objawy (kołatanie, dyskomfort w klatce piersiowej)",
      "Nietolerancja lub brak skuteczności leków antyarytmicznych",
      "Idiopatyczne PVC u aktywnych fizycznie pacjentów",
    ],
    faq: [
      { q: "Czy dodatkowe pobudzenia komorowe są groźne?", a: "U osób bez choroby serca rzadko. Jednak przy wysokim obciążeniu (>10–15% doby) PVC mogą prowadzić do tachykardiomiopatii — odwracalnej dysfunkcji lewej komory. Po skutecznej ablacji funkcja serca zazwyczaj wraca do normy w ciągu kilku miesięcy." },
      { q: "Jak długo trwa hospitalizacja po ablacji PVC?", a: "Zazwyczaj 1–2 dni — krótka obserwacja po zabiegu, kontrolne EKG i Holter. Pacjent wraca do pracy po 2–3 dniach przy pracy umysłowej." },
      { q: "Skąd elektrofizjolog wie, gdzie jest ognisko PVC?", a: "Na podstawie morfologii PVC w 12-odprowadzeniowym EKG można przewidzieć przybliżoną lokalizację ogniska. Precyzyjne zlokalizowanie umożliwia dopiero mapowanie aktywacyjne 3D podczas zabiegu." },
      { q: "Czy ablacja PVC jest skuteczna, jeśli pobudzenia nie pojawiają się podczas zabiegu?", a: "To kluczowy problem — jeśli PVC nie są spontaniczne podczas zabiegu, mapowanie jest niemożliwe. Staramy się prowokować je farmakologicznie. Jeśli się nie uda — zabieg odkładamy na termin, gdy aktywność PVC będzie wyższa." },
    ],
  },
  {
    slug: "badanie-elektrofizjologiczne",
    title: "Badanie elektrofizjologiczne (EPS)",
    eyebrow: "Badanie elektrofizjologiczne",
    short: "EPS",
    heroImage: "/images/ablacja-EPS.webp",
    heroBody: "Badanie elektrofizjologiczne to inwazyjne badanie diagnostyczne układu przewodzącego serca. W naszym centrum EPS wykonywane jest zazwyczaj w jednej sesji z ablacją — bez konieczności ponownej hospitalizacji.",
    metaTitle: "Badanie elektrofizjologiczne (EPS) Lublin — Elkardia",
    metaDescription: "Badanie elektrofizjologiczne (EPS) w Lublinie. Diagnostyka układu przewodzącego, indukcja arytmii, ocena ryzyka SCD. Zazwyczaj w jednej sesji z ablacją serca.",
    what: {
      heading: "Czym jest badanie elektrofizjologiczne?",
      body: "Badanie elektrofizjologiczne (EPS, ang. electrophysiology study) to inwazyjne badanie diagnostyczne, w którym specjalne cewniki diagnostyczne wprowadzone przez naczynia żylne do jam serca rejestrują sygnały elektryczne bezpośrednio z mięśnia sercowego. EPS pozwala ocenić funkcję węzła zatokowego, czas przewodzenia przez węzeł AV i układ Hisa-Purkinjego, a przede wszystkim indukować i scharakteryzować arytmie, które nie dały się uchwycić w standardowych badaniach. Jest złotym standardem w diagnostyce podejrzanych arytmii.",
    },
    procedure: {
      heading: "Jak przebiega badanie elektrofizjologiczne?",
      body: "Pod sedacją lub znieczuleniem miejscowym elektrofizjolog nakłuwa żyły udowe i wprowadza 2–4 cewniki diagnostyczne do prawego przedsionka, okolicy węzła AV, pęczka Hisa i koniuszka prawej komory. Rejestruje sygnały elektryczne i ocenia parametry przewodzenia, a następnie wykonuje stymulację programowaną — serie przedwczesnych impulsów mające na celu indukcję arytmii. Gdy arytmia zostanie zindukowana i zidentyfikowana, elektrofizjolog może natychmiast przejść do jej ablacji — bez przerywania zabiegu. Czas samego EPS wynosi 60–90 minut.",
    },
    stats: [
      { value: "Bezpieczne", label: "Ryzyko powikłań poniżej 0,5%" },
      { value: "60–90 min", label: "Czas badania" },
      { value: "W jednej sesji", label: "EPS + ablacja bez ponownej hospitalizacji" },
    ],
    indications: [
      "Diagnostyka nawracających omdleń o niejasnej etiologii",
      "Podejrzenie arytmii nieuchwyconej w standardowych badaniach",
      "Ocena ryzyka nagłej śmierci sercowej w kardiomiopatiach",
      "Weryfikacja mechanizmu SVT lub VT przed ablacją",
      "Ocena układu przewodzącego przed implantacją stymulatora",
      "Ocena skuteczności leczenia antyarytmicznego",
    ],
    faq: [
      { q: "Czy EPS jest bolesne?", a: "Zabieg wykonywany jest w sedacji dożylnej lub znieczuleniu miejscowym. Pacjent może odczuwać lekki dyskomfort w miejscu nakłucia żylnego oraz podczas stymulacji serca — krótkotrwałe kołatanie. Sam zabieg jest niebolesny." },
      { q: "Czy po EPS od razu wykonuje się ablację?", a: "Tak — w naszym centrum EPS i ablacja wykonywane są w jednej sesji. Jeśli arytmia zostanie zindukowana i zidentyfikowana, elektrofizjolog od razu przechodzi do jej ablacji. Eliminuje to konieczność ponownej hospitalizacji i ponownego nakłucia." },
      { q: "Jak długo trwa hospitalizacja po EPS?", a: "Przy niepowikłanym przebiegu EPS bez ablacji — 1 dzień. Po jednoczesnej ablacji — 1–2 dni, z kontrolnym EKG i oceną przed wypisem." },
      { q: "Co jeśli arytmia nie zostanie zindukowana podczas EPS?", a: "Nieinducybilność arytmii nie wyklucza jej istnienia — oznacza jedynie, że w danych warunkach nie udało się jej wywołać. W takich przypadkach rozważamy dalszą diagnostykę (np. rejestratory pętlowe) lub modyfikację protokołu stymulacyjnego." },
    ],
  },
]

export function getSubpage(slug: string): AblacjaSubpageData | null {
  return ablacjaSubpages.find(p => p.slug === slug) ?? null
}
