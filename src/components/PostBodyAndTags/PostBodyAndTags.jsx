import React from "react";

const PostBodyAndTags = ({ postInfo }) => {
  return (
    <>
      <p>{postInfo?.body}</p>
      <p className="flex gap-2 flex-wrap border-t-2 border-b-2 border-slate-100 py-4">
        <span>Tags:</span>
        {postInfo?.tags.map((tag) => (
          <span className="border rounded-xl px-2 border-slate-100">{tag}</span>
        ))}
      </p>
    </>
  );
};

export default PostBodyAndTags;
