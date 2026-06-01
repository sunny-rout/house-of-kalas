import type { Metadata } from "next";
import BrandStory from "@/components/about/BrandStory";
import FoundersSection from "@/components/about/FoundersSection";
import AboutCtaStrip from "@/components/about/AboutCtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — House of Kalas",
  description:
    "Learn about House of Kalas — a performing arts academy in Mumbai built around a journey from aspiration to rise. Meet our founders and learn about our studio.",
};

export default function AboutPage() {
  return (
    <>
      <BrandStory />
      <FoundersSection />
      <AboutCtaStrip />
      <Footer />
    </>
  );
}
