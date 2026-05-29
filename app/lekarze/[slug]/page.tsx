import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getDoctorBySlug, doctors } from "@/lib/doctors"
import { DoctorPageContent } from "@/components/doctor-page-content"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  if (!doctor) return {}
  return {
    title: doctor.name,
    alternates: { canonical: `/lekarze/${slug}` },
    description: `${doctor.name} — ${doctor.tags.join(", ")}. ${doctor.bio.substring(0, 140)}...`,
    openGraph: {
      images: [{ url: "/images/og-default-logo.png", width: 1200, height: 630, alt: "Elkardia — Lubelskie Centrum Kardiologii" }],
      title: `${doctor.name} | Elkardia Lublin`,
      description: `${doctor.group} — ${doctor.tags.join(", ")}. Umów wizytę online 24h.`,
      url: `https://elkardia.pl/lekarze/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return doctors.map(d => ({ slug: d.slug }))
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DoctorPageContent doctor={doctor} />
    </>
  )
}
