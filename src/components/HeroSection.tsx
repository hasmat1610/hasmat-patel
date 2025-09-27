import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 particle-bg"
        style={{
          background: 'radial-gradient(ellipse at bottom, hsl(218 27% 8%) 0%, hsl(220 25% 10%) 50%, hsl(348 91% 58% / 0.1) 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Marvel-style introduction */}
        <div className="mb-8">
          <p className="text-secondary font-mono text-lg mb-2 tracking-wider animate-marvel-entrance">
            MARVEL PRESENTS
          </p>
          <h1 className="font-hero text-6xl md:text-8xl font-black mb-4 hero-text-glow animate-marvel-entrance">
            I AM
          </h1>
          <h2 className="font-hero text-4xl md:text-6xl font-bold text-gradient-marvel mb-6 animate-marvel-entrance">
            HASMAT PATEL
          </h2>
        </div>

        {/* Professional subtitle */}
        <div className="mb-8 animate-marvel-entrance" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Senior Frontend Developer & Web Designer
          </p>
          <p className="text-lg text-marvel-blue font-semibold">
            7.6 Years of Experience • Crafting Digital Experiences
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-marvel-entrance" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg shadow-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToNext}
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-secondary cursor-pointer hover:text-secondary/80 transition-colors"
            onClick={scrollToNext}
          />
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-1 h-32 bg-gradient-to-b from-primary via-secondary to-marvel-blue rounded-full opacity-60" />
      </div>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-1 h-32 bg-gradient-to-b from-marvel-blue via-secondary to-primary rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;