import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-hero text-4xl md:text-5xl font-bold mb-4 text-gradient-marvel">
            About The Developer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Like every great hero's origin story, mine began with curiosity and evolved into mastery
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <div className="marvel-card p-8 rounded-2xl">
              <h3 className="font-hero text-2xl font-bold mb-4 text-primary">
                The Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over <span className="text-secondary font-semibold">7.6 years</span> of experience in frontend development and web design, 
                I've crafted digital experiences that combine aesthetic brilliance with technical excellence. 
                From pixel-perfect Figma to HTML conversions to complex responsive designs, I bring ideas to life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Frontend Development Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">UI/UX Design Implementation Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-marvel-blue" />
                  <span className="text-foreground">Performance & Accessibility Advocate</span>
                </div>
              </div>
            </div>

            {/* Core Technologies */}
            <div className="marvel-card p-6 rounded-2xl">
              <h4 className="font-hero text-lg font-bold mb-4 text-secondary">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Bootstrap', 
                  'Tailwind CSS', 'WordPress', 'ACF', 'Figma to HTML', 
                  'Responsive Design', 'Laravel Integration'
                ].map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              
              {/* Years of Experience */}
              <div className="marvel-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-hero font-bold text-primary mb-2">7.6+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>

              {/* Projects Completed */}
              <div className="marvel-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-hero font-bold text-secondary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>

              {/* Companies */}
              <div className="marvel-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-hero font-bold text-marvel-blue mb-2">3</div>
                <div className="text-muted-foreground">Companies</div>
              </div>

              {/* Satisfaction */}
              <div className="marvel-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-hero font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="marvel-card p-8 rounded-2xl border-2 border-secondary/20">
              <h4 className="font-hero text-xl font-bold mb-4 text-secondary">
                Mission Statement
              </h4>
              <p className="text-muted-foreground leading-relaxed italic">
                "To create web experiences that don't just meet expectations, but exceed them. 
                Every line of code, every pixel placement, every interaction is crafted with 
                the precision of a superhero and the dedication of a true professional."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl" />
    </section>
  );
};

export default AboutSection;