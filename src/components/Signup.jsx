import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post(
        `${BASE_URL}/signup`,
        {
          firstName: firstName,
          lastName: lastName,
          emailId: emailId,
          password: password,
          age: age,
          gender: gender,
          photoUrl: photoUrl,
          about: about,
          skills: skills
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill !== ""),
        },
        { withCredentials: true },
      );
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name</legend>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
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
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="select"
              >
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <input
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Skills</legend>
              <input
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                type="text"
                className="input"
                placeholder="Comma separated, e.g. react, node"
              />
            </fieldset>
          </div>
          {error !== '' && <p className="text-red-500">{error}</p>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary " onClick={handleSignup}>
              Sign Up
            </button>
          </div>
          <p className="text-center">
            Already have an account? <Link to="/login" className="link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
