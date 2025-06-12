import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import getPostsComments from "../../apis/getPostsComments";
import CommentBox from "../../components/CommentBox";
import CommentBoxSkeleton from "../CommentBox/CommentBoxSkeleton";

const PostComments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["singlePostComments", postId],
    queryFn: () => getPostsComments(postId),
  });

  return (
    <div className="flex flex-col gap-8 border border-slate-100 rounded-xl p-4">
      {isPending ? (
        Array.from("123").map((key) => <CommentBoxSkeleton key={key} />)
      ) : data?.data?.comments.length > 0 ? (
        data?.data?.comments.map((comment) => (
          <CommentBox key={comment?.id} commentInfo={comment} />
        ))
      ) : (
        <p className="font-bold">No comments yet!</p>
      )}
    </div>
  );
};

export default PostComments;
