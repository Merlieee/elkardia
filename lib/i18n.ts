"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import pl from "./translations/pl"
import en from "./translations/en"

function isPolishBrowser() {
  if (typeof window === "undefined") return true
  const langs = navigator.languages || [navigator.language || ""]
  return langs.some((l) => l.toLowerCase().startsWith("pl"))
}

function getDefaultLang() {
  if (typeof window === "undefined") return "pl"
  const saved = localStorage.getItem("elkardia-lang")
  return saved ?? (isPolishBrowser() ? "pl" : "en")
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
    },
    lng: "pl",
    fallbackLng: "pl",
    interpolation: { escapeValue: false },
  })
}

export function setLang(lang: "pl" | "en") {
  if (typeof window !== "undefined") localStorage.setItem("elkardia-lang", lang)
  i18n.changeLanguage(lang)
}

export function isPolishUser() {
  return isPolishBrowser()
}

export function initLang() {
  i18n.changeLanguage(getDefaultLang())
}

export default i18n
