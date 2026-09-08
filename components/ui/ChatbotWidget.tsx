"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Dada AI. How can I help you automate your firm today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    // Simulate AI typing delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "That's a great question! One of our human experts will reach out to you shortly to discuss how Digital Dada can build that exact automation for you." }
      ]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[9000] w-14 h-14 rounded-full bg-dada-accent text-dada-black shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Open chat"
          >
            <MessageSquare size={24} className="animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[9000] w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-[#111111] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-dada-accent animate-pulse" />
                <span className="font-mono text-sm uppercase tracking-widest text-white">Dada Agent</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-dada-near-black">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed ${
                    msg.role === "assistant" 
                      ? "bg-white/5 text-dada-off-white rounded-tl-sm self-start" 
                      : "bg-dada-accent text-dada-black font-medium rounded-tr-sm self-end"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-black/50 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about automation..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-dada-accent transition-colors"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="w-12 h-12 bg-dada-accent text-dada-black rounded-lg flex items-center justify-center disabled:opacity-50 transition-opacity"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
