from fastapi import APIRouter
from app.api.routes.predict import router as predict_router
from app.api.routes.specialists import router as specialists_router

api_router = APIRouter()

api_router.include_router(predict_router, prefix="/predict", tags=["Prediction"])
api_router.include_router(specialists_router, prefix="/specialists", tags=["Specialists"])
