"use client";
import SunIcon from "@/components/icons/SunIcon";
import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";

const initialTheme = localStorage.getItem("theme") || "light" || window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme as "light" | "dark");

    useEffect(() => {

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="mb-10 flex items-center justify-between ">
      <h1 className="flex-grow text-4xl font-bold text-blue-950 dark:text-white">
        devfinder
      </h1>
      <div className="flex items-center gap-2">
        <span className="uppercase text-blue-950 dark:text-white">
          {theme === "light" ? "dark mode" : "light mode"}
        </span>
        <button onClick={handleTheme}>
          {theme === "light" ? (
            <MoonIcon
              className="fill-blue-950"
              width={"1rem"}
            />
          ) : (
            <SunIcon
              className="fill-white"
              width={"1rem"}
            />
          )}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
