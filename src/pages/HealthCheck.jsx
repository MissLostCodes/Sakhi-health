import React, { useState, useEffect } from "react";
import axios from "axios";
import { speak } from "../services/speech"; // Import speech synthesis
import Nurse from "../components/Nurse";

const HealthCheck = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);

  const API_URL = "http://127.0.0.1:8000/chat"; // Backend API

  // Speech Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";

  // Function to handle sending messages (text & voice)
  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post(
        API_URL, 
        { user_id: "user123", message },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // ✅ Ensure credentials are included if needed
        }
      );
      const botResponse = res.data.reply;

      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
      speak(botResponse); // Convert bot response to speech
    } catch (error) {
      console.error("Error fetching response:", error.response || error.message);
    }
  };

  // Function to handle text input
  const handleSendText = () => sendMessage(input);

  // Function to handle voice input
  const handleVoiceInput = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  // Process voice recognition result
  recognition.onresult = (event) => {
    const voiceText = event.results[0][0].transcript.toLowerCase();
    setInput(voiceText);
    sendMessage(voiceText);
  };

  useEffect(() => {
    recognition.onend = () => setIsListening(false); // Stop listening when done
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", padding: "20px" }}>
      {/* Nurse Component */}
      <div style={{ flex: "1" }}>
        <Nurse />
      </div>

      {/* Chatbot Section */}
      <div style={{ flex: "1", maxWidth: "50%", border: "1px solid gray", padding: "15px", borderRadius: "8px", backgroundColor:"rgba(172, 32, 180, 0.7)" }}>
        <h2>Menstrual Health Chatbot</h2>

        <div style={{ height: "480px", overflowY: "scroll", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
              <strong>{msg.sender === "user" ? "You: " : "Bot: "}</strong>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Text Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or speak..."
          style={{ width: "80%", padding: "8px", marginTop: "10px", borderRadius: "5px", border: "1px solid gray" }}
        />
        <button onClick={handleSendText} style={{ marginLeft: "5px", padding: "8px", borderRadius: "5px" }}>
          Send
        </button>

        {/* Voice Input Button */}
        <button onClick={handleVoiceInput} style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px" }}>
          {isListening ? "Listening..." : "🎤 Speak"}
        </button>
      </div>
    </div>
  );
};

export default HealthCheck;
