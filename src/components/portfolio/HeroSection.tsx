import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, MapPin, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { PersonalInfo } from '@/types/portfolio';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge variant="outline" className="mb-6 text-purple-300 border-purple-300/50">
              Available for opportunities
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.summary || "Passionate about creating exceptional digital experiences through innovative design and development."}
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              {personalInfo.email && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="border-purple-300/50 text-purple-300 hover:bg-purple-300/10">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              {personalInfo.linkedin && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {personalInfo.github && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {personalInfo.website && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  {personalInfo.avatar ? (
                    <img 
                      src={personalInfo.avatar} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl font-bold text-white">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-bounce delay-500" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};