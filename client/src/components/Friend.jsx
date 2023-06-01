import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state";
import { useNavigate } from "react-router-dom";
import { FiUserMinus, FiUserPlus } from "react-icons/fi";
import UserImage from "./UserImage";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        "Content-Type": "application/json",
      }
    );

    const data = await response.json();
    dispatch(setFriends({ friends: data }));
    // console.log(data);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center mb-4 gap-4">
        <UserImage image={userPicturePath} />
        <div>
          <strong>{name}</strong>
          <h3>{subtitle}</h3>
        </div>
      </div>
      <span onClick={patchFriend} className="bg-green-100 p-2 rounded-full">
        {isFriend ? (
          <FiUserMinus size={23} className="cursor-pointer" />
        ) : (
          <FiUserPlus size={23} className="cursor-pointer" />
        )}
      </span>
    </div>
  );
};

export default Friend;
