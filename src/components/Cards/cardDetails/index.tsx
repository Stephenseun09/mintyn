import CardDetail from "./CardDetail";

const cardDetailData = [
  {
    name: "Orders",
    details: [
      {
        name: "Pending Orders",
        value: 20,
        color: "#EBC315",
      },
      {
        name: "Reconcilled Orders",
        value: 80,
        color: "#27AE60",
      },
      {
        name: "Total Orders",
        value: 100,
        color: "#1860EC",
      },
    ],
  },
  {
    name: "Payments",
    details: [
      {
        name: "Un-reconcilled Payments",
        value: 20,
        color: "#EBC315",
      },
      {
        name: "Reconcilled Payments",
        value: 80,
        color: "#27AE60",
      },
      {
        name: "Total Payments",
        value: 100,
        color: "#1860EC",
      },
    ],
  },
];

const CardDetails = () => {
  return (
    <div className=" flex md:flex-col gap-4 h-full ">
      {cardDetailData.map((item, index) => {
        return (
          <CardDetail key={index} name={item.name} details={item.details} />
        );
      })}
    </div>
  );
};

export default CardDetails;
