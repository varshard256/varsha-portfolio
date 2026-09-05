import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      aria-label="Footer"
      className="py-12 border-t border-white/10 bg-[#080a0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-white tracking-wide">
                {personalInfo.initials}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400">
                © 2026 {personalInfo.name}. Built with React.
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Full Stack Developer • Bengaluru, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              id="footer-github-link"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all text-xs flex items-center gap-1.5"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              id="footer-linkedin-link"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all text-xs flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all text-xs flex items-center gap-1.5"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>

            {/* Back to Top */}
            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-xs flex items-center gap-1"
              title="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-xs">Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
