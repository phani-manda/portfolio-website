import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-purple-50/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-6">
            Featured Projects
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-4"></div>
          <p className="text-lg font-normal text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my technical abilities and problem-solving approach
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => (
            <Card 
              key={project.id}
              className="border-none shadow-sm bg-white hover:shadow-lg transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Make columns stretch to the same height on large screens so image fills the card height */}
                <div className={`grid lg:grid-cols-2 gap-0 items-stretch ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  {/* Image column: use a fixed height on small screens but fill the column height on large screens */}
                  <div className={`relative overflow-hidden h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-light text-black group-hover:text-gray-700 transition-colors duration-200">
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
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-black">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <ArrowRight size={14} className="text-gray-400" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Links */}
                      <div className="flex space-x-4 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 transition-colors duration-200 shadow-md"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-black mb-4">
                More Projects on GitHub
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These are just a few highlights. Check out my GitHub for more projects, 
                contributions to open-source, and experimental code.
              </p>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200"
                onClick={() => window.open(portfolioData.personal.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;