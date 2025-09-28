import { useState } from 'react';
import { PDFUploader } from '@/components/PDFUploader';
import { PortfolioLayout } from '@/components/portfolio/PortfolioLayout';
import { PortfolioData } from '@/types/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Sparkles } from 'lucide-react';

const Index = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [showUploader, setShowUploader] = useState(true);

  const handleDataExtracted = (data: PortfolioData) => {
    setPortfolioData(data);
    setShowUploader(false);
  };

  const resetPortfolio = () => {
    setPortfolioData(null);
    setShowUploader(true);
  };

  if (portfolioData && !showUploader) {
    return <PortfolioLayout data={portfolioData} />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              PDF Portfolio Generator
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform your PDF resume into a stunning, interactive portfolio website in seconds. 
            Our AI-powered system extracts your information and creates a beautiful showcase of your skills and experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart PDF Parsing</h3>
              <p className="text-slate-300 text-sm">
                Advanced AI extracts your personal info, experience, skills, and projects automatically.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Beautiful Design</h3>
              <p className="text-slate-300 text-sm">
                Modern, responsive design that looks great on all devices and impresses employers.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-slate-300 text-sm">
                Get your portfolio ready in seconds, not hours. No coding or design skills required.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* PDF Uploader */}
        <PDFUploader onDataExtracted={handleDataExtracted} />
        
        {/* Demo Button */}
        {portfolioData && (
          <div className="text-center mt-8">
            <Button 
              onClick={resetPortfolio}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              Upload Different Resume
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Index;