"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { ElkardiaLogo } from "@/components/logos"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTranslation } from "react-i18next"

type DropdownItem = { href: string; labelKey: string }
type NavLink = { href: string; labelKey: string; items?: DropdownItem[] }

function DropdownNavItem({ link, t }: { link: NavLink & { items: DropdownItem[] }; t: (k: string) => string }) {
  return (
    <div className="group relative">
      <Link href={link.href} className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
        {t(link.labelKey)}
        <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform duration-150 group-hover:rotate-180" />
      </Link>
      <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[220px] pt-1 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="max-h-[33rem] overflow-y-auto rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
          {link.items.map((item) => (
            <Link key={item.href + item.labelKey} href={item.href}
              className="block px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileAccordion({ link, onClose, t }: { link: NavLink & { items: DropdownItem[] }; onClose: () => void; t: (k: string) => string }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
      >
        {t(link.labelKey)}
        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="ml-3 flex flex-col border-l border-slate-100">
            {link.items.map((item) => (
              <Link key={item.href + item.labelKey} href={item.href} onClick={onClose}
                className={`px-4 py-2.5 text-sm text-slate-600 transition-opacity duration-300 hover:text-slate-900 ${expanded ? "opacity-100" : "opacity-0"}`}>
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 80) { setVisible(true) }
      else if (y > lastY.current) { setVisible(false) }
      else { setVisible(true) }
      lastY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const specjalnosciItems: DropdownItem[] = [
    { href: "/kardiologia-doroslych", labelKey: "nav.spec.adultCardiology" },
    { href: "/hipertensjologia", labelKey: "nav.spec.hypertensiology" },
    { href: "/kardiochirurgia", labelKey: "nav.spec.cardiacSurgery" },
    { href: "/pulmonologia", labelKey: "nav.spec.pulmonology" },
    { href: "/neurologia", labelKey: "nav.spec.neurology" },
    { href: "/neurochirurgia", labelKey: "nav.spec.neurosurgery" },
    { href: "/chirurgia-naczyniowa", labelKey: "nav.spec.vascularSurgery" },
    { href: "/endokrynologia", labelKey: "nav.spec.endocrinology" },
    { href: "/diabetologia", labelKey: "nav.spec.diabetology" },
    { href: "/nefrologia", labelKey: "nav.spec.nephrology" },
    { href: "/dietetycy", labelKey: "nav.spec.dietetics" },
    { href: "/balneologia", labelKey: "nav.spec.balneology" },
    { href: "/stomatologia", labelKey: "nav.spec.dentistry" },
  ]

  const links: NavLink[] = [
    { href: "/lekarze", labelKey: "nav.doctors" },
    { href: "/ablacja-serca", labelKey: "nav.ablation" },
    { href: "/kardiologia-dziecieca", labelKey: "nav.pediatric" },
    { href: "/badania", labelKey: "nav.tests" },
    { href: "/specjalnosci", labelKey: "nav.specialties", items: specjalnosciItems },
    { href: "/rejestracja", labelKey: "nav.registration" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/">
          <ElkardiaLogo className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) =>
            link.items ? (
              <DropdownNavItem key={link.href} link={link as NavLink & { items: DropdownItem[] }} t={t} />
            ) : link.href.startsWith("http") ? (
              <a key={link.href} href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                {t(link.labelKey)}
              </a>
            ) : (
              <Link key={link.href} href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                {t(link.labelKey)}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+48815657075" className="hidden md:block">
            <button className="flex items-center gap-2 rounded-lg bg-[#EE3920] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#d4321c]">
              <Phone className="h-3.5 w-3.5" />
              (81) 565 70 75
            </button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden">
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex h-full w-[85vw] max-w-sm flex-col overflow-y-auto bg-white p-6">
              <SheetTitle className="sr-only">{t("nav.menuTitle")}</SheetTitle>
              <div className="mb-8">
                <Link href="/" onClick={() => setOpen(false)}>
                  <ElkardiaLogo className="h-7 w-auto" />
                </Link>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((link) =>
                  link.items ? (
                    <MobileAccordion key={link.href} link={link as NavLink & { items: DropdownItem[] }} onClose={() => setOpen(false)} t={t} />
                  ) : link.href.startsWith("http") ? (
                    <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                      {t(link.labelKey)}
                    </Link>
                  )
                )}
              </nav>
              <div className="mt-auto rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-pretty mb-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">{t("nav.phoneReg")}</p>
                <a href="tel:+48815657075" className="flex items-center gap-3 rounded-xl bg-[#EE3920] px-4 py-3 text-white transition-colors hover:bg-[#d4321c]">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="text-base font-semibold">(81) 565 70 75</span>
                </a>
                <a href="tel:+48536102112" className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition-colors hover:bg-slate-50">
                  <Phone className="h-5 w-5 shrink-0 text-slate-400" />
                  <span className="text-base font-semibold">536 102 112</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
