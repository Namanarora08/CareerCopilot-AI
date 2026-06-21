"use client";

import React from "react";
import { Cpu } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-[#292524] bg-[#0f0e0d] py-5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#e7e2d8] text-[#0b0a09] p-2.5 rounded-xl shadow-[0_4px_12px_rgba(231,226,216,0.15)]">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-semibold text-lg tracking-tight text-[#f5f2eb]">CareerCopilot Core</h1>
            <p className="text-xs text-[#a8a29e] font-mono">AI Chief Career Officer • Next.js 15 App Router</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 bg-[#1c1917] hover:bg-[#292524] rounded-full border border-[#44403c] transition-colors text-xs font-mono text-[#e7e2d8] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            App Router Active
          </div>
        </div>
      </div>
    </header>
  );
}
