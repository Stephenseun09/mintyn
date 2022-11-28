import Dropdown from "@/components/header/Dropdown";
import Search from "@/components/header/Search";
import { ArrowLeft, ArrowRight, CarretDownIcon } from "@/ui/custom-icons";

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
          <h2 className=" align-middle text-xl md:text-2xl font-bold text-[#262626] mb-3">
            {heading}
          </h2>

          <div className="flex justify-between items-center w-full mb-4 text-sm flex-wrap gap-4">
            <div className="flex items-center gap-4 leading-none flex-wrap">
              Showing{" "}
              <button className="flex items-center mx-2 text-primary-blue ">
                20 <CarretDownIcon className="w-2.5 h-2.5 ml-1.5" />
              </button>{" "}
              out of 500 payments
              <div className="ml-6">
                <Search
                  className="border-b-[0.5px] border-[#787878] px-3 py-2 !w-full"
                  placeholder="search payments"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 relative">
              Show
              <button className="peer flex items-center p-2 gap-12 rounded border border-slate-400">
                All <CarretDownIcon className="w-2.5 h-2.5 ml-1.5 " />
              </button>
              <Dropdown />
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg">{children}</div>
        </div>
      </div>
      <div className=" flex justify-between items-center mt-8">
        {/* hardcoded values for now */}
        <span className="text-[#666666] text-sm ">
          showing page 1 0f 500 entries
        </span>
        <div className="bg-[#E5E5E5] rounded-lg text-sm p-2">
          <div className="flex justify-between items-center text-black border border-[#CED0DA] bg-white text-xs rounded">
            <button className="px-3 py-2 h-full ">Previous</button>
            <button>
              <span className="bg-primary-blue text-white px-3 h-full py-2 ">
                1
              </span>
            </button>
            <button className="px-3 h-full py-2 text-[#979797]">
              <span>2</span>
            </button>
            <button className="px-3 py-2 h-full">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTableWrapper;
