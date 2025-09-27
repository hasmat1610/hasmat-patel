import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Monitor, Smartphone, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Modern responsive admin dashboard with advanced data visualization, built with HTML5, SCSS, and vanilla JavaScript. Features include real-time analytics, inventory management, and user administration.",
      technologies: ["HTML5", "SCSS", "JavaScript", "Bootstrap", "Chart.js"],
      category: "Web Application",
      year: "2023",
      features: ["Responsive Design", "Data Visualization", "Admin Panel", "Real-time Updates"],
      color: "primary"
    },
    {
      title: "Corporate Website Redesign",
      description: "Complete redesign and development of a multinational company's website. Implemented pixel-perfect Figma designs with advanced animations and optimized performance.",
      technologies: ["HTML5", "CSS3", "SCSS", "WordPress", "ACF"],
      category: "Corporate Website",
      year: "2023",
      features: ["Figma to HTML", "WordPress CMS", "SEO Optimized", "Multi-language"],
      color: "secondary"
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page for a SaaS product with advanced animations and interactive elements. Achieved 40% improvement in conversion rates.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "GSAP"],
      category: "Landing Page",
      year: "2022",
      features: ["High Conversion", "Advanced Animations", "A/B Tested", "Performance Optimized"],
      color: "marvel-blue"
    },
    {
      title: "Restaurant Booking System",
      description: "Full-featured restaurant booking system with real-time availability, customer management, and payment integration. Built with Laravel backend integration.",
      technologies: ["HTML5", "Bootstrap", "JavaScript", "Laravel", "MySQL"],
      category: "Web System",
      year: "2022",
      features: ["Real-time Booking", "Payment Integration", "Admin Dashboard", "Mobile Responsive"],
      color: "energy-pulse"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-hero text-4xl md:text-5xl font-bold mb-4 text-gradient-marvel">
            Mission Archives
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of successful missions where code meets creativity. Each project represents 
            a unique challenge conquered with precision and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="marvel-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className={`w-3 h-3 bg-${project.color} rounded-full mr-3 animate-pulse-glow`} />
                    <span className={`text-sm font-medium text-${project.color}`}>
                      {project.category}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">• {project.year}</span>
                  </div>
                  <h3 className="font-hero text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="opacity-70 hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="opacity-70 hover:opacity-100">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full mr-2`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Device Compatibility Icons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Monitor className="h-4 w-4 mr-1" />
                    <span className="text-xs">Desktop</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="h-4 w-4 mr-1" />
                    <span className="text-xs">Mobile</span>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`text-${project.color} hover:text-${project.color} hover:bg-${project.color}/10`}
                >
                  View Details →
                </Button>
              </div>

              {/* Corner decoration */}
              <div className={`absolute -top-2 -left-2 w-8 h-8 bg-${project.color}/20 rounded-full blur-sm group-hover:bg-${project.color}/30 transition-colors`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center marvel-card p-8 rounded-2xl">
          <h3 className="font-hero text-2xl font-bold mb-4 text-secondary">
            Ready for Your Next Mission?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just a few examples of what I can create. Every project is unique, 
            and I'm excited to bring your vision to life with the same level of dedication and expertise.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </Button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-4 w-24 h-24 bg-secondary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default ProjectsSection;