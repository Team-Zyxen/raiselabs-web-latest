import { Metadata } from "next";
import CategoryView from "@/components/pages/CategoryView";
import { getCategoryById, getProductsByCategory } from "@/lib/data";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { notFound } from "next/navigation";

const categorySEO: Record<string, { title: string; description: string; h1: string }> = {
  "hardness-testing": {
    title: 'Tablet Hardness Tester Manufacturer India │ Raise Lab Equipment',
    description: 'Buy USP/EP/IP compliant tablet hardness testers from Raise Lab Equipment. Manual & automatic models. Trusted by 500+ pharma companies.',
    h1: "Tablet Hardness Testers — USP/EP/IP Compliant │ Raise Lab Equipment"
  },
  "friability-testing": {
    title: 'Tablet Friability Tester Manufacturer India │ Raise Lab Equipment',
    description: 'Raise Lab Equipment tablet friability testers meet USP <1216> & EP standards. Single, double & triple drum models. Made in Hyderabad.',
    h1: "Tablet Friability Testers — USP <1216> Compliant │ Raise Lab Equipment"
  },
  "disintegration-testing": {
    title: 'Tablet Disintegration Tester Manufacturer │ Raise Lab Equipment, Hyderabad',
    description: 'Automated and manual tablet disintegration testers compliant with USP <701> and Ph.Eur. 2.9.1. 21 CFR Part 11 ready. Manufacturer in Hyderabad, India.',
    h1: "Tablet Disintegration Testers — Automated & Manual Models │ Raise Lab Equipment"
  },
  "dissolution-testing": {
    title: 'USP Dissolution Tester Manufacturer India │ Raise Lab Equipment',
    description: 'USP <711> compliant dissolution testing apparatus — Apparatus 1 & 2 (basket & paddle). Multi-station, automated models. Pharma manufacturer, Hyderabad.',
    h1: "Pharmaceutical Dissolution Testers — USP <711> Compliant │ Raise Lab Equipment"
  },
  "powder-testing": {
    title: 'Powder Testing Instruments Manufacturer India │ Raise Lab Equipment',
    description: 'Powder testing instruments for pharma QC — tapped density apparatus, powder flow testers, sieve shakers. USP compliant. Raise Lab Equipment, Hyderabad.',
    h1: "Powder Testing Instruments — Tapped Density, Flow Tester, Sieve Shaker"
  },
  "packaging-integrity": {
    title: 'Vacuum Leak Test Apparatus Manufacturer India │ Raise Lab Equipment',
    description: 'Vacuum leak test apparatus for pharmaceutical packaging integrity testing. Bubble emission method. Suitable for BFS, bottles, blisters. Hyderabad, India.',
    h1: "Vacuum Leak Test Apparatus — Package Integrity Testing Equipment"
  },
  "lacquer-porosity-testing": {
    title: 'Lacquer Porosity Tester Manufacturer India │ Raise Lab Equipment',
    description: 'Digital lacquer porosity testers for aluminium tubes, aerosol cans, bottle caps and foils. Detects coating defects with precision. Made in India.',
    h1: "Lacquer Porosity Testers for Aluminium Tubes, Cans & Foils │ Raise Lab Equipment"
  },
  "analytical-instruments": {
    title: 'Antibiotic Zone Reader & Ampoule Tester Manufacturer │ Raise Lab Equipment',
    description: 'Antibiotic zone readers and ampoule breakpoint testers for pharmaceutical labs. CLSI & cGMP compliant. Raise Lab Equipment — analytical instruments, Hyderabad.',
    h1: "Analytical Instruments for Pharmaceutical Labs │ Raise Lab Equipment"
  }
};

