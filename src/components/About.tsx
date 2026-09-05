import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Code, Cpu, Database, GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap: Record<string, ReactNode> = {
    Code: <Code className="w-5 h-5 text-indigo-400" />,
    Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
    Database: <Database className="w-5 h-5 text-emerald-400" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-24 relative border-t border-white/5 bg-[#090b10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Interests */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm shadow-xl"
            >
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6">
                {personalInfo.aboutDescription}
              </p>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                  Core Engineering Focus
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {personalInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-white/10 hover:border-indigo-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Based in {personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Master of Computer Applications</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Persona & Capability Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.personaCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  {iconMap[card.icon]}
                </div>
                <h4 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
