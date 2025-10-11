import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { portfolioData } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`
    },
    {
      icon: Phone, 
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`
    },
    {
      icon: MapPin,
      label: "Location", 
      value: portfolioData.personal.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-purple-50/20 to-purple-100/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-6">
            Let's Connect
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-4"></div>
          <p className="text-lg font-normal text-gray-600 max-w-2xl mx-auto">
            Interested in working together or have questions about my projects? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-black mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-normal text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-normal text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-normal text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-black mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Icon size={18} className="text-black" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{label}</p>
                        {href ? (
                          <a 
                            href={href}
                            className="text-black hover:text-gray-600 transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-black">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-black mb-6">Connect Online</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200"
                    onClick={() => window.open(portfolioData.personal.github, '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200"
                    onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Feel free to connect with me on these platforms to stay updated on my latest projects 
                  and professional journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;