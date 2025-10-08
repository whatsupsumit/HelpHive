import React, { useEffect, useState, useRef } from "react";
import useAuthStore from "../store/userAuth";
import { useNavigate } from "react-router-dom";
import useChatStore from "../store/chatStore";

const Chat = () => {
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    setSidebarOpen(false); // Close sidebar on mobile after selecting contact
  };

  // Connect socket on mount, disconnect on unmount
  useEffect(() => {
    connectSocket();
    return () => disconnectSocket();
  }, [connectSocket, disconnectSocket]);

  // Fetch contacts on component mount
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

  // Auto select first contact if none selected
  useEffect(() => {
    if (contacts.length > 0 && !selectedContact) {
      const firstContact = contacts[0];
      setSelectedContact(firstContact._id || firstContact.id);
    }
  }, [contacts, selectedContact]);

  // Fetch messages and subscribe to realtime messages on selectedContact change
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

  // Auto scroll to bottom on messages change
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

  // Disable body scroll when sidebar is open (mobile)
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      await sendMessage(input.trim());
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
      <div className="w-full flex h-[calc(100vh-6rem)] rounded-none shadow-2xl overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`
            bg-gradient-to-br from-gray-700 via-red-700 to-gray-800 text-white flex flex-col shadow-2xl
            fixed top-0 left-0 h-full w-64 sm:w-72 lg:w-80 z-40 transform transition-transform duration-300
            lg:relative lg:translate-x-0 lg:flex pt-8
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          `}
        >
          {/* Close button on mobile/tablet */}
          <div className="flex justify-end lg:hidden p-2 pt-4">
            <button
              onClick={toggleSidebar}
              aria-label="Close contacts sidebar"
              className="text-white text-2xl sm:text-3xl font-bold hover:text-orange-300 transition-colors"
            >
              &times;
            </button>
          </div>

          {/* Contacts */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="px-4 sm:px-6 py-3 text-base sm:text-lg font-semibold text-orange-300">
              Contacts
            </h4>
            <ul>
              {contacts.map((contact) => {
                const contactId = contact._id || contact.id;
                const isOnline = onlineUsers && onlineUsers.includes(contactId);
                return (
                  <li
                    key={contactId}
                    className={`flex items-center px-4 sm:px-6 py-2.5 sm:py-3 cursor-pointer transition-all duration-200 hover:bg-red-800/40 ${
                      selectedContact === contactId ? "bg-red-800/60" : ""
                    }`}
                    onClick={() => setSelectedContact(contactId)}
                  >
                    <div className="relative mr-3">
                      <img
                        src={contact.pic || contact.photo || "/default-avatar.png"}
                        alt={contact.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-orange-400"
                      />
                      {isOnline && (
                        <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full" />
                      )}
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      {contact.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Overlay background for sidebar on small screens */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        {/* Chat Area */}
        <main className="flex-1 flex flex-col justify-between bg-white/60 backdrop-blur-xl relative z-10">
          {/* Chat Header */}
          {selectedContact && (
            <div className="flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 border-b border-orange-300/30">
              <button
                onClick={toggleSidebar}
                className="mr-2 sm:mr-4 lg:hidden text-red-700 text-2xl sm:text-3xl focus:outline-none hover:text-red-500 transition-colors"
                aria-label="Toggle contacts sidebar"
              >
                &#9776;
              </button>

              {(() => {
                const contact = contacts.find(
                  (c) => (c._id || c.id) === selectedContact
                );
                const isOnline = onlineUsers && onlineUsers.includes(selectedContact);
                return contact ? (
                  <>
                    <div className="relative mr-2 sm:mr-3 md:mr-4">
                      <img
                        src={contact.pic || contact.photo || "/default-avatar.png"}
                        alt={contact.name}
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover border-2 border-orange-400"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-700">
                        {contact.name}
                      </h2>
                      <div
                        className={`text-xs sm:text-sm font-semibold mt-0.5 sm:mt-1 ${
                          isOnline ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        {isOnline ? "Online" : "Offline"}
                      </div>
                    </div>
                  </>
                ) : (
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-700">
                    Loading...
                  </h2>
                );
              })()}
            </div>
          )}

          {/* Messages */}
          <div
            className="flex-1 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 overflow-y-auto flex flex-col gap-2 sm:gap-3 bg-white/40 scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {(Array.isArray(messages)
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
                  className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-md md:max-w-lg px-3 sm:px-4 py-2 rounded-2xl shadow-lg text-sm sm:text-base ${
                      isOwn
                        ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-gray-900"
                        : "bg-gradient-to-r from-gray-300 to-red-200 text-gray-800"
                    }`}
                  >
                    <span className="font-semibold mr-2 text-xs sm:text-sm">
                      {isOwn ? "You" : msg.from || msg.senderName}
                    </span>
                    {hasImage && imageSrc ? (
                      <>
                        <img
                          src={imageSrc}
                          alt="Shared image"
                          className="max-w-full sm:max-w-xs rounded-lg cursor-pointer hover:opacity-90 transition-opacity mb-1"
                          onClick={() => window.open(imageSrc, "_blank")}
                        />
                        {textContent && (
                          <div className="mt-1 text-xs sm:text-sm">{textContent}</div>
                        )}
                      </>
                    ) : (
                      <span className="text-xs sm:text-sm md:text-base">{textContent}</span>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-white/80 border-t border-orange-300/30">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-full border-2 border-orange-300 focus:outline-none focus:border-red-400 text-sm sm:text-base md:text-lg shadow-md bg-white text-gray-900 placeholder-gray-500"
              />

              <button
                onClick={handleSend}
                className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400 text-white font-bold text-sm sm:text-base shadow-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chat;
