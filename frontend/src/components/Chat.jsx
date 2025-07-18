import React, { useEffect, useState, useRef } from "react";
import useAuthStore from "../store/userAuth";
import { useNavigate } from "react-router-dom";
import useChatStore from "../store/chatStore";

const Chat = () => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const { authUser } = useAuthStore();
  if (!authUser) {
    navigate("/auth");
  }

  const {
    contacts,
    messages,
    sendMessage,
    selectedContact,
    fetchMessages,
    fetchContacts,
    onlineUsers,
    connectSocket,
    disconnectSocket,
    subscribeToMessage,
    unSubscribeToMessage,
  } = useChatStore();

  const setSelectedContact = (contactId) => {
    useChatStore.setState({ selectedContact: contactId });
  };

  useEffect(() => {
    connectSocket();
    return () => disconnectSocket();
  }, [connectSocket, disconnectSocket]);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        await fetchContacts();
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContactDetails();
  }, [fetchContacts]);

  // Separate useEffect for handling contact selection
  useEffect(() => {
    if (contacts.length > 0 && !selectedContact) {
      // Automatically select the first contact
      const firstContact = contacts[0];
      setSelectedContact(firstContact._id || firstContact.id);
    }
  }, [contacts, selectedContact]);

  // Separate useEffect for fetching messages when selectedContact changes
  useEffect(() => {
    if (selectedContact) {
      fetchMessages();
      subscribeToMessage();
      return () => unSubscribeToMessage();
    }
  }, [
    selectedContact,
    fetchMessages,
    subscribeToMessage,
    unSubscribeToMessage,
  ]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (
      messages &&
      (Array.isArray(messages)
        ? messages.length > 0
        : Object.keys(messages).length > 0)
    ) {
      scrollToBottom();
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();

    // Check if we have either text or image to send
    if (!input.trim()) return;

    try {
      await sendMessage(input.trim());
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
      <div className="w-full flex h-[calc(100vh-6rem)] rounded-none shadow-2xl overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-gradient-to-br from-gray-700 via-red-700 to-gray-800 text-white flex flex-col shadow-2xl">
          {/* Contacts */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="px-6 py-3 text-lg font-semibold text-orange-300">
              Contacts
            </h4>
            <ul>
              {contacts.map((contact) => {
                const contactId = contact._id || contact.id;
                const isOnline = onlineUsers && onlineUsers.includes(contactId);
                return (
                  <li
                    key={contactId}
                    className={`flex items-center px-6 py-3 cursor-pointer transition-all duration-200 hover:bg-red-800/40 ${
                      selectedContact === contactId ? "bg-red-800/60" : ""
                    }`}
                    onClick={() => setSelectedContact(contactId)}
                  >
                    <div className="relative mr-3">
                      <img
                        src={
                          contact.pic || contact.photo || "/default-avatar.png"
                        }
                        alt={contact.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                      />
                      {isOnline && (
                        <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <span className="font-medium text-base">
                      {contact.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col justify-between bg-white/60 backdrop-blur-xl">
          {/* Chat Header */}
          {selectedContact && (
            <div className="flex items-center px-8 py-6 border-b border-orange-300/30">
              {(() => {
                const contact = contacts.find(
                  (c) => (c._id || c.id) === selectedContact
                );
                const isOnline =
                  onlineUsers && onlineUsers.includes(selectedContact);
                return contact ? (
                  <>
                    <div className="relative mr-4">
                      <img
                        src={
                          contact.pic || contact.photo || "/default-avatar.png"
                        }
                        alt={contact.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-red-700">
                        {contact.name}
                      </h2>
                      <div
                        className={`text-sm font-semibold mt-1 ${
                          isOnline ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        {isOnline ? "Online" : "Offline"}
                      </div>
                    </div>
                  </>
                ) : (
                  <h2 className="text-2xl font-bold text-red-700">
                    Loading...
                  </h2>
                );
              })()}
            </div>
          )}

          {/* Messages */}
          <div
            className="flex-1 px-8 py-6 overflow-y-auto flex flex-col gap-3 bg-white/40 scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {selectedContact &&
              (Array.isArray(messages)
                ? messages
                : messages[selectedContact] || []
              ).map((msg, idx) => {
                const isOwn =
                  msg.from === authUser.name || msg.senderId === authUser._id;
                const hasImage =
                  msg.imageUrl || msg.image || msg.type === "image";
                const imageSrc = msg.imageUrl || msg.image;
                const textContent = msg.text || msg.content || msg.message;
                return (
                  <div
                    key={idx}
                    className={`flex ${
                      isOwn ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-lg px-4 py-2 rounded-2xl shadow-lg text-base ${
                        isOwn
                          ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-gray-900"
                          : "bg-gradient-to-r from-gray-300 to-red-200 text-gray-800"
                      }`}
                    >
                      <span className="font-semibold mr-2">
                        {isOwn ? "You" : msg.from || msg.senderName}
                      </span>
                      {hasImage && imageSrc ? (
                        <>
                          <img
                            src={imageSrc}
                            alt="Shared image"
                            className="max-w-xs rounded-lg cursor-pointer hover:opacity-90 transition-opacity mb-1"
                            onClick={() => window.open(imageSrc, "_blank")}
                          />
                          {textContent && (
                            <div className="mt-1">{textContent}</div>
                          )}
                        </>
                      ) : (
                        textContent
                      )}
                    </div>
                  </div>
                );
              })}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="px-8 py-6 bg-white/80 border-t border-orange-300/30">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-full border-2 border-orange-300 focus:outline-none focus:border-red-400 text-lg shadow-md bg-white text-gray-900 placeholder-gray-500"
              />

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                disabled={!input.trim()}
              >
                Send
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chat;
