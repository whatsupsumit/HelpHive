import React, { useEffect, useState, useRef } from "react";
import useAuthStore from "../store/userAuth";
import { useNavigate } from "react-router-dom";
import useChatStore from "../store/chatStore";

const Chat = () => {
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
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
  } = useChatStore();

  const setSelectedContact = (contactId) => {
    useChatStore.setState({ selectedContact: contactId });
  };

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
    }
  }, [selectedContact, fetchMessages]);

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

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage({
          file: file,
          preview: e.target.result,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const sendImageMessage = async () => {
    if (!selectedImage) return;

    try {
      // Create FormData for image upload
      const formData = new FormData();
      formData.append("image", selectedImage.file);

      await sendMessage(formData, "image");
      removeSelectedImage();
    } catch (error) {
      console.error("Error sending image:", error);
    }
  };

  console.log("Contacts:", contacts);
  console.log("Messages:", messages);

  const handleSend = async (e) => {
    e.preventDefault();

    // Check if we have either text or image to send
    if (!input.trim() && !selectedImage) return;

    try {
      if (selectedImage && input.trim()) {
        // Send both image and text
        const formData = new FormData();
        formData.append("image", selectedImage.file);
        formData.append("text", input.trim());

        await sendMessage(formData, "mixed");
        setInput("");
        removeSelectedImage();
      } else if (selectedImage) {
        // Send only image
        await sendImageMessage();
      } else {
        // Send only text
        await sendMessage(input);
        setInput("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
      <div className="w-full flex h-[calc(100vh-6rem)] rounded-none shadow-2xl overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex flex-col shadow-2xl">
          {/* Contacts */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="px-6 py-3 text-lg font-semibold text-orange-300">
              Contacts
            </h4>
            <ul>
              {contacts.map((contact) => (
                <li
                  key={contact._id || contact.id}
                  className={`flex items-center px-6 py-3 cursor-pointer transition-all duration-200 hover:bg-red-800/40 ${
                    selectedContact === (contact._id || contact.id)
                      ? "bg-red-800/60"
                      : ""
                  }`}
                  onClick={() => setSelectedContact(contact._id || contact.id)}
                >
                  <img
                    src={contact.pic || contact.photo || "/default-avatar.png"}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-orange-400"
                  />
                  <span className="font-medium text-base">{contact.name}</span>
                </li>
              ))}
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
                return contact ? (
                  <>
                    <img
                      src={
                        contact.pic || contact.photo || "/default-avatar.png"
                      }
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-400"
                    />
                    <h2 className="text-2xl font-bold text-red-700">
                      {contact.name}
                    </h2>
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
              ).map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === authUser.name || msg.senderId === authUser._id
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-lg px-4 py-2 rounded-2xl shadow-lg text-base ${
                      msg.from === authUser.name ||
                      msg.senderId === authUser._id
                        ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-gray-900"
                        : "bg-gradient-to-r from-gray-300 to-red-200 text-gray-800"
                    }`}
                  >
                    <span className="font-semibold mr-2">
                      {msg.from === authUser.name ||
                      msg.senderId === authUser._id
                        ? "You"
                        : msg.from || msg.senderName}
                    </span>
                    {msg.type === "image" ? (
                      <img
                        src={msg.imageUrl || msg.content || msg.text}
                        alt="Shared image"
                        className="max-w-xs rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() =>
                          window.open(
                            msg.imageUrl || msg.content || msg.text,
                            "_blank"
                          )
                        }
                      />
                    ) : (
                      msg.text || msg.content || msg.message
                    )}
                  </div>
                </div>
              ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="px-8 py-6 bg-white/80 border-t border-orange-300/30">
            {/* Image Preview */}
            {selectedImage && (
              <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedImage.preview}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {selectedImage.name}
                      </p>
                      <p className="text-xs text-gray-500">Ready to send</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeSelectedImage}
                    className="text-red-500 hover:text-red-700 p-1 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  selectedImage
                    ? "Add a caption (optional)..."
                    : "Type your message..."
                }
                className="flex-1 px-4 py-3 rounded-full border-2 border-orange-300 focus:outline-none focus:border-red-400 text-lg shadow-md bg-white text-gray-900 placeholder-gray-500"
              />

              {/* Image Upload Button */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                title="Send Image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                disabled={!input.trim() && !selectedImage}
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