const productSchemaMapping: Record<string, any> = {
  "friability-testing": {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tablet Friability Tester",
    "description": "Raise Lab Equipment tablet friability testers meet USP <1216> & EP standards. Single, double & triple drum models.",
    "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Raise Lab Equipment Pvt. Ltd.",
      "url": "https://www.raiselabequip.com"
    },
    "model": "RFT-1 / RFT-2P",
    "category": "Pharmaceutical Testing Equipment",
    "image": "https://www.raiselabequip.com/images/products/RFT-2P.webp",
    "url": "https://www.raiselabequip.com/products/category/friability-testing",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
    }
  },
  "disintegration-testing": {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Disintegration Tester",
    "description": "Automated and manual tablet disintegration testers compliant with USP <701> and Ph.Eur. 2.9.1.",
    "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Raise Lab Equipment Pvt. Ltd.",
      "url": "https://www.raiselabequip.com"
    },
    "model": "RDT-2 / ADT-2B / ADT-2D",
    "category": "Pharmaceutical Testing Equipment",
    "image": "https://www.raiselabequip.com/images/products/ADT-2D.webp",
    "url": "https://www.raiselabequip.com/products/category/disintegration-testing",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
    }
  },
  "dissolution-testing": {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dissolution Tester",
    "description": "USP <711> compliant dissolution testing apparatus — Apparatus 1 & 2 (basket & paddle).",
    "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Raise Lab Equipment Pvt. Ltd.",
      "url": "https://www.raiselabequip.com"
    },
    "model": "RLTDT-08LM",
    "category": "Pharmaceutical Testing Equipment",
    "image": "https://www.raiselabequip.com/images/products/RLTDT-08LM.webp",
    "url": "https://www.raiselabequip.com/products/category/dissolution-testing",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
    }
  },
  "powder-testing": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Tapped Density Apparatus",
      "description": "Powder testing instruments for pharma QC — tapped density apparatus. USP compliant.",
      "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
      "manufacturer": {
        "@type": "Organization",
        "name": "Raise Lab Equipment Pvt. Ltd.",
        "url": "https://www.raiselabequip.com"
      },
      "model": "TD-2",
      "category": "Pharmaceutical Testing Equipment",
      "image": "https://www.raiselabequip.com/images/products/TD-2.webp",
      "url": "https://www.raiselabequip.com/products/category/powder-testing",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Powder Flow Tester",
      "description": "Powder testing instruments for pharma QC — powder flow testers. USP compliant.",
      "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
      "manufacturer": {
        "@type": "Organization",
        "name": "Raise Lab Equipment Pvt. Ltd.",
        "url": "https://www.raiselabequip.com"
      },
      "model": "RPF-1",
      "category": "Pharmaceutical Testing Equipment",
      "image": "https://www.raiselabequip.com/images/products/RPF-1.webp",
      "url": "https://www.raiselabequip.com/products/category/powder-testing",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Electromagnetic Sieve Shaker",
      "description": "Powder testing instruments for pharma QC — sieve shakers. USP compliant.",
      "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
      "manufacturer": {
        "@type": "Organization",
        "name": "Raise Lab Equipment Pvt. Ltd.",
        "url": "https://www.raiselabequip.com"
      },
      "model": "RSS-1",
      "category": "Pharmaceutical Testing Equipment",
      "image": "https://www.raiselabequip.com/images/products/RSS-1.webp",
      "url": "https://www.raiselabequip.com/products/category/powder-testing",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
      }
    }
  ],
  "packaging-integrity": {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vacuum Leak Test Apparatus",
    "description": "Vacuum leak test apparatus for pharmaceutical packaging integrity testing. Bubble emission method.",
    "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Raise Lab Equipment Pvt. Ltd.",
      "url": "https://www.raiselabequip.com"
    },
    "model": "RLT-2 / RLT-2B",
    "category": "Pharmaceutical Testing Equipment",
    "image": "https://www.raiselabequip.com/images/products/RLT-2.webp",
    "url": "https://www.raiselabequip.com/products/category/packaging-integrity",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
    }
  },
  "lacquer-porosity-testing": {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Lacquer Porosity Tester",
    "description": "Digital lacquer porosity testers for aluminium tubes, aerosol cans, bottle caps and foils.",
    "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Raise Lab Equipment Pvt. Ltd.",
      "url": "https://www.raiselabequip.com"
    },
    "model": "RLP series",
    "category": "Pharmaceutical Testing Equipment",
    "image": "https://www.raiselabequip.com/images/products/RLP.webp",
    "url": "https://www.raiselabequip.com/products/category/lacquer-porosity-testing",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
    }
  },
  "analytical-instruments": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Antibiotic Zone Reader",
      "description": "Antibiotic zone readers for pharmaceutical labs. CLSI & cGMP compliant.",
      "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
      "manufacturer": {
        "@type": "Organization",
        "name": "Raise Lab Equipment Pvt. Ltd.",
        "url": "https://www.raiselabequip.com"
      },
      "model": "RAZ-1C",
      "category": "Pharmaceutical Testing Equipment",
      "image": "https://www.raiselabequip.com/images/products/RAZ-1C.webp",
      "url": "https://www.raiselabequip.com/products/category/analytical-instruments",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Ampoule Breakpoint Tester",
      "description": "Ampoule breakpoint testers for pharmaceutical labs. CLSI & cGMP compliant.",
      "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
      "manufacturer": {
        "@type": "Organization",
        "name": "Raise Lab Equipment Pvt. Ltd.",
        "url": "https://www.raiselabequip.com"
      },
      "model": "RABT-3",
      "category": "Pharmaceutical Testing Equipment",
      "image": "https://www.raiselabequip.com/images/products/RABT-3.webp",
      "url": "https://www.raiselabequip.com/products/category/analytical-instruments",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
      }
    }
  ]
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const seo = categorySEO[id];
  
  if (!seo) return {};

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://raiselabequip.com/products/category/${id}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = getCategoryById(id);
  const products = getProductsByCategory(id) ?? [];

  if (!id || !category) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: category.name, url: `/products/category/${id}` },
  ]);

  const h1 = categorySEO[id]?.h1 || category.name;
  const productSchema = productSchemaMapping[id];

  return (
    <CategoryView 
      category={category} 
      products={products} 
      h1={h1} 
      breadcrumbSchema={breadcrumbSchema}
      productSchema={productSchema}
    />
  );
}
