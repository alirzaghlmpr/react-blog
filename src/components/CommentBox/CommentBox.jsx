import React from "react";
import Profile from "../../assets/images/profile.avif";
import LikeIcon from "../../assets/icons/like.svg";
import getRandomImage from "../../helpers/getRandomImage";
import ProfileBackupImage from "../../assets/images/backup_profile.jpeg";

const CommentBox = ({ commentInfo }) => {
  return (
    <div className="flex justify-between items-start p-2">
      <div className="flex gap-4 items-start">
        <img
          src={getRandomImage()}
          className="w-24 rounded-full border-slate-900 border-2"
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = { ProfileBackupImage };
          }}
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold">{commentInfo?.user?.username}</p>
          <p className="text-sm">{commentInfo?.body}</p>
        </div>
      </div>
      <div className="flex gap-1">
        <img src={LikeIcon} className="w-4" alt="" />
        <span>{commentInfo?.likes}</span>
      </div>
    </div>
  );
};

export default CommentBox;
