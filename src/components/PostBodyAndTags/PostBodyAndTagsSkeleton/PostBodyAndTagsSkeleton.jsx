import React from "react";

const PostBodyAndTagsSkeleton = () => {
  return (
    <>
      <p className="w-full h-48 bg-slate-300 rounded-xl animate-pulse"></p>
      <p className="flex gap-2 flex-wrap border-t-2 border-b-2 border-slate-100 py-4">
        <span className="bg-slate-300 rounded-xl w-8 h-4 animate-pulse"></span>
        <span className="bg-slate-300 rounded-xl w-12 h-4 animate-pulse"></span>
        <span className="bg-slate-300 rounded-xl w-12 h-4 animate-pulse"></span>
        <span className="bg-slate-300 rounded-xl w-12 h-4 animate-pulse"></span>
        <span className="bg-slate-300 rounded-xl w-12 h-4 animate-pulse"></span>
      </p>
    </>
  );
};

export default PostBodyAndTagsSkeleton;
