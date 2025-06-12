import React from "react";

import LikeIcon from "../../assets/icons/like.svg";
import DislikeIcon from "../../assets/icons/dislike.svg";
import View from "../../assets/icons/view.svg";

const PostMetas = ({ metaInfo }) => {
  return (
    <>
      <p className="flex gap-0.5 items-center">
        <img className="w-4" src={View} alt="" />
        <span className="text-xs">{metaInfo?.views}</span>
      </p>
      <p className="flex gap-0.5 items-center">
        <img className="w-4" src={LikeIcon} alt="" />
        <span className="text-xs">{metaInfo?.likes}</span>
      </p>{" "}
      <p className="flex gap-0.5 items-center">
        <img className="w-4" src={DislikeIcon} alt="" />
        <span className="text-xs">{metaInfo?.dislikes}</span>
      </p>
    </>
  );
};

export default PostMetas;
