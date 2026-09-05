import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="py-24 relative border-t border-white/5 bg-[#090b10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Formal computer science degrees establishing core principles in algorithms, data structures, full-stack systems, and computational theory.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {edu.degree}
                </h3>

                <div className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.institution}</span>
                </div>

                {edu.cgpa && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-4">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Graduated with CGPA: <strong>{edu.cgpa}</strong></span>
                  </div>
                )}

                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
