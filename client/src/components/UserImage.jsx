import React from "react";
import { Navigate } from "react-router-dom";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <div
      className={`w-[50px] cursor-pointer h-[50px] rounded-full overflow-hidden`}
      onClick={() => <Navigate to="/profile" />}
    >
      <img
        className="w-[100%]"
        src={`http://localhost:3001/assets/${image}`}
        alt=""
      />
    </div>
  );
};

export default UserImage;
