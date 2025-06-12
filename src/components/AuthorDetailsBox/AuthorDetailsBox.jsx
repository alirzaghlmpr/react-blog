import React from "react";

import Profile from "../../assets/images/profile.avif";
import Email from "../../assets/icons/email.svg";
import Phone from "../../assets/icons/phone.svg";
import getRandomImage from "../../helpers/getRandomImage";
import ProfileBackupImage from "../../assets/images/backup_profile.jpeg";

const AuthorDetailsBox = ({ userInfo }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center items-start border border-slate-100 shadow rounded-xl px-8 py-4 md:gap-2 gap-6">
      <div className="flex items-center gap-2">
        <div>
          <img
            className="w-24 rounded-full border-slate-900 border-2"
            src={getRandomImage()}
            alt=""
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = { ProfileBackupImage };
            }}
          />
        </div>
        <div>
          <p>
            <span className="font-bold">username : </span>
            <span>{userInfo?.username}</span>
          </p>
          <p></p>
          <p>
            <span className="font-bold">firstname : </span>
            <span>{userInfo?.firstName}</span>
          </p>{" "}
          <p>
            <span className="font-bold">lastname : </span>
            <span>{userInfo?.lastName}</span>
          </p>
        </div>
      </div>
      <div className="flex md:items-center items-start justify-center flex-col">
        <p>
          <span>{userInfo?.age}</span> years old
        </p>
        <p>
          from <span>{userInfo?.address?.country}</span>
        </p>{" "}
        <p>
          <span>{userInfo?.company?.title}</span> in{" "}
          <span>{userInfo?.company?.name}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img src={Email} className="w-6" alt="" />
          <span>{userInfo?.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Phone} className="w-6" alt="" />
          <span>{userInfo?.phone}</span>
        </div>{" "}
      </div>
    </div>
  );
};

export default AuthorDetailsBox;
