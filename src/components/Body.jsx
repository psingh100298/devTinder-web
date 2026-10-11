import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Toast from "./Toast";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import useUserStore from "../utils/userStore";
import { useEffect } from "react";

const Body = () => {
  const navigate = useNavigate();
  const userData = useUserStore((store) => store.user);
  const addUser = useUserStore((store) => store.addUser);
  const fetchUser = async () => {
    if(userData) return ;
    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      addUser(res.data);
    } catch (err) {
      if (err.status === 401 && window.location.pathname !== "/signup")
        navigate("/login");
      console.log("ERROR:", err.message);
    }
  };

  useEffect(() => {
      fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Toast />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
