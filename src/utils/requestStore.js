import { create } from "zustand";

const useRequestStore = create((set) => ({
  requests: null,
  addRequests: (requests) => set({ requests }),
  removeRequest: (requestId) =>
    set((state) => ({
      requests: state.requests.filter((request) => request._id !== requestId),
    })),
  removeRequests: () => set({ requests: null }),
}));

export default useRequestStore;
