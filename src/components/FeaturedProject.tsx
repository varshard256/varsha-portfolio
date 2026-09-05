import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Server,
  Activity,
  DollarSign,
  TrendingDown,
  Cpu,
  HardDrive,
  BarChart2,
  Sliders,
  ExternalLink,
  Github,
  Info,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function FeaturedProject({ project, onOpenModal }: FeaturedProjectProps) {
  const [selectedCluster, setSelectedCluster] = useState<'prod-cluster' | 'ml-inference' | 'db-nodes'>('prod-cluster');
  const [forecastHorizon, setForecastHorizon] = useState<number>(30); // 7, 14, 30 days

  // Mock telemetry data adjusted interactively based on cluster selection
  const clusterMetrics = {
    'prod-cluster': {
      cpu: 48,
      memory: 64,
      storage: 72,
      currentCost: '$412.50',
      predictedCost: '$328.00',
      savings: '20.5%',
      anomalyRate: '0.04%',
      trendData: [42, 45, 52, 49, 44, 48, 46, 50, 48],
      forecastData: [48, 46, 44, 41, 39, 38],
    },
    'ml-inference': {
      cpu: 76,
      memory: 88,
      storage: 54,
      currentCost: '$890.00',
      predictedCost: '$685.20',
      savings: '23.0%',
      anomalyRate: '0.12%',
      trendData: [68, 72, 85, 91, 80, 78, 82, 79, 76],
      forecastData: [76, 71, 68, 65, 62, 60],
    },
    'db-nodes': {
      cpu: 32,
      memory: 58,
      storage: 81,
      currentCost: '$540.00',
      predictedCost: '$490.00',
      savings: '9.2%',
      anomalyRate: '0.01%',
      trendData: [35, 34, 36, 38, 32, 33, 31, 33, 32],
      forecastData: [32, 32, 31, 30, 30, 29],
    },
  }[selectedCluster];

  return (
    <section
      id="featured-project-section"
      aria-label="Featured Engineering Project"
      className="py-24 relative border-t border-white/5 bg-[#080a0f] overflow-hidden"
    >
      {/* Subtle background ambient radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill & Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Featured Research & Engineering Project
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="view-featured-project-btn"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all active:scale-95"
            >
              <span>View Project Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Disclaimer Notice explicitly clarifying mock concept */}
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-amber-500/20 text-amber-200/90 text-xs mb-8">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Architectural Mockup:</strong> The interactive telemetry below demonstrates the UI concept and prediction engine workflow for the Cloud Cost Optimization Dashboard.
          </span>
        </div>

        {/* The Interactive Mock Dashboard Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Dashboard Topbar */}
          <div className="p-4 sm:p-5 bg-slate-900/80 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Cluster Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline">
                Cluster:
              </span>
              <div className="inline-flex rounded-lg p-1 bg-slate-950 border border-white/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setSelectedCluster('prod-cluster')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedCluster === 'prod-cluster'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Prod-API-Cluster
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCluster('ml-inference')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedCluster === 'ml-inference'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ML-Inference-Node
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCluster('db-nodes')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedCluster === 'db-nodes'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Postgres-DB-Tier
                </button>
              </div>
            </div>

            {/* Prediction Window Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Sliders className="w-3.5 h-3.5 text-sky-400" />
                <span>Forecast Horizon:</span>
              </div>
              <div className="flex rounded-lg p-0.5 bg-slate-950 border border-white/10 text-xs font-mono">
                {[7, 14, 30].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setForecastHorizon(days)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      forecastHorizon === days
                        ? 'bg-sky-600/30 text-sky-300 border border-sky-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    +{days}d
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border-b border-white/5">
            
            {/* CPU Metric */}
            <div className="p-5 bg-slate-950 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  CPU Usage
                </span>
                <span className="text-slate-500">Avg</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                  {clusterMetrics.cpu}%
                </span>
                <span className="text-xs font-mono text-emerald-400">Stable</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${clusterMetrics.cpu}%` }}
                />
              </div>
            </div>

            {/* Memory Metric */}
            <div className="p-5 bg-slate-950 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                  Memory Usage
                </span>
                <span className="text-slate-500">Allocated</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                  {clusterMetrics.memory}%
                </span>
                <span className="text-xs font-mono text-sky-400">Normal</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-sky-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${clusterMetrics.memory}%` }}
                />
              </div>
            </div>

            {/* Storage Metric */}
            <div className="p-5 bg-slate-950 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                <span className="flex items-center gap-1.5">
                  <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                  Storage Tier
                </span>
                <span className="text-slate-500">SSD</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                  {clusterMetrics.storage}%
                </span>
                <span className="text-xs font-mono text-amber-400">Threshold</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${clusterMetrics.storage}%` }}
                />
              </div>
            </div>

            {/* Cost & Predicted Savings Metric */}
            <div className="p-5 bg-slate-950 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  Cloud Cost
                </span>
                <span className="text-emerald-400 flex items-center gap-0.5">
                  <TrendingDown className="w-3 h-3" />
                  {clusterMetrics.savings}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300">
                  {clusterMetrics.currentCost}
                </span>
                <span className="text-[11px] font-mono text-slate-400 line-through">
                  /mo
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-2">
                ML Predicted: <strong className="text-slate-200">{clusterMetrics.predictedCost}</strong>
              </div>
            </div>

          </div>

          {/* Interactive Sparkline / Timeline Representation */}
          <div className="p-6 bg-slate-950/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Sparkline Graph */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono text-slate-300 font-semibold uppercase">
                    Compute Load History vs. ML Resource Prediction
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span className="flex items-center gap-1 text-indigo-400">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                    Observed Telemetry
                  </span>
                  <span className="flex items-center gap-1 text-sky-400">
                    <span className="w-2 h-2 rounded-full bg-sky-400 inline-block border border-dashed" />
                    ML Forecast (+{forecastHorizon}d)
                  </span>
                </div>
              </div>

              {/* Bar visualization */}
              <div className="h-44 flex items-end gap-2 pt-6 pb-2 px-3 bg-slate-900/60 rounded-xl border border-white/5">
                {/* Historical Observed Bars */}
                {clusterMetrics.trendData.map((val, i) => (
                  <div
                    key={`obs-${i}`}
                    className="flex-1 flex flex-col items-center gap-2 group relative"
                  >
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-indigo-600/40 to-indigo-500 group-hover:to-indigo-400 transition-all duration-300"
                      style={{ height: `${(val / 100) * 120}px` }}
                    />
                    <span className="text-[9px] font-mono text-slate-500">
                      T-{clusterMetrics.trendData.length - i}
                    </span>
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono text-white pointer-events-none">
                      {val}%
                    </div>
                  </div>
                ))}

                {/* Vertical Divider */}
                <div className="w-px h-full bg-dashed border-r border-dashed border-sky-400/40 mx-1" />

                {/* Predicted Bars */}
                {clusterMetrics.forecastData.slice(0, forecastHorizon === 7 ? 3 : forecastHorizon === 14 ? 5 : 6).map((val, i) => (
                  <div
                    key={`pred-${i}`}
                    className="flex-1 flex flex-col items-center gap-2 group relative"
                  >
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-sky-600/30 to-sky-400/80 border-t border-sky-300 group-hover:bg-sky-400 transition-all duration-300"
                      style={{ height: `${(val / 100) * 120}px` }}
                    />
                    <span className="text-[9px] font-mono text-sky-400">
                      +{i + 1}
                    </span>
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono text-sky-300 pointer-events-none">
                      ~{val}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights & Stack details */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/80 border border-white/5 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core System Highlights
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-slate-500 block mb-2">
                  Implemented Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
