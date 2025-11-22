import React, { useMemo } from 'react';
import { Clock, Zap, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data';
import GlassPanel from './GlassPanel';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Memoized Project Card Component
const UpcomingProjectCard = React.memo(({ project, index, getStatusIcon, getStatusColor }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px',
  });

  const StatusIcon = getStatusIcon(project.status);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="bg-white/3 border border-white/8 backdrop-blur-xl shadow-[0_20px_60px_rgba(8,8,20,0.45)] hover:shadow-[0_25px_70px_rgba(10,10,30,0.65)] transition-all duration-300 group">
        <CardContent className="p-8">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Badge className={`${getStatusColor(project.status)} font-normal`}>
                <StatusIcon size={12} className="mr-1" />
                {project.status ?? 'Upcoming'}
              </Badge>
            </div>
            {project.timeline ? (
              <span className="text-sm text-muted-foreground font-normal">
                {project.timeline}
              </span>
            ) : <span />}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            {project.title ? (
              <h3 className="text-2xl font-light text-card-foreground group-hover:text-purple-400 transition-colors duration-200">
                {project.title}
              </h3>
            ) : null}

            <p className="text-muted-foreground leading-relaxed">
              {project.description ?? 'Details coming soon.'}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {(project.tech ?? []).map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="border-border text-muted-foreground hover:border-purple-500 hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{project.status === 'In Development' ? '60%' : '10%'}</span>
            </div>
            <div className="mt-2 w-full bg-secondary rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${project.status === 'In Development'
                    ? 'bg-green-500 w-3/5'
                    : 'bg-blue-500 w-1/12'
                  }`}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

UpcomingProjectCard.displayName = 'UpcomingProjectCard';

const UpcomingProjects = () => {
  const getStatusIcon = useMemo(() => (status) => {
    switch (status) {
      case 'In Development': return Zap;
      case 'Planning': return Calendar;
      default: return Clock;
    }
  }, []);

  const getStatusColor = useMemo(() => (status) => {
    switch (status) {
      case 'In Development': return 'bg-green-900/30 text-green-400 border-green-800';
      case 'Planning': return 'bg-blue-900/30 text-blue-400 border-blue-800';
      default: return 'bg-secondary text-secondary-foreground border-border';
    }
  }, []);

  return (
    <section id="upcoming" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="max-w-6xl mx-auto px-6">
        <GlassPanel className="px-6 py-10 sm:px-10 lg:px-14">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              Upcoming Projects
            </h2>
            <div className="w-16 h-px bg-foreground mx-auto mb-4"></div>
            <p className="text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
              Innovative projects in development that will demonstrate advanced technical skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {(Array.isArray(portfolioData.upcomingProjects) ? portfolioData.upcomingProjects : []).map((project, index) => (
              <UpcomingProjectCard
                key={project.id ?? index}
                project={project}
                index={index}
                getStatusIcon={getStatusIcon}
                getStatusColor={getStatusColor}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-white/3 border border-white/8 backdrop-blur-xl shadow-[0_15px_45px_rgba(8,8,20,0.4)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-card-foreground mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Follow my GitHub and LinkedIn to get updates on these projects as they develop.
                  I regularly share progress, technical challenges, and lessons learned during the development process.
                </p>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};

export default React.memo(UpcomingProjects);