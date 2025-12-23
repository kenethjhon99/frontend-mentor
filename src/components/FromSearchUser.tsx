import SearchIcon from "@/components/icons/searchIcon";
const FormSearchUser = () => {
  return (
    <form className="mb-6 flex flex-wrap items-center gap-2 rounded-xl bg-blue-900 p-2 ">
      <span className="min-w-[30px]">
        <SearchIcon
          className="fill-blue-500"
          width={30}
        />
      </span>
      <input
        type="text"
        placeholder="Search Github Username..."
        className=" h-14 flex-1 rounded-lg bg-transparent p-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="rounded-lg bg-blue-500 px-4 py-4 font-bold text-white ">
        Search
      </button>
    </form>
  );
};

export default FormSearchUser;
