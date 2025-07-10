import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const useAuthStore = create((set) => ({
  authUser: null,
  isRegistering: false,
  isLoggingIn: false,
  isUpdatingUser: false,
  isLoggingOut: false,

  registerUser: async (data) => {
    set({ isRegistering: true });
    try {
      const res = await axiosInstance.post("/users/register", data);
      set({ authUser: res.data.user });
    } catch (error) {
      console.error("Registration failed:", error);
      set({ authUser: null });
    } finally {
      set({ isRegistering: false });
    }
  },

  loginUser: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/users/login", data);
      set({ authUser: res.data.user });
    } catch (error) {
      console.error("Login failed:", error);
      set({ authUser: null });
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateUser: async (data) => {
    set({ isUpdatingUser: true });
    try {
      const res = await axiosInstance.patch("/users/updateUser", data);
      set({ authUser: res.data.user });
    } catch (error) {
      console.error("Update failed:", error);
      set({ authUser: null });
    } finally {
      set({ isUpdatingUser: false });
    }
  },

  logoutUser: async () => {
    set({ isLoggingOut: true });
    try {
      await axiosInstance.post("/users/logout");
      set({ authUser: null });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      set({ isLoggingOut: false });
    }
  },

  getUser: async () => {
    try {
      const res = await axiosInstance.get("/users/getUser");
      set({ authUser: res.data.user });
    } catch (error) {
      console.error("Failed to fetch user:", error);
      set({ authUser: null });
    }
  },
}));

export default useAuthStore;
