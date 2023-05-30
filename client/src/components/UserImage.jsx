import React from "react";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <div className={`w-[50px] h-[50px] rounded-full overflow-hidden`}>
      <img
        className="w-[100%]"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        alt=""
      />
    </div>
  );
};

export default UserImage;
