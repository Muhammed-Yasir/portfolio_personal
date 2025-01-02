import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    technologies: ['React', 'Firebase', 'Material-UI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using DALL-E API.',
    imageUrl: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&w=600&q=80',
    technologies: ['OpenAI', 'React', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const skills = [
  'React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB',
  'GraphQL', 'Next.js', 'Tailwind CSS', 'PostgreSQL'
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900">About Me</h2>
          <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
                alt="Profile"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with expertise in React, Node.js, and cloud technologies.
                With over 5 years of experience, I've helped businesses build scalable web applications and
                deliver exceptional user experiences.
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Some of my recent work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;