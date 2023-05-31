import React from "react";
import NavBar from "../navBar";
import UserImage from "../../components/UserImage";
import UserWidget from "../../widgets/UserWidget";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { _id } = useSelector((state) => state.user);
  return (
    <div>
      <NavBar />
      <div className="flex bg-gray-200 justify-between items-center gap-10 py-6 px-40">
        <UserWidget userId={_id} />
      </div>
    </div>
  );
};

export default HomePage;
