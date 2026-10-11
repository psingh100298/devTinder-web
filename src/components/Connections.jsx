import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionsList = useSelector((store) => store.connection);

  const connections = async () => {
    const res = await axios.get(`${BASE_URL}/user/connections`, {
      withCredentials: true,
    });
    dispatch(addConnections(res.data.data));
  };
  console.log("connectionlist", connectionsList);
  useEffect(() => {
    connections();
  }, []);

  if (!connectionsList) return;
  if (connectionsList.length === 0) return <h1>No Connections!!</h1>;
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
