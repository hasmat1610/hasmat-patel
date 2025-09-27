import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Techuz InfoWeb Pvt. Ltd.",
      period: "Sep 2023 - Present",
      location: "Ahmedabad, India",
      description: "Leading frontend development initiatives, implementing modern React applications, and mentoring junior developers. Specialized in creating scalable, maintainable codebases with advanced performance optimization.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Performance Optimization"],
      color: "primary"
    },
    {
      title: "Senior HTML Developer",
      company: "Nyusoft Solutions LLP",
      period: "Aug 2021 - Aug 2023",
      location: "Surat, India",
      description: "Developed responsive web applications and led UI/UX implementation projects. Focused on pixel-perfect design conversion and cross-browser compatibility while maintaining high coding standards.",
      technologies: ["HTML5", "CSS3", "SCSS", "JavaScript", "Bootstrap", "WordPress"],
      color: "secondary"
    },
    {
      title: "Junior HTML Developer",
      company: "Citrusbug Technolabs",
      period: "Feb 2016 - Aug 2021",
      location: "Ahmedabad, India", 
      description: "Started my journey in web development, mastering the fundamentals of frontend technologies. Contributed to numerous projects while learning advanced development practices and design principles.",
      technologies: ["HTML", "CSS", "jQuery", "Bootstrap", "Responsive Design"],
      color: "marvel-blue"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-hero text-4xl md:text-5xl font-bold mb-4 text-gradient-marvel">
            Hero's Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Every superhero has an origin story. Here's mine through the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full hidden md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                <div className={`w-6 h-6 bg-${exp.color} rounded-full border-4 border-background shadow-glow animate-pulse-glow`} />
              </div>

              {/* Content Card */}
              <div className={`marvel-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 ${
                index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
              }`}>
                
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-hero text-xl font-bold mb-1 text-${exp.color}`}>
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col items-end text-sm text-muted-foreground">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-${exp.color}/10 text-${exp.color} border border-${exp.color}/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Comic-style corner decoration */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${exp.color} opacity-20 rounded-full blur-sm`} />
              </div>
            </div>
          ))}
        </div>

        {/* Career Progression Summary */}
        <div className="mt-16 text-center marvel-card p-8 rounded-2xl">
          <Briefcase className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h3 className="font-hero text-2xl font-bold mb-4 text-secondary">
            Career Progression
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From Junior to Senior in 7.6 years, I've grown through hands-on experience, 
            continuous learning, and a passion for creating exceptional web experiences. 
            Each role has shaped me into the developer I am today.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default ExperienceSection;