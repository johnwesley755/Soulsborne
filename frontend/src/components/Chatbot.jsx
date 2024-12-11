// Chatbot.jsx
import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      addMessage(input, "user");
      setInput("");
      simulateBotResponse(input);
    } else {
      alert("Please enter a valid message!");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        addMessage(reader.result, "user", "image");
        simulateBotResponse("uploaded an image.");
      };
      reader.readAsDataURL(file);
    }
  };

  const addMessage = (text, sender, type = "text") => {
    setMessages((prev) => [...prev, { text, sender, type }]);
  };

  const simulateBotResponse = (userMessage) => {
    addMessage("Bot is typing...", "bot");
    setTimeout(() => {
      const response = generateBotResponse(userMessage);
      setMessages((prev) =>
        prev
          .filter((msg) => msg.text !== "Bot is typing...")
          .concat({ text: response, sender: "bot" })
      );
    }, 1000);
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    const responses = [
      "Hi there! How can I assist you?",
      "I'm here to help. What do you need assistance with?",
      "You're welcome! Let me know if you have more questions.",
      "I'm not sure I understand. Can you clarify?",
      "Tell me more about what you're looking for.",
      "Let's figure this out together.",
      "That's an interesting question. Let me think...",
      "Can you elaborate a bit more on that?",
      "Is there anything specific you'd like to know?",
      "I'm happy to guide you. Go ahead and ask!",
      "I can help with general inquiries. What's on your mind?",
      "Feel free to upload any files or images if that helps explain.",
      "I'm learning every day! Thanks for your patience.",
      "Can I assist you with anything else?",
      "Good question! Let me find the best answer for you.",
      "I see. Let's break that down.",
      "I'm here to make things easier. What's next?",
      "Thanks for sharing. Let me respond to that.",
      "Have a moment? I’ll find a response for you.",
      "That's cool! Let me learn more about that.",
    ];

    // Randomized response for variety
    if (lowerMessage.includes("hello")) return responses[0];
    if (lowerMessage.includes("help")) return responses[1];
    if (lowerMessage.includes("thanks")) return responses[2];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <FaRobot
        className="text-4xl cursor-pointer text-indigo-600 hover:text-indigo-800"
        onClick={() => setChatOpen(!chatOpen)}
      />
      {chatOpen && (
        <div className="bg-white font-bold text-black shadow-lg rounded-lg w-96 h-[35rem] flex flex-col p-4 border overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4 border-b pb-2">
            <FaRobot className="text-indigo-800 text-2xl" />
            <h2 className="text-xl font-bold text-black">Chat with Us</h2>
          </div>

          {/* Chatbox */}
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg max-w-xs text-sm ${
                  msg.sender === "user"
                    ? "bg-indigo-800 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.type === "image" ? (
                  <img
                    src={msg.text}
                    alt="User upload"
                    className="rounded-lg max-w-full"
                  />
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none"
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-upload"
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <BsFillImageFill className="text-2xl text-gray-500 hover:text-gray-700" />
            </label>
            <button
              onClick={handleSendMessage}
              className="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
