import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { badaniaSubpages, getBadanieSubpage, catHeroImage } from "@/lib/badania-subpages"
import { BadanieSubpage } from "@/components/badania-subpage"

export function generateStaticParams() {
  return badaniaSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = getBadanieSubpage(slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/badania/${slug}/` },
    openGraph: { images: [{ url: catHeroImage[data.cat] }] },
  }
}

export default async function BadanieSubpagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getBadanieSubpage(slug)
  if (!data) notFound()
  return <BadanieSubpage data={data} />
}
