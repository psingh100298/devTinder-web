import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  addUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));

export default useUserStore;
