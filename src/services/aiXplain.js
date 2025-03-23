import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // FastAPI backend URL

// Call AIxplain agent for a direct question
export const getAIResponse = async (question) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/ask-agent`, { question });
    return res.data.message;
  } catch (error) {
    console.error("Error getting AI response:", error);
    return "Something went wrong.";
  }
};

// Send chat message (if needed for conversation flow)
export const sendMessage = async (userId, message) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/chat`, {
      user_id: userId,
      message: message,
    });
    return res.data; // { reply: "...", history: [...] }
  } catch (error) {
    console.error("Error sending message:", error);
    return { reply: "Something went wrong. Please try again." };
  }
};
