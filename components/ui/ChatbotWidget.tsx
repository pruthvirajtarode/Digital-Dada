"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Dada AI. How can I help you automate your firm today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "That's a great question! One of our human experts will reach out to you shortly to discuss how Digital Dada can build that exact automation for you." }
      ]);
    }, 1500);
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
            className="fixed bottom-6 right-6 z-[9000] w-14 h-14 rounded-full bg-gradient-to-br from-[#ccff00] to-[#99cc00] text-dada-black shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center hover:scale-110 transition-transform group"
            aria-label="Open chat"
          >
            <MessageSquare size={24} className="group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[9000] w-[360px] sm:w-[420px] h-[600px] max-h-[85vh] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Premium Header */}
            <div className="relative px-6 py-5 border-b border-white/10 overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-dada-accent/5 backdrop-blur-sm" />
              <div className="relative flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-dada-accent/20 flex items-center justify-center border border-dada-accent/50 relative">
                    <Bot size={20} className="text-dada-accent" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-dada-accent rounded-full border-2 border-[#1a1a1a]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-sm font-bold tracking-widest text-white uppercase flex items-center gap-2">
                      Dada Intelligence
                      <Sparkles size={12} className="text-dada-accent" />
                    </span>
                    <span className="text-xs text-white/50">Typically replies instantly</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex items-end gap-3 max-w-[85%] ${
                    msg.role === "assistant" ? "self-start" : "self-end flex-row-reverse"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "assistant" ? "bg-white/10 text-dada-accent" : "bg-dada-accent/20 text-dada-accent"
                  }`}>
                    {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                    msg.role === "assistant" 
                      ? "bg-white/5 text-dada-off-white rounded-bl-none border border-white/5 backdrop-blur-sm" 
                      : "bg-gradient-to-br from-[#ccff00] to-[#99cc00] text-black font-medium rounded-br-none"
                  }`}>
                    {msg.role === "assistant" && i === 0 ? (
                      <div className="font-medium text-white mb-1">Dada AI ✨</div>
                    ) : null}
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-end gap-3 max-w-[85%] self-start"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 text-dada-accent flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 rounded-bl-none flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-dada-accent rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-dada-accent rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-dada-accent rounded-full" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-5 bg-black/60 border-t border-white/10 shrink-0 backdrop-blur-xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about AI automation..."
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-dada-accent focus:bg-white/10 rounded-full pl-5 pr-14 py-4 text-sm text-white focus:outline-none transition-all shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 w-10 h-10 bg-dada-accent text-black rounded-full flex items-center justify-center disabled:opacity-30 disabled:scale-95 hover:scale-105 transition-all"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </div>
              <div className="text-center mt-3">
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Powered by Digital Dada</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
