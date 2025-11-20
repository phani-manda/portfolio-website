import React from 'react';
import { GraduationCap, Award, Users, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data';

const About = () => {
  const highlights = [
    { icon: GraduationCap, text: portfolioData.about.highlights[0] },
    { icon: Code, text: portfolioData.about.highlights[1] },
    { icon: Award, text: portfolioData.about.highlights[2] },
    { icon: Users, text: portfolioData.about.highlights[3] }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            About Me
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <p className="text-lg font-normal text-muted-foreground leading-relaxed">
              {portfolioData.about.intro}
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 hover:bg-card rounded-lg transition-colors duration-200"
                >
                  <Icon size={20} className="text-foreground flex-shrink-0" />
                  <span className="text-sm font-normal text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <Card className="bg-card border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-light text-card-foreground mb-4">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">{portfolioData.about.education.degree}</h4>
                  <p className="text-muted-foreground">{portfolioData.about.education.university}</p>
                  <p className="text-sm text-muted-foreground/80">{portfolioData.about.education.graduation}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Coursework */}
          <div>
            <Card className="bg-card border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-light text-card-foreground mb-6">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.about.education.coursework.map((course, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            {portfolioData.experience && portfolioData.experience.length > 0 && (
              <Card className="bg-card border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 mt-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-light text-card-foreground mb-6">Experience</h3>
                  {portfolioData.experience.map((exp, index) => (
                    <div key={index} className="space-y-3">
                      <div>
                        <h4 className="font-medium text-foreground">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground/80">{exp.period}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;