
import React, { useState } from "react";

// Dummy data for demonstration
const currentUser = {
  name: "Nishant Raj",
  photo: "/hivelogo.png",
  email: "nishant@example.com",
};

const contacts = [
  { id: 1, name: "Alice", photo: "/helphome.png" },
  { id: 2, name: "Bob", photo: "/helphelp.png" },
  { id: 3, name: "Charlie", photo: "/howhelp.png" },
  { id: 4, name: "Daisy", photo: "/abouhome.png" },
];

const initialMessages = {
  1: [
    { from: "Alice", text: "Hi there!" },
    { from: "Nishant Raj", text: "Hello Alice!" },
  ],
  2: [
    { from: "Bob", text: "Need help with my project." },
    { from: "Nishant Raj", text: "Sure, Bob!" },
  ],
  3: [
    { from: "Charlie", text: "How are you?" },
  ],
  4: [
    { from: "Daisy", text: "Can you assist me?" },
  ],
};

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0].id);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => ({
      ...prev,
      [selectedContact]: [
        ...prev[selectedContact],
        { from: currentUser.name, text: input },
      ],
    }));
    setInput("");
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
      <div className="w-full flex h-[calc(100vh-6rem)] rounded-none shadow-2xl overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex flex-col shadow-2xl">
          {/* User Info */}
          <div className="flex flex-col items-center py-8 border-b border-red-400/30">
            <img src={currentUser.photo} alt="User" className="w-20 h-20 rounded-full object-cover border-4 border-orange-400 shadow-lg mb-2" />
          </div>
          {/* Contacts */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="px-6 py-3 text-lg font-semibold text-orange-300">Contacts</h4>
            <ul>
              {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className={`flex items-center px-6 py-3 cursor-pointer transition-all duration-200 hover:bg-red-800/40 ${selectedContact === contact.id ? "bg-red-800/60" : ""}`}
                  onClick={() => setSelectedContact(contact.id)}
                >
                  <img src={contact.photo} alt={contact.name} className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-orange-400" />
                  <span className="font-medium text-base">{contact.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col justify-between bg-white/60 backdrop-blur-xl">
          {/* Chat Header */}
          <div className="flex items-center px-8 py-6 border-b border-orange-300/30">
            <img src={contacts.find(c => c.id === selectedContact).photo} alt="Contact" className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-400" />
            <h2 className="text-2xl font-bold text-red-700">{contacts.find(c => c.id === selectedContact).name}</h2>
          </div>

          {/* Messages */}
          <div className="flex-1 px-8 py-6 overflow-y-auto flex flex-col gap-3 bg-white/40">
            {(messages[selectedContact] || []).map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === currentUser.name ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-lg px-4 py-2 rounded-2xl shadow-lg text-base ${msg.from === currentUser.name ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-gray-900" : "bg-gradient-to-r from-gray-300 to-red-200 text-gray-800"}`}>
                  <span className="font-semibold mr-2">{msg.from === currentUser.name ? "You" : msg.from}:</span>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSend} className="flex items-center px-8 py-6 bg-white/80 border-t border-orange-300/30">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-full border-2 border-orange-300 focus:outline-none focus:border-red-400 text-lg shadow-md bg-white"
            />
            <button
              type="submit"
              className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Send
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Chat;
