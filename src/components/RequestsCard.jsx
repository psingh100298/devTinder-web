import { BASE_URL, IMAGE_URL } from "../utils/constants";
import axios from "axios";
import useRequestStore from "../utils/requestStore";
const RequestsCard = ({ user }) => {
  const removeRequest = useRequestStore((store) => store.removeRequest);

  const handleAccept = async () => {
    await axios.post(`${BASE_URL}/request/review/accepted/${user?._id}`, {}, {withCredentials:true});
    removeRequest(user._id);
  };

  const handleReject = async () => {
    await axios.post(`${BASE_URL}/request/review/rejected/${user?._id}`,  {}, {withCredentials:true});
    removeRequest(user._id);
  };


  return (
    <div className="card bg-base-100 w-96 shadow-sm m-5">
      <figure>
        <img src={user.fromUserId.photoUrl || IMAGE_URL} alt="userImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.fromUserId.firstName + " " + user.fromUserId.lastName}
        </h2>
        {user.fromUserId.age && user.fromUserId.gender && (
          <p>{user.fromUserId.age + ", " + user.fromUserId.gender}</p>
        )}
        <p> {user.fromUserId.about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleReject}>
            Reject
          </button>
          <button className="btn btn-secondary" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestsCard;
