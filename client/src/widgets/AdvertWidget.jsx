import React from "react";
import FriendsListWidget from "./FriendsListWidget";

const AdvertWidget = () => {
  return (
    <>
      <div className="w-full bg-white p-4 shadow-lg rounded-xl h-auto">
        <div className="flex justify-between py-3">
          <strong>Sponsored</strong>
          <span>Create Ad</span>
        </div>
        <img
          src="http://localhost:3001/assets/info4.jpeg"
          alt=""
          className="rounded-xl"
        />
        <div className="flex justify-between py-3">
          <strong>MikaCosmetics</strong>
          <span>mikacosmetics.com</span>
        </div>
        <p>
          Your Pathway to stunning and immaculate beauty and made sure your skin
          is exfoliating skin and shinning like light
        </p>
      </div>

      
    </>
  );
};

export default AdvertWidget;
