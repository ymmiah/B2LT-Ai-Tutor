import React, { useState, useEffect, useRef } from 'react';
import { createChat } from '../services/geminiService';
import Card from './shared/Card';
import { SendIcon, SparklesIcon } from './icons';
import { Chat } from '@google/genai';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

interface ChatbotProps {
  systemInstruction: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ systemInstruction }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChat(createChat(systemInstruction));
    setMessages([]);
  }, [systemInstruction]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!userInput.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
        const stream = await chat.sendMessageStream({ message: userInput });
        
        let aiResponseText = '';
        setMessages(prev => [...prev, { sender: 'ai', text: '...' }]);

        for await (const chunk of stream) {
            aiResponseText += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { sender: 'ai', text: aiResponseText };
                return newMessages;
            });
        }
    } catch (error) {
        console.error("Chat error:", error);
        setMessages(prev => [...prev, { sender: 'ai', text: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <Card title="AI Study Assistant" icon={<SparklesIcon />}>
      <p className="mb-4">Have questions about the test? Ask our AI assistant!</p>
      <div className="flex flex-col h-96">
        <div ref={chatContainerRef} className="flex-grow bg-gray-100 dark:bg-gray-800/50 rounded-md p-4 overflow-y-auto mb-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
             {isLoading && messages[messages.length - 1]?.sender === 'user' && (
                <div className="flex justify-start">
                    <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                      </div>
                    </div>
                </div>
            )}
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !userInput.trim()}
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Chatbot;