import { IMAGE_URL } from "../utils/constants";
const ConnectionCard = ({ user }) => {

  return (
    <div className="card bg-base-100 w-96 shadow-sm m-5">
      <figure>
        <img src={user.photoUrl || IMAGE_URL} alt="userImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
        {user.age && user.gender && <p>{user.age + ", " + user.gender}</p>}
        <p> {user.about}</p>
        
      </div>
    </div>
  );
};

export default ConnectionCard;
