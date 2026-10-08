import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("singh@gmail.com");
  const [password, setPassword] = useState("1234567890");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId: emailId,
          password: password,
        },
        { withCredentials: true },
      );
      console.log(res);
    } catch (err) {
      console.log("ERROR:" + err.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                value={password}
                type="password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary " onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
