"use client"

import { useState } from "react"
import { Search, CheckCircle, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "react-i18next"

const allTestsPl = [
  { label: "EKG spoczynkowe", cat: "Kardiologiczne" },
  { label: "EKG wysiłkowe", cat: "Kardiologiczne" },
  { label: "Próba wysiłkowa z saturacją", cat: "Kardiologiczne" },
  { label: "Echo serca", cat: "Kardiologiczne" },
  { label: "Tilt-test (test pochyleniowy)", cat: "Kardiologiczne" },
  { label: "Holter EKG 24h standard", cat: "Kardiologiczne" },
  { label: "Holter EKG 12-kanałowy", cat: "Kardiologiczne" },
  { label: "Holter EKG 1–8 dniowy", cat: "Kardiologiczne" },
  { label: "Rejestratory arytmii (monitoring wielomiesięczny)", cat: "Kardiologiczne" },
  { label: "Holter ciśnieniowy RR 24h", cat: "Kardiologiczne" },
  { label: "Symultaniczny pomiar RR", cat: "Kardiologiczne" },
  { label: "Kontrola stymulatora serca", cat: "Kardiologiczne" },
  { label: "Kontrola kardiowertera (ICD)", cat: "Kardiologiczne" },
  { label: "Badanie elektrofizjologiczne", cat: "Kardiologiczne" },
  { label: "Ablacja serca (RF, PFA)", cat: "Kardiologiczne" },
  { label: "EKG dzieci", cat: "Pediatryczne" },
  { label: "Echo serca dzieci", cat: "Pediatryczne" },
  { label: "Holter EKG dzieci 24h", cat: "Pediatryczne" },
  { label: "Holter ciśnieniowy RR dzieci", cat: "Pediatryczne" },
  { label: "Monitorowanie saturacji 24h", cat: "Pediatryczne" },
  { label: "USG tarczycy", cat: "USG / Doppler" },
  { label: "USG piersi", cat: "USG / Doppler" },
  { label: "USG jamy brzusznej", cat: "USG / Doppler" },
  { label: "USG ślinianek", cat: "USG / Doppler" },
  { label: "USG układu moczowego", cat: "USG / Doppler" },
  { label: "USG prostaty", cat: "USG / Doppler" },
  { label: "USG jąder", cat: "USG / Doppler" },
  { label: "USG węzłów chłonnych", cat: "USG / Doppler" },
  { label: "USG opłucnej", cat: "USG / Doppler" },
  { label: "USG Doppler tętnic szyjnych", cat: "USG / Doppler" },
  { label: "USG Doppler tętnic mózgowych", cat: "USG / Doppler" },
  { label: "USG Doppler tętnic kończyn", cat: "USG / Doppler" },
  { label: "USG Doppler żył kończyn", cat: "USG / Doppler" },
  { label: "Holter RR bezdech senny", cat: "Sen i oddech" },
  { label: "Pełne badanie snu w sypialni pacjenta", cat: "Sen i oddech" },
  { label: "Spirometria", cat: "Sen i oddech" },
  { label: "Wskaźnik ABI (niedokrwienie kończyn)", cat: "Ocena ryzyka" },
  { label: "Analiza składu ciała (SECA-285)", cat: "Ocena ryzyka" },
  { label: "Profesjonalny pomiar BMI", cat: "Ocena ryzyka" },
  { label: "Ocena ryzyka udaru mózgowego", cat: "Ocena ryzyka" },
  { label: "Ocena ryzyka krwawienia", cat: "Ocena ryzyka" },
  { label: "Ocena EuroSCORE (operacja serca)", cat: "Ocena ryzyka" },
  { label: "Ocena ryzyka zabiegowego", cat: "Ocena ryzyka" },
  { label: "Ocena ryzyka ciąży", cat: "Ocena ryzyka" },
]

const allTestsEn = [
  { label: "Resting ECG", cat: "Cardiac" },
  { label: "Exercise ECG", cat: "Cardiac" },
  { label: "Stress test with oxygen saturation", cat: "Cardiac" },
  { label: "Echocardiography", cat: "Cardiac" },
  { label: "Tilt-test", cat: "Cardiac" },
  { label: "24h standard Holter ECG", cat: "Cardiac" },
  { label: "12-channel Holter ECG", cat: "Cardiac" },
  { label: "1–8 day Holter ECG", cat: "Cardiac" },
  { label: "Arrhythmia recorders (multi-month monitoring)", cat: "Cardiac" },
  { label: "24h blood pressure Holter (ABPM)", cat: "Cardiac" },
  { label: "Simultaneous blood pressure measurement", cat: "Cardiac" },
  { label: "Pacemaker control", cat: "Cardiac" },
  { label: "Cardioverter-defibrillator (ICD) control", cat: "Cardiac" },
  { label: "Electrophysiological study", cat: "Cardiac" },
  { label: "Heart ablation (RF, PFA)", cat: "Cardiac" },
  { label: "Children's ECG", cat: "Paediatric" },
  { label: "Children's echocardiography", cat: "Paediatric" },
  { label: "Children's 24h Holter ECG", cat: "Paediatric" },
  { label: "Children's blood pressure Holter", cat: "Paediatric" },
  { label: "24h oxygen saturation monitoring", cat: "Paediatric" },
  { label: "Thyroid ultrasound", cat: "Ultrasound" },
  { label: "Breast ultrasound", cat: "Ultrasound" },
  { label: "Abdominal ultrasound", cat: "Ultrasound" },
  { label: "Salivary gland ultrasound", cat: "Ultrasound" },
  { label: "Urinary tract ultrasound", cat: "Ultrasound" },
  { label: "Prostate ultrasound", cat: "Ultrasound" },
  { label: "Testicular ultrasound", cat: "Ultrasound" },
  { label: "Lymph node ultrasound", cat: "Ultrasound" },
  { label: "Pleural ultrasound", cat: "Ultrasound" },
  { label: "Doppler ultrasound of carotid arteries", cat: "Ultrasound" },
  { label: "Doppler ultrasound of cerebral arteries", cat: "Ultrasound" },
  { label: "Doppler ultrasound of limb arteries", cat: "Ultrasound" },
  { label: "Doppler ultrasound of limb veins", cat: "Ultrasound" },
  { label: "Sleep apnoea blood pressure Holter", cat: "Sleep" },
  { label: "Full sleep study at patient's home", cat: "Sleep" },
  { label: "Spirometry", cat: "Sleep" },
  { label: "ABI index (limb ischaemia)", cat: "Risk" },
  { label: "Body composition analysis (SECA-285)", cat: "Risk" },
  { label: "Professional BMI measurement", cat: "Risk" },
  { label: "Stroke risk assessment", cat: "Risk" },
  { label: "Bleeding risk assessment", cat: "Risk" },
  { label: "EuroSCORE assessment (cardiac surgery)", cat: "Risk" },
  { label: "Surgical risk assessment", cat: "Risk" },
  { label: "Pregnancy risk assessment", cat: "Risk" },
]

export function BadaniaSearch() {
  const { t, i18n } = useTranslation()
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  const isEn = i18n.language === "en"
  const allTests = isEn ? allTestsEn : allTestsPl

  const tabKeys = isEn
    ? [
        { value: "cardiac",  label: t("badania.tabs.cardiac"),  cat: "Cardiac" },
        { value: "pediatric", label: t("badania.tabs.pediatric"), cat: "Paediatric" },
        { value: "usg",      label: t("badania.tabs.usg"),      cat: "Ultrasound" },
        { value: "sleep",    label: t("badania.tabs.sleep"),    cat: "Sleep" },
        { value: "risk",     label: t("badania.tabs.risk"),     cat: "Risk" },
      ]
    : [
        { value: "cardiac",  label: t("badania.tabs.cardiac"),  cat: "Kardiologiczne" },
        { value: "pediatric", label: t("badania.tabs.pediatric"), cat: "Pediatryczne" },
        { value: "usg",      label: t("badania.tabs.usg"),      cat: "USG / Doppler" },
        { value: "sleep",    label: t("badania.tabs.sleep"),    cat: "Sen i oddech" },
        { value: "risk",     label: t("badania.tabs.risk"),     cat: "Ocena ryzyka" },
      ]

  const filtered = q ? allTests.filter(test => test.label.toLowerCase().includes(q)) : null

  return (
    <div>
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t("badania.search")}
          className="w-full rounded-xl border bg-white py-3 pl-10 pr-10 text-sm outline-none ring-0 transition focus:border-[#EE3920] focus:ring-1 focus:ring-[#EE3920]"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {filtered ? (
        filtered.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(test => (
              <div key={test.label} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm">
                <CheckCircle className="h-4 w-4 shrink-0 text-[#EE3920]" />
                <div className="min-w-0">
                  <span>{test.label}</span>
                  <span className="ml-2 text-xs text-slate-400">{test.cat}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-pretty text-sm text-slate-500">{t("badania.noResults", { query })}</p>
        )
      ) : (
        <Tabs defaultValue="cardiac">
          <TabsList className="mb-8 h-auto flex-wrap gap-1">
            {tabKeys.map(tab => <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>)}
          </TabsList>
          {tabKeys.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {allTests.filter(i => i.cat === tab.cat).map(i => (
                  <div key={i.label} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#EE3920]" />{i.label}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
