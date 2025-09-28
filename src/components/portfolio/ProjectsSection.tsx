import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types/portfolio';
import { ExternalLink, Github, Star } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  if (projects.length === 0) return null;

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-400 to-pink-400 h-48">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-white text-4xl font-bold opacity-50">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      )}
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-yellow-900 border-0">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.liveUrl && (
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge 
                            key={index}
                            variant="secondary"
                            className="text-xs bg-slate-100 text-slate-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      
                      {/* Links */}
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Button size="sm" variant="outline" asChild className="flex-1">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild className="flex-1">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold text-slate-900">
                        {project.title}
                      </h4>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button size="sm" variant="ghost" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="ghost" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 6).map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="outline"
                          className="text-xs border-slate-200 text-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};