import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import getPosts from "../apis/getPosts";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCard/PostCardSkeleton";
import TagsFilter from "../components/TagsFilter/TagsFilter";

const LIMIT = 10;

const Root = () => {
  const { tag } = useParams();

  const {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts", tag],
    queryFn: ({ pageParam = 0 }) => getPosts(null, LIMIT, pageParam, tag),
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage?.data?.total || 0;
      const currentSkip = lastPage?.data?.skip || 0;
      const currentLimit = lastPage?.data?.limit || LIMIT;
      const nextSkip = currentSkip + currentLimit;

      return nextSkip < total ? nextSkip : undefined;
    },
  });

  return (
    <div className="flex flex-col items-center p-4">
      <TagsFilter />
      <div className="flex flex-wrap md:gap-4 gap-2 justify-around w-full">
        {isPending &&
          Array.from("abcdefghijklmno").map((i) => (
            <div key={i} className="flex md:w-2/12 w-5/12">
              <PostCardSkeleton />
            </div>
          ))}

        {error && <p className="text-red-500">Something went wrong</p>}

        {data?.pages.map((page) =>
          page.data.posts.map((post) => (
            <div key={post.id} className="flex md:w-2/12 w-5/12">
              <PostCard postInfo={post} />
            </div>
          ))
        )}
      </div>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-4 px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700 disabled:opacity-50 cursor-pointer">
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Root;
