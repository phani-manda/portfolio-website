import React from 'react';
import { Clock, Zap, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const UpcomingProjects = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Development': return Zap;
      case 'Planning': return Calendar;
      default: return Clock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development': return 'bg-green-100 text-green-800 border-green-200';
      case 'Planning': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="upcoming" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-6">
            Upcoming Projects
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-4"></div>
          <p className="text-lg font-normal text-gray-600 max-w-2xl mx-auto">
            Innovative projects in development that will demonstrate advanced technical skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.upcomingProjects.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            
            return (
              <Card 
                key={project.id}
                className="border-none shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <Badge 
                      className={`${getStatusColor(project.status)} font-normal`}
                    >
                      <StatusIcon size={12} className="mr-1" />
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500 font-normal">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-black group-hover:text-gray-700 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-purple-200 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Progress</span>
                      <span>{project.status === 'In Development' ? '60%' : '10%'}</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          project.status === 'In Development' 
                            ? 'bg-green-500 w-3/5' 
                            : 'bg-blue-500 w-1/12'
                        }`}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-none shadow-sm bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-black mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Follow my GitHub and LinkedIn to get updates on these projects as they develop. 
                I regularly share progress, technical challenges, and lessons learned during the development process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;