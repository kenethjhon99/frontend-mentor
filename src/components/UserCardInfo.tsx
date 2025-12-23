import React from "react";
import GithubIcon from "./icons/GithubIcon";

const UserCardInfo = () => {
  return (
    <article className="grid-areas rounded-xl bg-blue-900 p-4 text-white ">
      <div className="section-icon  grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1">
        <GithubIcon className="relative top-3 h-full w-full " />
      </div>
      <div className="section-title">
        <h2>The Octocat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-date">Joined 25 Jan 2011</p>
      <p className="section-bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        nostrum reiciendis modi odio harum illo, veritatis debitis delectus
        asperiores dolorem. Quia ea quos qui fugit aspernatur ratione labore
        repellat nemo.
      </p>
      <div className="section-number flex justify-around bg-blue-950">
        <article>
          <p>repos</p>
          <p>8</p>
        </article>
        <article>
          <p>Followers</p>
          <p>3938</p>
        </article>
        <article>
          <p>Following</p>
          <p>9</p>
        </article>
      </div>
      <div className="section-location md:grid-cols-2 md:grid ">
        <article>
          <i>icono</i>
          <p>Location: San Francisco</p>
        </article>
        <article>
          <i>icono</i>
          <p>Location: San Francisco</p>
        </article>
        <article>
          <i>icono</i>
          <p>Location: San Francisco</p>
        </article>
        <article>
          <i>icono</i>
          <p>Location: San Francisco</p>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
