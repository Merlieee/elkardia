import type { Metadata } from "next"
import { EkgSpoczynkowePage } from "@/components/ekg-spoczynkowe-page"

export const metadata: Metadata = {
  title: "EKG spoczynkowe Lublin",
  alternates: { canonical: "/ekg-spoczynkowe-lublin" },
  description:
    "EKG spoczynkowe (elektrokardiogram) w Lublinie dla dzieci i dorosłych — szybkie, bezbolesne i nieinwazyjne badanie rytmu i czynności elektrycznej serca. Bez skierowania, wynik od ręki. Umów badanie online 24h.",
  openGraph: { images: [{ url: "/images/badania-9.webp" }] },
}

export default function Page() {
  return <EkgSpoczynkowePage />
}
