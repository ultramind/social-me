import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserImage from "../components/UserImage";

const UserWidget = ({ userId }) => {
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.token);

  //   get user APi
  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`},
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
    picturePath,
  } = user;

  const fullName = firstName + " " + lastName;

  return (
    <div>
      {/* First row */}
      <div>
        <div>
          <UserImage image={picturePath} />
          <div>
            <h3>{fullName}</h3>
            <h3>{12}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWidget;
