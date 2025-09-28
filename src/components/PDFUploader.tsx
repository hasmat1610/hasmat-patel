import React, { useState, useCallback } from 'react';
import { Upload, FileText, X, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { PortfolioData } from '@/types/portfolio';
import { PDFParser } from '@/services/pdfParser';

interface PDFUploaderProps {
  onDataExtracted: (data: PortfolioData) => void;
  className?: string;
}

export const PDFUploader: React.FC<PDFUploaderProps> = ({ onDataExtracted, className }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractionStatus, setExtractionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const pdfFile = files.find(file => file.type === 'application/pdf');
    
    if (pdfFile) {
      handleFileUpload(pdfFile);
    } else {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF file.",
        variant: "destructive"
      });
    }
  }, [toast]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      handleFileUpload(file);
    } else {
      toast({
        title: "Invalid File Type",
        description: "Please select a PDF file.",
        variant: "destructive"
      });
    }
  }, [toast]);

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);
    setIsProcessing(true);
    setUploadProgress(0);
    setExtractionStatus('idle');

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Read PDF file as text (simplified - in real app you'd use pdf-parse)
      const text = await readPDFAsText(file);
      
      // Parse the extracted text
      const portfolioData = await PDFParser.parsePDFText(text);
      
      setUploadProgress(100);
      setExtractionStatus('success');
      
      toast({
        title: "PDF Processed Successfully!",
        description: "Your portfolio data has been extracted and is ready to use.",
      });
      
      onDataExtracted(portfolioData);
      
    } catch (error) {
      console.error('Error processing PDF:', error);
      setExtractionStatus('error');
      toast({
        title: "Processing Failed",
        description: "Failed to extract data from PDF. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Simplified PDF text extraction (in real app, use pdf-parse library)
  const readPDFAsText = async (file: File): Promise<string> => {
    return new Promise((resolve) => {
      // Mock PDF content for demo
      setTimeout(() => {
        resolve(`
          John Doe
          Senior Full Stack Developer
          
          Email: john.doe@email.com
          Phone: +1 (555) 123-4567
          Location: San Francisco, CA
          LinkedIn: linkedin.com/in/johndoe
          GitHub: github.com/johndoe
          
          Summary:
          Experienced full-stack developer with 5+ years of experience building scalable web applications using modern technologies. Passionate about creating efficient, user-friendly solutions and leading development teams.
          
          Experience:
          Senior Full Stack Developer
          Tech Solutions Inc.
          Jan 2022 - Present
          • Led development of microservices architecture serving 1M+ users
          • Implemented CI/CD pipelines reducing deployment time by 60%
          • Mentored junior developers and conducted code reviews
          • Technologies: React, Node.js, PostgreSQL, AWS, Docker
          
          Full Stack Developer
          StartupXYZ
          Jun 2020 - Dec 2021
          • Built responsive web applications using React and Express.js
          • Designed and implemented RESTful APIs
          • Collaborated with design team to implement pixel-perfect UIs
          • Technologies: JavaScript, React, MongoDB, Express.js
          
          Education:
          Bachelor of Science in Computer Science
          University of California, Berkeley
          2016 - 2020
          
          Skills:
          JavaScript, TypeScript, Python, React, Node.js, Express.js, PostgreSQL, MongoDB, AWS, Docker, Git, Agile, Problem Solving, Leadership, Communication
          
          Projects:
          E-commerce Platform Project
          Built a full-stack e-commerce platform with payment integration, inventory management, and admin dashboard. Technologies: React, Node.js, Stripe API, PostgreSQL.
          
          Task Management App Project
          Developed a collaborative task management application with real-time updates and team collaboration features. Technologies: React, Socket.io, Express.js, MongoDB.
        `);
      }, 2000);
    });
  };

  const removeFile = () => {
    setUploadedFile(null);
    setExtractionStatus('idle');
    setUploadProgress(0);
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto ${className}`}>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Upload Your Resume</h2>
          <p className="text-muted-foreground">
            Upload your PDF resume to automatically generate your portfolio
          </p>
        </div>

        {!uploadedFile ? (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-muted-foreground/25 hover:border-primary/50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">
              Drag and drop your PDF resume here
            </p>
            <p className="text-muted-foreground mb-4">or</p>
            <Button asChild>
              <label htmlFor="pdf-upload" className="cursor-pointer">
                Choose PDF File
                <input
                  id="pdf-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">{uploadedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {extractionStatus === 'success' && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {extractionStatus === 'error' && (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  disabled={isProcessing}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {isProcessing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing PDF...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="w-full" />
              </div>
            )}

            {extractionStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-800 font-medium">
                    PDF processed successfully!
                  </p>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Your portfolio data has been extracted and is ready to use.
                </p>
              </div>
            )}

            {extractionStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <p className="text-red-800 font-medium">
                    Processing failed
                  </p>
                </div>
                <p className="text-red-700 text-sm mt-1">
                  Failed to extract data from PDF. Please try again.
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};