"use client"

import { useEffect, useRef, useState } from "react"

// The Grafik Online (Infotel) widget is a fixed ~960px-wide, non-responsive
// embed. To fit it on narrow screens we render it at its natural width and
// scale the whole thing down to the available width (everything stays visible,
// just smaller) instead of letting it get cut off on the right.
const WIDTH = 960
const HEIGHT = 740 // visible height after clipping the widget's empty top padding
const TOP_CLIP = 64 // the widget's empty internal top padding

export function BookingEmbed() {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(Math.min(1, el.clientWidth / WIDTH))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} className="overflow-hidden rounded-xl" style={{ height: HEIGHT * scale }}>
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          overflow: "hidden",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <iframe
          src="https://www.infotel-software.eu/newgrafikonlinev4/index.php/GoController/GetMessage?Serial=4391e423-8704-40db-b3f4-4dd8223e1635"
          title="Rejestracja online — Grafik Online"
          sandbox="allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin"
          loading="lazy"
          style={{ width: WIDTH, height: HEIGHT + TOP_CLIP, marginTop: -TOP_CLIP, border: 0, display: "block" }}
        />
      </div>
    </div>
  )
}
