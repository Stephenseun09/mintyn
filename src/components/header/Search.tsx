import { SearchIcon } from "@/ui/custom-icons";

const Search = ({
  className,
  placeholder = "Search",
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <div className=" transition-all duration-200 ease-linear">
      <div
        className={`${className} relative w-fit md:w-40  lg:w-60  flex items-center  bg-opacity-20  `}
      >
        <SearchIcon className="w-3 h-4 text-xl md:mr-2 text-secondary-dark " />
        <input
          placeholder={placeholder}
          className="hidden md:block bg-transparent border-none text-sm leading-snug text-secondary-dark w-full font-normal placeholder-secondary-dark placeholder-opacity-50 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default Search;
