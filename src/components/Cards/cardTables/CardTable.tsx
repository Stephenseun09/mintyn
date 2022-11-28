import { CarretDownIcon } from "@/ui/custom-icons";
import { usePagination, useTable, Column } from "react-table";

const CardTable = ({
  columns,
  data,
}: {
  data: Array<any>;
  columns: Array<Column>;
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        columns,
        data,
      },
      usePagination //---------- will be added over time -------
    );
  const firstPageRows = rows.slice(0, 20);
  return (
    <>
      {/* ---------------------- */}
      {/* ------- Table--------- */}
      <table className=" w-full border-collapse " {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className={
                    "px-6 align-middle py-3 md:py-5 text-sm md:text-base border-l-0 border-r-0 whitespace-nowrap  text-left bg-[#EAEEF0] text-[#7F8FA4]"
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* ------- Table Head--------- */}
        {/* --------------------------- */}

        {/* --------------------------- */}
        {/* ------- Table Body--------- */}
        <tbody {...getTableBodyProps()} className="">
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i} className=" ">
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={i}
                      className="border-t align-middle border-l-0 border-r-0 text-sm whitespace-nowrap px-6 py-2 pr-0"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* ------- Table Body--------- */}
        {/* --------------------------- */}
      </table>
      {/* ------- Table--------- */}
      {/* ---------------------- */}
    </>
  );
};
export default CardTable;
