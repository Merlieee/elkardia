import type { Metadata } from "next"
import { ProbaWysilkowaPage } from "@/components/proba-wysilkowa-page"

export const metadata: Metadata = {
  title: "Próba wysiłkowa Lublin",
  alternates: { canonical: "/proba-wysilkowa-lublin" },
  description:
    "Próba wysiłkowa na bieżni (test wysiłkowy EKG) w Lublinie — ocena reakcji serca na wysiłek, wykrywanie niedokrwienia i zaburzeń rytmu. Wykonywana przez doświadczonych kardiologów, bez skierowania. Umów badanie online 24h.",
  openGraph: { images: [{ url: "/images/badania-9.webp" }] },
}

export default function Page() {
  return <ProbaWysilkowaPage />
}
