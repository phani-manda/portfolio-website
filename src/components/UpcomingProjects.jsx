import React, { useMemo } from 'react';
import { Clock, Zap, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Memoized Project Card Component
const UpcomingProjectCard = React.memo(({ project, index, getStatusIcon, getStatusColor }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: false,
    rootMargin: '50px',
  });

  const StatusIcon = getStatusIcon(project.status);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="bg-white border-2 border-[#49108b] rounded-lg shadow-[2px_2px_0px_0px_#49108b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 group">
        <CardContent className="p-4">
          {/* Status Badge & Timeline */}
          <div className="flex items-center justify-between mb-3">
            <Badge className={`${getStatusColor(project.status)} font-semibold border rounded-md text-[10px] py-0.5 px-2 font-['Inter',sans-serif]`}>
              <StatusIcon size={10} className="mr-1" />
              {project.status ?? 'Upcoming'}
            </Badge>
            {project.timeline ? (
              <span className="text-xs text-[#49108b]/60 font-medium font-['Inter',sans-serif] uppercase tracking-wider">
                {project.timeline}
              </span>
            ) : <span />}
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            {project.title ? (
              <h3 className="text-sm font-bold text-[#49108b] group-hover:text-[#7e30e1] transition-colors duration-200 font-['Space_Mono',monospace]">
                {project.title}
              </h3>
            ) : null}

            <p className="text-xs text-[#49108b]/80 leading-relaxed font-['Inter',sans-serif]">
              {project.description ?? 'Details coming soon.'}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1">
              {(project.tech ?? []).map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="border border-[#49108b] text-[#7e30e1] bg-white rounded-md text-[10px] py-0 px-1.5 hover:bg-[#e26ee5] hover:text-white transition-all duration-200 font-['Inter',sans-serif]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-3 pt-3 border-t border-[#49108b]/20">
            <div className="flex items-center justify-between text-xs text-[#49108b]/60 font-['Inter',sans-serif]">
              <span>Progress</span>
              <span>{project.status === 'In Development' ? '60%' : '10%'}</span>
            </div>
            <div className="mt-1.5 w-full bg-[#f3f8ff] border border-[#49108b]/30 rounded h-1.5">
              <div
                className={`h-1.5 rounded transition-all duration-300 ${project.status === 'In Development'
                  ? 'bg-[#7e30e1] w-3/5'
                  : 'bg-[#e26ee5] w-1/12'
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
      case 'In Development': return 'bg-[#7e30e1] text-white border-[#49108b]';
      case 'Planning': return 'bg-[#e26ee5] text-white border-[#49108b]';
      default: return 'bg-white text-[#49108b] border-[#49108b]';
    }
  }, []);

  return (\n    <section id=\"upcoming\" className=\"relative py-12\">\n      <div className=\"max-w-2xl mx-auto px-6\">", "oldString": "  return (\n    <section id=\"upcoming\" className=\"relative py-12 bg-[#f3f8ff]\">\n      <div className=\"absolute inset-0 -z-10\" />\n      <div className=\"max-w-2xl mx-auto px-6\">
        <div className="p-6 bg-white border-2 border-[#49108b] rounded-lg shadow-[3px_3px_0px_0px_#49108b]">
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="text-xl font-bold tracking-tight text-[#49108b] mb-2 font-['Space_Mono',monospace]">
              Upcoming Projects
            </h2>
            <div className="w-10 h-0.5 bg-[#7e30e1] mb-3 rounded-lg"></div>
            <p className="text-sm font-normal text-[#49108b]/80 leading-7 font-['Inter',sans-serif]">
              Projects in development demonstrating advanced skills
            </p>
          </div>

          {/* Projects - Single Column */}
          <div className="space-y-3">
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
          <div className="mt-4">
            <Card className="bg-[#f3f8ff] border-2 border-[#49108b] rounded-lg shadow-[2px_2px_0px_0px_#49108b]">
              <CardContent className="p-4">
                <h3 className="text-sm font-bold text-[#49108b] mb-1 font-['Space_Mono',monospace]">
                  Stay Updated
                </h3>
                <p className="text-xs text-[#49108b]/80 leading-relaxed font-['Inter',sans-serif]">
                  Follow my GitHub and LinkedIn for updates on these projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(UpcomingProjects);