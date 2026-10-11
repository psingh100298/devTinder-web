import { useState } from "react";
import axios from "axios";
import useUserStore from "../utils/userStore";
import { BASE_URL } from "../utils/constants";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [age, setAge] = useState(user?.age);
  const addUser = useUserStore((store) => store.addUser);

  const handleUpdateProfile = async () => {
    const newData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      about: about,
      age: age,
    };
    const res = await axios.patch(`${BASE_URL}/profile/edit`, newData, {
      withCredentials: true,
    });
    addUser(res.data);
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
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
                  type="text"
                  className="input"
                  onChange={(e) => setLastName(e.target.value)}
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
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
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
            </div>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary "
                onClick={handleUpdateProfile}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
