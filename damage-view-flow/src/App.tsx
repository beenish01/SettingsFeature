
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReportProvider } from "@/context/ReportContext";
import Sidebar from "@/components/Sidebar";
import UploadImages from "./pages/UploadImages";
import ReviewDamage from "./pages/ReviewDamage";
import GenerateReport from "./pages/GenerateReport";
import NotFound from "./pages/NotFound";
import AIReport from "./pages/AIReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ReportProvider>
        <BrowserRouter>
          <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="pl-60 w-full">
              <Routes>
                <Route path="/" element={<UploadImages />} />
                <Route path="/ai-report" element={<AIReport />} />
                <Route path="/review-damage" element={<ReviewDamage />} />
                <Route path="/generate-report" element={<GenerateReport />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ReportProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
