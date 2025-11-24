import React, { useCallback, useMemo, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../data';
import LazyImage from './LazyImage';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';

// Memoized Project Card Component
const ProjectCard = React.memo(({ project, index }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px',
  });

  const handleCardClick = useCallback(() => {
    navigate(`/project/${project.id}`);
  }, [navigate, project.id]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card
        className="bg-background border border-white/10 shadow-lg transition-all duration-500 group overflow-hidden h-full flex flex-col cursor-pointer"
        onClick={handleCardClick}
      >
        <CardContent className="p-0 flex flex-col h-full">
          {/* Project Image */}
          <div className="relative overflow-hidden h-64 w-full">
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              rootMargin="100px"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 font-medium">
                View Details
              </span>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-light text-card-foreground group-hover:text-purple-400 transition-colors duration-200">
                {project.title}
              </h3>
            </div>

            <p className="text-muted-foreground line-clamp-2 mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground"
                >
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 3 && (
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  +{project.tech.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleGithubClick = useCallback(() => {
    window.open(portfolioData.personal.github, '_blank');
  }, []);

  const projects = useMemo(() => portfolioData.projects, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach(project => {
      if (project.category && !cats.includes(project.category)) {
        cats.push(project.category);
      }
    });
    return cats;
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="px-6 py-10 sm:px-10 lg:px-14 border border-white/10 rounded-3xl bg-background/50">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-16 h-px bg-foreground mx-auto mb-4"></div>
            <p className="text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my technical abilities and problem-solving approach
            </p>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 transition-all duration-300 ${activeCategory === category
                    ? 'bg-purple-600 hover:bg-purple-700 text-white border-transparent'
                    : 'border-white/10 hover:border-purple-500/50 hover:text-purple-400'
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <Card className="bg-background border border-white/10 shadow-lg">
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
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);