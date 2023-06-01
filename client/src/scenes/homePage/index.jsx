import React from "react";
import NavBar from "../navBar";
import UserImage from "../../components/UserImage";
import UserWidget from "../../widgets/UserWidget";
import { useSelector } from "react-redux";
import MyPostWidget from "../../widgets/MyPostWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <div>
      <NavBar />
      <div className="flex bg-gray-200 justify-between items-start gap-10 py-6 px-24">
        <UserWidget userId={_id} />
        <MyPostWidget picturePath={picturePath} />
        <UserWidget userId={_id} />
      </div>
    </div>
  );
};

export default HomePage;
