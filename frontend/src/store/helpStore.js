import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

const useHelpStore = create((set) => ({
  isAddingHelp: false,
  isResolvingHelp: false,
  limitedHelps: [],
  allHelps: [],
  emergencyhelps: [],
  myHelps: [],

  addhelps: async (data) => {
    set({ isAddingHelp: true });
    try {
      await axiosInstance.post("/helps/addHelp", data);
      toast.success("Help request added successfully!");
    } catch (error) {
      console.error("Error adding help:", error);
      toast.error("Failed to add help request.");
      throw error;
    } finally {
      set({ isAddingHelp: false });
    }
  },

  resolveHelps: async (helpId) => {
    set({ isResolvingHelp: true });
    try {
      await axiosInstance.patch(`/helps/resolveHelp/${helpId}`);
      toast.success("Help request resolved successfully!");
    } catch (error) {
      console.error("Error resolving help:", error);
      toast.error("Failed to resolve help request.");
      throw error;
    } finally {
      set({ isResolvingHelp: false });
    }
  },

  getLimitedHelps: async () => {
    try {
      const res = await axiosInstance.get("/helps/getLimitedHelps");
      console.log("Limited Helps Response:", res.data);
      // Backend returns data directly, not wrapped in { helps: [] }
      set({ limitedHelps: Array.isArray(res.data) ? res.data : [] });
    } catch (error) {
      console.error("Error fetching limited helps:", error);
      set({ limitedHelps: [] });
      throw error;
    }
  },

  getEmergencyHelps: async () => {
    try {
      const res = await axiosInstance.get("/helps/getEmergencyHelps");
      set({ emergencyhelps: Array.isArray(res.data) ? res.data : [] });
    } catch (error) {
      console.error("Error fetching emergency helps:", error);
      set({ emergencyhelps: [] });
      throw error;
    }
  },

  getAllHelps: async () => {
    try {
      const res = await axiosInstance.get("/helps/getAllHelps");
      set({ allHelps: Array.isArray(res.data) ? res.data : [] });
    } catch (error) {
      console.error("Error fetching all helps:", error);
      set({ allHelps: [] });
      throw error;
    }
  },

  getHelp: async (helpId) => {
    try {
      const res = await axiosInstance.get(`/helps/getHelp/${helpId}`);
      return res.data.help;
    } catch (error) {
      console.error("Error fetching help:", error);
      throw error;
    }
  },

  getMyHelps: async () => {
    try {
      const res = await axiosInstance.get("/helps/getMyHelps");
      set({ myHelps: Array.isArray(res.data) ? res.data : [] });
    } catch (error) {
      console.error("Error fetching my helps:", error);
      throw error;
    }
  },
}));

export default useHelpStore;
