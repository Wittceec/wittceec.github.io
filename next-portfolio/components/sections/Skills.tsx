"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    { category: "Automation", items: ["Power Automate", "PowerShell", "Python", "Ansible"] },
    { category: "Platform", items: ["Azure", "Microsoft 365", "ServiceNow", "Linux"] },
    { category: "Web & UI", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Ops", items: ["Active Directory", "Networking", "Monitoring", "Security"] },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Technical Arsenal
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The tools I use to build resilient infrastructure and automate workflows.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-white/10 pb-2">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item, itemIndex) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: groupIndex * 0.1 + itemIndex * 0.05 }}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
