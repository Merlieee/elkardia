import { Lato } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AgentationWidget } from "@/components/agentation-widget"
import { cn } from "@/lib/utils"

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-sans" })

export const metadata = {
  title: "Elkardia — Lubelskie Centrum Kardiologii",
  description: "Wysoko­specjalistyczne centrum medyczne dla pacjentów z chorobami serca i układu krążenia. Kardiologia dzieci i dorosłych, ablacja serca, diagnostyka, stomatologia — Lublin.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className={cn("antialiased", lato.variable, "font-sans")}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AgentationWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
