# CareerCopilot — Agent Orchestration Service (`services/agents`)

Multi-agent reasoning engine built over LangGraph.

## Directory Structure
- `graphs/`: Structural LangGraph flows and router graph code (e.g., `router_graph.py`).
- `agents/`: Custom prompts, scoring criteria, and tools for Scout, Analyst, Resume Coach, and Executor Agents.
- `state/`: Typed structures outlining in-memory context shared during agent turns.
- `model_router/`: Adaptability layer managing LLM configurations and routing tables.

## Development Tasks
- `lint`: Checks syntax and type standards.
- `dev`: Boot local listener and Celery worker.
- `build`: Production container generation.
