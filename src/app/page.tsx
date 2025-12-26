"use client";
import FormSearchUser from "@/components/FromSearchUser";
import UserCardInfo from "@/components/UserCardInfo";
import { useState } from "react";
import { User } from "@/interfaces/user";

const Home = () => {
  const [user, setUser] = useState<User | null> (null);
  const [error, setError] = useState(false);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      setUser(null);
      setError(true);
      return;
    }
    
    setUser(await res.json());
    setError(false);

  };

  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
      {error && (<p className="text-red-500">User not found. Please try again.</p>)}
    </>
  );
};
export default Home;
