import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";
import { io } from "socket.io-client";
import useAuthStore from "./userAuth";
import useNotificationStore from "./notificationStore";

const useChatStore = create((set, get) => ({
  contacts: [],
  messages: [],
  selectedContact: null,
  isLoading: false,
  onlineUsers: [],
  socket: null,

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

  sendMessage: async (content) => {
    try {
      const { selectedContact } = get();

      const response = await axiosInstance.post(
        `/chats/sendMessage/${selectedContact}`,
        { content }
      );
      set({ messages: [...get().messages, response.data.newMessage] });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  },

  connectSocket: () => {
    const { authUser } = useAuthStore.getState();
    if (!authUser || get().socket?.connected) return;

    const socket = io("https://help-hive-api.vercel.app", {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });

    set({ socket: socket });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },

  subscribeToMessage: () => {
    const socket = get().socket;
    if (!socket) return;
    socket.on("newMessage", (message) => {
      set((state) => ({
        messages: [...state.messages, message],
      }));
    });
  },

  unSubscribeToMessage: async () => {
    const socket = get().socket;
    if (!socket) return;
    const markAllRead = useNotificationStore.getState().markingAllAsRead;
    await markAllRead();
    socket.off("newMessage");
  },
}));

export default useChatStore;
