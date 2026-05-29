"use client"

import Image from "next/image"
import Link from "next/link"
import { Activity, ArrowRight, CheckCircle, Eye, ShieldCheck } from "lucide-react"
import { doctors } from "@/lib/doctors"
import { SpecialtyPage } from "@/components/specialty-page"
import { FaqAccordion } from "@/components/faq-accordion"
import { useTranslation } from "react-i18next"
import pl from "@/lib/translations/pl"
import en from "@/lib/translations/en"

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

export default function Page() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "pl"
  const e = lang === "en" ? en.pages.pediatricCardiology.echo : pl.pages.pediatricCardiology.echo

  const echoContent = (
    <div className="space-y-16">

      {/* ── Intro ── */}
      <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
        <div className="max-w-2xl">
          <p className="text-pretty mb-2 text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{e.eyebrow}</p>
          <h2 className="text-balance mb-5 text-3xl font-bold text-slate-900">{e.heading}</h2>
          <p className="text-pretty mb-4 text-base leading-relaxed text-slate-600">{e.intro1}</p>
          <p className="text-pretty mb-4 text-base leading-relaxed text-slate-600">{e.intro2}</p>
          <p className="text-pretty text-base leading-relaxed text-slate-600">{e.intro3}</p>
        </div>
        <div className="relative self-stretch min-h-[280px]">
          <Image src="/images/philips-affiniti-50.webp" alt="Aparat echokardiograficzny Philips Affiniti 50" fill className="object-contain object-top" style={{ right: "2rem" }} />
        </div>
      </div>

      {/* ── 3 feature cards ── */}
      <div>
        <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.whatWeAssess}</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {([
            { icon: Eye, card: e.card1 },
            { icon: Activity, card: e.card2 },
            { icon: ShieldCheck, card: e.card3 },
          ] as const).map(({ icon: Icon, card }) => (
            <div key={card.title} className="rounded-xl bg-slate-50 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EE3920]/10">
                <Icon className="h-5 w-5 text-[#EE3920]" />
              </div>
              <h4 className="text-balance mb-2 font-semibold text-slate-900">{card.title}</h4>
              <p className="text-pretty mb-4 text-sm leading-relaxed text-slate-500">{card.intro}</p>
              <div className="space-y-1.5">
                {card.items.map((item: string) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#EE3920]" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── When to do echo ── */}
      <div>
        <h3 className="text-balance mb-8 text-xl font-bold text-slate-900">{e.whenHeading}</h3>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="border-l-2 border-[#EE3920] pl-5">
            <h4 className="text-balance mb-2 font-semibold text-slate-900">{e.when1.title}</h4>
            <p className="text-pretty mb-3 text-sm text-slate-500">{e.when1.intro}</p>
            <div className="space-y-1.5">
              {e.when1.items.map((item: string) => <p key={item} className="text-sm text-slate-600">— {item}</p>)}
            </div>
          </div>
          <div className="border-l-2 border-[#EE3920] pl-5">
            <h4 className="text-balance mb-2 font-semibold text-slate-900">{e.when2.title}</h4>
            <p className="text-pretty mb-3 text-sm text-slate-500">{e.when2.intro}</p>
            <div className="space-y-1.5">
              {e.when2.items.map((item: string) => <p key={item} className="text-sm text-slate-600">— {item}</p>)}
            </div>
          </div>
          <div className="border-l-2 border-[#EE3920] pl-5">
            <h4 className="text-balance mb-2 font-semibold text-slate-900">{e.when3.title}</h4>
            <p className="text-pretty text-sm leading-relaxed text-slate-600">{e.when3.body}</p>
          </div>
        </div>
      </div>

      {/* ── How it goes ── */}
      <div>
        <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.how}</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          {([e.step1, e.step2, e.step3] as typeof e.step1[]).map((step) => (
            <div key={step.num} className="rounded-xl bg-slate-50 p-6">
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#EE3920]/10 text-xs font-bold text-[#EE3920]">{step.num}</div>
              <h4 className="text-balance mb-3 font-semibold text-slate-900">{step.title}</h4>
              <p className="text-pretty text-sm leading-relaxed text-slate-600">{step.body}</p>
              {"items" in step && step.items && (
                <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {(step.items as string[]).map((item: string) => (
                    <div key={item} className="flex gap-2"><span className="text-slate-400">–</span><span>{item}</span></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Diseases ── */}
      <div className="rounded-2xl bg-slate-50 p-8">
        <h3 className="text-balance mb-5 text-xl font-bold text-slate-900">{e.diseases}</h3>
        <div className="space-y-2">
          {e.diseasesList.map((item: string) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#EE3920]" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Specialists ── */}
      <div>
        <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.specialists}</h3>
        <div className="flex flex-col gap-3">
          {doctors.filter(d => d.group === "Kardiologia dziecięca").map((d) => (
            <Link key={d.slug} href={`/lekarze/${d.slug}`}
              className="group flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EE3920]/10 text-sm font-bold text-[#EE3920] transition-colors group-hover:bg-[#EE3920] group-hover:text-white">
                {initials(d.name)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-pretty font-semibold text-slate-900 text-sm leading-tight">{d.name}</p>
                <p className="text-pretty mt-0.5 text-xs text-slate-500">{d.tags.slice(0, 2).join(" · ")}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#EE3920]" />
            </Link>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div>
        <h3 className="text-balance mb-6 text-xl font-bold text-slate-900">{e.faqHeading}</h3>
        <FaqAccordion items={e.faq} />
        <p className="text-pretty mt-6 text-sm text-slate-500">
          {e.faqContact}{" "}
          <a href="/rejestracja" className="font-medium text-[#EE3920] hover:underline">{e.faqContactLink}</a>
        </p>
      </div>

    </div>
  )

  return (
    <SpecialtyPage
      content={{ pl: pl.pages.pediatricCardiology, en: en.pages.pediatricCardiology }}
      heroImage="/images/spec-4.webp"
      doctors={doctors.filter(d => d.group === "Kardiologia dziecięca")}
      extraContent={echoContent}
    />
  )
}
