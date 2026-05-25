"use client"

import { useState } from "react"

type Item = { q: string; a: string }

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map(({ q, a }, i) => (
        <div key={q} className="rounded-xl bg-slate-50 px-5">
          <button
            className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-sm font-medium text-slate-900"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {q}
            <span className={`ml-4 shrink-0 text-lg leading-none text-slate-400 transition-transform duration-300 ${open === i ? "rotate-45" : "rotate-0"}`}>
              +
            </span>
          </button>
          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p className="pb-4 text-sm text-slate-600">{a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
