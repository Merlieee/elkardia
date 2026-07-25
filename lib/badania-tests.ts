import { labSections } from "./badania-lab"

export type BadanieTest = {
  pl: string
  en: string
  cat: string
  catEn: string
  href: string
  /** True for tests whose page lives outside /badania (existing SEO landing pages). */
  external?: boolean
}

// Tests that already have their own top-level landing page — the list links out
// to those rather than duplicating the content under /badania/.
const nonLabTests: BadanieTest[] = [
  // ── Kardiologiczne ──
  { pl: "EKG spoczynkowe", en: "Resting ECG", cat: "Kardiologiczne", catEn: "Cardiac", href: "/ekg-spoczynkowe-lublin", external: true },
  { pl: "EKG wysiłkowe", en: "Exercise ECG", cat: "Kardiologiczne", catEn: "Cardiac", href: "/proba-wysilkowa-lublin", external: true },
  { pl: "Próba wysiłkowa z saturacją", en: "Stress test with oxygen saturation", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/proba-wysilkowa-z-saturacja" },
  { pl: "Echo serca", en: "Echocardiography", cat: "Kardiologiczne", catEn: "Cardiac", href: "/echo-serca-lublin", external: true },
  { pl: "Tilt-test (test pochyleniowy)", en: "Tilt-test", cat: "Kardiologiczne", catEn: "Cardiac", href: "/tilt-test-test-pochyleniowy-lublin", external: true },
  { pl: "Holter EKG 24h standard", en: "24h standard Holter ECG", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/holter-ekg-24h" },
  { pl: "Holter EKG 12-kanałowy", en: "12-channel Holter ECG", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/holter-ekg-12-kanalowy" },
  { pl: "Holter EKG 1–8 dniowy", en: "1–8 day Holter ECG", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/holter-ekg-1-8-dniowy" },
  { pl: "Rejestratory arytmii (monitoring wielomiesięczny)", en: "Arrhythmia recorders (multi-month monitoring)", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/rejestratory-arytmii" },
  { pl: "Holter ciśnieniowy RR 24h", en: "24h blood pressure Holter (ABPM)", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/holter-cisnieniowy-rr-24h" },
  { pl: "Symultaniczny pomiar RR", en: "Simultaneous blood pressure measurement", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/symultaniczny-pomiar-rr" },
  { pl: "Kontrola stymulatora serca", en: "Pacemaker control", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/kontrola-stymulatora-serca" },
  { pl: "Kontrola kardiowertera (ICD)", en: "Cardioverter-defibrillator (ICD) control", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/kontrola-kardiowertera-icd" },
  { pl: "Badanie elektrofizjologiczne", en: "Electrophysiological study", cat: "Kardiologiczne", catEn: "Cardiac", href: "/badania/badanie-elektrofizjologiczne" },
  { pl: "Ablacja serca (RF, PFA)", en: "Heart ablation (RF, PFA)", cat: "Kardiologiczne", catEn: "Cardiac", href: "/ablacja-serca", external: true },

  // ── Pediatryczne ──
  { pl: "EKG dzieci", en: "Children's ECG", cat: "Pediatryczne", catEn: "Pediatric", href: "/badania/ekg-dzieci" },
  { pl: "Echo serca dzieci", en: "Children's echocardiography", cat: "Pediatryczne", catEn: "Pediatric", href: "/badania/echo-serca-dzieci" },
  { pl: "Holter EKG dzieci 24h", en: "Children's 24h Holter ECG", cat: "Pediatryczne", catEn: "Pediatric", href: "/badania/holter-ekg-dzieci-24h" },
  { pl: "Holter ciśnieniowy RR dzieci", en: "Children's blood pressure Holter", cat: "Pediatryczne", catEn: "Pediatric", href: "/badania/holter-cisnieniowy-rr-dzieci" },
  { pl: "Monitorowanie saturacji 24h", en: "24h oxygen saturation monitoring", cat: "Pediatryczne", catEn: "Pediatric", href: "/badania/monitorowanie-saturacji-24h" },

  // ── USG / Doppler ──
  { pl: "USG tarczycy", en: "Thyroid ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-tarczycy" },
  { pl: "USG piersi", en: "Breast ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-piersi" },
  { pl: "USG jamy brzusznej", en: "Abdominal ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-jamy-brzusznej" },
  { pl: "USG ślinianek", en: "Salivary gland ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-slinianek" },
  { pl: "USG układu moczowego", en: "Urinary tract ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-ukladu-moczowego" },
  { pl: "USG prostaty", en: "Prostate ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-prostaty" },
  { pl: "USG jąder", en: "Testicular ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-jader" },
  { pl: "USG węzłów chłonnych", en: "Lymph node ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-wezlow-chlonnych" },
  { pl: "USG opłucnej", en: "Pleural ultrasound", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-oplucnej" },
  { pl: "USG Doppler tętnic szyjnych", en: "Doppler ultrasound of carotid arteries", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-doppler-tetnic-szyjnych" },
  { pl: "USG Doppler tętnic mózgowych", en: "Doppler ultrasound of cerebral arteries", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-doppler-tetnic-mozgowych" },
  { pl: "USG Doppler tętnic kończyn", en: "Doppler ultrasound of limb arteries", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-doppler-tetnic-konczyn" },
  { pl: "USG Doppler żył kończyn", en: "Doppler ultrasound of limb veins", cat: "USG / Doppler", catEn: "Ultrasound", href: "/badania/usg-doppler-zyl-konczyn" },

  // ── Sen i oddech ──
  { pl: "Holter RR bezdech senny", en: "Sleep apnea blood pressure Holter", cat: "Sen i oddech", catEn: "Sleep", href: "/badania/holter-rr-bezdech-senny" },
  { pl: "Pełne badanie snu w sypialni pacjenta", en: "Full sleep study at patient's home", cat: "Sen i oddech", catEn: "Sleep", href: "/badania/badanie-snu-w-domu" },
  { pl: "Spirometria", en: "Spirometry", cat: "Sen i oddech", catEn: "Sleep", href: "/badania/spirometria" },

  // ── Ocena ryzyka ──
  { pl: "Wskaźnik ABI (niedokrwienie kończyn)", en: "ABI index (limb ischaemia)", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/wskaznik-abi" },
  { pl: "Analiza składu ciała (SECA-285)", en: "Body composition analysis (SECA-285)", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/analiza-skladu-ciala" },
  { pl: "Profesjonalny pomiar BMI", en: "Professional BMI measurement", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/pomiar-bmi" },
  { pl: "Ocena ryzyka udaru mózgowego", en: "Stroke risk assessment", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/ocena-ryzyka-udaru" },
  { pl: "Ocena ryzyka krwawienia", en: "Bleeding risk assessment", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/ocena-ryzyka-krwawienia" },
  { pl: "Ocena EuroSCORE (operacja serca)", en: "EuroSCORE assessment (cardiac surgery)", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/euroscore" },
  { pl: "Ocena ryzyka zabiegowego", en: "Surgical risk assessment", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/ocena-ryzyka-zabiegowego" },
  { pl: "Ocena ryzyka ciąży", en: "Pregnancy risk assessment", cat: "Ocena ryzyka", catEn: "Risk", href: "/badania/ocena-ryzyka-ciazy" },
]

// Every laboratory test links to its section on the single lab page.
const labTests: BadanieTest[] = labSections.flatMap(section =>
  section.tests.map(test => ({
    pl: test.pl,
    en: test.en,
    cat: "Laboratoryjne",
    catEn: "Laboratory",
    href: `/badania/badania-laboratoryjne#${section.id}`,
  }))
)

export const allTests: BadanieTest[] = [...nonLabTests, ...labTests]
