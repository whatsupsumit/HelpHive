import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const useChatStore = create((set, get) => ({
  contacts: [],
  messages: [],
  selectedContact: null,
  isLoading: false,

  fetchContacts: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/chats/sidebar");
      set({ contacts: response.data });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      set({ isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchMessages: async () => {
    set({ isLoading: true });
    try {
      const { selectedContact } = get();
      const response = await axiosInstance.get(
        `/chats/getMessages/${selectedContact}`
      );
      set({ messages: response.data });
    } catch (error) {
      console.error("Error fetching messages:", error);
      set({ messages: [], selectedContact: null });
    } finally {
      set({ isLoading: false });
    }
  },

  sendMessage: async (content, image) => {
    try {
      const { selectedContact } = get();
      const response = await axiosInstance.post(
        `/chats/sendMessage/${selectedContact}`,
        { content, image }
      );
      set((state) => ({
        messages: [...state.messages, response.data.newMessage],
      }));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  },
}));

export default useChatStore;
