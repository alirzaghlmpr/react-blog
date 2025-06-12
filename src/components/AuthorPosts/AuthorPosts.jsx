import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import getAuthorPosts from "../../apis/getAuthorPosts";
import PostCard from "../PostCard";
import PostCardSkeleton from "../PostCard/PostCardSkeleton";

const AuthorPosts = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["authorPosts", id],
    queryFn: () => getAuthorPosts(id),
  });

  console.log(data?.data);
  return (
    <div className="flex p-4 flex-wrap md:gap-4 gap-2 justify-start">
      {isPending &&
        Array.from("abcdefghijklmno").map((i) => (
          <div key={i} className="flex md:w-2/12 w-5/12">
            <PostCardSkeleton key={i} />
          </div>
        ))}
      {error && "something goes wrong"}
      {data?.data &&
        data.data.posts.map((post) => (
          <div key={post?.id} className="flex md:w-2/12 w-5/12">
            <PostCard postInfo={post} />
          </div>
        ))}
    </div>
  );
};

export default AuthorPosts;
