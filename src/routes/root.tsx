import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useBoolean } from "@/hooks";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [isOpen, toggle] = useBoolean(false);
  return (
    <div className=" transition-all ease-in duration-300 font-segoe ">
      <Header isOpen={isOpen} onClick={toggle.toggle} />
      <div className="relative ">
        <Sidebar onClose={toggle.off} isOpen={isOpen} />
        <div className="">
          <Outlet />
          {/* <ScrollToTop /> */}
        </div>
      </div>
    </div>
  );
};

export default Root;
