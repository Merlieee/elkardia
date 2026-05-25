"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Heart, Zap, Activity, Brain, Smile, Apple, Wind, Droplets, FlaskConical, Scissors, Baby, TrendingUp, GitBranch, ScanLine, Filter } from "lucide-react"

const specialties = [
  { icon: Heart,         label: "Kardiologia dorosłych",        desc: "Diagnostyka i leczenie chorób serca u dorosłych.",                                         href: "/kardiologia-doroslych" },
  { icon: Baby,          label: "Kardiologia dziecięca",         desc: "Specjalistyczna opieka kardiologiczna dla dzieci i młodzieży.",                            href: "/kardiologia-dziecieca" },
  { icon: TrendingUp,    label: "Hipertensjologia",              desc: "Diagnostyka i leczenie nadciśnienia tętniczego.",                                          href: "/hipertensjologia" },
  { icon: Scissors,      label: "Kardiochirurgia",               desc: "Konsultacje kardiochirurgiczne i opieka pooperacyjna.",                                    href: "/kardiochirurgia" },
  { icon: Wind,          label: "Pulmonologia",                  desc: "Choroby płuc i układu oddechowego.",                                                       href: "/pulmonologia" },
  { icon: Brain,         label: "Neurologia",                    desc: "Diagnostyka i leczenie chorób układu nerwowego.",                                          href: "/neurologia" },
  { icon: Brain,         label: "Neurochirurgia",                desc: "Konsultacje neurochirurgiczne.",                                                           href: "/neurochirurgia" },
  { icon: GitBranch,     label: "Chirurgia naczyniowa",          desc: "Choroby naczyń krwionośnych i leczenie chirurgiczne.",                                     href: "/chirurgia-naczyniowa" },
  { icon: FlaskConical,  label: "Endokrynologia",                desc: "Zaburzenia hormonalne i choroby gruczołów wydzielania wewnętrznego.",                      href: "/endokrynologia" },
  { icon: Droplets,      label: "Diabetologia",                  desc: "Leczenie cukrzycy i zaburzeń metabolicznych.",                                             href: "/diabetologia" },
  { icon: Filter,        label: "Nefrologia",                    desc: "Choroby nerek i leczenie nerkozastępcze.",                                                 href: "/nefrologia" },
  { icon: Apple,         label: "Dietetyka kliniczna",           desc: "Analiza składu ciała i indywidualny plan żywienia.",                                       href: "/dietetycy" },
  { icon: Activity,      label: "Balneologia",                   desc: "Leczenie uzdrowiskowe i rehabilitacja kardiologiczna.",                                    href: "/balneologia" },
  { icon: ScanLine,      label: "Radiologia — USG",              desc: "Badania ultrasonograficzne i diagnostyka obrazowa.",                                       href: "/badania" },
  { icon: Smile,         label: "Stomatologia i protetyka",      desc: "Pełna stomatologia z obserwacją kardiologiczną — jedyne takie miejsce w Lublinie.",        href: "/stomatologia" },
]

const INITIAL_ROWS = 2
const PER_ROW = 3
const INITIAL_COUNT = INITIAL_ROWS * PER_ROW

export function SpecialtiesGrid() {
  const [expanded, setExpanded] = useState(false)

  const renderCard = (s: typeof specialties[0], i: number) => {
    const Icon = s.icon
    return (
      <Link key={s.label} href={s.href} className="h-full">
        <div className="group flex h-full flex-col gap-4 rounded-xl bg-slate-50 p-8 transition-colors hover:bg-slate-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EE3920]/8 text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="inline-flex items-center gap-1.5 font-semibold text-slate-900">
              {s.label}
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.slice(0, INITIAL_COUNT).map(renderCard)}
      </div>

      <div
        style={{ maxHeight: expanded ? "1000px" : "0px", opacity: expanded ? 1 : 0 }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.slice(INITIAL_COUNT).map(renderCard)}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-[#EE3920] hover:text-[#EE3920]"
        >
          {expanded ? "Zwiń" : (
            <>
              Pokaż wszystkie specjalności
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 transition-colors group-hover:bg-[#EE3920]/15 group-hover:text-[#EE3920]">
                +{specialties.length - INITIAL_COUNT}
              </span>
            </>
          )}
        </button>
      </div>
    </>
  )
}
