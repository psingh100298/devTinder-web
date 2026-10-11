import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, IMAGE_URL } from "../utils/constants";
import useUserStore from "../utils/userStore";
import useFeedStore from "../utils/feedStore";
import useConnectionStore from "../utils/connectionStore";
import useRequestStore from "../utils/requestStore";

const NavBar = () => {
  const user = useUserStore((store) => store.user);
  const removeUser = useUserStore((store) => store.removeUser);
  const removeFeed = useFeedStore((store) => store.removeFeed);
  const removeConnections = useConnectionStore(
    (store) => store.removeConnections,
  );
  const removeRequests = useRequestStore((store) => store.removeRequests);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
    removeUser();
    removeFeed();
    removeConnections();
    removeRequests();
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          👨‍💻 DevTinder
        </Link>
      </div>
      {user && (
      <div className="flex gap-2">
        <div className="dropdown dropdown-end mx-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user photo"
                src={user?.photoUrl || IMAGE_URL}
              />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to='/connections'>Connections</Link>
            </li>
            
              <li>
              <Link to='/requests'>Requets</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      )}
    </div>
  );
};

export default NavBar;
