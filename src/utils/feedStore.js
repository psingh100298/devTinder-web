import { create } from "zustand";

const useFeedStore = create((set) => ({
  feed: null,
  addFeed: (feed) => set({ feed }),
  removeUserFromFeed: (userId) =>
    set((state) => ({
      feed: state.feed.filter((user) => user._id !== userId),
    })),
  removeFeed: () => set({ feed: null }),
}));

export default useFeedStore;
