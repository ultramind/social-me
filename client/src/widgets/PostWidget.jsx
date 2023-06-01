import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Friend from "../components/Friend";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { setPost } from "../state";
import { FiMessageSquare } from "react-icons/fi";
import { BsShareFill } from "react-icons/bs";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  occupation,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComment, setIsComment] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isliked = Boolean(likes[loggedInUserId]);
  //   console.log(isliked);
  const likeCount = Object.keys(likes).length;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });

    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
    // console.log(updatedPost);
  };
  return (
    <div className="p-6 bg-white rounded-xl shadow-xl h-auto mb-9">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <p className="text-lg py-4">{description}</p>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          className="rounded-xl"
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}

      <div className="my-6 flex justify-between items-center">
        <div className="flex justify-start items-center gap-6">
          <span
            onClick={patchLike}
            className="flex items-center gap-2 cursor-pointer"
          >
            {isliked ? (
              <AiFillHeart
                fill="rgb(255 1 79 / var(--tw-bg-opacity)"
                size={27}
              />
            ) : (
              <AiOutlineHeart size={27} />
            )}
            {likeCount}
          </span>
          <span
            onClick={() => setIsComment(!isComment)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FiMessageSquare size={27} />
            {comments.length}
          </span>
        </div>

        <BsShareFill size={27} />
      </div>
      {isComment && (
        <div className="my-4">
          <strong>Comments</strong>
          {comments.map((comment, i) => (
            <>
              <p className="py-2">{comment}</p>
              <hr className="border-2 border-gray-300"></hr>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostWidget;
