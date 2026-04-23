'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "" 
});

const SYSTEM_INSTRUCTION = `
You are the "Aasha Impact Assistant", a friendly and professional AI representative for the Aasha Foundation. 
Your goal is to help visitors understand our mission, impact, and how they can contribute.

Key Information about Aasha:
- Mission: Empowering communities through education, sustainable development, and livelihood initiatives.
- Vision: A self-reliant, sustainable and dignified society.
- Impact: 3,500+ active volunteers, 250+ projects completed, 12,000+ lives impacted.
- Programs: Skilling Bodoland Initiative, Resilient Futures, O1 Weaves, Stitching Futures, Health & Wellness Outreach, Human Rights Advocacy, Disaster Relief.
- Focus: Women empowerment, healthcare, education for all, environmental protection.
- Donating: Users can donate via our "Donate Now" button. Every small act helps.
- Volunteering: We are always looking for active volunteers to join our global network.

Guidelines:
- Be concise, warm, and professional.
- If asked about local languages, mention that we value Bodo, Assamese, and Hindi culture.
- Always encourage the user to explore the "Programs" or "Donate" sections if relevant.
- If you don't know something specific, politely direct them to contact us at info@bdfoundation.org.in.
`;

export function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am your Aasha Impact Assistant. How can I help you learn more about our mission today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const botText = result.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having a bit of trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
        animate={{ scale: 1, boxShadow: "0 10px 25px rgba(18,106,40,0.3)" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center z-[100] cursor-pointer group"
      >
        <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
            <Sparkles size={12} className="text-primary animate-pulse" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[550px] bg-white dark:bg-gray-900 rounded-[2rem] shadow-3xl z-[101] flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex justify-between items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-primary">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold leading-none">Impact Assistant</h3>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">Aasha. AI Powered</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-gray-950/50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none shadow-md' 
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 text-gray-400 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 flex gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our mission..."
                  className="flex-grow bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all font-medium dark:text-white"
                />
                <button 
                  disabled={isLoading}
                  className="w-12 h-12 bg-primary dark:bg-secondary text-secondary dark:text-primary rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                  type="submit"
                >
                  <Send size={20} />
                </button>
              </form>
              <p className="text-[10px] text-center text-gray-400 dark:text-gray-500 mt-3 font-bold uppercase tracking-widest">
                Real-time AI Guidance for Impact
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
