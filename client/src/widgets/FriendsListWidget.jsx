import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state";
import Friend from "../components/Friend";

const FriendsListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full bg-white p-4 shadow-lg rounded-xl h-auto">
      <div className="display-block mb-4">
        <strong >Friends List</strong>
      </div>
      {friends.map((friend) => (
        <>
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
          <hr className="border-1 border-gray-300 my-3"></hr>
        </>
      ))}
    </div>
  );
};

export default FriendsListWidget;
