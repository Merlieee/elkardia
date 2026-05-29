"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { setLang, isPolishUser } from "@/lib/i18n"

export function LangBanner() {
  const { t, i18n } = useTranslation()
  const [dismissed, setDismissed] = useState(false)

  if (dismissed || !isPolishUser() || i18n.language !== "en") return null

  return (
    <div className="bg-[#0C71C3] px-6 py-3 text-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between lg:px-2">
        <span>
          {t("banner.message")}{" "}
          <button
            onClick={() => setLang("pl")}
            className="cursor-pointer font-semibold underline underline-offset-2"
          >
            {t("banner.switch")}
          </button>
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="ml-6 cursor-pointer text-lg leading-none text-white/70 hover:text-white"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  )
}
