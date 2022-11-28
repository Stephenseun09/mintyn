import { Lists } from "@/constants";

import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar = ({ isOpen, onClose }: Props) => {
  const { pathname } = useLocation();
  return (
    <motion.div
      className={`${
        !isOpen ? "hidden" : "inline-flex"
      }  h-screen md:inline-flex fixed top-0 md:left-0  shadow-xl bg-primary  w-64 z-10 pt-[96px] pb-4 font-segoe overflow-y-auto  transition-all duration-300 ease-in-out `}
    >
      <div className="flex flex-col mt-6 mb-2 grow">
        <div className="flex ml-6 ">
          <button className="px-5 py-2.5 bg-[#27AE60] text-white text-xs rounded-[30px] font-roboto">
            GENERATE INVOICE
          </button>
        </div>

        <hr className="border-[#E5E5E5] border-opacity-20 mt-2 md:mt-4 mb-3 md:mb-5" />
        {/* ---------------------- */}
        {/* -----Nav Links ------- */}
        <ul className="flex flex-col text-greyBlue text-sm capitalize pb-4">
          {Lists.map((list, index) => (
            <li key={index} className="">
              {list.heading && (
                <h5 className=" mb-2 px-2 ml-6">{list.heading}</h5>
              )}
              <ul className="flex-col min-w-full  list-none ">
                {list.items.map((item, index) => (
                  <li
                    key={index}
                    onClick={onClose}
                    className={`${
                      pathname.includes(item.link)
                        ? "bg-primary-blue border-l-4 border-primary-blue bg-opacity-10"
                        : ""
                    } hover:bg-opacity-10  hover:bg-primary-blue hover:border-l-4 hover:border-primary-blue pl-4 transition-all duration-100 ease-in-out`}
                  >
                    <NavLink
                      to={item.link}
                      className="rounded-full   transition-all duration-200 ease-linear flex items-center  px-4 py-2"
                    >
                      <item.Icon className="mr-4" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {
                // dont show hr if it;s the last list

                index !== Lists.length - 1 && (
                  <hr className="border-[#E5E5E5] border-opacity-20 mt-2 md:mt-3 mb-3 md:mb-4" />
                )
              }
            </li>
          ))}
        </ul>
        {/* -----Nav Links ------- */}
        {/* ---------------------- */}
      </div>
    </motion.div>
  );
};

export default Sidebar;
