import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PersonalInfo, Skill } from '@/types/portfolio';
import { Code, Palette, Zap, Users } from 'lucide-react';

interface AboutSectionProps {
  personalInfo: PersonalInfo;
  skills: Skill[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo, skills }) => {
  const skillCategories = {
    technical: skills.filter(s => s.category === 'technical'),
    soft: skills.filter(s => s.category === 'soft'),
    tool: skills.filter(s => s.category === 'tool'),
    language: skills.filter(s => s.category === 'language')
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return <Code className="h-5 w-5" />;
      case 'soft': return <Users className="h-5 w-5" />;
      case 'tool': return <Zap className="h-5 w-5" />;
      case 'language': return <Palette className="h-5 w-5" />;
      default: return <Code className="h-5 w-5" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'technical': return 'Technical Skills';
      case 'soft': return 'Soft Skills';
      case 'tool': return 'Tools & Technologies';
      case 'language': return 'Languages';
      default: return 'Skills';
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* About Content */}
          <div>
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">My Story</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {personalInfo.summary || "I'm a passionate developer with a love for creating innovative solutions that make a difference. My journey in technology has been driven by curiosity and a desire to continuously learn and grow."}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">5+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Let's Connect</h3>
                <div className="space-y-3">
                  {personalInfo.email && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600">{personalInfo.email}</span>
                    </div>
                  )}
                  {personalInfo.phone && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">{personalInfo.phone}</span>
                    </div>
                  )}
                  {personalInfo.location && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-600">{personalInfo.location}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {Object.entries(skillCategories).map(([category, categorySkills]) => {
              if (categorySkills.length === 0) return null;
              
              return (
                <Card key={category}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {getCategoryIcon(category)}
                      <h3 className="text-lg font-semibold text-slate-900">
                        {getCategoryTitle(category)}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {categorySkills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-700">
                              {skill.name}
                            </span>
                            <span className="text-sm text-slate-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* All Skills as Badges */}
            {skills.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">All Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};