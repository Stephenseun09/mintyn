import tableData, { CellProps } from "@/constants/dashboard/cards/cardTable";
import { Pill } from "@/ui/custom-icons";
import { useMemo } from "react";
import {
  CardAreaChart,
  CardBarChart,
  CardStats,
  CardTable,
  CardTableWrapper,
} from "./Cards";

const columnsData = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Who",
    accessor: "who",
  },
  {
    Header: "Time",
    accessor: "time",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: CellProps) => (
      <Pill
        className={`${value === "Active" ? "bg-[#9CFBEE]" : "bg-[#FF3D00] "} `}
      >
        {value}
      </Pill>
    ),
  },
  {
    Header: "Prescription",
    accessor: "prescription",
    Cell: ({ cell: { value } }: CellProps) => (
      <Pill className={`bg-[#1F56C3] text-primary`}>{value}</Pill>
    ),
  },
];

const DashboardContents = () => {
  const columns = useMemo(() => {
    return columnsData;
  }, []);
  const data = useMemo(() => {
    return tableData.rows;
  }, []);
  return (
    // <div className="relative font-primary bg-[#F4F4F9] pt-12 min-h-screen">
    //   <div className="px-4 md:px-10 mx-auto w-full">
    //     {/* Card stats */}
    //     <CardStats />
    //   </div>

    //   <div className="flex flex-wrap my-12 px-4 md:px-10 space-y-4 xl:space-y-0">
    //     <div className="w-full  xl:w-7/12 ">
    //       <CardAreaChart />
    //     </div>
    //     <div className="xl:w-[5%]" />
    //     <div className="w-full xl:w-4/12 grow">
    //       <CardBarChart />
    //     </div>
    //   </div>

    //   <div className="flex flex-wrap mt-12 mb-6 px-4 md:px-10 space-y-4 xl:space-y-0 ">
    //     <div className="w-full xl:w-7/12 ">
    //       <CardTableWrapper heading="Appointments">
    //         <CardTable columns={columns} data={data} />
    //       </CardTableWrapper>
    //     </div>
    //     <div className="xl:w-[5%]" />
    //     <div className="w-full xl:w-4/12 grow">
    //       <CardTableWrapper heading="Pharmacy">
    //         <CardTable columns={columns} data={data} />
    //       </CardTableWrapper>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
};

export default DashboardContents;
