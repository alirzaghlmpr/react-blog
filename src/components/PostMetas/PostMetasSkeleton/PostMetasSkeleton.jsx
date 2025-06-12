import React from "react";

const PostMetasSkeleton = () => {
  return (
    <>
      <p className="flex gap-0.5 items-center">
        <span className="bg-slate-300 animate-pulse rounded-xl w-8 h-4"></span>
      </p>
      <p className="flex gap-0.5 items-center">
        <span className="bg-slate-300 animate-pulse rounded-xl w-8 h-4"></span>
      </p>
      <p className="flex gap-0.5 items-center">
        <span className="bg-slate-300 animate-pulse rounded-xl w-8 h-4"></span>
      </p>
    </>
  );
};

export default PostMetasSkeleton;
