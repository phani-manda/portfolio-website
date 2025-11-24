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
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl mb-4">Project not found</h2>
                <Button onClick={() => navigate('/')} variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24 text-foreground">
            <Button
                onClick={() => navigate('/')}
                variant="ghost"
                className="mb-8 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-3">
                                {project.category && (
                                    <Badge variant="outline" className="border-purple-500/50 text-purple-400 text-base py-1 px-3">
                                        {project.category}
                                    </Badge>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {project.github && (
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                                    onClick={() => window.open(project.github, '_blank')}
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    Code
                                </Button>
                            )}
                            {project.live && (
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                                    onClick={() => window.open(project.live, '_blank')}
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Live Demo
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Image */}
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-16 aspect-video relative group">
                    <LazyImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Description & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 flex items-center">
                                <span className="w-1 h-8 bg-purple-500 mr-4 rounded-full"></span>
                                Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {project.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-6 flex items-center">
                                <span className="w-1 h-8 bg-pink-500 mr-4 rounded-full"></span>
                                Key Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Tech Stack & Info */}
                    <div className="space-y-8">
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/20 py-2 px-3"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
