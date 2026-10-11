import axios from "axios";
import { BASE_URL, IMAGE_URL } from "../utils/constants";
import useFeedStore from "../utils/feedStore";

const UserCard = ({ user }) => {
  const removeUserFromFeed = useFeedStore((store) => store.removeUserFromFeed);

  const handleIgnore = async () => {
  
    await axios.post(
      `${BASE_URL}/request/send/ignored/${user._id}`,
      {},
      { withCredentials: true },
    );
    removeUserFromFeed(user._id);
  };

  const handleInterested = async () => {
    await axios.post(
      `${BASE_URL}/request/send/interested/${user._id}`,
      {},
      { withCredentials: true },
    );
    removeUserFromFeed(user._id);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm m-5">
      <figure>
        <img src={user.photoUrl || IMAGE_URL} alt="userImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
        {user.age && user.gender && <p>{user.age + ", " + user.gender}</p>}
        <p> {user.about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleIgnore}>
            Ignore
          </button>
          <button className="btn btn-secondary" onClick={handleInterested}>
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
