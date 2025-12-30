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
      <div className="max-w-2xl mx-auto px-6">
        <div className="p-8 bg-white border-2 border-[#49108b] rounded-xl shadow-[4px_4px_0px_0px_#49108b]">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-[#49108b] mb-2 font-['Space_Mono',monospace]">
              About Me
            </h2>
            <div className="w-12 h-1 bg-[#7e30e1] rounded-full"></div>
          </div>

          <div
            ref={ref}
            className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Intro */}
            <p className="text-[14px] font-normal text-[#49108b]/80 leading-7 font-['Inter',sans-serif]">
              {portfolioData.about.intro}
            </p>

              {/* Highlights */}
            <div className="space-y-3">
              {highlights.map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl border-2 border-[#49108b] bg-white shadow-[2px_2px_0px_0px_#49108b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-[#7e30e1] text-white">
                    <Icon size={16} />
                  </div>
                  <span className="text-[13px] font-medium text-[#49108b] font-['Inter',sans-serif]">{text}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <Card className="bg-[#f3f8ff] border-2 border-[#49108b] rounded-xl shadow-[2px_2px_0px_0px_#49108b]">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold text-[#49108b] mb-3 font-['Space_Mono',monospace] uppercase tracking-wider">Education</h3>
                <div className="space-y-1.5">
                  <h4 className="text-[14px] font-semibold text-[#7e30e1] font-['Inter',sans-serif]">{portfolioData.about.education.degree}</h4>
                  <p className="text-[13px] text-[#49108b]/80 font-['Inter',sans-serif]">{portfolioData.about.education.university}</p>
                  <p className="text-xs text-[#49108b]/60 font-['Inter',sans-serif] uppercase tracking-wider">{portfolioData.about.education.graduation}</p>
                </div>
              </CardContent>
            </Card>

            {/* Coursework */}
            <Card className="bg-[#f3f8ff] border-2 border-[#49108b] rounded-xl shadow-[2px_2px_0px_0px_#49108b]">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold text-[#49108b] mb-4 font-['Space_Mono',monospace] uppercase tracking-wider">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.about.education.coursework.map((course, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-2 border-[#49108b] text-[#7e30e1] bg-white rounded-lg text-xs py-1 px-3 hover:bg-[#e26ee5] hover:text-white transition-all duration-200 font-['Inter',sans-serif] font-medium"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            {portfolioData.experience && portfolioData.experience.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#49108b] font-['Space_Mono',monospace] uppercase tracking-wider">Experience</h3>
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="flex gap-3 p-3 rounded-lg border-2 border-[#49108b] bg-white shadow-[2px_2px_0px_0px_#49108b]">
                    <div className="w-10 h-10 rounded-md bg-[#7e30e1] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {exp.company.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#7e30e1] font-['Inter',sans-serif]">{exp.title}</h4>
                      <p className="text-xs text-[#49108b]/80 font-['Inter',sans-serif]">{exp.company}</p>
                      <p className="text-xs text-[#49108b]/60 font-['Inter',sans-serif] uppercase tracking-wider">{exp.period}</p>
                      <p className="text-xs text-[#49108b]/80 leading-relaxed font-['Inter',sans-serif] mt-1">{exp.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {exp.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px] bg-[#7e30e1] text-white border border-[#49108b] rounded-md py-0 px-1.5 font-['Inter',sans-serif]">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);