'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot, Loader2, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Greetings. I am Elite Homes' AI Design Strategist. How may I assist with your architectural vision today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error) {
       console.error(error);
       setMessages(prev => [...prev, { role: 'assistant', content: "Apologies, our executive AI link is momentarily saturated. Please contact our human concierge desk at info@elitehomes.lk." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[380px] h-[550px] bg-navy border border-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-lg mb-6 flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="p-6 bg-gold/5 border-b border-gold/10 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                 <div className="p-2 bg-gold/10 rounded-full text-gold">
                    <Sparkles size={20} className="animate-pulse" />
                 </div>
                 <div>
                    <h3 className="text-sm font-serif text-gold uppercase tracking-[0.2em] font-black">AI Design Assistant</h3>
                    <p className="text-[10px] text-cream/30 uppercase tracking-widest font-black italic">Powered by Llama 3.3 Mastery</p>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-cream/30 hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gold/20"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-sm text-sm font-light leading-relaxed italic ${
                     m.role === 'user' 
                     ? 'bg-gold/10 border border-gold/20 text-gold ml-8' 
                     : 'bg-white/5 border border-white/5 text-cream/80 mr-8'
                  }`}>
                     <div className="flex items-center mb-2 text-[8px] uppercase font-black tracking-widest opacity-40">
                        {m.role === 'user' ? <User size={10} className="mr-1.5" /> : <Bot size={10} className="mr-1.5" />}
                        {m.role === 'user' ? 'Client' : 'Elite Strategist'}
                     </div>
                     {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 text-cream/40 p-4 rounded-sm italic text-xs flex items-center">
                     <Loader2 size={14} className="animate-spin mr-3 text-gold" />
                     Analysing Architectural Concepts...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-gold/5 border-t border-gold/10">
               <div className="relative">
                  <input
                    type="text"
                    placeholder="Inquire about tropical design..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="w-full bg-charcoal/40 border border-gold/10 px-6 py-4 rounded-sm text-cream text-xs italic font-light focus:outline-none focus:border-gold transition-colors"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gold disabled:opacity-30 hover:scale-110 active:scale-95 transition-all"
                  >
                    <Send size={18} />
                  </button>
               </div>
               <div className="mt-4 flex items-center justify-between text-[8px] uppercase tracking-widest text-cream/20 font-black italic">
                  <span>Elite Homes Encryption Active</span>
                  <Link href="/quote" className="text-gold/40 hover:text-gold flex items-center">
                     Book Consultation <ArrowRight size={8} className="ml-1" />
                  </Link>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border-2 ${
           isOpen 
           ? 'bg-navy text-gold border-gold' 
           : 'bg-gold text-navy border-transparent animate-bounce-slow'
        } relative group`}
      >
        <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full scale-150 animate-pulse group-hover:bg-gold/40" />
        {isOpen ? <X size={28} /> : <Sparkles size={28} className="relative z-10" />}
        
        {/* Unread Badge Overlay */}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 flex h-5 w-5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
             <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald"></span>
           </span>
        )}
      </motion.button>
    </div>
  );
}

// Internal Link component since we are in components
import NextLink from 'next/link';
const Link = NextLink;
