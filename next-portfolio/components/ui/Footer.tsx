"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://github.com/Wittceec" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/christopher-wittman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:christopher@example.com" className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                </a>
            </div>
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Christopher Wittman. All rights reserved.
            </p>
        </footer>
    );
};
