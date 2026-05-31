"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

type Item = { img: string; label: string; short: string; href?: string }

export function ArrhythmiaGallery({ items }: { items: Item[] }) {
  const lightboxItems = items.filter((a) => !a.href)
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number) => setIndex(i)
  const close = () => setIndex(null)
  const prev = () => setIndex((i) => (i! + lightboxItems.length - 1) % lightboxItems.length)
  const next = () => setIndex((i) => (i! + 1) % lightboxItems.length)

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
      else if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((a, i) =>
          a.href ? (
            <Link
              key={a.short}
              href={a.href}
              className="group overflow-hidden rounded-xl bg-black text-left"
            >
              <div className="relative h-40">
                <Image src={a.img} alt={a.label} fill className="object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#EE3920]">{a.short}</span>
                    <p className="text-pretty text-xs text-white/90 leading-tight mt-0.5">{a.label}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ) : (
            <button
              key={a.short}
              onClick={() => open(lightboxItems.indexOf(a))}
              className="group overflow-hidden rounded-xl bg-black text-left cursor-zoom-in"
            >
              <div className="relative h-40">
                <Image src={a.img} alt={a.label} fill className="object-cover opacity-90 transition-opacity group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-xs font-bold text-primary">{a.short}</span>
                  <p className="text-pretty text-xs text-white/80 leading-tight">{a.label}</p>
                </div>
              </div>
            </button>
          )
        )}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="relative mx-20 max-h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={lightboxItems[index].img}
                alt={lightboxItems[index].label}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-sm font-bold text-primary">{lightboxItems[index].short}</span>
              <p className="text-pretty text-sm text-white/80">{lightboxItems[index].label}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  )
}
