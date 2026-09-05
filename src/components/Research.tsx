import { motion } from 'motion/react';
import { BookOpen, Sparkles, Cpu, Layers, ShieldAlert, Activity } from 'lucide-react';
import { researchData } from '../data/portfolioData';

export default function Research() {
  return (
    <section
      id="research"
      aria-label="Research & Publications"
      className="py-24 relative border-t border-white/5 bg-[#090b10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Scholarly & Academic Frameworks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Research Work
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Exploratory academic investigation focused on artificial intelligence paradigms applied to cloud computing infrastructure and automated anomaly telemetry.
          </p>
        </div>

        {/* Research Publication Card */}
        <div className="space-y-6">
          {researchData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-indigo-500/10 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span>{item.type}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Research Focus Pillars */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                      <ShieldAlert className="w-4 h-4 text-indigo-400" />
                      <span>Intelligent Anomaly Detection</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                      <Activity className="w-4 h-4 text-sky-400" />
                      <span>Cloud Performance Monitoring</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Badge Box */}
                <div className="shrink-0 flex md:flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-white/10 text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-1">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Domain
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Cloud & AI
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
