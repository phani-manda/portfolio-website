import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Code, Database, Settings, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: portfolioData.skills.languages,
      description: "Core programming languages I use for development"
    },
    {
      title: "Frontend Technologies",
      icon: Settings,
      skills: portfolioData.skills.frontend,
      description: "Modern frameworks and tools for building user interfaces"
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [...portfolioData.skills.backend, ...portfolioData.skills.databases],
      description: "Server-side technologies and data management systems"
    },
    {
      title: "Tools & Concepts",
      icon: Lightbulb,
      skills: [...portfolioData.skills.tools, ...portfolioData.skills.concepts],
      description: "Development tools and computer science fundamentals"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-4"></div>
          <p className="text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map(({ title, icon: Icon, skills, description }, index) => (
            <Card
              key={index}
              className="bg-card border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:bg-card/80 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-200 shadow-md">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-light text-card-foreground">{title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-border text-muted-foreground hover:border-purple-500 hover:text-purple-400 hover:bg-purple-900/20 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-card border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-card-foreground mb-4">
                Always Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
                Currently exploring advanced topics in system design, machine learning, and cloud architecture
                to prepare for challenging SDE roles at top tech companies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;