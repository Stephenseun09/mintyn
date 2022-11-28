import { ArrowLeft, ArrowRight, CarretDownIcon } from "@/ui/custom-icons";

type Props = {
  children?: React.ReactNode;
};

const CardChartWrapper = ({ children }: Props) => {
  const objectDate = new Date();
  const day = objectDate.getDate();
  const month = objectDate.toLocaleString("en-us", { month: "short" });
  const year = objectDate.getFullYear();
  const date = `${day}, ${month} ${year}`;

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 md:mb-0 shadow-lg rounded bg-primary">
      <div className="rounded-t mb-2 md:mb-6 px-6 py-6 ">
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h2 className="text-lg md:text-xl font-semibold text-[#4F4F4F]">
              Today: {date}
            </h2>
          </div>

          <div className="flex justify-center md:justify-between items-center space-x-6">
            <div className="  border border-[#CCCFD4] rounded-lg py-2 px-4 text-xs text-[#7F8FA4] flex justify-between items-center">
              1 Jan - 1 Jun
              <CarretDownIcon className="w-2.5 h-2.5 ml-2" />
            </div>
            <div className="flex justify-center md:justify-end items-end space-x-3">
              <button className="  border border-[#CCCFD4] rounded-lg p-2">
                <ArrowLeft className="w-3 h-3 text-[#CCCFD4]" />
              </button>
              <button className=" border border-[#CCCFD4] rounded-lg p-2">
                <ArrowRight className="w-3 h-3 text-[#CCCFD4]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-auto">{children}</div>
    </div>
  );
};

export default CardChartWrapper;
