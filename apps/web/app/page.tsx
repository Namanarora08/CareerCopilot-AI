"use client";

import React from "react";
import { 
  CheckCircle2, 
  Shield, 
  Folders, 
  Network, 
  Brain, 
  Terminal, 
  ArrowUpRight, 
  Loader2, 
  Sparkles,
  Layers,
  Cpu,
  BookmarkCheck,
  Calendar,
  Layers3,
  Lightbulb,
  Workflow
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useAppStore } from "../stores/useAppStore";
import { useOpportunities } from "../hooks/useOpportunities";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  const { activeWorkspace, showDetails, toggleDetails, setWorkspace } = useAppStore();
  const { data: opportunities, isLoading, isError } = useOpportunities();

  const workspaces = [
    {
      id: "web",
      name: "apps/web",
      type: "Next.js 15 UI",
      status: "ACTIVE",
      tech: "React 19, Tailwind CSS v4, Zustand, React Query",
      desc: "High-fidelity career manager portal. Operates our live multi-agent dashboards, telemetry consoles, and Kanban pipelines."
    },
    {
      id: "desktop",
      name: "apps/desktop",
      type: "Tauri Shell",
      status: "STUB_READY",
      tech: "Rust, Tauri, Webview Wrapper",
      desc: "Lightweight containerized client packaging the web bundle with desktop shelf elements and native task integrations."
    },
    {
      id: "api",
      name: "services/api",
      type: "FastAPI",
      status: "STUB_READY",
      tech: "Python, FastAPI, SQLAlchemy, Alembic",
      desc: "Asynchronous backend API handling CRUD, Row-Level-Security, and WebSocket messaging for agent tokens."
    },
    {
      id: "agents",
      name: "services/agents",
      type: "LangGraph Orchestrator",
      status: "STUB_READY",
      tech: "Python, LangGraph, LLM Models",
      desc: "Autonomous reasoning services coordinating actions across Scout, Analyst, Resume Coach and Memory Agents."
    }
  ];

  const activeData = workspaces.find(w => w.id === activeWorkspace) || workspaces[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0a09] text-[#f5f2eb]">
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10 space-y-10">
        
        {/* Pitch Hero */}
        <div className="relative border border-[#2e2a25] bg-gradient-to-r from-[#171412] to-[#12100f] rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#8c7a6b]/10 to-transparent rounded-full blur-3xl -z-10" />
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2e2a25] border border-[#443e37] rounded-full text-xs text-[#d8cfc4]">
              <Sparkles className="w-3.5 h-3.5 text-[#d8cfc4]" />
              <span>AI Chief Career Officer Platform initialized</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f5f2eb] leading-tight">
              An AI-Native Career Intelligence Solution
            </h2>
            
            <p className="text-[#a8a29e] text-sm md:text-base leading-relaxed">
              Establishing a powerful monorepo scaffolding using Next.js 15, App Router, Zustand, and TanStack React Query to drive CareerCopilot Core on multiple targets.
            </p>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <button 
              onClick={toggleDetails}
              className="px-5 py-3 bg-[#e7e2d8] hover:bg-[#d8cfc4] text-[#0b0a09] font-medium text-sm rounded-xl transition duration-250 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              {showDetails ? "Minimize Logs" : "Show Details"}
            </button>
            <div className="text-center font-mono text-[11px] text-[#78716c]">
              Phase 0 Foundation • Scaffold
            </div>
          </div>
        </div>

        {/* Workspace Matrix & Console split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Workspaces Control Pane */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-[#f5f2eb] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8c7a6b]" />
                Monorepo Workspaces Map
              </h3>
              <p className="text-xs text-[#a8a29e] mt-1">Configure individual clients or server backends</p>
            </div>

            <div className="space-y-3">
              {workspaces.map((w) => {
                const isActive = w.id === activeWorkspace;
                return (
                  <button
                    key={w.id}
                    onClick={() => setWorkspace(w.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition duration-200 cursor-pointer flex justify-between items-center ${
                      isActive 
                        ? "bg-[#1f1b18] border-[#8c7a6b] shadow-[0_4px_20px_rgba(140,122,107,0.15)]" 
                        : "bg-[#11100f] border-[#292524] hover:bg-[#151312]"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-mono text-xs text-[#a8a29e]">{w.type}</div>
                      <div className="font-semibold text-sm text-[#f5f2eb]">{w.name}</div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        w.status === "ACTIVE" 
                          ? "bg-[#eaf5ea]/10 text-emerald-400 border border-emerald-500/20" 
                          : "bg-white/5 text-[#a8a29e]"
                      }`}>
                        {w.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Workspace Console Logs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-[#f5f2eb] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#8c7a6b]" />
                Workspace Deck Inspector
              </h3>
              <p className="text-xs text-[#a8a29e] mt-1">Real-time build rules configured for the selected target</p>
            </div>

            <div className="border border-[#292524] bg-[#11100f] rounded-3xl p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#292524] pb-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#78716c] font-mono">SELECTED WORKSPACE</div>
                  <div className="text-[#f5f2eb] font-semibold text-lg">{activeData.name}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono bg-[#8c7a6b]/20 text-[#f5f2eb] border border-[#8c7a6b]/30 px-3 py-1 rounded-lg">
                    {activeData.type}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3 bg-black/40 rounded-xl border border-[#292524]">
                  <div className="text-[#a8a29e] mb-1">STABILITY</div>
                  <div className="text-[#f5f2eb] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    SCALABLE
                  </div>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-[#292524]">
                  <div className="text-[#a8a29e] mb-1">COMPILATION</div>
                  <div className="text-[#f5f2eb] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    HEALTHY
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#8c7a6b] tracking-wider uppercase font-mono">WORKSPACE TECH</div>
                <p className="text-sm text-[#f5f2eb] leading-relaxed font-mono bg-black/40 p-3 rounded-xl border border-[#292524]">
                  {activeData.tech}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#8c7a6b] tracking-wider uppercase font-mono">ARCHITECTURE STRATEGY</div>
                <p className="text-sm text-[#d8cfc4] leading-relaxed">
                  {activeData.desc}
                </p>
              </div>

              {/* Collapsible logs pane */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden space-y-2 pt-2 border-t border-[#292524]"
                  >
                    <div className="text-xs font-semibold text-[#8c7a6b] font-mono">SIMULATED CORE METADATA LOGS</div>
                    <div className="bg-black text-[#86efac] p-4 rounded-xl font-mono text-[11px] leading-relaxed space-y-1.5 max-h-40 overflow-y-auto shadow-inner border border-[#1b1917]">
                      <div>[system] configuring workspace tsconfig extends</div>
                      <div>[system] mounting pnpm workspaces: apps/*, services/*</div>
                      <div>[system] path alias mappings added: @/* -&gt; ./*</div>
                      <div>[system] dark mode default body style injected successfully</div>
                      <div>[system] TanStack query cache provider pipeline enabled</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Opportunities TanStack Query Radar Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-[#f5f2eb] flex items-center gap-2">
                <Brain className="w-4.5 h-4.5 text-[#8c7a6b]" />
                Opportunities Radar (Live TanStack Query retrieval)
              </h3>
              <p className="text-xs text-[#a8a29e] mt-1">Live simulation querying from pgvector database layer via custom React query hook</p>
            </div>
            <div className="flex items-center gap-1 bg-[#151413] border border-[#292524] px-4 py-1.5 rounded-full text-[11px] font-mono text-[#a8a29e]">
              <Workflow className="w-3 h-3 text-[#8c7a6b]" />
              Sync Client
            </div>
          </div>

          {isLoading ? (
            <div className="border border-[#292524] bg-[#11100f] rounded-3xl p-12 flex flex-col items-center justify-center space-y-3">
              <Loader2 className="w-8 h-8 text-[#8c7a6b] animate-spin" />
              <p className="text-xs text-[#a8a29e] font-mono">Consulting career intelligence index via Query API...</p>
            </div>
          ) : isError ? (
            <div className="border border-red-500/20 bg-red-500/5 rounded-3xl p-12 text-center space-y-2">
              <p className="text-sm font-semibold text-red-400">Failed to load opportunities</p>
              <p className="text-xs text-red-500 font-mono">Reference Error code: T15_RADAR_QUERY_ERR</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities?.map((opp) => (
                <div 
                  key={opp.id}
                  className="group relative border border-[#2e2a25] bg-[#11100f] hover:bg-[#161413] p-6 rounded-2xl transition duration-200 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#a8a29e] bg-[#2e2a25] px-2.5 py-0.5 rounded-md uppercase">
                        {opp.type}
                      </span>
                      <div className="flex items-center gap-1 font-mono text-[11px] text-[#d8cfc4]">
                        <BookmarkCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Match score: {opp.score}%</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-semibold text-[#f5f2eb] text-sm leading-snug group-hover:text-white transition-colors">
                        {opp.title}
                      </h4>
                      <p className="text-xs text-[#a8a29e] font-mono">
                        {opp.company}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#292524] mt-5 pt-4 flex items-center justify-between text-xs text-[#78716c]">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {opp.deadline}
                    </span>
                    <span className="bg-[#1c1917] px-2 py-0.5 rounded border border-[#2e2a25] font-mono">
                      {opp.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Phase 0 Architecture Checklist */}
        <div className="border border-[#2e2a25] bg-[#11100f] p-6 md:p-8 rounded-3xl space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#292524] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#8c7a6b]/20 border border-[#8c7a6b]/30 rounded-xl text-white">
                <Shield className="w-5 h-5 text-[#f5f2eb]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wider font-mono text-[#a8a29e]">FOUNDATIONAL DECK TRACKER</h4>
                <p className="text-xs text-[#78716c]">Current focus: Initializing project packages & Next.js 15 routing pipeline</p>
              </div>
            </div>
            <div className="bg-[#eaf5ea]/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-3.5 py-1.5 rounded-full font-mono flex items-center gap-1 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" /> Active
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-[#a8a29e]">
            <div className="space-y-2 p-4 bg-black/20 rounded-2xl border border-[#292524]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-[#f5f2eb] font-mono">Monorepo Scaffolding</span>
              </div>
              <p className="text-[#a8a29e]">Organized workspaces with pnpm, Turborepo rules (`turbo.json`) and project-wide formatting standards (`.editorconfig`).</p>
            </div>
            <div className="space-y-2 p-4 bg-black/20 rounded-2xl border border-[#292524]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-[#f5f2eb] font-mono">Next.js 15 App Router</span>
              </div>
              <p className="text-[#a8a29e]">High-performance layout system with modular routing pages, global theme stylesheet and dark mode defaults.</p>
            </div>
            <div className="space-y-2 p-4 bg-black/20 rounded-2xl border border-[#292524]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-[#f5f2eb] font-mono">Core State & Query Engine</span>
              </div>
              <p className="text-[#a8a29e]">Client state powered by Zustand, async queries processed by TanStack Client, and rich styling powered by Tailwind CSS v4.</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
