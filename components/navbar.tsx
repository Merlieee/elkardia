"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const links = [
  { href: "/lekarze", label: "Lekarze" },
  { href: "/ablacja-serca", label: "Ablacja Serca" },
  { href: "/stomatologia", label: "Stomatologia" },
  { href: "/dietetycy", label: "Dietetycy" },
  { href: "/badania", label: "Badania" },
  { href: "/rejestracja", label: "Rejestracja 24h" },
]

export function Navbar() {
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

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/">
          <Image src="/images/logo.png" alt="Elkardia" width={120} height={32} className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              {link.label}
            </Link>
          ))}
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
            <SheetContent side="right" className="w-72 bg-white p-6">
              <div className="mb-8">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image src="/images/logo.png" alt="Elkardia" width={110} height={30} className="h-7 w-auto" />
                </Link>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-2">
                <a href="tel:+48815657075">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#EE3920] py-2.5 text-sm font-semibold text-white">
                    <Phone className="h-4 w-4" /> (81) 565 70 75
                  </button>
                </a>
                <p className="text-center text-xs text-slate-400">lub 536 102 112</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
