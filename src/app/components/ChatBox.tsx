import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const sampleResponses = [
  "I'm NepKal, a developer who bridges terminal culture with modern web design. I believe in developer-first minimalism and workflow efficiency.",
  "I specialize in React, TypeScript, and building beautiful, functional interfaces. I'm also into AI/ML and data science.",
  "My philosophy? Less is more. Clean code, clean design, maximum impact. Don't break the flow.",
  "I work with both frontend and backend technologies. Check out my skills section for the full stack!",
  "I'm currently exploring the intersection of AI and web development. Exciting times!",
];

export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! Ask me anything about my work, skills, or philosophy. I'll give you the answer.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Terminal Header */}
      <div className="bg-[#1E1E1E] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
          <span className="ml-2 text-gray-400 font-mono text-xs">nepkal-chat@terminal</span>
        </div>
        <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                message.sender === 'user'
                  ? 'bg-black text-white'
                  : 'bg-gray-50 text-black border border-gray-200'
              }`}
            >
              {message.sender === 'bot' && (
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 bg-[#00FF00] rounded-full"></span>
                  <span className="font-mono text-gray-500 text-xs">NepKal</span>
                </div>
              )}
              <p className="whitespace-pre-wrap text-xs">{message.text}</p>
              <span className="text-xs opacity-50 mt-1.5 block">
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 border border-gray-200">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 bg-[#00FF00] rounded-full animate-pulse"></span>
                <span className="font-mono text-gray-500 text-xs">NepKal</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.1s' }}
                ></span>
                <span
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-3 bg-gray-50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:border-[#FF6B6B] focus:outline-none bg-white transition-colors text-xs"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-[#FF6B6B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black flex items-center gap-1.5 text-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </div>
        <p className="text-gray-400 mt-1.5 text-center text-xs">
          Press Enter to send
        </p>
      </div>
    </div>
  );
}