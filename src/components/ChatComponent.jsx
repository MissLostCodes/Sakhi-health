import React, { useState } from "react";
import { sendMessage } from "../services/aiXplain";

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const userId = "user123"; // Replace with actual user ID logic

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        // Add user message to chat
        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);

        // Get AIxplain response
        const response = await sendMessage(userId, input);
        setMessages([...newMessages, { sender: "bot", text: response.reply }]);

        setInput(""); // Clear input box
    };

    return (
        <div>
            <h2>Menstrual Health Chatbot</h2>
            <div style={{ height: "300px", overflowY: "scroll", border: "1px solid gray", padding: "10px" }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
                        <strong>{msg.sender === "user" ? "You: " : "Bot: "}</strong>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'yes' or 'no'..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatComponent;
