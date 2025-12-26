import SunIcon from "@/components/icons/SunIcon";
const Navbar = () => {
  return (
    <header className="mb-10 flex items-center justify-between ">
      <h1 className="flex-grow text-4xl font-bold text-white">devfinder</h1>
      <div className="flex items-center gap-2">
        <span className="uppercase text-white">Light</span>
        <button>
          <SunIcon
            width={20}
            className="fill-blue-500"
          />
        </button>
      </div>
    </header>
  );
};
export default Navbar;
