import React, { useCallback, useMemo, useState } from 'react';
import { Github } from 'lucide-react';
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
        className="transition-all duration-200 group overflow-hidden cursor-pointer bg-white border-2 border-[#49108b] rounded-xl shadow-[2px_2px_0px_0px_#49108b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b]"
        onClick={handleCardClick}
      >
        <CardContent className="p-0">
          <div className="flex gap-4 p-4">
            {/* Project Thumbnail */}
            <div className="relative overflow-hidden w-20 h-20 rounded-lg border-2 border-[#49108b] flex-shrink-0">
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                rootMargin="100px"
              />
            </div>

            {/* Project Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[14px] font-bold text-[#49108b] group-hover:text-[#7e30e1] transition-colors duration-200 font-['Space_Mono',monospace] truncate">
                {project.title}
              </h3>
              <p className="text-[13px] text-[#49108b]/70 line-clamp-2 font-['Inter',sans-serif] leading-relaxed mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-[#e26ee5]/20 text-[#7e30e1] border border-[#49108b] rounded-lg text-[11px] py-0.5 px-2 font-['Inter',sans-serif] font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge variant="secondary" className="bg-[#e26ee5]/20 text-[#7e30e1] border border-[#49108b] rounded-lg text-[11px] py-0.5 px-2 font-['Inter',sans-serif] font-medium">
                    +{project.tech.length - 3}
                  </Badge>
                )}
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
      <div className="max-w-2xl mx-auto px-6">
        <div className="p-8 border-2 border-[#49108b] rounded-xl bg-white shadow-[4px_4px_0px_0px_#49108b]">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-[#49108b] mb-2 font-['Space_Mono',monospace]">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-[#7e30e1] mb-4 rounded-full"></div>
            <p className="text-[13px] font-normal text-[#49108b]/70 leading-relaxed font-['Inter',sans-serif]">
              A selection of projects showcasing my technical abilities
            </p>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-md text-xs py-1 px-3 transition-all duration-200 border-2 border-[#49108b] font-['Inter',sans-serif] font-semibold ${activeCategory === category
                    ? 'bg-[#7e30e1] text-white shadow-[2px_2px_0px_0px_#49108b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b]'
                    : 'bg-white text-[#7e30e1] shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#e26ee5] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b]'
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}

          {/* Projects - Single Column */}
          <div className="space-y-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-xs text-[#49108b]/80 font-['Inter',sans-serif]">No projects found in this category.</p>
            </div>
          )}

          {/* More Projects CTA */}
          <div className="mt-8">
            <Card className="bg-[#f3f8ff] border-2 border-[#49108b] rounded-xl shadow-[2px_2px_0px_0px_#49108b]">
              <CardContent className="p-5 text-center">
                <h3 className="text-[14px] font-bold text-[#49108b] mb-2 font-['Space_Mono',monospace]">
                  More on GitHub
                </h3>
                <p className="text-[13px] text-[#49108b]/70 mb-4 leading-relaxed font-['Inter',sans-serif]">
                  Check out my GitHub for more projects and open-source contributions.
                </p>
                <Button
                  variant="outline"
                  className="bg-white border-2 border-[#49108b] text-[#7e30e1] rounded-lg shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#7e30e1] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] font-semibold text-[13px] py-2 px-4"
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