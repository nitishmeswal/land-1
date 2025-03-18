
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a client with enhanced configuration for better UX
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Better UX by not refetching on window focus
      retry: 1, // Limit retries for better user experience
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Add preloading for common routes
const preloadRoutes = () => {
  // Preload important routes for faster navigation
  const routes = ['/products', '/token', '/ecosystem'];
  routes.forEach(route => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  });
};

const App = () => {
  // Preload routes after initial render
  React.useEffect(() => {
    preloadRoutes();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Enhanced toasters with better positioning */}
        <Toaster position="top-center" />
        <Sonner position="top-right" expand={true} closeButton richColors />
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* These routes will be implemented later */}
            <Route path="/products" element={<Index />} />
            <Route path="/token" element={<Index />} />
            <Route path="/ecosystem" element={<Index />} />
            <Route path="/resources" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/whitepaper" element={<Index />} />
            <Route path="/pitch-deck" element={<Index />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
