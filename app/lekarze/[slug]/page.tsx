import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, ArrowLeft, ArrowRight, CheckCircle, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getDoctorBySlug, doctors } from "@/lib/doctors"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  if (!doctor) return {}
  return {
    title: doctor.name,
    description: `${doctor.name} — ${doctor.tags.join(", ")}. ${doctor.bio.substring(0, 140)}...`,
    openGraph: {
      title: `${doctor.name} | Elkardia Lublin`,
      description: `${doctor.group} — ${doctor.tags.join(", ")}. Umów wizytę online 24h.`,
      url: `https://elkardia.pl/lekarze/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return doctors.map(d => ({ slug: d.slug }))
}

function initials(name: string) {
  const skip = /^(dr|hab\.|n\.|med\.|prof\.|lek\.|stom\.|mgr)$/i
  const parts = name.split(" ").filter(w => !skip.test(w))
  return parts.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  if (!doctor) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.bio,
    medicalSpecialty: doctor.tags,
    url: `https://elkardia.pl/lekarze/${slug}`,
    worksFor: {
      "@type": "MedicalOrganization",
      "@id": "https://elkardia.pl/#organization",
      name: "Elkardia | Lubelskie Centrum Kardiologii",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Rotmistrza Witolda Pileckiego 23/20",
      addressLocality: "Lublin",
      postalCode: "20-091",
      addressCountry: "PL",
    },
    telephone: "+48815657075",
    ...(doctor.hours ? { availableService: { "@type": "MedicalTherapy", description: doctor.hours } } : {}),
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HEADER ── */}
      <section className="border-b border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/lekarze" className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Wszyscy lekarze
          </Link>
          <div className="mt-6 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#EE3920]/10 text-2xl font-bold text-[#EE3920]">
              {initials(doctor.name)}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#EE3920]">{doctor.group}</p>
              <h1 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">{doctor.name}</h1>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.tags.map(t => (
                  <span key={t} className="rounded-md bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left: bio + services */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">O lekarzu</h2>
                <p className="leading-relaxed text-slate-600">{doctor.bio}</p>
              </div>

              {doctor.services && doctor.services.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">Zakres usług</h2>
                  <div className="flex flex-col gap-2">
                    {doctor.services.map(s => (
                      <div key={s} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EE3920]" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: prices + hours + CTA */}
            <div className="flex flex-col gap-6">

              {doctor.hours && (
                <div className="rounded-xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-[#EE3920]" />
                    <h3 className="font-semibold text-slate-900 text-sm">Godziny przyjęć</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{doctor.hours}</p>
                </div>
              )}

              {doctor.prices && doctor.prices.length > 0 && (
                <div className="rounded-xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="h-4 w-4 text-[#EE3920]" />
                    <h3 className="font-semibold text-slate-900 text-sm">Cennik</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {doctor.prices.map(p => (
                      <div key={p.label} className="flex items-start justify-between gap-3 text-sm">
                        <span className="text-slate-600">{p.label}</span>
                        <span className="shrink-0 font-semibold text-slate-900">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-xl bg-[#EE3920] p-5 text-white">
                <h3 className="font-semibold mb-1">Umów wizytę</h3>
                <p className="text-sm text-white/70 mb-4">Rejestracja online 24h lub telefonicznie pon–pt 8:00–20:00.</p>
                <a href="https://elkardia.pl/rejestracja-online-24h/" className="block">
                  <Button className="w-full bg-white text-[#EE3920] hover:bg-slate-100 gap-1 font-semibold">
                    Zarejestruj się <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="tel:+48815657075" className="mt-2 flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5" /> (81) 565 70 75
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
