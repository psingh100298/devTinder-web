import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import useConnectionStore from "../utils/connectionStore";
import ConnectionCard from "./ConnectionCard";
import EmptyState from "./EmptyState";

const Connections = () => {
  const connectionsList = useConnectionStore((store) => store.connections);
  const addConnections = useConnectionStore((store) => store.addConnections);

  const connections = async () => {
    const res = await axios.get(`${BASE_URL}/user/connections`, {
      withCredentials: true,
    });
    addConnections(res.data.data);
  };
  
  useEffect(() => {
    connections();
  }, []);

  if (!connectionsList) return;
  if (connectionsList.length === 0)
    return (
      <EmptyState
        icon="🤝"
        title="No connections yet"
        message="Start showing interest in developers from your feed to build your network."
      />
    );
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="font-bold text-2xl">Connections</h1>
      <div className="flex flex-wrap justify-center max-w-7xl">
        {connectionsList.map((item) => {
          return <ConnectionCard key={item._id} user={item} />;
        })}
      </div>
    </div>
  );
};

export default Connections;
