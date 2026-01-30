from fastapi import APIRouter, Query
from app.services.specialists_service import get_specialists

router = APIRouter()

@router.get("/")
def specialists(
    lat: float = Query(...),
    lng: float = Query(...),
    type: str = Query(...)
):
    return {
        "success": True,
        "data": get_specialists(lat, lng, type)
    }
