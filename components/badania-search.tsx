"use client"

import { useState } from "react"
import { Search, CheckCircle, X, ArrowUpRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "react-i18next"
import { allTests, type BadanieTest } from "@/lib/badania-tests"

function TestCard({ test, isEn, showCat }: { test: BadanieTest; isEn: boolean; showCat?: boolean }) {
  return (
    <a
      href={test.href}
      className="group flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm transition-colors hover:border-[#EE3920]/40 hover:bg-[#EE3920]/[0.03]"
    >
      <CheckCircle className="h-4 w-4 shrink-0 text-[#EE3920]" />
      <div className="min-w-0 flex-1">
        <span className="transition-colors group-hover:text-[#EE3920]">{isEn ? test.en : test.pl}</span>
        {showCat && <span className="ml-2 text-xs text-slate-400">{isEn ? test.catEn : test.cat}</span>}
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-[#EE3920]" />
    </a>
  )
}

export function BadaniaSearch() {
  const { t, i18n } = useTranslation()
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  const isEn = i18n.language === "en"

  // Laboratory tests have their own section on /badania and their own page, so
  // they get no tab here — but they stay searchable below.
  const tabKeys = [
    { value: "cardiac",   label: t("badania.tabs.cardiac"),   cat: "Kardiologiczne" },
    { value: "pediatric", label: t("badania.tabs.pediatric"), cat: "Pediatryczne" },
    { value: "usg",       label: t("badania.tabs.usg"),       cat: "USG / Doppler" },
    { value: "sleep",     label: t("badania.tabs.sleep"),     cat: "Sen i oddech" },
    { value: "risk",      label: t("badania.tabs.risk"),      cat: "Ocena ryzyka" },
  ]

  const filtered = q
    ? allTests.filter(test => (isEn ? test.en : test.pl).toLowerCase().includes(q))
    : null

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
          <button onClick={() => setQuery("")} className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {filtered ? (
        filtered.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(test => (
              <TestCard key={test.href + test.pl} test={test} isEn={isEn} showCat />
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
                {allTests.filter(i => i.cat === tab.cat).map(test => (
                  <TestCard key={test.href + test.pl} test={test} isEn={isEn} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
