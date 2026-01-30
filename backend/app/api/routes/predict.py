from fastapi import APIRouter, UploadFile, File
from app.services.image_analysis import analyze_image

router = APIRouter()

@router.post("/")
async def predict(image: UploadFile = File(...)):
    result = analyze_image(image)
    return {
        "success": True,
        "data": result
    }
