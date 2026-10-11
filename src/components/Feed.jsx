import { BASE_URL } from "../utils/constants";
import useFeedStore from "../utils/feedStore";
import axios from "axios";
import { useEffect } from "react";
import UserCard from "./UserCard";
import EmptyState from "./EmptyState";

const Feed = () => {
  const feed = useFeedStore((store) => store.feed);
  const addFeed = useFeedStore((store) => store.addFeed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {withCredentials:true});
      addFeed(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
if(!feed) return;
if(!feed.length)
  return (
    <EmptyState
      icon="🎉"
      title="You're all caught up!"
      message="No new developers in your feed right now. Check back later."
    />
  );
  return (
    <div className="flex flex-col-3 justify-center items-center">
      {feed.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Feed;
