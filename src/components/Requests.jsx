import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import axios from "axios";
import useRequestStore from "../utils/requestStore";
import RequestsCard from "./RequestsCard";
import EmptyState from "./EmptyState";

const Requests = () => {
  const connectionRequests = useRequestStore((store) => store.requests);
  const addRequests = useRequestStore((store) => store.addRequests);

  const requestsReceive = async () => {
    const res = await axios.get(`${BASE_URL}/user/requests/received`, {
      withCredentials: true,
    });
    console.log("requests receive", res);
    addRequests(res?.data?.data);
  };

  useEffect(() => {
    requestsReceive();
  }, []);

  if (!connectionRequests) return null;
  if (connectionRequests.length === 0)
    return (
      <EmptyState
        icon="📭"
        title="No requests yet"
        message="When someone is interested in you, their request will show up here."
      />
    );

  return (
    <>
      {connectionRequests.map((item) => (
        <RequestsCard key={item._id} user={item} />
      ))}
    </>
  );
};

export default Requests;
