import { StatChartIcon } from "@/ui/custom-icons";

type CardStatItemTypes = {
  value: string;
  statTitle: string;
};

export default function CardStatItem({
  value,
  statTitle,
}: // Icon,
CardStatItemTypes) {
  return (
    <>
      <div className=" bg-white rounded mb-6 xl:mb-0 shadow-lg p-4 h-full">
        <div className="flex  gap-2">
          <div className="relative w-full  max-w-full flex-grow ">
            <h5 className="text-[#787C90]   text-xs">{statTitle}</h5>
            <span className=" text-lg font-semibold text-[#262626]">
              {value}
            </span>
          </div>
          <div className={`grow`}>
            <StatChartIcon />
          </div>
        </div>
      </div>
    </>
  );
}
