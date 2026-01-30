from fastapi import FastAPI
from app.api.router import api_router

app = FastAPI(
    title="VaricoseScan API",
    version="1.0.0"
)

app.include_router(api_router)

@app.get("/")
def health_check():
    return {"status": "Backend running"}
