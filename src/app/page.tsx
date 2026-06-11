import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import SellerBanner from "@/components/SellerBanner";
import ShopsSection from "@/components/ShopsSection";
import WhySection from "@/components/WhySection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <SellerBanner />
        <ShopsSection />
        <WhySection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
