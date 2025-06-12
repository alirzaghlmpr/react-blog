import React from "react";

import Profile from "../../assets/images/profile.avif";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import getAuthorDetails from "../../apis/getAuthorDetails";
import getRandomImage from "../../helpers/getRandomImage";
import AuthorSeeMorePostBoxSkeleton from "./AuthorSeeMorePostBoxSkeleton";
import ProfileBackupImage from "../../assets/images/backup_profile.jpeg";

const AuthorSeeMorePostBox = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["authorSeeMoreBoxInfo"],
    queryFn: () => getAuthorDetails(userId),
  });

  return isPending ? (
    <AuthorSeeMorePostBoxSkeleton />
  ) : (
    <div className="flex flex-col items-center justify-center border rounded-xl border-slate-50 shadow p-2 gap-2">
      <img
        src={getRandomImage()}
        className="w-32 rounded-full border-slate-900 border-2"
        alt=""
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = { ProfileBackupImage };
        }}
      />
      <p className="flex gap-2">
        <span>by</span>
        <span className="font-bold">{data?.data?.username}</span>
      </p>
      <Link to={`/author/${userId}`} className="flex gap-2">
        <span className="text-slate-950 text-xs">See user's all posts</span>
        <img className="w-4" src={ArrowRight} alt="" />
      </Link>
    </div>
  );
};

export default AuthorSeeMorePostBox;
