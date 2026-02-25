import { useState } from "react";
import chatbotIcon from "../assets/chatbot.png";
import profile from "../assets/profile.jpg";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}\
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-45 h-14 bg-white-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl z-50 hover:bg-gray-700 transition"
      >
        <img src={chatbotIcon} alt="Chatbot" className="w-6 h-6" />
        <span className="text-sm font-medium text-black">Chat with Jether</span>
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-20 right-6 w-80 h-96 bg-white dark:bg-gray-800 border border-black/20 dark:border-white/20 rounded-lg shadow-lg flex flex-col z-50 transform transition-all duration-300
        ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-10 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b border-black/20 dark:border-white/20">
          <img src={profile} alt="Profile" className="w-6 h-6 rounded-xl" />
          <span className="font-medium">Jether Masidong</span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-2 overflow-y-auto space-y-2">
          <p className="text-sm text-gray-400">Start a conversation!</p>
        </div>

        {/* Input */}
        <div className="p-2 border-t border-black/20 dark:border-white/20 flex gap-2">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 border rounded px-2 py-1 text-sm"
          />
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
