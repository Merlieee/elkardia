import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ablacjaSubpages, getSubpage } from "@/lib/ablacja-subpages"
import { AblacjaSubpage } from "@/components/ablacja-subpage"

export function generateStaticParams() {
  return ablacjaSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = getSubpage(slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/ablacja-serca/${slug}/` },
    openGraph: { images: [{ url: data.heroImage }] },
  }
}

export default async function AblacjaSubpagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getSubpage(slug)
  if (!data) notFound()
  return <AblacjaSubpage data={data} />
}
