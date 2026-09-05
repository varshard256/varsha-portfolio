import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Filter, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  onOpenModal: (project: Project) => void;
}

type FilterCategory = 'All' | 'Full Stack' | 'Data Science' | 'Machine Learning' | 'Security';

export default function Projects({ onOpenModal }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filterCategories: FilterCategory[] = [
    'All',
    'Full Stack',
    'Data Science',
    'Machine Learning',
    'Security',
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories.includes(activeFilter as any);
  });

  return (
    <section
      id="projects"
      aria-label="Software Projects"
      className="py-24 relative border-t border-white/5 bg-[#090b10] bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              Engineered Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Software engineering systems spanning full-stack architectures, predictive machine learning pipelines, and application security diagnostics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-white/10 rounded-xl backdrop-blur-md self-start md:self-auto">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500 font-mono text-sm">
            No projects found in this category.
          </div>
        )}

      </div>
    </section>
  );
}
