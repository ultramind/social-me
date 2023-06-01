import React from "react";
import NavBar from "../navBar";
import UserImage from "../../components/UserImage";
import UserWidget from "../../widgets/UserWidget";
import { useSelector } from "react-redux";
import MyPostWidget from "../../widgets/MyPostWidget";
import AdvertWidget from "../../widgets/AdvertWidget";
import FriendsListWidget from "../../widgets/FriendsListWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col md:flex-row bg-gray-200 justify-between items-start gap-10 p-4 md:py-6 md:px-24">
        <UserWidget userId={_id} />
        <MyPostWidget picturePath={picturePath} />

        <div className="felx flex-col space-y-9 w-full md:w-[27%]">
          <AdvertWidget />
          <FriendsListWidget userId={_id} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
