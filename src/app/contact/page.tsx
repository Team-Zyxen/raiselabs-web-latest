import { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";

export const metadata: Metadata = {
  title: 'Contact Raise Lab Equipment │ Hyderabad, India │ +91 9177770365',
  description: 'Contact Raise Lab Equipment for pharmaceutical testing instruments. Request a quote, service support or catalogue. Call: +91 9177770365. Hyderabad, India.',
  alternates: { canonical: 'https://raiselabequip.com/contact' },
};

export default function ContactPage() {
  return <ContactView />;
}
