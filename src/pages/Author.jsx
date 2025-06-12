import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import Profile from "../assets/images/profile.avif";
import Email from "../assets/icons/email.svg";
import Phone from "../assets/icons/phone.svg";

import AuthorDetailsBox from "../components/AuthorDetailsBox";
import AuthorDetailsBoxSkeleton from "../components/AuthorDetailsBox/AuthorDetailsBoxSkeleton";
import getAuthorDetails from "../apis/getAuthorDetails";
import AuthorPosts from "../components/AuthorPosts";

const Author = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => getAuthorDetails(id),
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      {isPending ? (
        <AuthorDetailsBoxSkeleton />
      ) : (
        <AuthorDetailsBox userInfo={data?.data} />
      )}
      <AuthorPosts />
    </div>
  );
};

export default Author;
