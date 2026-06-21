"use client";

import React from "react";
import { Network } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#292524] bg-[#0c0b0a] py-6 px-6 font-mono text-xs text-[#a8a29e]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-[#a8a29e]" />
          <span>Active Workspace: Next.js 15 App router mount ready</span>
        </div>
        <div className="flex items-center gap-4">
          <span>pnpm-workspace.yaml</span>
          <span>•</span>
          <span>turbo.json</span>
          <span>•</span>
          <span>next.config.mjs</span>
        </div>
      </div>
    </footer>
  );
}
