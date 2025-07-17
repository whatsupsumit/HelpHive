import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const useNotificationStore = create((set) => ({
  isMarkingAsRead: false,
  isMarkingAllAsRead: false,
  notifications: [],

  getAllNotifications: async () => {
    try {
      const res = await axiosInstance.get("/notifications/get-notifications");
      set({ notifications: Array.isArray(res.data) ? res.data : [] });
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  },

  markAsRead: async (notificationId) => {
    set({ isMarkingAsRead: true });
    try {
      await axiosInstance.post(`/notifications/mark-as-read/${notificationId}`);
      set((state) => ({
        notifications: state.notifications.filter(
          (notification) => notification._id !== notificationId
        ),
      }));
    } catch (error) {
      console.error("Error marking notification as read:", error);
      throw error;
    } finally {
      set({ isMarkingAsRead: false });
    }
  },

  markingAllAsRead: async () => {
    set({ isMarkingAllAsRead: true });
    try {
      await axiosInstance.post("/notifications/mark-all-as-read");
      set({ notifications: [] });
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
      throw error;
    } finally {
      set({ isMarkingAllAsRead: false });
    }
  },
}));

export default useNotificationStore;
