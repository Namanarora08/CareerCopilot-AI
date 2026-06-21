# CareerCopilot Core — Monorepo

Welcome to the **CareerCopilot Core** monorepo workspace. This project established a professional multi-agent "AI Chief Career Officer" system utilizing a React Web dashboard and specialized Python microservices.

## Monorepo Architecture

This codebase is managed using **pnpm** Workspaces and **Turborepo** for ultra-fast, cacheable builds, lint tasks, and test orchestration.

### Folder Structure
```
careercopilot-core/
├── apps/
│   ├── web/                       # Next.js / Vite React dashboard application
│   └── desktop/                   # Tauri desktop wrapper configurations
├── services/
│   ├── api/                       # FastAPI core backend service stub (Phase 2)
│   └── agents/                    # LangGraph multi-agent core execution stub (Phase 5/6)
├── packages/
│   └── config/                    # Shared configurations
│       ├── eslint/                # Base shared ESLint package configuration
│       └── typescript/            # Base shared compiler settings
├── pnpm-workspace.yaml            # Monorepo mappings config
├── turbo.json                     # Turborepo task dependencies pipeline
├── .editorconfig                  # Project-wide formatting rules
└── package.json                   # Root workspace index & developer coordinates
```

---

## 🚀 Get Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Installs block-level dependencies across the workspaces:
```bash
npm install
```

### Development
Runs the main web workspace dev client:
```bash
npm run dev
```

### Production Build
Assembles the standard static files directly into `/dist` at root:
```bash
npm run build
```

---

## 🛠️ Monorepo Tooling & Tasks
- **Turborepo** (`turbo.json`) monitors dependencies, files, and outputs, caching compile runs dynamically for maximum efficiency.
- **Shared Standard Configs**: Sub-workspaces dynamically reuse properties exported via `@careercopilot/eslint-config` and `@careercopilot/tsconfig`.
