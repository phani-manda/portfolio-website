import React, { useMemo } from 'react';
import { GraduationCap, Award, Users, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const highlights = useMemo(() => [
    { icon: GraduationCap, text: portfolioData.about.highlights[0] },
    { icon: Code, text: portfolioData.about.highlights[1] },
    { icon: Award, text: portfolioData.about.highlights[2] },
    { icon: Users, text: portfolioData.about.highlights[3] }
  ], []);

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: false,
    rootMargin: '50px',
  });

  return (
    <section id="about" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="px-6 py-10 sm:px-10 lg:px-14">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              About Me
            </h2>
            <div className="w-16 h-px bg-foreground mx-auto"></div>
          </div>

          <div
            ref={ref}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
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
                    className="flex items-center space-x-3 p-4 rounded-2xl border border-white/10 bg-background hover:border-white/20 transition-transform duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-normal text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>

              {/* Education */}
              <Card className="bg-background border border-white/10 shadow-lg">
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
              <Card className="bg-background border border-white/10 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-light text-card-foreground mb-6">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.about.education.coursework.map((course, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-white/20 text-muted-foreground hover:border-purple-500 hover:text-purple-400 transition-colors duration-200"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              {portfolioData.experience && portfolioData.experience.length > 0 && (
                <Card className="bg-background border border-white/10 shadow-lg mt-6">
                  <CardContent className="p-6 space-y-6">
                    <h3 className="text-xl font-light text-card-foreground">Experience</h3>
                    {portfolioData.experience.map((exp, index) => (
                      <div key={index} className="space-y-3 rounded-2xl border border-white/10 bg-background/50 p-4">
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
      </div>
    </section>
  );
};

export default React.memo(About);