import React from "react";

const TagsFilterSkeleton = () => {
  return (
    <div className="w-full mb-6">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
        <div className="w-20 h-6 bg-slate-300 animate-pulse rounded-xl"></div>
      </div>
    </div>
  );
};

export default TagsFilterSkeleton;
