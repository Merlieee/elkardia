"use client"

import { useEffect } from "react"
import "@/lib/i18n"
import i18n from "@/lib/i18n"

export function LangProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("elkardia-lang")
    const langs = navigator.languages || [navigator.language || ""]
    const isPolish = langs.some((l) => l.toLowerCase().startsWith("pl"))
    const lang = saved ?? (isPolish ? "pl" : "en")
    i18n.changeLanguage(lang)
  }, [])

  return <>{children}</>
}
