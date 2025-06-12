import React from "react";

const CommentBoxSkeleton = () => {
  return (
    <div className="flex justify-between items-start p-2">
      <div className="flex gap-4 items-start w-[80%]">
        <div className="bg-slate-300 animate-pulse w-20 h-20 rounded-full"></div>
        <div className="flex flex-col gap-2 w-[80%]">
          <div className="bg-slate-300 animate-pulse w-16 h-4 rounded-xl"></div>
          <div className="bg-slate-300 animate-pulse w-full h-24 rounded-xl"></div>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="bg-slate-300 animate-pulse w-8 h-4 rounded-xl"></div>
      </div>
    </div>
  );
};

export default CommentBoxSkeleton;
