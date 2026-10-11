import { create } from "zustand";

const useConnectionStore = create((set) => ({
  connections: null,
  addConnections: (connections) => set({ connections }),
  removeConnections: () => set({ connections: null }),
}));

export default useConnectionStore;
