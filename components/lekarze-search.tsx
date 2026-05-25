"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ArrowRight, X } from "lucide-react"
import { doctors, groups } from "@/lib/doctors"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

function toId(group: string) {
  return group.toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź/g, "z").replace(/ż/g, "z")
    .replace(/\s+/g, "-")
}

function DoctorCard({ d }: { d: typeof doctors[0] }) {
  return (
    <div className="h-24">
      <Link
        href={`/lekarze/${d.slug}`}
        className="group flex h-full items-start gap-4 overflow-hidden rounded-xl bg-slate-50 p-5 transition-colors hover:bg-slate-100"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EE3920]/10 text-sm font-bold text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
          {initials(d.name)}
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex items-start justify-between gap-2">
            <p className="line-clamp-1 font-semibold text-slate-900 leading-tight">{d.name}</p>
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {d.tags.slice(0, 2).map((t) => (
              <span key={t} className="rounded-md bg-white px-2 py-0.5 text-xs text-slate-500 ring-1 ring-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export function LekarzeSearch() {
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  const filtered = q
    ? doctors.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.tags.some(t => t.toLowerCase().includes(q)) ||
        d.group.toLowerCase().includes(q)
      )
    : null

  return (
    <div className="flex flex-col gap-16">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Nasz zespół</h2>
        <p className="mt-2 text-slate-500">Znajdź lekarza po nazwisku lub specjalizacji.</p>
        <div className="relative mt-6 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Szukaj lekarza lub specjalizacji…"
          className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none ring-0 transition focus:border-[#EE3920] focus:ring-1 focus:ring-[#EE3920]"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
            <X className="h-4 w-4" />
          </button>
        )}
        </div>
      </div>

      {filtered !== null && filtered.length === 0 ? (
        <p className="text-sm text-slate-500">Brak wyników dla „{query}".</p>
      ) : (
        groups.map((group) => {
          const groupDoctors = (filtered ?? doctors).filter(d => d.group === group)
          if (groupDoctors.length === 0) return null
          return (
            <div key={group} id={toId(group)} className="scroll-mt-24">
              <div className="mb-6 flex items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">{group}</h2>
                <div className="h-px flex-1 bg-slate-100" />
                <span className="text-xs text-slate-400">
                  {groupDoctors.length} {groupDoctors.length === 1 ? "lekarz" : "lekarzy"}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {groupDoctors.map(d => <DoctorCard key={d.slug} d={d} />)}
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
