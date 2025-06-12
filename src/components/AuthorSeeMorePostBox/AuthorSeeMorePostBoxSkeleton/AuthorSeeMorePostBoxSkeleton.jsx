import React from "react";

import Profile from "../../../assets/images/profile.avif";
import ArrowRight from "../../../assets/icons/arrow-right.svg";

const AuthorSeeMorePostBoxSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center border rounded-xl border-slate-50 shadow p-2 gap-2">
      <div className="w-32 h-32 bg-slate-300 animate-pulse rounded-full"></div>
      <p className="flex gap-2">
        <span className="w-12 h-2 rounded-xl animate-pulse bg-slate-300"></span>
      </p>
      <p className="flex gap-2">
        <span className="w-24 h-2 rounded-xl animate-pulse bg-slate-300"></span>
      </p>
    </div>
  );
};

export default AuthorSeeMorePostBoxSkeleton;
