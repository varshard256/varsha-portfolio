import { useState, useEffect } from 'react';
import { Project } from './types';
import { projects } from './data/portfolioData';

import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import BackToTop from './components/BackToTop';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Find the featured project
  const featuredProject =
    projects.find((p) => p.featured) ||
    projects.find((p) => p.id === 'proj-cloud-cost') ||
    projects[0];

  return (
    <div className="relative min-h-screen bg-[#090b10] text-[#e2e8f0] font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top subtle scroll progress bar */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Featured Project Section (Cloud Cost Optimization Dashboard) */}
        {featuredProject && (
          <FeaturedProject
            project={featuredProject}
            onOpenModal={(proj) => setSelectedProject(proj)}
          />
        )}

        {/* All Projects with Category Filtering */}
        <Projects onOpenModal={(proj) => setSelectedProject(proj)} />

        {/* Research Publication Section */}
        <Research />

        {/* Education Timeline */}
        <Education />

        {/* Certifications and Virtual Internships */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
