import type { Metadata } from "next"
import { EchoSercaPage } from "@/components/echo-serca-page"

export const metadata: Metadata = {
  title: "Echo serca Lublin",
  alternates: { canonical: "/echo-serca-lublin" },
  description:
    "Echo serca (echokardiografia) w Lublinie — bezpieczne, bezbolesne badanie USG serca wykonywane przez doświadczonych kardiologów. Bez skierowania, wynik od ręki. Umów badanie online 24h.",
  openGraph: { images: [{ url: "/images/badania-9.webp" }] },
}

export default function Page() {
  return <EchoSercaPage />
}
