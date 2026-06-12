import type { Metadata } from "next"
import { TiltTestPage } from "@/components/tilt-test-page"

export const metadata: Metadata = {
  title: "TILT TEST – test pochyleniowy Lublin",
  alternates: { canonical: "/tilt-test-test-pochyleniowy-lublin" },
  description:
    "TILT TEST (test pochyleniowy) w Lublinie — diagnostyka omdleń, zasłabnięć i zawrotów głowy. Badanie pod stałym nadzorem kardiologa z monitorowaniem EKG i ciśnienia. Bez skierowania. Umów badanie online 24h.",
  openGraph: { images: [{ url: "/images/badania-9.webp" }] },
}

export default function Page() {
  return <TiltTestPage />
}
