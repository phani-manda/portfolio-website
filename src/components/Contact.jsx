import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {

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
        {/* Contact Information - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200 flex-1"
                  onClick={() => window.open(portfolioData.personal.github, '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200 flex-1"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                Feel free to connect with me on these platforms to stay updated on my latest projects 
                and professional journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;