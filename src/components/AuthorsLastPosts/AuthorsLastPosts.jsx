import React from "react";
import PostCard from "../PostCard";
import PostCardSkeleton from "../PostCard/PostCardSkeleton";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import getAuthorLastPosts from "../../apis/getAuthorLastPosts";

const AuthorsLastPosts = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["authorsLastPosts"],
    queryFn: () => getAuthorLastPosts(userId),
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      {isPending ? (
        Array.from("123").map((key) => <PostCardSkeleton key={key} />)
      ) : (
        <>
          <p className="font-bold">Latest Posts</p>
          {data?.data?.posts.map((post) => (
            <PostCard postInfo={post} key={post?.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default AuthorsLastPosts;
