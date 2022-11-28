import tableData, { CellProps } from "@/constants/cards/cardTable";
import { CarretDownIcon } from "@/ui/custom-icons";
import { useMemo } from "react";
import { CardAreaChart, CardStats } from "../Cards";
import CardDetails from "../Cards/cardDetails";
import CardTable from "../Cards/cardTables/CardTable";
import CardTableWrapper from "../Cards/cardTables/CardTableWrapper";

const columnsData = [
  {
    Header: "Item Type",
    accessor: "item type",
    Cell: ({ cell: { value } }: CellProps) => (
      <div className="flex items-center">
        <div className="grid place-content-center bg-[#7F8FA4] p-2 mr-4 rounded-full text-white">
          {/* <img /> */}
          vw
        </div>
        <span>{value}</span>
      </div>
    ),
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Transaction No",
    accessor: "transaction no",
  },
  {
    Header: "Time",
    accessor: "time",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: CellProps) => (
      <div className="flex items-center">
        <span
          className={`${
            value === "Reconciled" ? "border-[#27AE60]" : "border-[#EBC315]"
          } px-4 py-2 text-sm rounded-full border flex items-center w-full md:w-3/4 xl:w-3/5`}
        >
          <span
            className={`${
              value === "Reconciled" ? "bg-[#27AE60]" : "bg-[#EBC315] "
            } w-2 h-2 rounded-full mr-2`}
          />
          {value}
        </span>
        <CarretDownIcon className="w-3 h-3 ml-6 mr-4 " />
      </div>
    ),
  },
];

const Overview = () => {
  const columns = useMemo(() => {
    return columnsData;
  }, []);
  const data = useMemo(() => {
    return tableData.rows;
  }, []);
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

      <div className="flex flex-wrap mt-12 mb-6 px-4 md:px-10 ">
        <div className="w-full ">
          <CardTableWrapper heading="Payments">
            <CardTable columns={columns} data={data} />
          </CardTableWrapper>
        </div>
      </div>
    </div>
  );
};

export default Overview;
