import React, { useCallback, useMemo } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../data';
import GlassPanel from './GlassPanel';
import LazyImage from './LazyImage';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Memoized Project Card Component
const ProjectCard = React.memo(({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px',
  });

  const handleGithubClick = useCallback(() => {
    window.open(project.github, '_blank');
  }, [project.github]);

  const handleLiveClick = useCallback(() => {
    window.open(project.live, '_blank');
  }, [project.live]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="bg-white/3 border border-white/8 backdrop-blur-xl shadow-[0_25px_60px_rgba(8,8,20,0.5)] hover:shadow-[0_30px_80px_rgba(10,10,30,0.65)] transition-all duration-500 group overflow-hidden">
        <CardContent className="p-0">
          <div className={`grid lg:grid-cols-2 gap-0 items-stretch ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Project Image - Lazy Loaded */}
            <div className={`relative overflow-hidden h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                rootMargin="100px"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-card-foreground group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
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
                    onClick={handleGithubClick}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 transition-colors duration-200 shadow-md"
                    onClick={handleLiveClick}
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
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const handleGithubClick = useCallback(() => {
    window.open(portfolioData.personal.github, '_blank');
  }, []);

  const projects = useMemo(() => portfolioData.projects, []);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <GlassPanel className="px-6 py-10 sm:px-10 lg:px-14">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-16 h-px bg-foreground mx-auto mb-4"></div>
            <p className="text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my technical abilities and problem-solving approach
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <Card className="bg-white/3 border border-white/8 backdrop-blur-xl shadow-[0_15px_40px_rgba(8,8,20,0.4)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-card-foreground mb-4">
                  More Projects on GitHub
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  These are just a few highlights. Check out my GitHub for more projects,
                  contributions to open-source, and experimental code.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200"
                  onClick={handleGithubClick}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};

export default React.memo(Projects);