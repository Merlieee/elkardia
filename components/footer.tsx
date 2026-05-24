import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image src="/images/logo.png" alt="Elkardia" width={130} height={34} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lubelskie Centrum Kardiologii — wysoko­specjalistyczna opieka nad sercem dla dzieci i dorosłych. Działamy nieprzerwanie od 2014 roku.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Usługi</h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/lekarze", label: "Lekarze specjaliści" },
                { href: "/ablacja-serca", label: "Ablacja serca" },
                { href: "/badania", label: "Badania diagnostyczne" },
                { href: "/stomatologia", label: "Stomatologia" },
                { href: "/dietetycy", label: "Dietetycy" },
                { href: "/rejestracja", label: "Rejestracja online 24h" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+48815657075" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +48 81 565 70 75
              </a>
              <a href="tel:+48536102112" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                536 102 112
              </a>
              <a href="mailto:rejestracja@elkardia.pl" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                rejestracja@elkardia.pl
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Lokalizacja</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <span>ul. R. W. Pileckiego 23/20<br />20-091 Lublin</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Pon–Pt: 8:00–20:00</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-muted-foreground">
          <p>
            Elkardia Sp. z o.o. z siedzibą w Lublinie, 20-091 Lublin ul. Rotmistrza Witolda Pileckiego 23/20, wpisaną do krajowego rejestru sądowego prowadzonego przez Sąd Rejonowy VI Wydział Krajowego Rejestru Sądowego Lublin – Wschód w Lublinie pod numerem 0000945384, NIP: 7123429164, o kapitale zakładowym 10.000,00 zł.
          </p>
          <p className="mt-1">
            Podmiot leczniczy wpisany do Rejestru Podmiotów Wykonujących Działalność Leczniczą (nr księgi: 000000249308).
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2024 Elkardia Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Regulamin</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Polityka prywatności</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
