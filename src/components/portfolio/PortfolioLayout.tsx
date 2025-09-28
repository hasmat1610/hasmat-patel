import React from 'react';
import { PortfolioData } from '@/types/portfolio';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';

interface PortfolioLayoutProps {
  data: PortfolioData;
}

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ data }) => {
  return (
    <div className="min-h-screen">
      <HeroSection personalInfo={data.personalInfo} />
      <AboutSection personalInfo={data.personalInfo} skills={data.skills} />
      <ExperienceSection experiences={data.experience} />
      <ProjectsSection projects={data.projects} />
      <ContactSection personalInfo={data.personalInfo} />
      
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 {data.personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};