import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications & Virtual Internships"
      className="py-24 relative border-t border-white/5 bg-[#090b10] bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Certifications & Internships
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Specialized virtual internships and industry-guided coursework across cloud data engineering, mobile architectures, and artificial intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>

                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-slate-800 text-slate-400 border border-white/5 mb-3">
                  {cert.type === 'virtual_internship' ? 'Virtual Internship' : 'Practical Internship'}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-3">
                  {cert.title}
                </h3>
              </div>

              {cert.issuer && (
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{cert.issuer}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
