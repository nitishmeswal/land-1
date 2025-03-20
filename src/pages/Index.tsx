import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/Hero";
import ProductHighlights from "@/components/home/ProductHighlights";
import HowItWorks from "@/components/home/HowItWorks";
import Tokenomics from "@/components/home/Tokenomics";
import Partners from "@/components/home/Partners";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductHighlights />
        <HowItWorks />
        <Tokenomics />
        <Partners />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Index;
