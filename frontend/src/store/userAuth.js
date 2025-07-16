import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

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
      if (res.data.status === 200) {
        set({ authUser: res.data.user });
        toast.success("Registration successful!");
        return res.status; // Return 200 on success
      } else {
        toast.error(res.data.message || "Registration failed");
        return null; // Return null on failure
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
      set({ authUser: null });
      return null; // Return null on error
    } finally {
      set({ isRegistering: false });
    }
  },

  loginUser: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/users/login", data);
      if (res.status !== 200) {
        toast(res.data.message || "Login failed");
        return null; // Return null on failure
      } else {
        set({ authUser: res.data.user });
        return res.status; // Return 200 on success
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
      set({ authUser: null });
      return null; // Return null on error
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
