import React from "react";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import getPosts from "../apis/getPosts";
import CommentBoxSkeleton from "../components/CommentBox/CommentBoxSkeleton";
import AuthorSeeMorePostBox from "../components/AuthorSeeMorePostBox";
import AuthorSeeMorePostBoxSkeleton from "../components/AuthorSeeMorePostBox/AuthorSeeMorePostBoxSkeleton";
import PostBodyAndTags from "../components/PostBodyAndTags/PostBodyAndTags";
import PostBodyAndTagsSkeleton from "../components/PostBodyAndTags/PostBodyAndTagsSkeleton";
import PostMetas from "../components/PostMetas/PostMetas";
import PostMetasSkeleton from "../components/PostMetas/PostMetasSkeleton";
import PostComments from "../components/PostCommetns";
import AuthorsLastPosts from "../components/AuthorsLastPosts";

const Post = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["singlePost", id],
    queryFn: () => getPosts(id),
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 items-center justify-center bg-slate-800 text-slate-50 h-32">
        <Link to="/" className="text-xs text-center">
          &larr; home page
        </Link>
        <div className="text-center font-bold text-2xl">
          {isPending ? (
            <p className="bg-slate-100 animate-pulse w-56 h-4 rounded-xl"></p>
          ) : (
            data?.data?.title
          )}
        </div>
      </div>
      <div className="flex justify-around items-start flex-wrap p-4 md:gap-0 gap-8">
        <div className="flex flex-col md:w-8/12 w-full gap-4 border border-slate-50 shadow p-4 rounded-xl text-justify">
          {isPending ? (
            <PostBodyAndTagsSkeleton />
          ) : (
            <PostBodyAndTags postInfo={data?.data} />
          )}
          <div className="flex gap-4">
            {isPending ? (
              <PostMetasSkeleton />
            ) : (
              <PostMetas
                metaInfo={{
                  views: data?.data?.views,
                  likes: data?.data?.reactions?.likes,
                  dislikes: data?.data?.reactions?.dislikes,
                }}
              />
            )}
          </div>
          {isPending ? <CommentBoxSkeleton /> : <PostComments postId={id} />}
        </div>
        <div className="flex flex-col md:w-3/12 w-full gap-4">
          {isPending ? (
            <AuthorSeeMorePostBoxSkeleton />
          ) : (
            <AuthorSeeMorePostBox userId={data?.data?.userId} />
          )}
          {!isPending && <AuthorsLastPosts userId={data?.data?.userId} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
