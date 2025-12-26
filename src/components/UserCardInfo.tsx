import React from "react";
import GithubIcon from "./icons/GithubIcon";
import LocationIcon from "./icons/LocationIcons";
import LinkIcon from "./icons/LinkIcon";
import TwitterIcon from "./icons/TwitterIcons";
import BuildingIcon from "./icons/BuildingIcon";
import { User } from "@/interfaces/user";

function validerUrl(url: string) {
  if (!/^(https?:\/\/)/i.test(url)) {
    return "https://" + url;
  }
  return url;
}

interface Props {
  user: User | null;
}

const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="grid-areas rounded-xl bg-white p-4 shadow-md dark:bg-blue-900 dark:text-white ">
      <div className="section-icon  mx-auto grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1">
        {user?.avatar_url && (
          <img
            src={user?.avatar_url}
            alt={user?.login}
            className="h-full w-full rounded-full object-cover"
          />
        )}
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user?.name}</h2>
        <p>@{user?.login}</p>
      </div>
      <p className="section-date lg:text-right ">
        {" "}
        {new Date(user?.created_at || "").toLocaleDateString("es", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="section-bio mt-8 leading-loose ">
        {user?.bio || "Este usuario no tiene biografía"}
      </p>
      <div className="section-number mt-4 flex justify-around rounded-xl bg-blue-50 dark:text-white text-blue-950 dark:bg-blue-950 p-8 text-center">
        <article>
          <p>repos</p>
          <p className="text-xl font-bold">{user?.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="text-xl font-bold">{user?.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="text-xl font-bold">{user?.following}</p>
        </article>
      </div>
      <div className="section-location mt-4 space-y-4 md:grid md:grid-cols-2">
        <article className="flex space-x-1">
          <i>
            {" "}
            <LocationIcon
              className="dark:fill-white fill-blue-950"
              width={"1rem"}
            />{" "}
          </i>
          <a>Location: {user?.location}</a>
        </article>
        <article className="flex space-x-1">
          <i>
            {" "}
            <LinkIcon
              className="dark:fill-white fill-blue-950"
              width={"1rem"}
            />{" "}
          </i>
          <a
            href={validerUrl(user?.blog || "")}
            className="truncate"
          >
            {user?.blog || "informacion no disponible"}{" "}
          </a>
        </article>
        <article className="flex space-x-1">
          <i>
            {" "}
            <TwitterIcon
              className="dark:fill-white fill-blue-950"
              width={"1rem"}
            />{" "}
          </i>
          <a href={`https://twitter.com/${user?.twitter_username}`}>
            {" "}
            {user?.twitter_username}
          </a>
        </article>
        <article className="flex space-x-1">
          <i>
            {" "}
            <BuildingIcon
              className="dark:fill-white fill-blue-950"
              width={"1rem"}
            />{" "}
          </i>
          <a>{user?.company || "informacion no disponible"}</a>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
