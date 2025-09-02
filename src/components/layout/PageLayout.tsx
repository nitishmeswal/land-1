import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionContainer } from "@/components/ui/Container";

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
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <SectionContainer className="pt-40 pb-16 relative bg-[#030924]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </SectionContainer>

        {/* Page content */}
        <div className={className}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
