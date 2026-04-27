import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import ClientsMarquee from "@/components/ClientsMarquee"
import ProductsShowcase from "@/components/ProductsShowcase"
import CustomizationSection from "../components/CustomizationSection"
import ServicesSlider from "@/components/ServicesSlider"
import WhyChooseUs from "@/components/WhyChooseUs"
import LatestBlogs from "@/components/LatestBlogs"
import LatestNews from "@/components/LatestNews"
import Footer from "@/components/Footer"
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pharmaceutical Testing Instruments Manufacturer │ Raise Lab Equipment, Hyderabad',
  description: 'Raise Lab Equipment manufactures precision pharmaceutical testing instruments — tablet hardness testers, dissolution apparatus, disintegration testers & friability testers. ISO certified. Hyderabad, India.',
  alternates: { canonical: 'https://www.raiselabequip.com/' },
};

export default function Home() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Google Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Navigation />
      
      <main className="flex-grow">
        <Hero 
          h1="Pharmaceutical Testing Instruments Manufacturer — Hyderabad, India"
          h2="ISO-Certified Pharma Testing Equipment — Trusted by 500+ Companies"
        />
        
        <div className="bg-background relative z-10">
          <ClientsMarquee />
          
          <div className="pb-12 lg:pb-20">
            <ProductsShowcase />
            <CustomizationSection />
            <WhyChooseUs />
            <ServicesSlider />
            <LatestBlogs />
            <LatestNews />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
