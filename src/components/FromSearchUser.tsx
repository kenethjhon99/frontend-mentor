import SearchIcon from "@/components/icons/searchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({ getUser }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-wrap items-center gap-2 rounded-xl dark:bg-blue-900 bg-white shadow-md dark:shadow-none p-4  "
    >
      <span className="min-w-[30px]">
        <SearchIcon
          className="fill-blue-500"
          width={30}
        />
      </span>
      <input
      name ="username"
        type="text"
        placeholder="Search Github Username..."
        className=" h-14 flex-1 rounded-lg bg-transparent p-3  dark:text-white dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="rounded-lg bg-sky-500 px-4 py-4 font-bold text-white ">
        Search
      </button>
    </form>
  );
};

export default FormSearchUser;
