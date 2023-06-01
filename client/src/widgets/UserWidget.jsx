import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserImage from "../components/UserImage";
import { BsFillPersonLinesFill, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FiEdit3 } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const UserWidget = ({ userId }) => {
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.token);

  //   get user APi
  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
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
    <div className="w-full md:w-[23%] bg-white p-4 shadow-lg rounded-xl h-auto">
      {/* First row */}
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <UserImage image={picturePath} />
          <div>
            <strong>{fullName}</strong>
            <h3>{3} Friends</h3>
          </div>
        </div>
        <BsFillPersonLinesFill size={20} />
      </div>
      {/* divider */}
      <hr className="border-6 border-gray-300 my-4" />
      {/* second row */}
      <div className="flex flex-col space-y-4">
        <div className="flex gap-3">
          <GoLocation size={22} /> <span>{location}</span>
        </div>
        <div className="flex gap-3">
          <HiOutlineBriefcase size={22} /> <span>{occupation}</span>
        </div>
      </div>
      <hr className="border-6 border-gray-300 my-4" />
      {/* third row */}
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between gap-3">
          <span>Who's viewed your profile</span>{" "}
          <strong>{viewedProfile}</strong>
        </div>
        <div className="flex justify-between gap-3">
          <span>Impressions on your posts</span> <strong>{impressions}</strong>
        </div>
      </div>
      <hr className="border-6 border-gray-300 my-4" />
      {/* Fourth row */}
      <div>
        <strong>Social Profile</strong>
        <div className="flex mt-6 justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <BsTwitter size={30} />
            <div>
              <strong>Twitter</strong>
              <h3>Social Network</h3>
            </div>
          </div>
          <FiEdit3 size={20} />
        </div>
        <div className="flex mt-6 justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <AiFillLinkedin size={30} />
            <div>
              <h3>Linkedin</h3>
              <h3>Network Platforms</h3>
            </div>
          </div>
          <FiEdit3 size={20} />
        </div>
      </div>
    </div>
  );
};

export default UserWidget;
