import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Server,
  Sparkles,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'stack'>('architecture');

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Introduction & Hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center overflow-hidden bg-grid-pattern bg-radial-gradient"
    >
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Profile & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <motion.div
              id="hero-status-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.badgeText}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-200">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              id="hero-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold mb-4 leading-relaxed"
            >
              {personalInfo.heroTagline}
            </motion.h2>

            {/* Short professional description */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-6"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-8"
            >
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-white/5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                MCA (2024 – 2026)
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              id="hero-cta-buttons"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              <button
                id="hero-view-work-btn"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              id="hero-social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs font-mono text-slate-500 mr-2">Connect:</span>
              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-all hover:scale-105 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-white/10 transition-all hover:scale-105 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-white/10 transition-all hover:scale-105 shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Technical Visual */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              id="hero-technical-workspace"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-indigo-400" />
                    vrd-workspace
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                    Online
                  </span>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center px-3 pt-2 bg-slate-950/40 border-b border-white/5 gap-1">
                <button
                  id="tab-architecture"
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'architecture'
                      ? 'bg-slate-900 text-indigo-300 border-t border-x border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>Architecture.flow</span>
                </button>
                <button
                  id="tab-code"
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'code'
                      ? 'bg-slate-900 text-indigo-300 border-t border-x border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3 h-3" />
                  <span>Controller.ts</span>
                </button>
                <button
                  id="tab-stack"
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'stack'
                      ? 'bg-slate-900 text-indigo-300 border-t border-x border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3 h-3" />
                  <span>Schema.sql</span>
                </button>
              </div>

              {/* Tab Body */}
              <div className="p-5 min-h-[310px] flex flex-col justify-between font-mono text-xs">
                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    <div className="text-[11px] text-slate-400 mb-2">
                      // Full-Stack Architecture Pipeline
                    </div>

                    {/* Node 1: Client */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-indigo-500/30 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-200 text-xs">
                            Frontend Client
                          </div>
                          <div className="text-[11px] text-slate-400">
                            React.js • Tailwind CSS • Vite
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        200 OK
                      </span>
                    </div>

                    <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500/50 to-sky-500/50 mx-auto" />

                    {/* Node 2: API & Engine */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-sky-500/30 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-200 text-xs">
                            Backend Microservices & ML
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Node.js / Express • Flask • Python ML
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                        JWT Auth
                      </span>
                    </div>

                    <div className="w-0.5 h-3 bg-gradient-to-b from-sky-500/50 to-emerald-500/50 mx-auto" />

                    {/* Node 3: Persistence */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/30 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-200 text-xs">
                            Relational & Analytical DB
                          </div>
                          <div className="text-[11px] text-slate-400">
                            PostgreSQL • MySQL • SQLite
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Pooled
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="text-slate-300 text-[11px] leading-relaxed space-y-1 overflow-x-auto">
                    <p className="text-slate-500">// RESTful API Handler with JWT & Validation</p>
                    <p>
                      <span className="text-purple-400">import</span> &#123; Request, Response
                      &#125; <span className="text-purple-400">from</span>{' '}
                      <span className="text-emerald-300">'express'</span>;
                    </p>
                    <p>
                      <span className="text-purple-400">import</span> &#123; db &#125;{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-emerald-300">'./db/postgres'</span>;
                    </p>
                    <p className="text-slate-500 mt-2">// Authenticated transaction telemetry</p>
                    <p>
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-sky-300">getAnalytics</span> ={' '}
                      <span className="text-purple-400">async</span> (req:{' '}
                      <span className="text-amber-300">Request</span>, res:{' '}
                      <span className="text-amber-300">Response</span>) =&gt; &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">const</span> &#123; userId &#125; = req.user;
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">const</span> metrics ={' '}
                      <span className="text-purple-400">await</span> db.query(
                    </p>
                    <p className="pl-8 text-emerald-300">
                      'SELECT * FROM cloud_metrics WHERE user_id = $1',
                    </p>
                    <p className="pl-8">[userId]</p>
                    <p className="pl-4">);</p>
                    <p className="pl-4">
                      <span className="text-purple-400">return</span> res.status(
                      <span className="text-amber-300">200</span>).json(&#123; status:{' '}
                      <span className="text-emerald-300">'success'</span>, data: metrics.rows &#125;);
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="text-slate-300 text-[11px] leading-relaxed space-y-1 overflow-x-auto">
                    <p className="text-slate-500">-- Normalized Database Schema Definition</p>
                    <p>
                      <span className="text-indigo-400">CREATE TABLE</span> users (
                    </p>
                    <p className="pl-4">
                      id <span className="text-sky-300">SERIAL PRIMARY KEY</span>,
                    </p>
                    <p className="pl-4">
                      role <span className="text-sky-300">VARCHAR(50) NOT NULL</span>,
                    </p>
                    <p className="pl-4">
                      created_at <span className="text-sky-300">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>
                    </p>
                    <p>);</p>
                    <p className="mt-2">
                      <span className="text-indigo-400">CREATE TABLE</span> cloud_resource_forecast (
                    </p>
                    <p className="pl-4">
                      record_id <span className="text-sky-300">UUID PRIMARY KEY</span>,
                    </p>
                    <p className="pl-4">
                      predicted_cost <span className="text-sky-300">DECIMAL(10,2)</span>,
                    </p>
                    <p className="pl-4">
                      model_confidence <span className="text-sky-300">FLOAT</span>,
                    </p>
                    <p className="pl-4">
                      status <span className="text-sky-300">VARCHAR(20) DEFAULT 'optimized'</span>
                    </p>
                    <p>);</p>
                  </div>
                )}

                {/* Micro Telemetry Bar */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PostgreSQL & Node Engine Ready</span>
                  </div>
                  <div className="font-mono text-slate-500">v2.4.0 • latency: 14ms</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
