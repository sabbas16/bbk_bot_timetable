
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { timetableData } from '@/data/timetableData';
import { processQuery } from '@/utils/queryProcessor';
import { aiService } from '@/services/aiService';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  isAI?: boolean;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm BBK BOT, your university timetable assistant. I can help you find information about your classes, including dates, times, locations, and modules. Try asking me something like 'What classes do I have on Monday?' or 'When is my Database Management lecture?' 🎓\n\nI now have AI-powered conversations enabled for a more natural chat experience! ✨",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [useAI, setUseAI] = useState(true); // Default to AI mode enabled
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      let response: string;
      let isAIResponse = false;

      if (useAI) {
        const timetableContext = processQuery(currentInput, timetableData);
        response = await aiService.generateResponse(currentInput, timetableContext);
        isAIResponse = true;
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        response = processQuery(currentInput, timetableData);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isBot: true,
        isAI: isAIResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error. Please try again.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-[600px] flex flex-col rounded-2xl overflow-hidden bg-transparent">
      <div 
        className="bg-gradient-to-r from-blue-accent via-pink-accent to-teal-accent text-dark p-6 relative"
        style={{
          boxShadow: '0 0 20px rgba(138, 180, 248, 0.3)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-lg">BBK BOT</h3>
                {useAI && (
                  <Badge className="bg-dark/20 text-dark font-medium">
                    <Sparkles className="h-3 w-3 mr-1" />
                    AI
                  </Badge>
                )}
              </div>
              <p className="text-sm text-dark/80 font-medium">Your timetable assistant</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setUseAI(!useAI)}
            className="text-dark hover:bg-white/20 rounded-xl"
          >
            <Sparkles className={`h-5 w-5 ${useAI ? 'text-dark' : 'text-dark/50'}`} />
          </Button>
        </div>
      </div>

      <ScrollArea 
        className="flex-1 p-6 bg-transparent" 
        ref={scrollAreaRef}
        style={{
          background: 'rgba(30, 30, 40, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      >
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.isBot
                    ? message.isAI
                      ? 'text-gray-100 border border-blue-accent/30'
                      : 'text-gray-100'
                    : 'bg-gradient-to-r from-blue-accent to-teal-accent text-dark font-medium shadow-lg shadow-blue-accent/20'
                }`}
                style={message.isBot ? {
                  background: 'rgba(40, 40, 50, 0.8)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                } : {}}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <div className="flex items-center">
                      <Bot className={`h-4 w-4 mt-1 flex-shrink-0 ${message.isAI ? 'text-blue-accent' : 'text-gray-300'}`} />
                      {message.isAI && <Sparkles className="h-3 w-3 text-blue-accent ml-1" />}
                    </div>
                  )}
                  {!message.isBot && (
                    <User className="h-4 w-4 mt-1 text-dark flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-2 ${message.isBot ? 'text-gray-400' : 'text-dark/70'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div 
                className={`rounded-2xl px-4 py-3 max-w-[80%] ${useAI ? 'border border-blue-accent/30' : ''}`}
                style={{
                  background: 'rgba(40, 40, 50, 0.8)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
              >
                <div className="flex items-center space-x-2">
                  <Bot className={`h-4 w-4 ${useAI ? 'text-blue-accent' : 'text-gray-300'}`} />
                  {useAI && <Sparkles className="h-3 w-3 text-blue-accent" />}
                  <div className="flex space-x-1">
                    <div className={`w-2 h-2 rounded-full animate-bounce ${useAI ? 'bg-blue-accent' : 'bg-gray-300'}`}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${useAI ? 'bg-blue-accent' : 'bg-gray-300'}`} style={{ animationDelay: '0.1s' }}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${useAI ? 'bg-blue-accent' : 'bg-gray-300'}`} style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div 
        className="p-6 bg-transparent"
        style={{
          background: 'rgba(30, 30, 40, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      >
        <div className="flex space-x-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={useAI ? "Chat with me about your timetable..." : "Ask me about your timetable..."}
            className="flex-1 text-white placeholder-gray-400 focus:border-blue-accent/50 focus:ring-blue-accent/50 rounded-xl"
            style={{
              background: 'rgba(50, 50, 60, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-gradient-to-r from-blue-accent to-teal-accent hover:from-blue-accent/90 hover:to-teal-accent/90 text-dark font-medium px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-accent/20 hover:shadow-blue-accent/30"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
