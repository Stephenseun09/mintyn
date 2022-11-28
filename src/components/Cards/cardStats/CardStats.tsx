import CardStatItem from "./CardStatItem";

const cardStatsData = [
  {
    statTitle: "Daily Transaction Volume",
    value: "2,342",
  },
  {
    statTitle: "Daily Transaction Value",
    value: "₦4,000,000",
  },
  {
    statTitle: "Total Transaction Volume",
    value: "452,000",
  },
  {
    statTitle: "Total Transaction Value",
    value: "₦4,000,000",
  },
];

const CardStats = () => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-2 justify-between">
      {cardStatsData.map((cardStat, index) => (
        <div className="w-full lg:w-[48%] xl:w-[23%]  " key={index}>
          <CardStatItem value={cardStat.value} statTitle={cardStat.statTitle} />
        </div>
      ))}
    </div>
  );
};

export default CardStats;
