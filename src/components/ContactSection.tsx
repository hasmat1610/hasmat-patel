import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Twitter,
  Shield,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
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
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-hero text-4xl md:text-5xl font-bold mb-4 text-gradient-marvel">
            Assemble With Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to create something amazing together? Let's join forces and bring your vision to life.
            Every great team needs the right developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className="marvel-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-hero text-lg font-bold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">hasmat.patel@email.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="marvel-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-secondary/10 border border-secondary/20 mr-4 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-hero text-lg font-bold text-secondary mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="marvel-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-marvel-blue/10 border border-marvel-blue/20 mr-4 group-hover:bg-marvel-blue/20 transition-colors">
                    <MapPin className="h-6 w-6 text-marvel-blue" />
                  </div>
                  <div>
                    <h3 className="font-hero text-lg font-bold text-marvel-blue mb-1">Location</h3>
                    <p className="text-muted-foreground">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="marvel-card p-8 rounded-2xl">
              <h3 className="font-hero text-xl font-bold mb-6 text-foreground">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-marvel-blue hover:text-marvel-blue-foreground hover:border-marvel-blue transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </Button>
              </div>
            </div>

            {/* Availability Status */}
            <div className="marvel-card p-6 rounded-xl border-2 border-energy-pulse/20">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-energy-pulse/10 mr-3 animate-pulse-glow">
                  <div className="w-3 h-3 bg-energy-pulse rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-hero font-bold text-energy-pulse">Available for New Projects</h4>
                  <p className="text-muted-foreground text-sm">Currently accepting new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="marvel-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="font-hero text-2xl font-bold text-primary">
                Mission Briefing
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company/Organization
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 shadow-hero hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 animate-spin" />
                    Sending Mission...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Start The Mission
                  </div>
                )}
              </Button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                🚀 I typically respond within 24 hours. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center marvel-card p-8 rounded-2xl border-2 border-primary/20">
          <h3 className="font-hero text-2xl font-bold mb-4 text-gradient-marvel">
            "With great code comes great responsibility"
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to assemble a team that delivers exceptional results? Let's create web experiences 
            that don't just meet expectations, but exceed them in every way possible.
          </p>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default ContactSection;