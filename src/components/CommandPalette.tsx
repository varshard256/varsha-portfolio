import { useState, useEffect, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Mail,
  Download,
  Github,
  Linkedin,
  BookOpen,
  X,
  CornerDownLeft,
  FileText,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal?: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Actions' | 'Social';
  icon: ReactNode;
  action: () => void;
  keywords?: string[];
}

export default function CommandPalette({ isOpen, onClose, onOpenResumeModal }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = (sectionId: string) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'cmd-home',
      label: 'Go Home',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-indigo-400" />,
      action: () => navigateTo('home'),
      keywords: ['hero', 'start', 'top', 'varsha'],
    },
    {
      id: 'cmd-about',
      label: 'Go About',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-sky-400" />,
      action: () => navigateTo('about'),
      keywords: ['bio', 'profile', 'education', 'background'],
    },
    {
      id: 'cmd-skills',
      label: 'Go Skills',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => navigateTo('skills'),
      keywords: ['tech', 'stack', 'languages', 'react', 'python', 'sql'],
    },
    {
      id: 'cmd-experience',
      label: 'Go Experience',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      action: () => navigateTo('experience'),
      keywords: ['internship', 'job', 'work', 'history', 'web digital mantra'],
    },
    {
      id: 'cmd-projects',
      label: 'Go Projects',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo('projects'),
      keywords: ['work', 'portfolio', 'cloud', 'fraud', 'job portal'],
    },
    {
      id: 'cmd-research',
      label: 'Go Research',
      category: 'Navigation',
      icon: <BookOpen className="w-4 h-4 text-pink-400" />,
      action: () => navigateTo('research'),
      keywords: ['paper', 'publication', 'neuro cloud', 'anomaly'],
    },
    {
      id: 'cmd-contact',
      label: 'Go Contact',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => navigateTo('contact'),
      keywords: ['email', 'hire', 'message', 'reach out'],
    },
    {
      id: 'cmd-view-resume',
      label: 'Resume Preview',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onClose();
        if (onOpenResumeModal) onOpenResumeModal();
      },
      keywords: ['view', 'resume', 'cv', 'preview', 'read'],
    },
    {
      id: 'cmd-resume',
      label: 'Download Resume (PDF)',
      category: 'Actions',
      icon: <Download className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        const a = document.createElement('a');
        a.href = personalInfo.resumePath;
        a.download = 'Varsha_RD_Resume.pdf';
        a.click();
      },
      keywords: ['cv', 'pdf', 'credentials', 'download'],
    },
    {
      id: 'cmd-github',
      label: 'Open GitHub',
      category: 'Social',
      icon: <Github className="w-4 h-4 text-slate-300" />,
      action: () => {
        onClose();
        window.open(personalInfo.github, '_blank', 'noreferrer,noopener');
      },
      keywords: ['git', 'repositories', 'code'],
    },
    {
      id: 'cmd-linkedin',
      label: 'Open LinkedIn',
      category: 'Social',
      icon: <Linkedin className="w-4 h-4 text-sky-400" />,
      action: () => {
        onClose();
        window.open(personalInfo.linkedin, '_blank', 'noreferrer,noopener');
      },
      keywords: ['network', 'social', 'profile'],
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase();
    if (cmd.label.toLowerCase().includes(q)) return true;
    if (cmd.category.toLowerCase().includes(q)) return true;
    if (cmd.keywords?.some((kw) => kw.toLowerCase().includes(q))) return true;
    return false;
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open from parent
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length)
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="command-palette-backdrop"
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 px-4"
      >
        <motion.div
          id="command-palette-modal"
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl bg-slate-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
            <Search className="w-5 h-5 text-indigo-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Type a command or jump to section..."
              className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm outline-none font-mono"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-xs font-mono text-slate-500">
                No matching commands found.
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    type="button"
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs font-medium transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-lg ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-800'
                        }`}
                      >
                        {cmd.icon}
                      </div>
                      <span className="font-medium text-sm">{cmd.label}</span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                      <span className={isSelected ? 'text-indigo-200' : 'text-slate-500'}>
                        {cmd.category}
                      </span>
                      {isSelected && (
                        <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/20 text-white">
                          <CornerDownLeft className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 bg-slate-950 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>ESC Close</span>
            </div>
            <span>Varsha R D Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
