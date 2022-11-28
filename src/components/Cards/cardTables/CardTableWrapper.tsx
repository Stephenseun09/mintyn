import Dropdown from "@/components/header/Dropdown";
import { CarretDownIcon, SearchIcon } from "@/ui/custom-icons";

type Props = {
  heading?: string;
  children?: React.ReactNode;
};

const CardTableWrapper = ({ children, heading }: Props) => {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words text-secondary-dark mb-6  rounded xs"
        }
      >
        <div className="block w-full rounded-t ">
          {/* --------------- */}
          {/* ----Heading---- */}
          <h2 className=" align-middle text-xl md:text-2xl font-bold text-[#262626] mb-3">
            {heading}
          </h2>

          <div className="flex justify-between items-center w-full mb-4 text-sm flex-wrap gap-4">
            {/* --------------- */}
            {/* ----Filter---- */}
            <div className="flex items-center gap-4 leading-none flex-wrap">
              Showing{" "}
              <button className="flex items-center mx-2 text-primary-blue ">
                20 <CarretDownIcon className="w-2.5 h-2.5 ml-1.5" />
              </button>{" "}
              out of 500 payments
              <div
                className={` relative md:ml-6 md:w-40  lg:w-60  flex items-center  bg-opacity-20 border-b-[0.5px] border-[#787878] px-3 py-2  w-80`}
              >
                {/* --------------- */}
                {/* ----Search---- */}
                <SearchIcon className="w-3 h-4 text-xl mr-2 text-secondary-dark " />
                <input
                  placeholder="search payments"
                  className=" bg-transparent border-none text-sm leading-snug text-secondary-dark w-full font-normal placeholder-secondary-dark placeholder-opacity-50 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* --------------- */}
            {/* ----FIlter by ---- */}

            <div className="flex items-center gap-4 ">
              Show
              <div className="relative">
                <button className="peer flex items-center p-2 gap-12 rounded border border-slate-400">
                  All <CarretDownIcon className="w-2.5 h-2.5 ml-1.5 " />
                </button>
                <Dropdown
                  menuLists={[
                    "All",
                    "Reconcilled",
                    "Un-reconcilled",
                    "Settled",
                    "Unsettled",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg">{children}</div>
        </div>
      </div>
      <div className=" flex justify-between items-center mt-8">
        {/* hardcoded values for now */}
        {/* hardcoded values for now */}
        <span className="text-[#666666] text-sm ">
          showing page 1 0f 500 entries
        </span>
        <div className="bg-[#E5E5E5] rounded-lg text-sm p-2">
          <div className="flex justify-between items-center text-black border border-[#CED0DA] bg-white text-xs rounded">
            <button className="px-3 py-2 h-full ">Previous</button>
            <button className="flex bg-primary-blue text-white px-3 h-full py-2 border-x border-primary-blue">
              1
            </button>
            <button className="px-3 h-full py-2 text-[#979797] border-x border-[#CED0DA]">
              2
            </button>
            <button className="px-3 py-2 h-full border-x border-[#CED0DA]">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTableWrapper;
