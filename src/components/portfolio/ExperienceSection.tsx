import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/types/portfolio';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  if (experiences.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg hidden md:block" />
                
                {/* Content */}
                <div className="md:ml-16">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {experience.position}
                          </h3>
                          <div className="flex items-center gap-2 text-lg text-purple-600 mb-2">
                            <Building className="h-5 w-5" />
                            {experience.company}
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {experience.startDate} - {experience.endDate}
                            </span>
                          </div>
                          {experience.location && (
                            <div className="flex items-center gap-2 text-slate-500">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{experience.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                        {experience.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-slate-600 leading-relaxed mb-3">
                            {desc}
                          </p>
                        ))}
                      </div>
                      
                      {/* Technologies */}
                      {experience.technologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="outline"
                                className="border-purple-200 text-purple-700 hover:bg-purple-50"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};