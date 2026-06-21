# LangGraph State Machine for CareerCopilot Multi-Agent Orchestrator
# Part of T30 Graph Routing structure

class CareerCopilotState:
    """Shared LangGraph global state dict stub."""
    def __init__(self):
        self.user_id = None
        self.trigger = None
        self.trace = []
        self.active_agent = None


class OrchestrationRouter:
    """Orchestration router class directing workflows to sub-agents."""
    def __init__(self):
        self.state = CareerCopilotState()

    def route_trigger(self, trigger_type: str) -> str:
        """Determines the appropriate agent subgraph based on incoming events."""
        if trigger_type == "scheduled_scan":
            return "scout_agent"
        elif trigger_type == "user_query":
            return "mentor_agent"
        elif trigger_type == "tailor_resume":
            return "resume_coach"
        else:
            return "fallback_generic"
