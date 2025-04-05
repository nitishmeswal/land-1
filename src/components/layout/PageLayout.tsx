import { useEffect } from "react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionContainer } from '@/components/ui/container';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageLayout({ children, title, subtitle, className = "" }: PageLayoutProps) {
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
        <SectionContainer className="pt-40 pb-16 relative">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-dots-light bg-[size:20px_20px] opacity-20"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuro-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuro-500/20 to-transparent"></div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">{title}</h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </SectionContainer>
        
        {/* Page content */}
        <div className={className}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
