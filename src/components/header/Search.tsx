import { SearchIcon } from "@/ui/custom-icons";

const Search = () => {
  return (
    <div className=" transition-all duration-200 ease-linear">
      <div className="relative w-fit md:w-40  lg:w-60  flex items-center bg-slate-300 bg-opacity-20  px-3 py-3 rounded-lg">
        <SearchIcon className="w-3 h-4 text-xl md:mr-2 text-secondary-dark " />
        <input
          placeholder="Search"
          className="hidden md:block bg-transparent border-none text-sm leading-snug text-secondary-dark w-full font-normal placeholder-secondary-dark placeholder-opacity-50 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default Search;
