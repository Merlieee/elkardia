/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ─── Specialty category pages → dedicated pages ───────────────────
      { source: "/lekarze-specjalisci-lublin",                              destination: "/lekarze",               permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin",             destination: "/kardiologia-doroslych", permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-dzieciecy-lublin",   destination: "/kardiologia-dziecieca", permanent: true },
      { source: "/lekarze-specjalisci-lublin/nadcisnienie-tetnicze-lublin", destination: "/hipertensjologia",      permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiochirurg-lublin",         destination: "/kardiochirurgia",       permanent: true },
      { source: "/lekarze-specjalisci-lublin/neurolog-lublin",              destination: "/neurologia",            permanent: true },
      { source: "/lekarze-specjalisci-lublin/neurochirurg-lublin",          destination: "/neurochirurgia",        permanent: true },
      { source: "/lekarze-specjalisci-lublin/chirurg-naczyniowy-lublin",    destination: "/chirurgia-naczyniowa",  permanent: true },
      { source: "/lekarze-specjalisci-lublin/pulmonolog-lublin",            destination: "/pulmonologia",          permanent: true },
      { source: "/lekarze-specjalisci-lublin/diabetolog-endokrynolog-lublin", destination: "/endokrynologia",      permanent: true },
      { source: "/lekarze-specjalisci-lublin/radiolog-usg-lublin",          destination: "/badania",               permanent: true },
      { source: "/nefrolog-lublin-lekarze",                                 destination: "/nefrologia",            permanent: true },

      // ─── Adult cardiologists ───────────────────────────────────────────
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/maciej-wojcik-kardiolog",         destination: "/lekarze/maciej-wojcik",       permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/pawel-blaszkiewicz-kardiolog",    destination: "/lekarze/pawel-blaszkiewicz",  permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/janusz-dubejko-kardiolog",        destination: "/lekarze/janusz-dubejko",      permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/dariusz-dunia-kardiolog",         destination: "/lekarze/dariusz-dunia",       permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/janowski-marcin-kardiolog",       destination: "/lekarze/marcin-janowski",     permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/rafal-lenard-kardiolog",          destination: "/lekarze/rafal-lenard",        permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/andrzej-madejczyk-kardiolog",     destination: "/lekarze/andrzej-madejczyk",   permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/majewska-beata-kardiolog",        destination: "/lekarze/beata-majewska",      permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/elzbieta-mazur-stazka-kardiolog", destination: "/lekarze/elzbieta-mazur-stazka", permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/marek-modrzewski-kardiolog",      destination: "/lekarze/marek-modrzewski",    permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/andrzej-rubaj-kardiolog",         destination: "/lekarze/andrzej-rubaj",       permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/marcin-skorski-kardiolog",        destination: "/lekarze/marcin-skorski",      permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/izabela-sokoluk-kardiolog",       destination: "/lekarze/izabela-sokoluk",     permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/kardiolog-lublin-izabela-sokoluk", destination: "/lekarze/izabela-sokoluk",    permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/magdalena-stadnik-kardiolog",     destination: "/lekarze/magdalena-stadnik",   permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/andrzej-wilkolaski-kardiolog",    destination: "/lekarze/andrzej-wilkolaski",  permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/dominik-wyszynski-kardiolog",     destination: "/lekarze/dominik-wyszynski",   permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-lublin/radoslaw-zarczuk-kardiolog",      destination: "/lekarze/radoslaw-zarczuk",    permanent: true },

      // ─── Pediatric cardiologists ───────────────────────────────────────
      { source: "/lekarze-specjalisci-lublin/kardiolog-dzieciecy-lublin/barbara-polecka-kardiolog-dzieciecy",           destination: "/lekarze/barbara-polecka",          permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-dzieciecy-lublin/ewa-stazka-gregosiewicz-kardiolog-dzieciecy",   destination: "/lekarze/ewa-stazka-gregosiewicz",  permanent: true },
      { source: "/lekarze-specjalisci-lublin/kardiolog-dzieciecy-lublin/lek-med-agata-rybak-kardiolog-dzieciecy-lublin", destination: "/lekarze/agata-rybak",             permanent: true },
      { source: "/lekarze-specjalisci-lublin/nadcisnienie-tetnicze-lublin/ewelina-ksiazek-hipertensjolog-dla-dzieci",   destination: "/lekarze/ewelina-ksiazek",          permanent: true },

      // ─── Other specialists ─────────────────────────────────────────────
      { source: "/lekarze-specjalisci-lublin/diabetolog-endokrynolog-lublin/lek-paulina-gryn-endokrynolog-dla-doroslych-lublin",          destination: "/lekarze/paulina-gryn",   permanent: true },
      { source: "/lekarze-specjalisci-lublin/diabetolog-endokrynolog-lublin/lek-joanna-mroczek-endokrynolog-i-diabetolog-dla-dzieci-lublin", destination: "/lekarze/joanna-mroczek", permanent: true },

      // ─── Dietitians ────────────────────────────────────────────────────
      { source: "/dobry-dietetyk-lublin",                                                            destination: "/dietetycy", permanent: true },
      { source: "/dobry-dietetyk-lublin/dietetycy-w-lublinie",                                       destination: "/dietetycy", permanent: true },
      { source: "/dobry-dietetyk-lublin/dietetycy-w-lublinie/dietetyk-mgr-dorota-sawczuk",           destination: "/lekarze/dorota-sawczuk", permanent: true },
      { source: "/dobry-dietetyk-lublin/dietetycy-w-lublinie/dietetyk-kliniczny-mgr-ewa-brodacz",    destination: "/lekarze/ewa-brodacz",    permanent: true },

      // ─── Registration ─────────────────────────────────────────────────
      { source: "/rejestracja-online-24h",  destination: "/rejestracja", permanent: true },
      { source: "/rejestracja-online-24h/", destination: "/rejestracja", permanent: true },
    ]
  },
}

export default nextConfig
