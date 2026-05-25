import type { MetadataRoute } from "next"
import { doctors } from "@/lib/doctors"

const base = "https://elkardia.pl"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                            lastModified: new Date(), priority: 1.0,  changeFrequency: "monthly" },
    { url: `${base}/lekarze`,               lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/ablacja-serca`,         lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/kardiologia-doroslych`, lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/kardiologia-dziecieca`, lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/badania`,               lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/hipertensjologia`,      lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/kardiochirurgia`,       lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/pulmonologia`,          lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/neurologia`,            lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/neurochirurgia`,        lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/chirurgia-naczyniowa`,  lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/endokrynologia`,        lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/diabetologia`,          lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/nefrologia`,            lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/stomatologia`,          lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/dietetycy`,             lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/balneologia`,           lastModified: new Date(), priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/rejestracja`,           lastModified: new Date(), priority: 0.7,  changeFrequency: "monthly" },
  ]

  const doctorPages: MetadataRoute.Sitemap = doctors.map(d => ({
    url: `${base}/lekarze/${d.slug}`,
    lastModified: new Date(),
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }))

  return [...staticPages, ...doctorPages]
}
