import { useEffect } from "react";
import { SectionContainer } from "@/components/ui/Container";
import LandingWithMarquee from "../InfiniteSlidingHeader";
import Header from "../Header";
import NeurolovFooter from "../common/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageLayout({
  children,
  title,
  subtitle,
  className = "",
}: PageLayoutProps) {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = `${title} | Neurolov`;
  }, [title]);

  return (
    <div className="bg-[#030924]">
      <LandingWithMarquee />
      <Header />
      <main>
        {/* Page header */}
        <SectionContainer className="pt-48 pb-0 relative ">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">
              {title}
            </h1>
            {subtitle && <p className="text-xl text-muted">{subtitle}</p>}
          </div>
        </SectionContainer>

        {/* Page content */}
        <div className={className}>{children}</div>
      </main>
      <NeurolovFooter />
    </div>
  );
}
