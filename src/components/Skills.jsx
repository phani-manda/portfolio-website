import React from "react";
import { SkillIcons } from "./SkillIcons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

const SectionHeading = ({ children }) => (
  <h2 className="text-xl font-bold mb-2 tracking-tight text-[#49108b] font-['Space_Mono',monospace]">
    {children}
  </h2>
);

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SkillCard = ({ skill }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-center gap-2 bg-white border-2 border-[#49108b] rounded-lg px-3 py-2 shadow-[2px_2px_0px_0px_#49108b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 group cursor-default"
  >
    {SkillIcons[skill] && (
      <img
        src={SkillIcons[skill]}
        alt={skill}
        className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    )}
    <span className="text-[13px] text-[#49108b] group-hover:text-[#7e30e1] transition-colors font-medium font-['Inter',sans-serif]">
      {skill}
    </span>
  </motion.div>
);

const SkillSection = ({ title, skills, delay = 0 }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-xs font-bold mb-4 text-[#7e30e1] tracking-widest uppercase font-['Inter',sans-serif]">
        {title}
      </h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay
            }
          }
        }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const [ref] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { languages, soft, frontend, backend, databases, tools } = portfolioData.skills;

  // Combine for "Technologies Known"
  const technologies = [
    ...(frontend || []),
    ...(backend || []),
    ...(databases || []),
    ...(tools || [])
  ];

  // Remove duplicates
  const uniqueTechnologies = [...new Set(technologies)];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 relative overflow-hidden"
    >
      <div className="max-w-2xl mx-auto px-6">
        <div className="p-8 bg-white border-2 border-[#49108b] rounded-xl shadow-[4px_4px_0px_0px_#49108b]">
          <div className="mb-8">
            <SectionHeading>Skills & Expertise</SectionHeading>
            <div className="w-12 h-1 bg-[#7e30e1] rounded-full"></div>
          </div>
          {/* 1. Technical Skills (Languages) */}
          <SkillSection title="Technical Skills" skills={languages} />

          {/* 2. Technologies Known */}
          <SkillSection title="Technologies Known" skills={uniqueTechnologies} delay={0.2} />

          {/* 3. Soft Skills */}
          <SkillSection title="Soft Skills" skills={soft} delay={0.4} />
        </div>
      </div>
    </section>
  );
}