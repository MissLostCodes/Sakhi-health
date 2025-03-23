# Import AIxplain modules
from aixplain.factories import AgentFactory

# Define Agent Parameters
Name = "Menstrual Health Diagnostic Agent"
Instructions = """
You are an AI agent that starts the conversation by greeting the user with "Hi!".
After greeting, ask: "Which language would you like to talk in?"
Once the user selects a language, continue the conversation in that language.
Ask menstrual hygiene-related questions, analyze the responses, and provide a health assessment (Mild or Severe) along with recommendations.
Ensure that the conversation is natural and engaging.
"""

# Create AI Agent
agent = AgentFactory.create(
    name=Name,
    description="AI Agent for Menstrual Health Diagnosis",
    instructions=Instructions,
    tools=[],  # No external tools
    default_model="gpt-4o"
)

# Store user sessions
user_sessions = {}

# Function to interact with AIxplain agent
def get_ai_response(user_id, user_input):
    global user_sessions

    # Initialize user session if new
    if user_id not in user_sessions:
        user_sessions[user_id] = {"language": None, "history": []}
        return "Hi! Which language would you like to talk in?"

    # Set language if not already chosen
    if user_sessions[user_id]["language"] is None:
        user_sessions[user_id]["language"] = user_input.strip()
        return f"Great! I will now talk in {user_sessions[user_id]['language']}. Let's begin!"

    # Track conversation history
    user_sessions[user_id]["history"].append({"user": user_input})

    # Generate AI response
    try:
        agent_response = agent.run(f"Respond in {user_sessions[user_id]['language']}.\nUser: {user_input}")
        response_text = agent_response.get("output", "I'm sorry, I couldn't process that.")
    except Exception as e:
        response_text = f"Error processing response: {str(e)}"

    # Store AI response
    user_sessions[user_id]["history"].append({"bot": response_text})

    return response_text
