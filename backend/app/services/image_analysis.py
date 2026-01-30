import random
from app.data.stages import STAGES

def analyze_image(image):
    stage_key = random.choice(list(STAGES.keys()))
    stage = STAGES[stage_key]

    return {
        "stage": stage["stage"],
        "stage_label": stage["label"],
        "severity": stage["severity"],
        "confidence": round(random.uniform(0.8, 0.95), 2),
        "remedies": stage["remedies"],
        "next_steps": [
            "Follow recommended care plan",
            "Monitor symptoms weekly",
            "Consult specialist if condition worsens"
        ],
        "specialist": stage["specialist"]
    }
