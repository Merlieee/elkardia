import type { MetadataRoute } from "next"
import { doctors } from "@/lib/doctors"

const base = "https://elkardia.pl"

// Bump this when page content meaningfully changes — avoids reporting every
// page as "modified now" on each build, which erodes Google's trust in lastmod.
const lastModified = new Date("2026-05-26")

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                            lastModified, priority: 1.0,  changeFrequency: "monthly" },
    { url: `${base}/lekarze`,               lastModified, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/specjalnosci`,          lastModified, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/ablacja-serca`,         lastModified, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/kardiologia-doroslych`, lastModified, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/kardiologia-dziecieca`, lastModified, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/badania`,               lastModified, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/hipertensjologia`,      lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/kardiochirurgia`,       lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/pulmonologia`,          lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/neurologia`,            lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/neurochirurgia`,        lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/chirurgia-naczyniowa`,  lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/endokrynologia`,        lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/diabetologia`,          lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/nefrologia`,            lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/stomatologia`,          lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/dietetycy`,             lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/balneologia`,           lastModified, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/rejestracja`,           lastModified, priority: 0.7,  changeFrequency: "monthly" },
  ]

  const doctorPages: MetadataRoute.Sitemap = doctors.map(d => ({
    url: `${base}/lekarze/${d.slug}`,
    lastModified,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }))

  return [...staticPages, ...doctorPages]
}
