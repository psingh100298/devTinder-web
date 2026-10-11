import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {withCredentials:true});
      dispatch(addFeed(res));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
if(!feed) return;
if(!feed.length) return <p>No feed data!!</p>
  return (
    <div className="flex flex-col-3 justify-center items-center">
      {feed?.data?.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default Feed;
