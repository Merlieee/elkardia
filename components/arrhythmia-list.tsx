"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Item = { label: string; short: string; href: string }

export function ArrhythmiaList({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.short}
          href={item.href}
          className="group flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm transition-colors hover:border-[#EE3920]/40 hover:bg-slate-50"
        >
          <span className="w-12 shrink-0 font-bold text-[#EE3920]">{item.short}</span>
          <span className="flex-1 text-pretty">{item.label}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
        </Link>
      ))}
    </div>
  )
}
