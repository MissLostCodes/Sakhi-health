from fastapi import FastAPI
from pydantic import BaseModel
from aixplain_agent import get_ai_response  
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

class UserInput(BaseModel):
    user_id: str
    message: str

sessions = {}  
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def home():
    return {"message": "FastAPI is working!"}

@app.post("/chat")
def chat(user_input: UserInput):
    user_id = user_input.user_id
    message = user_input.message

    if user_id not in sessions:
        sessions[user_id] = []

    sessions[user_id].append(message)

    response_text = get_ai_response(message)

    return {"reply": response_text, "history": sessions[user_id]}

# Run with: uvicorn main:app --reload
