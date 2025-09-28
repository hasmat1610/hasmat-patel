import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PersonalInfo } from '@/types/portfolio';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <Card className="bg-slate-800 border-slate-700 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {personalInfo.email && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">Email</p>
                        <p className="text-white font-medium">{personalInfo.email}</p>
                      </div>
                    </div>
                  )}
                  
                  {personalInfo.phone && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">Phone</p>
                        <p className="text-white font-medium">{personalInfo.phone}</p>
                      </div>
                    </div>
                  )}
                  
                  {personalInfo.location && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">Location</p>
                        <p className="text-white font-medium">{personalInfo.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                
                <div className="flex gap-4">
                  {personalInfo.linkedin && (
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      asChild
                    >
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  
                  {personalInfo.github && (
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      asChild
                    >
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  
                  {personalInfo.website && (
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      asChild
                    >
                      <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Website
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};