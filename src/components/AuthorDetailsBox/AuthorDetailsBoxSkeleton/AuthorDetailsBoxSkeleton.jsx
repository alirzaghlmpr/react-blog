import React from "react";

const AuthorDetailsBoxSkeleton = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center items-start border border-slate-100 shadow rounded-xl px-8 py-4 md:gap-2 gap-6">
      <div className="flex items-center gap-2">
        <div className="bg-slate-300 animate-pulse w-24 h-24 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <p className="w-32 h-2 bg-slate-300 rounded-xl animate-pulse"></p>
          <p className="w-32 h-2 bg-slate-300 rounded-xl animate-pulse"></p>
          <p className="w-32 h-2 bg-slate-300 rounded-xl animate-pulse"></p>
        </div>
      </div>
      <div className="flex md:items-center items-start justify-center flex-col gap-2">
        <p className="w-32 h-2 bg-slate-300 rounded-xl animate-pulse"></p>
        <p className="w-32 h-2 bg-slate-300 rounded-xl animate-pulse"></p>
        <p className="w-32 h-2 bg-slate-300 rounded-xl animate-pulse"></p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="w-32 h-4 bg-slate-300 rounded-xl animate-pulse"></p>
        <p className="w-32 h-4 bg-slate-300 rounded-xl animate-pulse"></p>
      </div>
    </div>
  );
};

export default AuthorDetailsBoxSkeleton;
