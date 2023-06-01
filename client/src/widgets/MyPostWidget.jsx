import React, { useState } from "react";
import UserImage from "../components/UserImage";
import { BsCardImage, BsClipboardData, BsTrash } from "react-icons/bs";
import { HiPaperClip } from "react-icons/hi2";
import { AiFillAudio } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";
import PostsWidget from "./PostsWidget";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");

  // console.log(post);

  // handle creaate Post
  const handlePost = async () => {
    let formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);

    if (isImage) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }
    const response = await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
    setIsImage(false);
  };

  return (
    <div className="flex flex-col w-[50%]">
      <div className="w-full p-6 bg-white rounded-xl shadow-xl h-auto mb-9">
        {/* first row */}
        <div className="flex w-full gap-6 justify-between mb-6">
          <UserImage image={picturePath} />
          <input
            className="w-full bg-gray-200 p-2 px-6 text-lg outline-none border-none rounded-xl"
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Whats On your mind..."
          />
        </div>
        {/* second row */}
        <div
          className={`${
            isImage ? "flex" : "hidden"
          } flex justify-between items-center mb-6`}
        >
          <input
            type="file"
            name="picture"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <BsTrash size={25} className="cursor-pointer" />
        </div>
        <hr className="border-6 border-gray-300 my-4" />
        {/* Third Row */}
        <div className={`flex justify-between items-center`}>
          <div
            className="flex gap-4 items-center cursor-pointer"
            onClick={() => setIsImage(!isImage)}
          >
            <BsCardImage size={24} /> <span>Image</span>
          </div>
          <div className="flex gap-4 items-center cursor-pointer">
            <BsClipboardData size={24} /> <span>Clips</span>
          </div>
          <div className="flex gap-4 items-center cursor-pointer">
            <HiPaperClip size={24} /> <span>Attarchment</span>
          </div>
          <div className="flex gap-4 items-center cursor-pointer">
            <AiFillAudio size={24} /> <span>Audio</span>
          </div>
          <div className="flex flex-row flex-wrap gap-4 items-center cursor-pointer">
            <button
              type="button"
              disabled={!post && true}
              className="bg-primary px-6 py-2 rounded-lg text-white"
              onClick={handlePost}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Posts widget */}
      <PostsWidget userId={_id} />
    </div>
  );
};

export default MyPostWidget;
