import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

const useIssueStore = create((set) => ({
  isAddingIssue: false,
  isResolvingIssue: false,
  limitedIssues: [],
  allIssues: [],
  emergencyIssues: [],
  myIssues: [],

  addIssue: async (data) => {
    set({ isAddingIssue: true });
    try {
      // Convert file to base64 if image exists
      let processedData = { ...data };
      if (data.image && data.image instanceof File) {
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(data.image);
        });
        processedData.image = base64;
      }

      await axiosInstance.post("/issues/addissue", processedData);
      toast.success("Issue reported successfully!");
      return true;
    } catch (error) {
      console.error("Error adding issue:", error);
      toast.error("Failed to report issue. Please try again.");
      return false;
    } finally {
      set({ isAddingIssue: false });
    }
  },

  moreIssue: async (issueId) => {
    set({ isAddingIssue: true });
    try {
      await axiosInstance.put(`/issues/addingissue/${issueId}`);
      toast.success("Issue updated to your profile successfully!");
    } catch (error) {
      console.error("Error adding to issue:", error);
      throw error;
    } finally {
      set({ isAddingIssue: false });
    }
  },

  resolveIssue: async (issueId) => {
    set({ isResolvingIssue: true });
    try {
      await axiosInstance.patch(`/issues/resolveissue/${issueId}`);
    } catch (error) {
      console.error("Error resolving issue:", error);
      throw error;
    } finally {
      set({ isResolvingIssue: false });
    }
  },

  getLimitedIssues: async () => {
    try {
      const res = await axiosInstance.get("/issues/getlimitedissues");
      set({ limitedIssues: res.data.issues });
    } catch (error) {
      console.error("Error fetching limited issues:", error);
      throw error;
    }
  },

  getEmergencyIssues: async () => {
    try {
      const res = await axiosInstance.get("/issues/getemergencyissues");
      set({ emergencyIssues: res.data.issues });
    } catch (error) {
      console.error("Error fetching emergency issues:", error);
      throw error;
    }
  },

  getAllIssues: async () => {
    try {
      const res = await axiosInstance.get("/issues/getallissues");
      set({ allIssues: Array.isArray(res.data) ? res.data : [] });
    } catch (error) {
      console.error("Error fetching all issues:", error);
      throw error;
    }
  },

  getMyIssues: async () => {
    try {
      const res = await axiosInstance.get("/issues/getmyissues");
      set({
        myIssues: Array.isArray(res.data) ? res.data : [],
      });
    } catch (error) {
      console.error("Error fetching my issues:", error);
      throw error;
    }
  },
}));

export default useIssueStore;
