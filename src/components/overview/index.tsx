import { CardAreaChart, CardStats } from "../Cards";
import CardDetails from "../Cards/cardDetails";

const Overview = () => {
  return (
    <div className="relative font-primary  pt-8 min-h-screen">
      <div className="px-4 md:px-10 mx-auto w-full">
        {/* Card stats */}
        <CardStats />
      </div>
      <div className="flex flex-wrap my-12 px-4 md:px-10 space-y-4 xl:space-y-0">
        <div className="w-full  xl:w-[69%] ">
          <CardAreaChart />
        </div>
        <div className="xl:w-[1%]" />
        <div className="w-full xl:w-[30%] grow">
          <CardDetails />{" "}
        </div>
      </div>
    </div>
  );
};

export default Overview;
