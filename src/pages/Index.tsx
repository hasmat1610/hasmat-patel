import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags (handled in index.html) */}
      
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-300 shadow-card"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <div className="w-6 h-6 bg-secondary rounded-full animate-pulse-glow" />
          ) : (
            <div className="w-6 h-6 bg-primary rounded-full animate-pulse-glow" />
          )}
        </button>
      </div>

      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Hasmat Patel. All rights reserved. • Built with passion and precision.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Senior Frontend Developer • HTML Developer • Web Designer • Marvel Fan
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
