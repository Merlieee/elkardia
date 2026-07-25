/** price is in PLN, sourced from the elkardia.pl laboratory price list. */
export type LabTest = { pl: string; en: string; price: number }

/** When the prices below were last taken from the published price list. */
export const priceListUpdated = "2026-07-15"

export function formatPrice(price: number, isEn: boolean): string {
  const n = price.toFixed(2)
  return `${isEn ? n : n.replace(".", ",")} zł`
}

export type LabSection = {
  id: string
  headingPl: string
  headingEn: string
  descPl: string
  descEn: string
  tests: LabTest[]
}

// Single source of truth for laboratory tests: the /badania list and the
// /badania/badania-laboratoryjne page both read from here.
export const labSections: LabSection[] = [
  {
    id: "analityka-ogolna",
    headingPl: "Analityka ogólna",
    headingEn: "General analytics",
    descPl: "Badania moczu i kału — podstawowa diagnostyka przesiewowa układu moczowego i pokarmowego.",
    descEn: "Urine and stool tests — basic screening of the urinary and digestive systems.",
    tests: [
      { pl: "Mocz - badanie ogólne", en: "Urine - general analysis", price: 17 },
      { pl: "Mocz - białko w moczu", en: "Urine - protein", price: 19 },
      { pl: "Albuminy w moczu", en: "Urine albumin", price: 25 },
      { pl: "Badanie ogólne moczu plus osad", en: "Urine general analysis plus sediment", price: 21 },
      { pl: "Ciała ketonowe w moczu", en: "Urine ketone bodies", price: 23 },
      { pl: "Dobowa zbiórka moczu (DZM)", en: "24-hour urine collection", price: 15 },
      { pl: "Glukoza w moczu", en: "Urine glucose", price: 23 },
      { pl: "Skład chemiczny kamienia nerkowego", en: "Kidney stone chemical composition", price: 100 },
      { pl: "Test ciążowy (alfa-HCG)", en: "Pregnancy test (alpha-hCG)", price: 39 },
      { pl: "Kał - badanie ogólne", en: "Stool - general analysis", price: 28 },
      { pl: "Kał - krew utajona", en: "Stool - occult blood", price: 28 },
      { pl: "Kał - badanie na obecność pasożytów", en: "Stool - parasites", price: 29 },
      { pl: "Kał - resztki pokarmowe", en: "Stool - undigested food residue", price: 28 },
      { pl: "Kał - badanie w kierunku owsików", en: "Stool - pinworms", price: 28 },
      { pl: "Kał - rotawirusy / adenowirusy", en: "Stool - rotavirus / adenovirus", price: 48 },
      { pl: "Kał - Shigella i Salmonella", en: "Stool - Shigella and Salmonella", price: 133 },
    ],
  },
  {
    id: "badania-biochemiczne",
    headingPl: "Badania biochemiczne",
    headingEn: "Biochemical tests",
    descPl: "Biochemia krwi — próby wątrobowe, enzymy trzustkowe, lipidogram, gospodarka węglowodanowa, markery sercowe, elektrolity i gospodarka żelazem.",
    descEn: "Blood chemistry — liver function, pancreatic enzymes, lipid profile, glucose metabolism, cardiac markers, electrolytes and iron metabolism.",
    tests: [
      { pl: "Albumina", en: "Albumin", price: 12 },
      { pl: "Aminotransferaza alaninowa (ALAT)", en: "Alanine aminotransferase (ALT)", price: 12 },
      { pl: "Aminotransferaza asparaginianowa (AST)", en: "Aspartate aminotransferase (AST)", price: 12 },
      { pl: "Amylaza w surowicy", en: "Serum amylase", price: 14 },
      { pl: "Amylaza w moczu", en: "Urine amylase", price: 18.5 },
      { pl: "Amylaza trzustkowa", en: "Pancreatic amylase", price: 32.5 },
      { pl: "Antystreptolizyny (ASO) - ilościowo", en: "Antistreptolysin O (ASO) - quantitative", price: 17.5 },
      { pl: "Białko całkowite", en: "Total protein", price: 12 },
      { pl: "Białko ostrej fazy (CRP) - ilościowo", en: "C-reactive protein (CRP) - quantitative", price: 17.5 },
      { pl: "Bilirubina bezpośrednia", en: "Direct bilirubin", price: 16 },
      { pl: "Bilirubina całkowita", en: "Total bilirubin", price: 12 },
      { pl: "Bilirubina pośrednia", en: "Indirect bilirubin", price: 22.5 },
      { pl: "Czynnik reumatoidalny (RF) - ilościowo", en: "Rheumatoid factor (RF) - quantitative", price: 10 },
      { pl: "Cholesterol całkowity", en: "Total cholesterol", price: 12 },
      { pl: "Cholesterol HDL", en: "HDL cholesterol", price: 12 },
      { pl: "Cholesterol LDL", en: "LDL cholesterol", price: 15 },
      { pl: "Lipidogram (CHOL, HDL, LDL, TG)", en: "Lipid panel (CHOL, HDL, LDL, TG)", price: 39 },
      { pl: "Triglicerydy (TG)", en: "Triglycerides (TG)", price: 12 },
      { pl: "Glukoza", en: "Glucose", price: 12 },
      { pl: "Hemoglobina glikowana (HbA1c)", en: "Glycated haemoglobin (HbA1c)", price: 47.5 },
      { pl: "Kinaza kreatynowa (CK)", en: "Creatine kinase (CK)", price: 8 },
      { pl: "CK-MB mass", en: "CK-MB mass", price: 42 },
      { pl: "Kreatynina", en: "Creatinine", price: 15 },
      { pl: "Klirens kreatyniny", en: "Creatinine clearance", price: 30 },
      { pl: "Kwas moczowy", en: "Uric acid", price: 12 },
      { pl: "Mocznik", en: "Urea", price: 12 },
      { pl: "Lipaza", en: "Lipase", price: 19.5 },
      { pl: "Magnez", en: "Magnesium", price: 12 },
      { pl: "Potas", en: "Potassium", price: 14 },
      { pl: "Sód", en: "Sodium", price: 14 },
      { pl: "Jonogram (Na, K)", en: "Electrolyte panel (Na, K)", price: 26 },
      { pl: "Transferyna", en: "Transferrin", price: 43 },
      { pl: "Żelazo", en: "Iron", price: 12 },
      { pl: "Żelazo - całkowita zdolność wiązania (TIBC)", en: "Iron - total iron-binding capacity (TIBC)", price: 18.5 },
      { pl: "Ferrytyna", en: "Ferritin", price: 35.5 },
      { pl: "Kwas foliowy", en: "Folic acid", price: 35.5 },
      { pl: "Mioglobina", en: "Myoglobin", price: 54 },
      { pl: "Troponina T", en: "Troponin T", price: 47.5 },
      { pl: "Troponina I", en: "Troponin I", price: 47.5 },
      { pl: "Troponina - ilościowo", en: "Troponin - quantitative", price: 47.5 },
      { pl: "Peptyd natriuretyczny (NT pro-BNP)", en: "Natriuretic peptide (NT pro-BNP)", price: 113.5 },
    ],
  },
  {
    id: "hematologia",
    headingPl: "Hematologia",
    headingEn: "Haematology",
    descPl: "Morfologia krwi, układ krzepnięcia i oznaczenie grupy krwi.",
    descEn: "Blood counts, coagulation studies and blood group typing.",
    tests: [
      { pl: "Morfologia krwi obwodowej bez rozmazu", en: "Full blood count without smear", price: 16 },
      { pl: "Morfologia krwi obwodowej z rozmazem", en: "Full blood count with differential smear", price: 16 },
      { pl: "Rozmaz z pełnym różnicowaniem granulocytów", en: "Blood smear with full granulocyte differential", price: 15 },
      { pl: "Płytki krwi", en: "Platelet count", price: 16 },
      { pl: "Odczyn opadania krwinek czerwonych (OB)", en: "Erythrocyte sedimentation rate (ESR)", price: 12 },
      { pl: "Oznaczenie grupy krwi AB0 i Rh", en: "Blood group ABO and Rh typing", price: 47.5 },
      { pl: "APTT", en: "APTT", price: 16 },
      { pl: "PT (czas protrombinowy, wskaźnik INR)", en: "PT (prothrombin time, INR)", price: 16 },
      { pl: "TT (czas trombinowy)", en: "TT (thrombin time)", price: 30 },
      { pl: "Fibrynogen", en: "Fibrinogen", price: 16 },
      { pl: "Produkty degradacji fibrynogenu i fibryny (FDP)", en: "Fibrinogen/fibrin degradation products (FDP)", price: 107 },
      { pl: "D-dimery", en: "D-dimer", price: 51 },
      { pl: "Czas krwawienia", en: "Bleeding time", price: 16 },
      { pl: "Czas krzepnięcia", en: "Clotting time", price: 16 },
    ],
  },
  {
    id: "badania-hormonalne",
    headingPl: "Badania hormonalne",
    headingEn: "Hormonal tests",
    descPl: "Hormony tarczycy, hormony płciowe, hormony nadnerczy i przysadki oraz pozostałe markery endokrynologiczne.",
    descEn: "Thyroid hormones, sex hormones, adrenal and pituitary hormones, and other endocrine markers.",
    tests: [
      { pl: "TSH", en: "TSH", price: 29 },
      { pl: "Tyroksyna wolna (fT4)", en: "Free thyroxine (fT4)", price: 27 },
      { pl: "Trijodotyronina wolna (fT3)", en: "Free triiodothyronine (fT3)", price: 27 },
      { pl: "ACTH", en: "ACTH", price: 48.5 },
      { pl: "DHEA-s", en: "DHEA-S", price: 51 },
      { pl: "Estradiol", en: "Estradiol", price: 29 },
      { pl: "Estriol", en: "Estriol", price: 35 },
      { pl: "Estriol wolny", en: "Free estriol", price: 46.5 },
      { pl: "Hormon folikulotropowy (FSH)", en: "Follicle-stimulating hormone (FSH)", price: 29 },
      { pl: "Hormon luteinizujący (LH)", en: "Luteinising hormone (LH)", price: 29 },
      { pl: "Hormon wzrostu (GH)", en: "Growth hormone (GH)", price: 58.5 },
      { pl: "Gonadotropina kosmówkowa (βHCG) - ilościowo", en: "Chorionic gonadotropin (βhCG) - quantitative", price: 38 },
      { pl: "Kortyzol", en: "Cortisol", price: 42 },
      { pl: "Parathormon (PTH) Intact", en: "Parathyroid hormone (PTH) intact", price: 47.5 },
      { pl: "Progesteron (PRG)", en: "Progesterone (PRG)", price: 29 },
      { pl: "Prolaktyna (PRL)", en: "Prolactin (PRL)", price: 29 },
      { pl: "Testosteron (TST)", en: "Testosterone (TST)", price: 35.5 },
      { pl: "Erytropoetyna", en: "Erythropoietin", price: 54 },
      { pl: "Kalcytonina", en: "Calcitonin", price: 47.5 },
      { pl: "Katecholaminy (adrenalina, noradrenalina, dopamina)", en: "Catecholamines (adrenaline, noradrenaline, dopamine)", price: 297 },
    ],
  },
  {
    id: "markery-nowotworowe",
    headingPl: "Markery nowotworowe",
    headingEn: "Tumour markers",
    descPl: "Antygeny nowotworowe wykorzystywane w diagnostyce i monitorowaniu leczenia onkologicznego.",
    descEn: "Tumour antigens used in cancer diagnostics and treatment monitoring.",
    tests: [
      { pl: "CA-125", en: "CA-125", price: 45.5 },
      { pl: "CA-15.3", en: "CA-15.3", price: 45.5 },
      { pl: "CEA", en: "CEA", price: 43 },
      { pl: "PSA całkowity", en: "PSA total", price: 45.5 },
      { pl: "PSA wolny", en: "PSA free", price: 51 },
    ],
  },
  {
    id: "serodiagnostyka-infekcji",
    headingPl: "Serodiagnostyka infekcji",
    headingEn: "Infection serology",
    descPl: "Przeciwciała w kierunku infekcji wirusowych, bakteryjnych i pasożytniczych oraz przeciwciała w chorobach autoimmunologicznych.",
    descEn: "Antibodies against viral, bacterial and parasitic infections, plus autoimmune disease antibodies.",
    tests: [
      { pl: "Odczyn Waaler-Rosego", en: "Waaler-Rose test", price: 35.5 },
      { pl: "CMV p/ciała IgG", en: "CMV antibodies IgG", price: 42 },
      { pl: "CMV p/ciała IgM", en: "CMV antibodies IgM", price: 42 },
      { pl: "HAV p/ciała IgG", en: "HAV antibodies IgG", price: 107 },
      { pl: "HAV p/ciała IgM", en: "HAV antibodies IgM", price: 71.5 },
      { pl: "Przeciwciała p. HAV", en: "HAV antibodies", price: 71.5 },
      { pl: "HBs antygen - test przesiewowy", en: "HBs antigen - screening test", price: 31.5 },
      { pl: "HBs antygen - ilościowo", en: "HBs antigen - quantitative", price: 5 },
      { pl: "HBs p/ciała całkowite", en: "HBs antibodies total", price: 42 },
      { pl: "HBc p/ciała IgM", en: "HBc antibodies IgM", price: 54 },
      { pl: "Przeciwciała p. HBc (całkowite)", en: "HBc antibodies (total)", price: 47.5 },
      { pl: "Antygen HBe", en: "HBe antigen", price: 47.5 },
      { pl: "HBe p/ciała", en: "HBe antibodies", price: 47.5 },
      { pl: "HCV p/ciała", en: "HCV antibodies", price: 47.5 },
      { pl: "HIV1/HIV2 p/ciała, białko p24", en: "HIV1/HIV2 antibodies, p24 antigen", price: 35 },
      { pl: "Helicobacter pylori p/ciała IgA", en: "Helicobacter pylori antibodies IgA", price: 58.5 },
      { pl: "Wirus różyczki p/ciała IgG", en: "Rubella virus antibodies IgG", price: 35.5 },
      { pl: "Wirus różyczki p/ciała IgM", en: "Rubella virus antibodies IgM", price: 39 },
      { pl: "Toxoplasma gondii p/ciała IgG", en: "Toxoplasma gondii antibodies IgG", price: 39 },
      { pl: "Toxoplasma gondii p/ciała IgM", en: "Toxoplasma gondii antibodies IgM", price: 39 },
      { pl: "Przeciwciała p. toksoplazmozie IgG (test awidności)", en: "Toxoplasmosis antibodies IgG (avidity test)", price: 65 },
      { pl: "Przeciwciała p. Epstein-Barr virus (mononukleoza, EBV) IgG", en: "Epstein-Barr virus (EBV) antibodies IgG", price: 70 },
      { pl: "Przeciwciała p. Epstein-Barr virus (mononukleoza, EBV) IgM", en: "Epstein-Barr virus (EBV) antibodies IgM", price: 70 },
      { pl: "Przeciwciała p. Morbilli virus (odra) IgG", en: "Measles virus (Morbilli) antibodies IgG", price: 59.5 },
      { pl: "Przeciwciała p. Morbilli virus (odra) IgM", en: "Measles virus (Morbilli) antibodies IgM", price: 59.5 },
      { pl: "Przeciwciała p. Myxovirus parotitis (świnka) IgG", en: "Mumps virus (Myxovirus parotitis) antibodies IgG", price: 74.5 },
      { pl: "Przeciwciała p. Myxovirus parotitis (świnka) IgM", en: "Mumps virus (Myxovirus parotitis) antibodies IgM", price: 74.5 },
      { pl: "Przeciwciała p. Varicella zoster virus (ospa wietrzna) IgG", en: "Varicella zoster virus antibodies IgG", price: 82 },
      { pl: "Przeciwciała p. Shigella", en: "Shigella antibodies", price: 120 },
      { pl: "Badanie w kierunku rotawirusów", en: "Rotavirus test", price: 45 },
      { pl: "Przeciwciała p. gliście ludzkiej IgG", en: "Ascaris lumbricoides antibodies IgG", price: 55 },
      { pl: "Antykoagulant toczniowy (LA)", en: "Lupus anticoagulant (LA)", price: 110 },
      { pl: "Przeciwciała p. cytoplazmie (ANCA)", en: "Anti-neutrophil cytoplasmic antibodies (ANCA)", price: 30 },
      { pl: "Przeciwciała p. jądrowe (ANA1)", en: "Antinuclear antibodies (ANA1)", price: 67 },
      { pl: "Przeciwciała p. jądrowe (ANA2)", en: "Antinuclear antibodies (ANA2)", price: 95 },
      { pl: "Przeciwciała p. jądrowe (ANA3)", en: "Antinuclear antibodies (ANA3)", price: 142.5 },
      { pl: "Przeciwciała p. jądrowe i cytoplazmatyczne - test przesiewowy met. IIF", en: "Antinuclear and anti-cytoplasmic antibodies - IIF screening test", price: 55 },
      { pl: "Przeciwciała p. peroksydazie tarczycowej (anty-TPO)", en: "Anti-thyroid peroxidase antibodies (anti-TPO)", price: 42 },
      { pl: "Przeciwciała p. TPO (p. mikrosomalne)", en: "Anti-TPO antibodies (anti-microsomal)", price: 30 },
      { pl: "Przeciwciała p. tyreoglobulinie (anty-TG)", en: "Anti-thyroglobulin antibodies (anti-TG)", price: 28 },
      { pl: "Przeciwciała p. receptorom TSH (TRAb)", en: "TSH receptor antibodies (TRAb)", price: 83 },
      { pl: "Przeciwciała p. kardiolipinie IgG i IgM met. ELISA", en: "Anti-cardiolipin antibodies IgG and IgM, ELISA", price: 108 },
      { pl: "Przeciwciała p. mięśniom gładkim (ASMA)", en: "Anti-smooth muscle antibodies (ASMA)", price: 78 },
      { pl: "Przeciwciała p. mitochondrialne (AMA)", en: "Anti-mitochondrial antibodies (AMA)", price: 70 },
      { pl: "Przeciwciała p. mitochondrialne (AMA) typ M2", en: "Anti-mitochondrial antibodies (AMA) type M2", price: 78 },
      { pl: "Przeciwciała p. komórkom okładzinowym żołądka (APCA) met. IIF", en: "Anti-parietal cell antibodies (APCA), IIF", price: 83 },
      { pl: "Przeciwciała p. kanalikom żółciowym met. IIF", en: "Anti-bile canaliculi antibodies, IIF", price: 78 },
      { pl: "Przeciwciała - panel wątrobowy met. IIF", en: "Liver antibody panel (anti-LKM, anti-LSP, anti-SLA), IIF", price: 117.5 },
      { pl: "Przeciwciała - panel wątrobowy pełny met. IIF, DID", en: "Full liver antibody panel (ANA2, AMA, ASMA, anti-LKM, anti-LSP, anti-SLA), IIF, DID", price: 166.5 },
    ],
  },
]

export const labTestCount = labSections.reduce((n, s) => n + s.tests.length, 0)

function findTest(pl: string): LabTest {
  const test = labSections.flatMap(s => s.tests).find(t => t.pl === pl)
  // Fails the build rather than silently dropping a bullet if a name is edited above.
  if (!test) throw new Error(`labHighlights references unknown test: ${pl}`)
  return test
}

// The handful shown on /badania as a teaser for the full lab page.
export const labHighlights: LabTest[] = [
  "Morfologia krwi obwodowej z rozmazem",
  "Lipidogram (CHOL, HDL, LDL, TG)",
  "Glukoza",
  "Kreatynina",
  "TSH",
  "Białko ostrej fazy (CRP) - ilościowo",
  "D-dimery",
  "Peptyd natriuretyczny (NT pro-BNP)",
].map(findTest)
