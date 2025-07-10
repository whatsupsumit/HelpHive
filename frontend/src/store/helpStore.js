import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const useHelpStore = create((set) => ({
  isAddingHelp: false,
  isResolvingHelp: false,
  limitedHelps: [],
  allHelps: [],
  emergencyhelps: [],

  addhelps: async (data) => {
    set({ isAddingHelp: true });
    try {
      await axiosInstance.post("/helps/addHelps", data);
    } catch (error) {
      console.error("Error adding help:", error);
      throw error;
    } finally {
      set({ isAddingHelp: false });
    }
  },

  resolveHelps: async (helpId) => {
    set({ isResolvingHelp: true });
    try {
      await axiosInstance.patch(`/helps/resolveHelps/${helpId}`);
    } catch (error) {
      console.error("Error resolving help:", error);
      throw error;
    } finally {
      set({ isResolvingHelp: false });
    }
  },

  getLimitedHelps: async () => {
    try {
      const res = await axiosInstance.get("/helps/getLimitedHelps");
      set({ limitedHelps: res.data.helps });
    } catch (error) {
      console.error("Error fetching limited helps:", error);
      throw error;
    }
  },

  getEmergencyHelps: async () => {
    try {
      const res = await axiosInstance.get("/helps/getEmergencyHelps");
      set({ emergencyhelps: res.data.helps });
    } catch (error) {
      console.error("Error fetching emergency helps:", error);
      throw error;
    }
  },

  getAllHelps: async () => {
    try {
      const res = await axiosInstance.get("/helps/getAllHelps");
      set({ allHelps: res.data.helps });
    } catch (error) {
      console.error("Error fetching all helps:", error);
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
}));

export default useHelpStore;
