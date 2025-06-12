import React from "react";
import { Link } from "react-router";

import LikeIcon from "../../assets/icons/like.svg";
import DislikeIcon from "../../assets/icons/dislike.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import View from "../../assets/icons/view.svg";

const PostCard = ({ postInfo }) => {
  return (
    <div className="flex flex-col justify-between gap-4 pt-8 p-5 rounded-xl relative border border-slate-50 my-2 shadow w-full">
      <div className="flex items-center bg-slate-50 text-sm absolute text-slate-50 rounded-xl p-2 top-[-10px] right-0 gap-4">
        <div className="flex items-center gap-0.5">
          <img className="w-4" src={LikeIcon} alt="" />
          <span className="text-slate-950 text-xs">
            {postInfo?.reactions?.likes}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <img className="w-4" src={DislikeIcon} alt="" />
          <span className="text-slate-950 text-xs">
            {postInfo?.reactions?.dislikes}
          </span>
        </div>
      </div>
      <p className="font-bold">{postInfo?.title}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <img className="w-4" src={View} alt="" />
          <span className="text-slate-950 text-xs">{postInfo?.views}</span>
        </div>
        <Link
          to={`/post/${postInfo?.id}`}
          className="flex items-center gap-0.5">
          <span className="text-slate-950 text-xs">Read</span>
          <img className="w-4" src={ArrowRight} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
