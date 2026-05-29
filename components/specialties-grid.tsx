"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Heart, Zap, Activity, Brain, Smile, Apple, Wind, Droplets, FlaskConical, Scissors, Baby, TrendingUp, GitBranch, ScanLine, Filter } from "lucide-react"
import { useTranslation } from "react-i18next"

const specialtyKeys = [
  { icon: Heart,        key: "adultCardiology",    href: "/kardiologia-doroslych" },
  { icon: Baby,         key: "pediatricCardiology", href: "/kardiologia-dziecieca" },
  { icon: TrendingUp,   key: "hypertensiology",     href: "/hipertensjologia" },
  { icon: Scissors,     key: "cardiacSurgery",      href: "/kardiochirurgia" },
  { icon: Wind,         key: "pulmonology",         href: "/pulmonologia" },
  { icon: Brain,        key: "neurology",           href: "/neurologia" },
  { icon: Brain,        key: "neurosurgery",        href: "/neurochirurgia" },
  { icon: GitBranch,    key: "vascularSurgery",     href: "/chirurgia-naczyniowa" },
  { icon: FlaskConical, key: "endocrinology",       href: "/endokrynologia" },
  { icon: Droplets,     key: "diabetology",         href: "/diabetologia" },
  { icon: Filter,       key: "nephrology",          href: "/nefrologia" },
  { icon: Apple,        key: "dietetics",           href: "/dietetycy" },
  { icon: Activity,     key: "balneology",          href: "/balneologia" },
  { icon: Smile,        key: "dentistry",           href: "/stomatologia" },
]

const INITIAL_ROWS = 2
const PER_ROW = 3
const INITIAL_COUNT = INITIAL_ROWS * PER_ROW

export function SpecialtiesGrid({ showAll = false }: { showAll?: boolean }) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  const renderCard = (s: typeof specialtyKeys[0], i: number) => {
    const Icon = s.icon
    return (
      <Link key={s.key + i} href={s.href} className="h-full">
        <div className="group flex h-full flex-col gap-4 rounded-xl bg-slate-50 p-8 transition-colors hover:bg-slate-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EE3920]/8 text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-balance inline-flex items-center gap-1.5 font-semibold text-slate-900">
              {t(`grid.items.${s.key}.name`)}
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
            </h3>
            <p className="text-pretty mt-1 text-sm leading-relaxed text-slate-500">{t(`grid.items.${s.key}.desc`)}</p>
          </div>
        </div>
      </Link>
    )
  }

  if (showAll) {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {specialtyKeys.map(renderCard)}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {specialtyKeys.slice(0, INITIAL_COUNT).map(renderCard)}
      </div>

      <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2 lg:grid-cols-3">
            {specialtyKeys.slice(INITIAL_COUNT).map(renderCard)}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-[#EE3920] hover:text-[#EE3920]"
        >
          {expanded ? t("grid.collapse") : (
            <>
              {t("grid.showAll")}
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 transition-colors group-hover:bg-[#EE3920]/15 group-hover:text-[#EE3920]">
                +{specialtyKeys.length - INITIAL_COUNT}
              </span>
            </>
          )}
        </button>
      </div>
    </>
  )
}
