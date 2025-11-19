"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";


const projects = [
    {
        title: "Networking TUI",
        description: "Unified terminal UI for Linux network ops: interfaces, diagnostics, packet captures, and CSV exports.",
        tags: ["Python", "Curses", "Asyncio", "Linux"],
        link: "https://github.com/Wittceec/net-tui",
        github: "https://github.com/Wittceec/net-tui",
        image: "/assets/images/net-tui-placeholder.png", // Placeholder, will need actual image or generate one
    },
    {
        title: "Receptionist Management",
        description: "Power Apps + Dataverse tool for visitor intake, ID imaging, and host notifications.",
        tags: ["Power Apps", "Dataverse", "Power Automate"],
        link: "/projects/#receptionist-management-check-in-automation",
        github: null,
        image: "/assets/images/receptionist-placeholder.png",
    },
    {
        title: "EmailSuite Automation",
        description: "Template-driven IT comms tool that parses change data and drafts polished alerts.",
        tags: ["PowerShell", "HTML", "Automation"],
        link: "/projects/#emailsuite-automation-project",
        github: null,
        image: "/assets/images/emailsuite-placeholder.png",
    },
    {
        title: "Interactive Resume Center",
        description: "3D data center experience showcasing resume highlights with spatial navigation.",
        tags: ["Three.js", "GSAP", "3D"],
        link: "https://github.com/Wittceec/Resume_Center",
        github: "https://github.com/Wittceec/Resume_Center",
        image: "/assets/images/resume-center-placeholder.png",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Recent Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Automation, immersive visualizations, and practical tooling that ships fast.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
