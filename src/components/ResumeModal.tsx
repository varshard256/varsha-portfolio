import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  ExternalLink,
  Printer,
  Copy,
  Check,
  FileText,
  Phone,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.open(personalInfo.resumePath, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="resume-modal-backdrop"
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          id="resume-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        >
          {/* Header Action Bar */}
          <div className="px-5 py-4 bg-slate-950 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Resume — Varsha R D</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    PDF Attached
                  </span>
                </h3>
                <p className="text-[11px] font-mono text-slate-400">
                  Full Stack Developer • Bengaluru, Karnataka
                </p>
              </div>
            </div>

            {/* Actions: Download, Open Tab, Close */}
            <div className="flex items-center gap-2">
              <a
                id="resume-modal-download-btn"
                href={personalInfo.resumePath}
                download="Varsha_RD_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors"
                title="Download PDF File"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer noopener"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
                title="Open PDF in New Window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>

              <button
                id="close-resume-modal-btn"
                onClick={onClose}
                type="button"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-white/10 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Paper Canvas Container */}
          <div className="p-4 sm:p-8 overflow-y-auto bg-slate-950/60 flex justify-center">
            
            {/* The Paper Sheet replicating the 1-page PDF exactly */}
            <div className="w-full max-w-3xl bg-white text-slate-900 rounded-sm shadow-2xl p-6 sm:p-10 font-sans text-xs leading-normal select-text">
              
              {/* Name & Contact Header */}
              <div className="text-center pb-3 mb-3">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 uppercase mb-1">
                  Varsha R D
                </h1>
                <div className="text-[11px] sm:text-xs text-slate-700 font-normal flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                  <span>Bengaluru, Karnataka</span>
                  <span>|</span>
                  <a href={`tel:${personalInfo.phone}`} className="hover:underline text-slate-900 font-medium">
                    {personalInfo.phone}
                  </a>
                  <span>|</span>
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline text-indigo-700 font-medium">
                    {personalInfo.email}
                  </a>
                  <span>|</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline text-indigo-700"
                  >
                    linkedin.com/in/varsha-r-d-5b8a71291
                  </a>
                  <span>|</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline text-indigo-700"
                  >
                    github.com/varshard256
                  </a>
                </div>
              </div>

              {/* Section: PROFESSIONAL SUMMARY */}
              <div className="mb-4">
                <h2 className="text-[12px] font-bold tracking-wider uppercase text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
                  Professional Summary
                </h2>
                <p className="text-[11px] sm:text-[11.5px] text-slate-800 leading-relaxed text-justify">
                  MCA graduate with hands-on Full Stack Development experience building web applications using React.js, Node.js, Express.js, and PostgreSQL. Skilled in developing RESTful APIs, authentication systems, and database-driven applications, with additional experience in Python, Flask, Data Science, and Machine Learning. Seeking an entry-level Software Developer or Full Stack Developer role.
                </p>
              </div>

              {/* Section: TECHNICAL SKILLS */}
              <div className="mb-4">
                <h2 className="text-[12px] font-bold tracking-wider uppercase text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
                  Technical Skills
                </h2>
                <div className="text-[11px] sm:text-[11.5px] space-y-1 text-slate-800">
                  <p>
                    <span className="font-bold text-slate-950">Languages:</span> Java, Python, C, JavaScript
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">Frontend:</span> React.js, HTML, CSS
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">Backend:</span> Node.js, Express.js, Flask, PHP, Django REST Framework
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">Databases:</span> PostgreSQL, MySQL, MongoDB, SQLite
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">Data Science & Machine Learning:</span> Pandas, NumPy, Scikit-learn, Matplotlib, Jupyter Notebook
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">Data Visualization:</span> Tableau, Power BI, Advanced Excel
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">Tools & Concepts:</span> Git, GitHub, REST APIs, JWT Authentication, XAMPP
                  </p>
                </div>
              </div>

              {/* Section: EXPERIENCE */}
              <div className="mb-4">
                <h2 className="text-[12px] font-bold tracking-wider uppercase text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
                  Experience
                </h2>

                {/* Job 1 */}
                <div className="mb-2.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                    <span className="font-bold text-[11.5px] text-slate-950">
                      Full Stack Developer Intern — Web Digital Mantra IT Services
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">
                      May 2026 – July 2026
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800">
                    <li>Developed responsive web applications using React.js for the frontend and Node.js with Express.js for the backend.</li>
                    <li>Built and integrated RESTful APIs to enable communication between frontend and backend services.</li>
                    <li>Integrated PostgreSQL to store and manage user data and application records.</li>
                    <li>Implemented JWT-based authentication and role-based access control for secure application access.</li>
                    <li>Debugged and tested application features to improve functionality and reliability.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                    <span className="font-bold text-[11.5px] text-slate-950">
                      Data Science Intern — Skyllx Technologies Pvt Ltd
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">
                      January 2026 – May 2026
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] sm:text-[11.5px] text-slate-800">
                    <li>Completed a Data Science internship, applying data science concepts and Python-based tools in practical work.</li>
                  </ul>
                </div>
              </div>

              {/* Section: PROJECTS */}
              <div className="mb-4">
                <h2 className="text-[12px] font-bold tracking-wider uppercase text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
                  Projects
                </h2>

                {/* Proj 1 */}
                <div className="mb-2">
                  <p className="font-bold text-[11.5px] text-slate-950">
                    Web Digital Job Portal |
                  </p>
                  <p className="text-[11px] text-slate-800 mb-0.5">
                    <span className="font-bold">Technologies:</span> React.js, Node.js, PostgreSQL
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800">
                    <li>Built a full-stack job portal enabling recruiters to post job openings and candidates to search and apply for positions.</li>
                    <li>Developed RESTful APIs and role-based dashboards to streamline recruiter and candidate workflows.</li>
                  </ul>
                </div>

                {/* Proj 2 */}
                <div className="mb-2">
                  <p className="font-bold text-[11.5px] text-slate-950">
                    Cloud Cost Optimization and Resource Prediction Dashboard |
                  </p>
                  <p className="text-[11px] text-slate-800 mb-0.5">
                    <span className="font-bold">Technologies:</span> Python, Flask, SQLite
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800">
                    <li>Developed a Flask-based dashboard to monitor cloud resources and analyze associated costs.</li>
                    <li>Implemented Machine Learning models to predict CPU, memory, storage, and cost usage.</li>
                  </ul>
                </div>

                {/* Proj 3 */}
                <div className="mb-2">
                  <p className="font-bold text-[11.5px] text-slate-950">
                    Tourism Management System |
                  </p>
                  <p className="text-[11px] text-slate-800 mb-0.5">
                    <span className="font-bold">Technologies:</span> PHP, MySQL
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800">
                    <li>Designed and developed a web application to automate tourism operations, including travel bookings and accommodations.</li>
                    <li>Streamlined tour planning and customer service through a centralized, database-driven system.</li>
                  </ul>
                </div>

                {/* Proj 4 */}
                <div>
                  <p className="font-bold text-[11.5px] text-slate-950">
                    Detecting Malicious Facebook Applications |
                  </p>
                  <p className="text-[11px] text-slate-800 mb-0.5">
                    <span className="font-bold">Technologies:</span> Java, MySQL
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800">
                    <li>Built a Java-based system to identify malicious Facebook applications that pose privacy and data-misuse risks.</li>
                    <li>Analyzed application permissions to flag suspicious data-access behavior and improve user security.</li>
                  </ul>
                </div>
              </div>

              {/* Section: EDUCATION */}
              <div className="mb-4">
                <h2 className="text-[12px] font-bold tracking-wider uppercase text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
                  Education
                </h2>

                <div className="mb-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-[11.5px] text-slate-950">
                      Master of Computer Applications (MCA) — Surana College Autonomous, Bengaluru
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">
                      2024 – 2026
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900">
                    CGPA: 8.5
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-[11.5px] text-slate-950">
                      Bachelor of Computer Applications (BCA) — Government First Grade College, Bengaluru
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">
                      2020 – 2023
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900">
                    CGPA: 8.75
                  </p>
                </div>
              </div>

              {/* Section: CERTIFICATIONS & VIRTUAL INTERNSHIPS */}
              <div className="mb-4">
                <h2 className="text-[12px] font-bold tracking-wider uppercase text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
                  Certifications & Virtual Internships
                </h2>
                <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800">
                  <li>AWS Data Engineering Virtual Internship</li>
                  <li>AICTE Android Developer Virtual Internship</li>
                  <li>AICTE AI-ML Virtual Internship</li>
                </ul>
              </div>

              {/* Section: PUBLICATION */}
              <div>
                <h2 className="text-[12px] font-bold tracking-wider uppercase text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
                  Publication
                </h2>
                <p className="text-[11px] sm:text-[11.5px] text-slate-800">
                  Neuro Cloud: An AI-Driven Framework for Intelligent Anomaly Detection and Performance Monitoring in a Cloud Environment
                </p>
              </div>

            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3.5 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={personalInfo.resumePath}
                download="Varsha_RD_Resume.pdf"
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
