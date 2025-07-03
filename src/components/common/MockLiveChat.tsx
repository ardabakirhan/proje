import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MockLiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Merhaba! İletişim Group'a hoş geldiniz. Size nasıl yardımcı olabilirim?",
      sender: 'agent',
      time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Auto responses
  const autoResponses = [
    "Teşekkür ederim! Konunuzla ilgili uzmanlarımızdan biri kısa sürede size dönecektir.",
    "Bu konuda size daha detaylı bilgi verebilirim. Hangi hizmetimizle ilgili bilgi almak istiyorsunuz?",
    "Çok güzel! Elektrik, boya, mobilya, ambalaj ve lojistik hizmetlerimiz hakkında bilgi verebilirim.",
    "Hemen ilgili departmanımızla görüştüreyim. İletişim bilgilerinizi alabilir miyim?"
  ];

  useEffect(() => {
    // Show notification after 5 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        // Add a subtle bounce animation to the chat button
        const chatButton = document.querySelector('.chat-button');
        if (chatButton) {
          chatButton.classList.add('animate-bounce');
          setTimeout(() => chatButton.classList.remove('animate-bounce'), 2000);
        }
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      const response = {
        id: messages.length + 2,
        text: autoResponses[Math.floor(Math.random() * autoResponses.length)],
        sender: 'agent',
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="chat-button fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
            style={{ backgroundColor: '#0ea5e9' }}
          >
            <img 
              src="/images/logo/iletisim-group-logo-white.svg" 
              alt="İletişim Group"
              className="w-6 h-6" 
            />
            <span className="hidden sm:block text-sm font-medium">Canlı Destek</span>
            {/* Online indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              height: isMinimized ? '60px' : '480px'
            }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
            style={{ width: '320px' }}
          >
            {/* Header */}
            <div 
              className="bg-blue-600 text-white p-4 flex items-center justify-between cursor-pointer"
              style={{ backgroundColor: '#0ea5e9' }}
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">İletişim Group</h3>
                  <p className="text-xs opacity-90">Canlı Destek</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(!isMinimized);
                  }}
                  className="hover:bg-white/20 p-1 rounded"
                >
                  <Minimize2 size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="hover:bg-white/20 p-1 rounded"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-800 border'
                        }`}
                        style={message.sender === 'user' ? { backgroundColor: '#0ea5e9' } : {}}
                      >
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border rounded-lg px-3 py-2 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-3 border-t bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Mesajınızı yazın..."
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                      style={{ backgroundColor: inputMessage.trim() ? '#0ea5e9' : undefined }}
                    >
                      <Send size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Mesajlarınız güvenli şekilde iletilmektedir
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MockLiveChat;
