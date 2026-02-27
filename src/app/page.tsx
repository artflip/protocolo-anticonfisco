import WarningBanner from "@/components/WarningBanner";
import HeroSection from "@/components/HeroSection";
import DeliverablesGrid from "@/components/DeliverablesGrid";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <WarningBanner />

      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 py-12 flex flex-col gap-16 md:gap-24">
        <HeroSection />
        <DeliverablesGrid />
      </div>

      <GuaranteeSection />
      <Footer />
    </main>
  );
}
