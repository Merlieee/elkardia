"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, Phone } from "lucide-react"

type T = {
  eyebrow: string
  heading: string
  body: string
  trustLabels: string[]
  namePlaceholder: string
  emailPlaceholder: string
  phonePlaceholder: string
  arrhythmiaLabel: string
  arrhythmiaDefault: string
  hadAblationLabel: string
  hadAblationDefault: string
  hasEcgLabel: string
  hasEcgDefault: string
  doctorLabel: string
  doctorDefault: string
  arrhythmiaOptions: string[]
  hadAblationOptions: string[]
  hasEcgOptions: string[]
  doctorOptions: string[]
  captchaLabel: string
  captchaPlaceholder: string
  submit: string
  sending: string
  successTitle: string
  successBody: string
  errorBody: string
  captchaError: string
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EE3920] focus:outline-none focus:ring-2 focus:ring-[#EE3920]/20 transition-colors"

const selectClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#EE3920] focus:outline-none focus:ring-2 focus:ring-[#EE3920]/20 transition-colors appearance-none cursor-pointer"

function SelectField({
  label,
  value,
  onChange,
  defaultLabel,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  defaultLabel: string
  options: string[]
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      <div className="relative">
        <select
          className={selectClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{defaultLabel}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          ▾
        </span>
      </div>
    </div>
  )
}

export function KonsultacjaForm({ t }: { t: T }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    arrhythmia: "",
    hadAblation: "",
    hasEcg: "",
    doctor: "",
    captcha: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  )
  const [captchaError, setCaptchaError] = useState(false)

  const [math, setMath] = useState<{ a: number; b: number; answer: number } | null>(null)

  useEffect(() => {
    const a = Math.floor(Math.random() * 9) + 1
    const b = Math.floor(Math.random() * 9) + 1
    setMath({ a, b, answer: a + b })
  }, [])

  const set = (key: keyof typeof form) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCaptchaError(false)

    if (!math || parseInt(form.captcha) !== math.answer) {
      setCaptchaError(true)
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("/api/konsultacja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          arrhythmia: form.arrhythmia,
          hadAblation: form.hadAblation,
          hasEcg: form.hasEcg,
          doctor: form.doctor,
        }),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <h3 className="text-balance text-xl font-bold">{t.successTitle}</h3>
        <p className="text-pretty text-sm text-muted-foreground">{t.successBody}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-card p-6 sm:p-8 flex flex-col gap-4"
    >
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {t.namePlaceholder}
        </label>
        <input
          required
          type="text"
          placeholder={t.namePlaceholder}
          value={form.name}
          onChange={(e) => set("name")(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t.emailPlaceholder}
          </label>
          <input
            required
            type="email"
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t.phonePlaceholder}
          </label>
          <input
            required
            type="tel"
            placeholder={t.phonePlaceholder}
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Arrhythmia */}
      <SelectField
        label={t.arrhythmiaLabel}
        value={form.arrhythmia}
        onChange={set("arrhythmia")}
        defaultLabel={t.arrhythmiaDefault}
        options={t.arrhythmiaOptions}
      />

      {/* Had ablation + Has ECG */}
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label={t.hadAblationLabel}
          value={form.hadAblation}
          onChange={set("hadAblation")}
          defaultLabel={t.hadAblationDefault}
          options={t.hadAblationOptions}
        />
        <SelectField
          label={t.hasEcgLabel}
          value={form.hasEcg}
          onChange={set("hasEcg")}
          defaultLabel={t.hasEcgDefault}
          options={t.hasEcgOptions}
        />
      </div>

      {/* Preferred doctor */}
      <SelectField
        label={t.doctorLabel}
        value={form.doctor}
        onChange={set("doctor")}
        defaultLabel={t.doctorDefault}
        options={t.doctorOptions}
      />

      {/* Math captcha */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {t.captchaLabel}: {math ? `${math.a} + ${math.b} =` : "…"}
        </label>
        <input
          required
          type="number"
          placeholder={t.captchaPlaceholder}
          value={form.captcha}
          onChange={(e) => {
            set("captcha")(e.target.value)
            setCaptchaError(false)
          }}
          className={inputClass}
        />
        {captchaError && (
          <p className="text-xs text-destructive">{t.captchaError}</p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {t.errorBody}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full gap-2 rounded-xl bg-[#EE3920] text-base font-semibold text-white hover:bg-[#EE3920]/90 disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {t.sending}
          </>
        ) : (
          t.submit
        )}
      </Button>

      <p className="text-center text-xs text-slate-400">
        <Phone className="mr-1 inline h-3 w-3" />
        (81) 565 70 75
      </p>
    </form>
  )
}
