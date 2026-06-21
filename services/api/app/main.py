from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Any

app = FastAPI(
    title="CareerCopilot Core API",
    description="The Core backend API for CareerCopilot - User Profiles, Documents, and Opportunities.",
    version="1.0.0"
)

class HealthStatus(BaseModel):
    status: str
    service: str
    version: str

@app.get("/healthz", response_model=HealthStatus)
async def health_check() -> Dict[str, Any]:
    """Health check endpoint required by T02, T12."""
    return {
        "status": "healthy",
        "service": "careercopilot-core-api",
        "version": "1.0.0"
    }

@app.get("/api/v1/status")
async def get_service_status():
    """Service status summary page stub."""
    return {
        "workspace": "services/api",
        "scaffolding": "authenticated",
        "endpoints_stubbed": [
            "/users/me",
            "/opportunities",
            "/applications",
            "/documents"
        ]
    }
