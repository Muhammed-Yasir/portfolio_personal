import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from './SocialLink';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-blue-600 via-purple-700 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center text-white">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
              John Doe
            </h1>
            <p className="mt-6 text-2xl text-gray-200">Full Stack Developer</p>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Crafting beautiful web experiences with modern technologies
            </p>
          </div>
          
          <div className="mt-10 flex justify-center space-x-6">
            <SocialLink href="https://github.com" icon={<Github size={28} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={28} />} label="LinkedIn" />
            <SocialLink href="mailto:contact@example.com" icon={<Mail size={28} />} label="Email" />
          </div>
          
          <div className="mt-16">
            <a
              href="#projects"
              className="inline-block px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;