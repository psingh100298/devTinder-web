import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import RequestsCard from "./RequestsCard";

const Requests = () => {
  const dispatch = useDispatch();
  const connectionRequests = useSelector((store) => store.request);

  const requestsReceive = async () => {
    const res = await axios.get(`${BASE_URL}/user/requests/received`, {
      withCredentials: true,
    });
    console.log("requests receive", res);
    dispatch(addRequests(res?.data?.data));
  };

  useEffect(() => {
    requestsReceive();
  }, []);

  if (!connectionRequests) return null;
  if (connectionRequests.length === 0) return <p>No connection request receive</p>;

  return (
    <>
      {connectionRequests.map((item) => (
        <RequestsCard key={item._id} user={item} />
      ))}
    </>
  );
};

export default Requests;
