import { 
  Code2, 
  Palette, 
  Smartphone, 
  Zap, 
  Shield, 
  Layers, 
  Figma, 
  Chrome,
  Database,
  GitBranch,
  Search,
  Wrench
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      color: "primary",
      skills: [
        { name: "HTML5", level: 95, icon: Code2 },
        { name: "CSS3/SCSS", level: 92, icon: Palette },
        { name: "JavaScript", level: 88, icon: Zap },
        { name: "Bootstrap", level: 94, icon: Layers },
        { name: "Tailwind CSS", level: 90, icon: Layers }
      ]
    },
    {
      title: "Design & Tools",
      icon: Figma,
      color: "secondary", 
      skills: [
        { name: "Figma to HTML", level: 96, icon: Figma },
        { name: "Responsive Design", level: 94, icon: Smartphone },
        { name: "Cross-browser", level: 90, icon: Chrome },
        { name: "UI/UX Implementation", level: 88, icon: Palette }
      ]
    },
    {
      title: "CMS & Frameworks",
      icon: Database,
      color: "marvel-blue",
      skills: [
        { name: "WordPress", level: 85, icon: Database },
        { name: "ACF (Advanced Custom Fields)", level: 88, icon: Wrench },
        { name: "Laravel Integration", level: 75, icon: Shield },
        { name: "Git/Version Control", level: 82, icon: GitBranch }
      ]
    },
    {
      title: "Optimization & SEO",
      icon: Search,
      color: "energy-pulse",
      skills: [
        { name: "Performance Optimization", level: 86, icon: Zap },
        { name: "SEO Best Practices", level: 84, icon: Search },
        { name: "Accessibility (WCAG)", level: 80, icon: Shield },
        { name: "Code Quality", level: 92, icon: Code2 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-hero text-4xl md:text-5xl font-bold mb-4 text-gradient-marvel">
            Superpowers
          </h2>
          <p className="text-muted-foreground text-lg">
            Every hero has unique abilities. These are mine, honed through years of dedication.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="marvel-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300">
              
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full border mr-4 ${
                  category.color === 'primary' ? 'bg-primary/10 border-primary/20' :
                  category.color === 'secondary' ? 'bg-secondary/10 border-secondary/20' :
                  category.color === 'marvel-blue' ? 'bg-marvel-blue/10 border-marvel-blue/20' :
                  'bg-energy-pulse/10 border-energy-pulse/20'
                }`}>
                  <category.icon className={`h-6 w-6 ${
                    category.color === 'primary' ? 'text-primary' :
                    category.color === 'secondary' ? 'text-secondary' :
                    category.color === 'marvel-blue' ? 'text-marvel-blue' :
                    'text-energy-pulse'
                  }`} />
                </div>
                <h3 className={`font-hero text-xl font-bold ${
                  category.color === 'primary' ? 'text-primary' :
                  category.color === 'secondary' ? 'text-secondary' :
                  category.color === 'marvel-blue' ? 'text-marvel-blue' :
                  'text-energy-pulse'
                }`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    
                    {/* Skill Name and Percentage */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <skill.icon className={`h-4 w-4 mr-2 ${
                          category.color === 'primary' ? 'text-primary' :
                          category.color === 'secondary' ? 'text-secondary' :
                          category.color === 'marvel-blue' ? 'text-marvel-blue' :
                          'text-energy-pulse'
                        }`} />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className={`text-sm font-bold ${
                        category.color === 'primary' ? 'text-primary' :
                        category.color === 'secondary' ? 'text-secondary' :
                        category.color === 'marvel-blue' ? 'text-marvel-blue' :
                        'text-energy-pulse'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out relative ${
                          category.color === 'primary' ? 'bg-primary' :
                          category.color === 'secondary' ? 'bg-secondary' :
                          category.color === 'marvel-blue' ? 'bg-marvel-blue' :
                          'bg-energy-pulse'
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: category.color === 'primary' ? '0 0 10px hsl(var(--primary) / 0.5)' :
                                   category.color === 'secondary' ? '0 0 10px hsl(var(--secondary) / 0.5)' :
                                   category.color === 'marvel-blue' ? '0 0 10px hsl(var(--marvel-blue) / 0.5)' :
                                   '0 0 10px hsl(var(--energy-pulse) / 0.5)'
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category decoration */}
              <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full blur-sm ${
                category.color === 'primary' ? 'bg-primary/20' :
                category.color === 'secondary' ? 'bg-secondary/20' :
                category.color === 'marvel-blue' ? 'bg-marvel-blue/20' :
                'bg-energy-pulse/20'
              }`} />
            </div>
          ))}
        </div>

        {/* Key Strengths Summary */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="marvel-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="font-hero text-lg font-bold mb-2 text-primary">
              Pixel Perfect
            </h4>
            <p className="text-muted-foreground text-sm">
              Precision in every design implementation
            </p>
          </div>

          <div className="marvel-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
            <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h4 className="font-hero text-lg font-bold mb-2 text-secondary">
              Lightning Fast
            </h4>
            <p className="text-muted-foreground text-sm">
              Optimized for speed and performance
            </p>
          </div>

          <div className="marvel-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
            <Smartphone className="h-12 w-12 text-marvel-blue mx-auto mb-4" />
            <h4 className="font-hero text-lg font-bold mb-2 text-marvel-blue">
              Fully Responsive
            </h4>
            <p className="text-muted-foreground text-sm">
              Perfect on every device and screen
            </p>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default SkillsSection;