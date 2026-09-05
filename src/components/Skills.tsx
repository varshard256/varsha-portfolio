import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Layout,
  Server,
  Database,
  Sparkles,
  BarChart3,
  Wrench,
  Layers,
  Check,
} from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, ReactNode> = {
    'Programming Languages': <Terminal className="w-4 h-4 text-indigo-400" />,
    Frontend: <Layout className="w-4 h-4 text-sky-400" />,
    Backend: <Server className="w-4 h-4 text-emerald-400" />,
    Databases: <Database className="w-4 h-4 text-amber-400" />,
    'Data Science & Machine Learning': <Sparkles className="w-4 h-4 text-purple-400" />,
    'Data Visualization': <BarChart3 className="w-4 h-4 text-pink-400" />,
    'Tools & Concepts': <Wrench className="w-4 h-4 text-cyan-400" />,
  };

  const filteredGroups =
    selectedCategory === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.category === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-24 relative border-t border-white/5 bg-[#090b10] bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Hands-on technical stack spanning full-stack web engineering, relational and document databases, data science pipelines, and systems tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            All Categories ({skillGroups.reduce((acc, g) => acc + g.skills.length, 0)} Skills)
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setSelectedCategory(group.category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedCategory === group.category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {categoryIcons[group.category]}
              <span>{group.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm group hover:shadow-xl hover:shadow-indigo-500/5"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-800/90 border border-white/10 group-hover:scale-110 transition-transform duration-200">
                    {categoryIcons[group.category]}
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  {group.skills.length} tools
                </span>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/70 hover:bg-indigo-950/60 text-slate-300 hover:text-indigo-200 border border-white/5 hover:border-indigo-500/30 transition-all duration-200 cursor-default shadow-sm"
                  >
                    <Check className="w-3 h-3 text-indigo-400/80" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
