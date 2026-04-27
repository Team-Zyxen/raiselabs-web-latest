import { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";

export const metadata: Metadata = {
  title: 'About Raise Lab Equipment — Pharma Instrument Manufacturer, Hyderabad',
  description: 'Raise Lab Equipment — ISO certified pharma instrument manufacturer, Hyderabad. 10+ years experience. Trusted by Dr. Reddy\'s, Cipla, Aurobindo.',
  alternates: { canonical: 'https://www.raiselabequip.com/about' },
};

export default function AboutPage() {
  return <AboutView />;
}
