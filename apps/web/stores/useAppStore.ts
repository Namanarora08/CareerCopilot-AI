import { create } from "zustand";

interface AppState {
  activeWorkspace: string;
  showDetails: boolean;
  toggleDetails: () => void;
  setWorkspace: (workspace: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeWorkspace: "web",
  showDetails: true,
  toggleDetails: () => set((state) => ({ showDetails: !state.showDetails })),
  setWorkspace: (workspace) => set({ activeWorkspace: workspace }),
}));
