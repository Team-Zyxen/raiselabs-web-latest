import { Metadata } from "next";
import ProductView from "@/components/pages/ProductView";
import { getProductById, getCategoryById } from "@/lib/data";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) return {};

  return {
    title: `${product.title} Manufacturer India │ Raise Lab Equipment`,
    description: `${product.description} - USP/EP/IP compliant. Reliable pharmaceutical testing instruments from Raise Lab Equipment, Hyderabad.`,
    alternates: {
      canonical: `https://www.raiselabequip.com/products/${id}`,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.category);

  // Extract model from title (e.g., "RHT-3B" from "Tablet Hardness Tester RHT-3B")
  const modelMatch = product.title.match(/([A-Z0-9-]{2,})$/);
  const modelName = modelMatch ? modelMatch[1] : product.id;

  // Task 4: Custom Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.fullDescription,
    "brand": { "@type": "Brand", "name": "Raise Lab Equipment" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Raise Lab Equipment Pvt. Ltd.",
      "url": "https://www.raiselabequip.com"
    },
    "model": modelName,
    "category": "Pharmaceutical Testing Equipment",
    "image": `https://www.raiselabequip.com/images/products/${modelName}.webp`,
    "url": `https://www.raiselabequip.com/products/${id}`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@type": "Organization", "name": "Raise Lab Equipment Pvt. Ltd." }
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: category?.name || "Category", url: `/products/category/${product.category}` },
    { name: product.title, url: `/products/${product.id}` },
  ]);

  return (
    <ProductView 
      product={product} 
      category={category} 
      productSchema={productSchema} 
      breadcrumbSchema={breadcrumbSchema} 
    />
  );
}
