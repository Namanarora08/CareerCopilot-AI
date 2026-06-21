# CareerCopilot — Core API Service (`services/api`)

The Core HTTP REST API for CareerCopilot is built using FastAPI.

## Directory Structure
- `app/main.py`: Entrypoint.
- `app/api/`: Versioned API routing layers (`v1`).
- `app/models/`: SQLAlchemy DB Models structure (Users, Applications, Resumes).
- `app/schemas/`: Pydantic request/response rules.
- `app/repositories/`: Storage, Postgres, and Neo4j query layers.

## Development Tasks
- `lint`: Quality standards checks.
- `dev`: Bootlocal environment API.
- `build`: Production build generation.
