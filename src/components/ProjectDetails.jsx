import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import LazyImage from './LazyImage';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the project by id
    const project = portfolioData.projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f8ff]">
                <h2 className="text-base mb-4 text-[#49108b] font-['Space_Mono',monospace] font-bold">Project not found</h2>
                <Button onClick={() => navigate('/')} variant="outline" className="bg-white border-2 border-[#49108b] text-[#7e30e1] rounded-md shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#e26ee5] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] text-xs py-1 px-3">
                    <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to Home
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 bg-[#f3f8ff]">
            <div className="max-w-2xl mx-auto px-6">
                <Button
                    onClick={() => navigate('/')}
                    variant="ghost"
                    className="mb-6 bg-white border-2 border-[#49108b] text-[#7e30e1] rounded-md shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#e26ee5] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] text-xs py-1 px-3"
                >
                    <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to Projects
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    {/* Header Section */}
                    <div className="p-4 bg-white border-2 border-[#49108b] rounded-lg shadow-[3px_3px_0px_0px_#49108b]">
                        <div className="flex flex-col gap-3">
                            <div>
                                <h1 className="text-xl font-bold text-[#49108b] font-['Space_Mono',monospace] mb-2">
                                    {project.title}
                                </h1>
                                {project.category && (
                                    <Badge variant="outline" className="border border-[#49108b] text-[#7e30e1] bg-white rounded-md text-xs py-0.5 px-2 font-['Inter',sans-serif]">
                                        {project.category}
                                    </Badge>
                                )}
                            </div>

                            <div className="flex gap-2">
                                {project.github && (
                                    <Button
                                        variant="outline"
                                        className="bg-white border-2 border-[#49108b] text-[#7e30e1] rounded-md shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#e26ee5] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] font-semibold text-xs py-1 px-3"
                                        onClick={() => window.open(project.github, '_blank')}
                                    >
                                        <Github className="w-3.5 h-3.5 mr-1.5" />
                                        Code
                                    </Button>
                                )}
                                {project.live && (
                                    <Button
                                        className="bg-[#7e30e1] text-white border-2 border-[#49108b] rounded-md shadow-[2px_2px_0px_0px_#49108b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] font-semibold text-xs py-1 px-3"
                                        onClick={() => window.open(project.live, '_blank')}
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                                        Live Demo
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="rounded-lg overflow-hidden border-2 border-[#49108b] shadow-[3px_3px_0px_0px_#49108b] aspect-video relative">
                        <LazyImage
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Overview */}
                    <div className="p-4 bg-white border-2 border-[#49108b] rounded-lg shadow-[3px_3px_0px_0px_#49108b]">
                        <h2 className="text-sm font-bold mb-2 flex items-center text-[#49108b] font-['Space_Mono',monospace] uppercase tracking-wider">
                            <span className="w-1 h-4 bg-[#7e30e1] mr-2 rounded"></span>
                            Overview
                        </h2>
                        <p className="text-[15px] text-[#49108b]/80 leading-7 whitespace-pre-line font-['Inter',sans-serif]">
                            {project.description}
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="p-4 bg-white border-2 border-[#49108b] rounded-lg shadow-[3px_3px_0px_0px_#49108b]">
                        <h2 className="text-sm font-bold mb-3 flex items-center text-[#49108b] font-['Space_Mono',monospace] uppercase tracking-wider">
                            <span className="w-1 h-4 bg-[#e26ee5] mr-2 rounded"></span>
                            Key Features
                        </h2>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start p-2 rounded-md border border-[#49108b]/30 bg-[#f3f8ff]">
                                    <ArrowRight className="w-3.5 h-3.5 text-[#7e30e1] mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs text-[#49108b]/80 font-['Inter',sans-serif] leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="p-4 bg-[#f3f8ff] border-2 border-[#49108b] rounded-lg shadow-[3px_3px_0px_0px_#49108b]">
                        <h3 className="text-sm font-bold mb-3 text-[#49108b] font-['Space_Mono',monospace] uppercase tracking-wider">Technologies</h3>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-[#7e30e1] text-white border border-[#49108b] rounded-md text-xs py-0.5 px-2 font-['Inter',sans-serif]"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
