import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster as HotToaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Page routes
import Index from "./pages/Index";
import NotFound from "./pages/not-found";
import ProductsPage from "./pages/Products";
import TokenPage from "./pages/Token";
import EcosystemPage from "./pages/Ecosystem";
import ResourcesPage from "./pages/Resources";
import AboutPage from "./pages/About";
import WhitepaperPage from "./pages/Whitepaper";
import PitchDeckPage from "./pages/pitch-deck";
import BlogDetailPage from "./pages/BlogDetailPage";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import RefundPolicy from "./pages/legal/RefundPolicy";
import Disclaimer from "./pages/legal/Disclaimer";

// GA4 ID
const GA_ID = "G-K7EZKD532N";

// Declare gtag on window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// GA Setup + Route tracking
const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const loadGtag = () => {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `;
      document.head.appendChild(inlineScript);
    };

    loadGtag();
  }, []);

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

// Prefetch common routes for speed
const preloadRoutes = () => {
  ["/products", "/token", "/ecosystem"].forEach((route) => {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = route;
    document.head.appendChild(link);
  });
};

// Query client setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// App Routes + GA + preload logic
const AppRoutes = () => {
  useGoogleAnalytics();

  useEffect(() => {
    preloadRoutes();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:tab" element={<ProductsPage />} />
      <Route path="/token" element={<TokenPage />} />
      <Route path="/token/:tab" element={<TokenPage />} />
      <Route path="/ecosystem" element={<EcosystemPage />} />
      <Route path="/ecosystem/:tab" element={<EcosystemPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/:tab" element={<AboutPage />} />
      <Route path="/whitepaper" element={<WhitepaperPage />} />
      <Route path="/pitch-deck" element={<PitchDeckPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
      <Route
        path="/legal/terms-and-conditions"
        element={<TermsAndConditions />}
      />
      <Route path="/legal/refund-policy" element={<RefundPolicy />} />
      <Route path="/legal/disclaimer" element={<Disclaimer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Main App
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner expand={true} closeButton richColors />
        <HotToaster 
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{
            bottom: 20,
            right: 20,
            zIndex: 9999,
          }}
        />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
