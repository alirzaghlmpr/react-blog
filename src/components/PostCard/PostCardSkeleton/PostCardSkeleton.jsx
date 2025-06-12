import React from "react";
const PostCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between gap-4 pt-8 p-5 rounded-xl relative border border-slate-50 my-2 shadow w-full">
      <div className="flex items-center bg-slate-300 animate-pulse text-sm absolute text-slate-50 rounded-xl  p-2 top-[-10px] right-0 gap-4">
        <div className="flex items-center gap-0.5"></div>
        <div className="flex items-center gap-0.5"></div>
      </div>
      <p className="font-bold w-full h-4 bg-slate-300 animate-pulse rounded-xl"></p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5 w-8 h-4 animate-pulse bg-slate-300 rounded-xl"></div>
        <div className="flex items-center gap-0.5 w-12 h-4 animate-pulse bg-slate-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
