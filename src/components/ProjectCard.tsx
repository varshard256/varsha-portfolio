import { motion } from 'motion/react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Shield,
  Layers,
  Database,
  Terminal,
  Activity,
  CheckCircle,
  BarChart2,
  Compass,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  // Visual themes and icons based on project category
  const renderVisualBadge = () => {
    if (project.id === 'proj-job-portal') {
      return (
        <div className="h-36 w-full rounded-xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-500/20 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-indigo-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">
              Role: Recruiter / Candidate
            </span>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              REST API Active
            </span>
          </div>
          <div className="space-y-1.5 py-2 font-mono text-[11px] text-slate-300">
            <div className="flex items-center justify-between px-2.5 py-1 rounded bg-slate-900/80 border border-white/5">
              <span>POST /api/jobs/listing</span>
              <span className="text-emerald-400">201 Created</span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1 rounded bg-slate-900/80 border border-white/5">
              <span>GET /api/candidates/pool</span>
              <span className="text-sky-400">PostgreSQL Pool</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2">
            <span>Relational Schema</span> • <span>JWT RBAC</span>
          </div>
        </div>
      );
    }

    if (project.id === 'proj-fraud-detection') {
      return (
        <div className="h-36 w-full rounded-xl bg-gradient-to-br from-rose-950/50 via-slate-900 to-slate-950 border border-rose-500/20 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-rose-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono border border-rose-500/30">
              Anomaly Detection
            </span>
            <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
              <Activity className="w-3 h-3" />
              Unsupervised ML
            </span>
          </div>
          <div className="flex items-center justify-around py-3 font-mono text-center">
            <div className="p-2 rounded-lg bg-slate-900 border border-white/5">
              <div className="text-[10px] text-slate-400">Distance Metric</div>
              <div className="text-xs font-bold text-white">Mahalanobis</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-white/5">
              <div className="text-[10px] text-slate-400">Labels Needed</div>
              <div className="text-xs font-bold text-emerald-400">Zero (Unlabeled)</div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2">
            <span>Python Pipeline</span> • <span>MATLAB GUI Output</span>
          </div>
        </div>
      );
    }

    if (project.id === 'proj-facebook-malicious') {
      return (
        <div className="h-36 w-full rounded-xl bg-gradient-to-br from-cyan-950/50 via-slate-900 to-slate-950 border border-cyan-500/20 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
              Security & Privacy Analysis
            </span>
            <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Java Heuristic Engine
            </span>
          </div>
          <div className="space-y-1.5 py-2 font-mono text-[11px]">
            <div className="flex items-center justify-between px-2.5 py-1 rounded bg-slate-900 border border-white/5 text-slate-300">
              <span>Permission Scope Audit</span>
              <span className="text-rose-400 font-bold">Suspicious Flag</span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1 rounded bg-slate-900 border border-white/5 text-slate-300">
              <span>Data-Access Profile</span>
              <span className="text-emerald-400">MySQL Logged</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2">
            <span>Access Risk Evaluation</span> • <span>Java Backend</span>
          </div>
        </div>
      );
    }

    if (project.id === 'proj-tourism-management') {
      return (
        <div className="h-36 w-full rounded-xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/20 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-500/30">
              Booking & Management System
            </span>
            <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
              <Compass className="w-3 h-3" />
              PHP + MySQL
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 py-2 font-mono text-[11px]">
            <div className="p-2 rounded bg-slate-900 border border-white/5 text-center">
              <div className="text-[10px] text-slate-400">Bookings Module</div>
              <div className="text-xs font-bold text-slate-200">Centralized</div>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-white/5 text-center">
              <div className="text-[10px] text-slate-400">Accommodations</div>
              <div className="text-xs font-bold text-slate-200">Synchronized</div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2">
            <span>Centralized Database</span> • <span>Travel Workflows</span>
          </div>
        </div>
      );
    }

    // Default for cloud cost in the regular cards list if rendered
    return (
      <div className="h-36 w-full rounded-xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/20 p-4 flex flex-col justify-between">
        <span className="text-xs font-mono text-indigo-300">Cloud Cost Prediction Engine</span>
        <div className="font-mono text-xs text-slate-300">Python • Flask • Machine Learning</div>
      </div>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-indigo-500/5"
    >
      <div>
        {/* Project Card Header Visual */}
        <div className="mb-5">
          {renderVisualBadge()}
        </div>

        {/* Categories Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-mono uppercase tracking-wider border border-white/5"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <div className="mb-4 space-y-1.5">
            {project.highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span className="truncate">{hl}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Technologies Pills */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-slate-800/90 text-indigo-300 text-[11px] font-mono border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-colors active:scale-95"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="View on GitHub"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-sky-300 border border-white/10 transition-colors"
              title="Live Demo"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
