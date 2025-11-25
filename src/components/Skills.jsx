import React from "react";
import { SkillIcons } from "./SkillIcons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

const SectionHeading = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight text-foreground">
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
    className="flex items-center gap-2 bg-background border border-white/10 hover:border-white/30 rounded-lg px-4 py-3 transition-all duration-300 group cursor-default shadow-sm hover:shadow-md"
  >
    {SkillIcons[skill] && (
      <img
        src={SkillIcons[skill]}
        alt={skill}
        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    )}
    <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
      {skill}
    </span>
  </motion.div>
);

const SkillSection = ({ title, skills, delay = 0 }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-xl md:text-2xl font-light text-center mb-8 text-muted-foreground/80 tracking-wide">
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
        className="flex flex-wrap justify-center gap-4"
      >
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({
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
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Skills & Expertise</SectionHeading>

        <div className="p-8">
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