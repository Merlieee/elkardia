import type { Metadata } from "next"
import { ChrapaniePage } from "@/components/chrapanie-page"

export const metadata: Metadata = {
  title: "Chrapanie i bezdech senny Lublin",
  alternates: { canonical: "/chrapanie-i-bezdech-senny" },
  description:
    "Chrapanie i bezdech senny w Lublinie — kompleksowy program: ocena ryzyka, badanie snu w domu pacjenta aparatem WatchPAT 200 oraz nieinwazyjne leczenie protezą nocną SomnoGuard. Bez skierowania. Umów badanie online 24h.",
  openGraph: { images: [{ url: "/images/badania-9.webp" }] },
}

export default function Page() {
  return <ChrapaniePage />
}
