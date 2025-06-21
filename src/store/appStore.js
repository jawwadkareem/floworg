import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppStore = create(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      chatVisible: true,
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setChatVisible: (visible) => set({ chatVisible: visible }),
    }),
    {
      name: "app-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAppStore;
