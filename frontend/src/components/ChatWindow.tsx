import React, { useState } from 'react';

type Message = {
  role: 'user' | 'bot';
  content: string;
};

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'SENTINEL system online. Awaiting input...' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessage: Message = { role: 'bot', content: data.reply || 'Error: No reply from server.' };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Failed to fetch:", error);
      const errorMessage: Message = { role: 'bot', content: 'Connection error. System offline.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-window-container">
      <div className="messages-area">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.role === 'user' ? '>> ' : 'SENTINEL: '}</strong>
            {msg.content}
          </p>
        ))}
         {isLoading && <p>SENTINEL: Processing...</p>}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Enter command..."
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading}>
          Transmit
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
