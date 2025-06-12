import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import getTags from "../../apis/getTags";
import TagsFilterSkeleton from "./TagsFilterSkeleton";

const TagsFilter = () => {
  const { tag } = useParams();
  const navigate = useNavigate();

  const { data, isPending, error } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getTags(),
  });

  if (error) return <p className="mb-4 text-red-500">Error loading tags</p>;

  return (
    <div className="w-full mb-6">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
        {isPending &&
          Array.from("123456789").map((key) => (
            <TagsFilterSkeleton key={key} />
          ))}
        {data?.data.map((filterTag) => (
          <button
            key={filterTag.slug}
            className={`whitespace-nowrap px-3 py-1 rounded border cursor-pointer ${
              tag === filterTag.slug
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                : "bg-gray-50 text-gray-800 hover:bg-gray-100"
            }`}
            onClick={() => navigate(`/tag/${filterTag.slug}`)}>
            {filterTag.name}
          </button>
        ))}
      </div>

      {tag && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-gray-700 text-sm">
            Filtering by: <strong>{tag}</strong>
          </span>
          <button
            onClick={() => navigate(`/`)}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
            Remove Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default TagsFilter;
