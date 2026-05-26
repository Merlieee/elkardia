"use client"

import { useState } from "react"
import { Search, CheckCircle, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const allTests = [
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

const tabs = [
  { value: "cardiac",  label: "Kardiologiczne", cat: "Kardiologiczne" },
  { value: "pediatric",label: "Pediatryczne",   cat: "Pediatryczne" },
  { value: "usg",      label: "USG / Doppler",  cat: "USG / Doppler" },
  { value: "sleep",    label: "Sen i oddech",   cat: "Sen i oddech" },
  { value: "risk",     label: "Ocena ryzyka",   cat: "Ocena ryzyka" },
]

function TestItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm">
      <CheckCircle className="h-4 w-4 shrink-0 text-[#EE3920]" />{label}
    </div>
  )
}

export function BadaniaSearch() {
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  const filtered = q
    ? allTests.filter(t => t.label.toLowerCase().includes(q))
    : null

  return (
    <div>
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Wyszukaj badanie..."
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
            {filtered.map(t => (
              <div key={t.label} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm">
                <CheckCircle className="h-4 w-4 shrink-0 text-[#EE3920]" />
                <div className="min-w-0">
                  <span>{t.label}</span>
                  <span className="ml-2 text-xs text-slate-400">{t.cat}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-pretty text-sm text-slate-500">Brak wyników dla „{query}".</p>
        )
      ) : (
        <Tabs defaultValue="cardiac">
          <TabsList className="mb-8 h-auto flex-wrap gap-1">
            {tabs.map(t => <TabsTrigger key={t.value} value={t.value}>{t.label}</TabsTrigger>)}
          </TabsList>
          {tabs.map(t => (
            <TabsContent key={t.value} value={t.value}>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {allTests.filter(i => i.cat === t.cat).map(i => <TestItem key={i.label} label={i.label} />)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
