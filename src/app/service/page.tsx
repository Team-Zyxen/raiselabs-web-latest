import { Metadata } from "next";
import ServiceView from "@/components/pages/ServiceView";

export const metadata: Metadata = {
  title: 'Service & Repair Request │ Pharmaceutical Lab Instruments │ Raise Lab Equipment',
  description: 'Submit a service request for Raise Lab Equipment instruments. We offer calibration, validation, repairs and on-site support across India.',
  alternates: { canonical: 'https://www.raiselabequip.com/service' },
};

export default function ServicePage() {
  return <ServiceView />;
}
