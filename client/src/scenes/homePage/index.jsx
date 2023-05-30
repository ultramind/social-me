import React from "react";
import NavBar from "../navBar";
import UserImage from "../../components/UserImage";
import UserWidget from "../../widgets/UserWidget";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { _id } = useSelector((state) => state.user);
  console.log(_id);
  return (
    <div>
      <NavBar />
      <div>
        <UserWidget userId={_id} />
      </div>
    </div>
  );
};

export default HomePage;
